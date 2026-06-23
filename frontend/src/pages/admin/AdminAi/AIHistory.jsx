// import React, { useState, useEffect } from "react";
// import http from "../../../api/http.js";
// // import "./AIHistory.css";

// export default function AIHistory() {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchHistory();
//   }, []);

//   const fetchHistory = async () => {
//     try {
//       const { data } = await http.get("/api/admin/ai/history");
//       setHistory(data.history || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="ai-history-page">
//       <h1>🤖 AI Conversation History</h1>
//       <button onClick={fetchHistory} className="btn">Refresh</button>

//       <div className="history-list">
//         {history.length === 0 && !loading && <p>No conversation history yet.</p>}

//         {history.map((session, idx) => (
//           <div key={idx} className="history-session">
//             <div className="session-header">
//               <span>Session {idx + 1}</span>
//               <span className="time">{new Date(session.timestamp).toLocaleString()}</span>
//             </div>
//             <div className="messages">
//               {session.messages?.map((msg, i) => (
//                 <div key={i} className={`history-msg ${msg.role}`}>
//                   <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// frontend/src/pages/admin/AdminAi/AIHistory.jsx
// Business logic 100% untouched — only UI rebuilt in dark theme
import React, { useState, useEffect } from "react";
import http from "../../../api/http.js";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Clock, RefreshCw, History, MessageSquare, ChevronDown, ChevronUp, Layers, Loader2 } from "lucide-react";

function GlassCard({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-2xl ${className}`}
      style={{ background: "rgba(15,23,42,0.75)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(16px)", ...style }}>
      {children}
    </div>
  );
}

export default function AIHistory() {
  const [history, setHistory]   = useState([]);
  const [loading, setLoading]   = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => { fetchHistory(); }, []);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const { data } = await http.get("/api/admin/ai/history");
      setHistory(data.history || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggle = (idx) => setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <div className="w-full relative" style={{ background: "#020617", minHeight: "100%", fontFamily: "'Inter',system-ui,sans-serif" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle,#8B5CF6,transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle,#06B6D4,transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <History size={22} className="text-violet-400" /> AI Conversation History
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">Review past AI agent sessions and responses</p>
          </div>
          <button onClick={fetchHistory} disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105 disabled:opacity-50 self-start sm:self-auto"
            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", color: "#A78BFA" }}>
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> Refresh
          </button>
        </motion.div>

        {/* STATS ROW */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total Sessions", value: history.length,                                     color: "#8B5CF6" },
            { label: "Total Messages", value: history.reduce((s, h) => s + (h.messages?.length || 0), 0), color: "#06B6D4" },
            { label: "AI Responses",   value: history.reduce((s, h) => s + (h.messages?.filter(m => m.role === "assistant").length || 0), 0), color: "#22C55E" },
          ].map((k, i) => (
            <motion.div key={k.label}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              className="relative rounded-2xl p-4 overflow-hidden"
              style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="absolute inset-0 opacity-10"
                style={{ background: `radial-gradient(circle at top right,${k.color},transparent 70%)` }} />
              <div className="text-xl font-bold text-white">{k.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{k.label}</div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
                style={{ background: `linear-gradient(90deg,transparent,${k.color},transparent)` }} />
            </motion.div>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 size={28} className="text-violet-400 animate-spin mb-3" />
            <span className="text-sm text-slate-500">Loading conversation history…</span>
          </div>
        )}

        {/* EMPTY */}
        {!loading && history.length === 0 && (
          <GlassCard className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}>
              <Bot size={28} className="text-violet-400" />
            </div>
            <div className="text-base font-semibold text-slate-400 mb-1">No conversation history yet</div>
            <div className="text-xs text-slate-600">Launch an AI agent from the Dashboard to start a session</div>
          </GlassCard>
        )}

        {/* SESSION LIST */}
        {!loading && history.length > 0 && (
          <AnimatePresence>
            <div className="space-y-4">
              {history.map((session, idx) => {
                const isOpen    = !!expanded[idx];
                const msgCount  = session.messages?.length || 0;
                const aiCount   = session.messages?.filter(m => m.role === "assistant").length || 0;
                const timeStr   = session.timestamp ? new Date(session.timestamp).toLocaleString("en-IN") : "";

                return (
                  <motion.div key={idx}
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}>
                    <GlassCard>
                      {/* Session header — clickable to expand */}
                      <button onClick={() => toggle(idx)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
                        style={{ borderBottom: isOpen ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}>
                            <Bot size={18} className="text-violet-400" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-white">Session {idx + 1}</div>
                            <div className="flex items-center gap-3 mt-0.5">
                              {timeStr && (
                                <span className="text-xs text-slate-600 flex items-center gap-1">
                                  <Clock size={10} /> {timeStr}
                                </span>
                              )}
                              <span className="text-xs text-slate-600 flex items-center gap-1">
                                <MessageSquare size={10} /> {msgCount} messages
                              </span>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                                style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)", color: "#A78BFA" }}>
                                {aiCount} AI
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="shrink-0 ml-4 text-slate-600">
                          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </button>

                      {/* Messages */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden">
                            <div className="px-5 py-4 space-y-3">
                              {(session.messages || []).map((msg, i) => {
                                const isUser = msg.role === "user";
                                return (
                                  <motion.div key={i}
                                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
                                    {!isUser && (
                                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}>
                                        <Bot size={13} className="text-violet-400" />
                                      </div>
                                    )}
                                    <div className="max-w-[78%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap"
                                      style={isUser
                                        ? { background: "linear-gradient(135deg,#7C3AED,#6D28D9)", color: "#fff", borderRadius: "16px 4px 16px 16px" }
                                        : { background: "rgba(30,41,59,0.85)", border: "1px solid rgba(255,255,255,0.07)", color: "#CBD5E1", borderRadius: "4px 16px 16px 16px" }
                                      }>
                                      {msg.content}
                                    </div>
                                    {isUser && (
                                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(124,58,237,0.35)" }}>
                                        <User size={13} className="text-violet-300" />
                                      </div>
                                    )}
                                  </motion.div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}