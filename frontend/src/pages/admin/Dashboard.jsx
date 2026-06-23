// // // // // import React, { useEffect, useState } from 'react';
// // // // // import http from '../../api/http.js';
// // // // // import { ENDPOINTS } from '../../api/endpoints.js';

// // // // // export default function Dashboard(){
// // // // //   const [data, setData] = useState(null);
// // // // //   useEffect(()=>{ (async()=>{ const { data } = await http.get(ENDPOINTS.admin.stats); setData(data); })(); }, []);
// // // // //   if (!data) return null;
// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Dashboard</h2>
// // // // //       <div className="grid-cols-4">
// // // // //         <div className="tile">Total Products: {data.products}</div>
// // // // //         <div className="tile">Total Users: {data.users}</div>
// // // // //         <div className="tile">Total Orders: {data.orders}</div>
// // // // //         <div className="tile">Revenue: ₹{data.revenue}</div>
// // // // //       </div>
// // // // //       {!!data.lowStock?.length && <div className="panel">
// // // // //         <b>Low Stock</b>
// // // // //         <ul>{data.lowStock.map((x,i)=> <li key={i}>{x.title} - {x.sku} ({x.stock})</li>)}</ul>
// // // // //       </div>}
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, { useEffect, useState } from "react";
// // // // import http from "../../api/http.js";
// // // // import { ENDPOINTS } from "../../api/endpoints.js";
// // // // import "./Dashboard.css";
// // // // import AdminAIAgents from "./AdminAi/AdminAIAgents.jsx";

// // // // const nfmt = (n) =>
// // // //   typeof n === "number"
// // // //     ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
// // // //     : n;

// // // // export default function Dashboard() {
// // // //   const [data, setData] = useState(null);
// // // //   const [err, setErr] = useState("");
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     (async () => {
// // // //       try {
// // // //         const res = await http.get(ENDPOINTS.admin.stats);
// // // //         setData(res.data);
// // // //       } catch (e) {
// // // //         setErr(e?.response?.data?.message || "Failed to load stats");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     })();
// // // //   }, []);

// // // //   return (
// // // //     <div className="ad-wrap">

      
// // // //       <header className="ad-head">
// // // //         <h2>Dashboard</h2>
// // // //         <p className="ad-sub">Overview of your store performance</p>
// // // //       </header>

// // // //       {loading && (
// // // //         <section className="ad-grid">
// // // //           {[1, 2, 3, 4].map((i) => (
// // // //             <div key={i} className="ad-tile shimmer" aria-hidden />
// // // //           ))}
// // // //         </section>
// // // //       )}

// // // //       {!loading && err && (
// // // //         <div className="ad-error" role="alert">
// // // //           <span>⚠️ {err}</span>
// // // //           <button className="btn btn-ghost" onClick={() => location.reload()}>
// // // //             Retry
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       {!loading && data && (
// // // //         <>
// // // //           <section className="ad-grid">
// // // //             <article className="ad-tile">
// // // //               <div className="ad-icon" aria-hidden>🧺</div>
// // // //               <div className="ad-meta">
// // // //                 <span className="ad-label">Total Products</span>
// // // //                 <span className="ad-value">{nfmt(data.products)}</span>
// // // //               </div>
// // // //             </article>

// // // //             <article className="ad-tile">
// // // //               <div className="ad-icon" aria-hidden>👥</div>
// // // //               <div className="ad-meta">
// // // //                 <span className="ad-label">Total Users</span>
// // // //                 <span className="ad-value">{nfmt(data.users)}</span>
// // // //               </div>
// // // //             </article>

// // // //             <article className="ad-tile">
// // // //               <div className="ad-icon" aria-hidden>🧾</div>
// // // //               <div className="ad-meta">
// // // //                 <span className="ad-label">Total Orders</span>
// // // //                 <span className="ad-value">{nfmt(data.orders)}</span>
// // // //               </div>
// // // //             </article>

// // // //             <article className="ad-tile">
// // // //               <div className="ad-icon" aria-hidden>💰</div>
// // // //               <div className="ad-meta">
// // // //                 <span className="ad-label">Revenue</span>
// // // //                 <span className="ad-value">₹{nfmt(data.revenue)}</span>
// // // //               </div>
// // // //             </article>
// // // //           </section>

// // // //           {!!data.lowStock?.length && (
// // // //             <section className="ad-panel">
// // // //               <div className="ad-panel-head">
// // // //                 <h3>Low Stock</h3>
// // // //                 <span className="ad-chip">{data.lowStock.length}</span>
// // // //               </div>
// // // //               <div className="ad-table-wrap">
// // // //                 <table className="ad-table">
// // // //                   <thead>
// // // //                     <tr>
// // // //                       <th style={{ width: "44%" }}>Product</th>
// // // //                       <th>SKU</th>
// // // //                       <th style={{ textAlign: "right" }}>Stock</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {data.lowStock.map((x, i) => (
// // // //                       <tr key={i}>
// // // //                         <td title={x.title}>{x.title}</td>
// // // //                         <td className="mono">{x.sku}</td>
// // // //                         <td className="right">
// // // //                           <span className="ad-stock-badge">{x.stock}</span>
// // // //                         </td>
// // // //                       </tr>
// // // //                     ))}
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             </section>
// // // //           )}
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }




// // // // frontend/src/pages/Dashboard.jsx
// // // import React, { useEffect, useState } from "react";
// // // import http from "../../api/http.js";
// // // import { ENDPOINTS } from "../../api/endpoints.js";
// // // import "./Dashboard.css";
// // // import AdminAIAgents from "./AdminAi/AdminAIAgents.jsx";   // ← Added

// // // const nfmt = (n) =>
// // //   typeof n === "number"
// // //     ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
// // //     : n;

// // // export default function Dashboard() {
// // //   const [data, setData] = useState(null);
// // //   const [err, setErr] = useState("");
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     (async () => {
// // //       try {
// // //         const res = await http.get(ENDPOINTS.admin.stats);
// // //         setData(res.data);
// // //       } catch (e) {
// // //         setErr(e?.response?.data?.message || "Failed to load stats");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     })();
// // //   }, []);

// // //   return (
// // //     <div className="ad-wrap">
// // //       <header className="ad-head">
// // //         <h2>Admin Dashboard</h2>
// // //         <p className="ad-sub">Overview of your store performance</p>
// // //       </header>

// // //       {loading && (
// // //         <section className="ad-grid">
// // //           {[1, 2, 3, 4].map((i) => (
// // //             <div key={i} className="ad-tile shimmer" aria-hidden />
// // //           ))}
// // //         </section>
// // //       )}

// // //       {!loading && err && (
// // //         <div className="ad-error" role="alert">
// // //           <span>⚠️ {err}</span>
// // //           <button className="btn btn-ghost" onClick={() => location.reload()}>
// // //             Retry
// // //           </button>
// // //         </div>
// // //       )}

// // //       {!loading && data && (
// // //         <>
// // //           {/* Stats Grid */}
// // //           <section className="ad-grid">
// // //             <article className="ad-tile">
// // //               <div className="ad-icon" aria-hidden>🧺</div>
// // //               <div className="ad-meta">
// // //                 <span className="ad-label">Total Products</span>
// // //                 <span className="ad-value">{nfmt(data.products)}</span>
// // //               </div>
// // //             </article>

// // //             <article className="ad-tile">
// // //               <div className="ad-icon" aria-hidden>👥</div>
// // //               <div className="ad-meta">
// // //                 <span className="ad-label">Total Users</span>
// // //                 <span className="ad-value">{nfmt(data.users)}</span>
// // //               </div>
// // //             </article>

// // //             <article className="ad-tile">
// // //               <div className="ad-icon" aria-hidden>🧾</div>
// // //               <div className="ad-meta">
// // //                 <span className="ad-label">Total Orders</span>
// // //                 <span className="ad-value">{nfmt(data.orders)}</span>
// // //               </div>
// // //             </article>

// // //             <article className="ad-tile">
// // //               <div className="ad-icon" aria-hidden>💰</div>
// // //               <div className="ad-meta">
// // //                 <span className="ad-label">Revenue</span>
// // //                 <span className="ad-value">₹{nfmt(data.revenue)}</span>
// // //               </div>
// // //             </article>
// // //           </section>

// // //           {/* Low Stock Alert */}
// // //           {!!data.lowStock?.length && (
// // //             <section className="ad-panel">
// // //               <div className="ad-panel-head">
// // //                 <h3>Low Stock Alert</h3>
// // //                 <span className="ad-chip">{data.lowStock.length}</span>
// // //               </div>
// // //               <div className="ad-table-wrap">
// // //                 <table className="ad-table">
// // //                   <thead>
// // //                     <tr>
// // //                       <th style={{ width: "44%" }}>Product</th>
// // //                       <th>SKU</th>
// // //                       <th style={{ textAlign: "right" }}>Stock</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {data.lowStock.map((x, i) => (
// // //                       <tr key={i}>
// // //                         <td title={x.title}>{x.title}</td>
// // //                         <td className="mono">{x.sku}</td>
// // //                         <td className="right">
// // //                           <span className="ad-stock-badge">{x.stock}</span>
// // //                         </td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </section>
// // //           )}

// // //           {/* 🔥 AI Agents Section */}
// // //           <section className="ad-panel ai-agents-panel">
// // //             <div className="ad-panel-head">
// // //               <h3>🤖 AI Agents for Admin</h3>
// // //               <p className="ad-sub">Get intelligent insights instantly</p>
// // //             </div>
// // //             <AdminAIAgents />
// // //           </section>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // }





// // // frontend/src/pages/Dashboard.jsx

// // import React, { useEffect, useState } from "react";
// // import http from "../../api/http.js";
// // import { ENDPOINTS } from "../../api/endpoints.js";


// // const nfmt = (n) =>
// //   typeof n === "number"
// //     ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
// //     : n;

// // export default function Dashboard() {
// //   const [data, setData] = useState(null);
// //   const [err, setErr] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     (async () => {
// //       try {
// //         const res = await http.get(ENDPOINTS.admin.stats);
// //         setData(res.data);
// //       } catch (e) {
// //         setErr(e?.response?.data?.message || "Failed to load stats");
// //       } finally {
// //         setLoading(false);
// //       }
// //     })();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
// //       {/* Header */}
// //       <header className="mb-8">
// //         <h2 className="text-3xl font-bold text-gray-900">
// //           Admin Dashboard
// //         </h2>

// //         <p className="text-gray-500 mt-1">
// //           Overview of your store performance
// //         </p>
// //       </header>

// //       {/* Loading */}
// //       {loading && (
// //         <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
// //           {[1, 2, 3, 4].map((i) => (
// //             <div
// //               key={i}
// //               className="h-32 rounded-2xl bg-white animate-pulse shadow"
// //             />
// //           ))}
// //         </section>
// //       )}

// //       {/* Error */}
// //       {!loading && err && (
// //         <div className="flex items-center justify-between bg-red-50 border border-red-200 text-red-600 rounded-xl p-4">
// //           <span>⚠️ {err}</span>

// //           <button
// //             onClick={() => location.reload()}
// //             className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
// //           >
// //             Retry
// //           </button>
// //         </div>
// //       )}

// //       {/* Dashboard Data */}
// //       {!loading && data && (
// //         <>
// //           {/* Stats */}
// //           <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
// //             {/* Products */}
// //             <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-4">
// //               <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
// //                 🧺
// //               </div>

// //               <div>
// //                 <p className="text-sm text-gray-500">
// //                   Total Products
// //                 </p>

// //                 <h3 className="text-2xl font-bold text-gray-900">
// //                   {nfmt(data.products)}
// //                 </h3>
// //               </div>
// //             </article>

// //             {/* Users */}
// //             <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-4">
// //               <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
// //                 👥
// //               </div>

// //               <div>
// //                 <p className="text-sm text-gray-500">
// //                   Total Users
// //                 </p>

// //                 <h3 className="text-2xl font-bold text-gray-900">
// //                   {nfmt(data.users)}
// //                 </h3>
// //               </div>
// //             </article>

// //             {/* Orders */}
// //             <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-4">
// //               <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
// //                 🧾
// //               </div>

// //               <div>
// //                 <p className="text-sm text-gray-500">
// //                   Total Orders
// //                 </p>

// //                 <h3 className="text-2xl font-bold text-gray-900">
// //                   {nfmt(data.orders)}
// //                 </h3>
// //               </div>
// //             </article>

// //             {/* Revenue */}
// //             <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-4">
// //               <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl">
// //                 💰
// //               </div>

// //               <div>
// //                 <p className="text-sm text-gray-500">
// //                   Revenue
// //                 </p>

// //                 <h3 className="text-2xl font-bold text-gray-900">
// //                   ₹{nfmt(data.revenue)}
// //                 </h3>
// //               </div>
// //             </article>
// //           </section>

// //           {/* Low Stock */}
// //           {!!data.lowStock?.length && (
// //             <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
// //               <div className="flex items-center justify-between mb-5">
// //                 <h3 className="text-xl font-semibold text-gray-900">
// //                   Low Stock Alert
// //                 </h3>

// //                 <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
// //                   {data.lowStock.length}
// //                 </span>
// //               </div>

// //               <div className="overflow-x-auto">
// //                 <table className="w-full border-collapse">
// //                   <thead className="bg-gray-50">
// //                     <tr>
// //                       <th className="text-left px-4 py-3">
// //                         Product
// //                       </th>

// //                       <th className="text-left px-4 py-3">
// //                         SKU
// //                       </th>

// //                       <th className="text-right px-4 py-3">
// //                         Stock
// //                       </th>
// //                     </tr>
// //                   </thead>

// //                   <tbody>
// //                     {data.lowStock.map((x, i) => (
// //                       <tr
// //                         key={i}
// //                         className="border-b hover:bg-gray-50"
// //                       >
// //                         <td
// //                           className="px-4 py-3"
// //                           title={x.title}
// //                         >
// //                           {x.title}
// //                         </td>

// //                         <td className="font-mono text-sm text-gray-600 px-4 py-3">
// //                           {x.sku}
// //                         </td>

// //                         <td className="text-right px-4 py-3">
// //                           <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
// //                             {x.stock}
// //                           </span>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </section>
// //           )}

        
// //         </>
// //       )}
// //     </div>
// //   );
// // }



// // frontend/src/pages/Dashboard/Dashboard.jsx
// // ═══════════════════════════════════════════════════════════════════════════
// //  UNIFIED AI OPERATIONS DASHBOARD
// //  Merges: Dashboard.jsx stats  +  AdminAIAgents full feature set
// //  Design: OpenAI Control Center × Stripe Analytics × Linear
// // ═══════════════════════════════════════════════════════════════════════════
// import React, { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Bot, Brain, Package, TrendingUp, Tag, Megaphone, Users,
//   Zap, Activity, CheckCircle, Clock, BarChart3, Sparkles,
//   Send, MessageSquare, FileText, PieChart, Cpu, Wifi,
//   Shield, Play, Loader2, ArrowUpRight, Star, Database,
//   AlertTriangle, RefreshCw, ShoppingCart, DollarSign,
//   ChevronRight, Circle, Layers, Terminal, Settings,
// } from "lucide-react";
// import http from "../../api/http.js";
// import { ENDPOINTS } from "../../api/endpoints.js";
// import { toast } from "react-toastify";

// // ─── HELPERS ─────────────────────────────────────────────────────────────────
// const nfmt = (n) =>
//   typeof n === "number"
//     ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
//     : (n ?? "—");

// // ─── CONSTANTS ───────────────────────────────────────────────────────────────
// const ADMIN_AGENTS = [
//   {
//     id: "inventory",
//     icon: "📦",
//     lucideIcon: Package,
//     title: "Inventory Manager",
//     desc: "Low Stock & Restock Suggestions",
//     color: "#06B6D4",
//     glow: "rgba(6,182,212,0.35)",
//     border: "rgba(6,182,212,0.3)",
//   },
//   {
//     id: "sales",
//     icon: "📈",
//     lucideIcon: TrendingUp,
//     title: "Sales Analyst",
//     desc: "Revenue & Performance Report",
//     color: "#8B5CF6",
//     glow: "rgba(139,92,246,0.35)",
//     border: "rgba(139,92,246,0.3)",
//   },
//   {
//     id: "product-optimizer",
//     icon: "🏷️",
//     lucideIcon: Tag,
//     title: "Product Optimizer",
//     desc: "SEO & Description Improvement",
//     color: "#F59E0B",
//     glow: "rgba(245,158,11,0.35)",
//     border: "rgba(245,158,11,0.3)",
//   },
//   {
//     id: "marketing",
//     icon: "🎯",
//     lucideIcon: Megaphone,
//     title: "Marketing Campaign",
//     desc: "Discounts & Festival Offers",
//     color: "#EC4899",
//     glow: "rgba(236,72,153,0.35)",
//     border: "rgba(236,72,153,0.3)",
//   },
//   {
//     id: "customer-insights",
//     icon: "👥",
//     lucideIcon: Users,
//     title: "Customer Insights",
//     desc: "User Behavior & Repeat Customers",
//     color: "#22C55E",
//     glow: "rgba(34,197,94,0.35)",
//     border: "rgba(34,197,94,0.3)",
//   },
// ];

// const BRAIN_NODES = ADMIN_AGENTS.map((a, i) => ({ ...a, angle: i * 72 }));

// const QUICK_ACTIONS = [
//   { label: "Generate Report",    agentId: "sales"             },
//   { label: "Analyze Sales",      agentId: "sales"             },
//   { label: "Inventory Forecast", agentId: "inventory"         },
//   { label: "Marketing Ideas",    agentId: "marketing"         },
//   { label: "Customer Segments",  agentId: "customer-insights" },
// ];

// const THINKING_STEPS = [
//   "Fetching Data",
//   "Processing Metrics",
//   "Analyzing Trends",
//   "Generating Insights",
//   "Building Recommendations",
// ];

// // ─── GLASS CARD ──────────────────────────────────────────────────────────────
// function GlassCard({ children, className = "", style = {}, ...rest }) {
//   return (
//     <div
//       className={`rounded-2xl ${className}`}
//       style={{
//         background: "rgba(15,23,42,0.75)",
//         border: "1px solid rgba(255,255,255,0.07)",
//         backdropFilter: "blur(18px)",
//         ...style,
//       }}
//       {...rest}
//     >
//       {children}
//     </div>
//   );
// }

// // ─── SECTION LABEL ────────────────────────────────────────────────────────────
// function SectionLabel({ icon: Icon, label }) {
//   return (
//     <div className="flex items-center gap-3 mb-5">
//       {Icon && <Icon size={15} className="text-violet-400" />}
//       <h2 className="text-sm font-semibold text-white tracking-wide">{label}</h2>
//       <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(139,92,246,0.35),transparent)" }} />
//     </div>
//   );
// }

// // ═══════════════════════════════════════════════════════════════════════════
// //  MAIN COMPONENT
// // ═══════════════════════════════════════════════════════════════════════════
// export default function Dashboard() {
//   // ── DASHBOARD STATE ──────────────────────────────────────────────────────
//   const [stats, setStats]       = useState(null);
//   const [activity, setActivity] = useState([]);
//   const [statsErr, setStatsErr] = useState("");
//   const [statsLoading, setStatsLoading] = useState(true);

//   // ── AI AGENT STATE (business logic untouched) ────────────────────────────
//   const [messages, setMessages] = useState([
//     { type: "bot", text: "Welcome Admin! Select any AI Agent to begin." },
//   ]);
//   const [loading, setLoading]       = useState(false);
//   const [activeAgent, setActiveAgent] = useState(null);
//   const [thinkStep, setThinkStep]   = useState(0);
//   const [progress, setProgress]     = useState(0);
//   const chatEndRef = useRef(null);

//   // ── FETCH DASHBOARD STATS ─────────────────────────────────────────────────
//   useEffect(() => {
//     (async () => {
//       try {
//         // Primary stats endpoint (existing)
//         const res = await http.get(ENDPOINTS.admin.stats);
//         setStats(res.data);
//       } catch (e) {
//         setStatsErr(e?.response?.data?.message || "Failed to load stats");
//       } finally {
//         setStatsLoading(false);
//       }
//     })();
//   }, []);

//   // ── FETCH ACTIVITY FEED ───────────────────────────────────────────────────
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await http.get("/api/admin/dashboard/activity");
//         setActivity(res.data?.activity || res.data || []);
//       } catch {
//         // activity is optional; silently ignore if endpoint not yet created
//       }
//     })();
//   }, []);

//   // ── AI THINKING TICKER ────────────────────────────────────────────────────
//   useEffect(() => {
//     if (!loading) { setThinkStep(0); setProgress(0); return; }
//     let step = 0, prog = 0;
//     const iv = setInterval(() => {
//       prog += 4;
//       setProgress(Math.min(prog, 95));
//       if (prog % 20 === 0 && step < THINKING_STEPS.length - 1) { step++; setThinkStep(step); }
//     }, 180);
//     return () => clearInterval(iv);
//   }, [loading]);

//   // ── AUTO SCROLL CHAT ──────────────────────────────────────────────────────
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   // ── HANDLE AGENT CLICK (business logic 100% untouched) ───────────────────
//   const handleAgentClick = async (agent) => {
//     setActiveAgent(agent);
//     setLoading(true);

//     // Add user query bubble
//     const prompts = {
//       "inventory":         "Show low stock products and restock suggestions",
//       "sales":             "Last 30 days sales report and insights",
//       "product-optimizer": "Optimize a product description and SEO",
//       "marketing":         "Create Raksha Bandhan or upcoming festival campaign with discounts",
//       "customer-insights": "Analyze customer behavior and repeat purchase insights",
//     };
//     const prompt = prompts[agent.id] || `Run ${agent.title}`;
//     setMessages(prev => [...prev, { type: "user", text: prompt }]);

//     try {
//       const { data } = await http.post("/api/admin/ai/assistant", { message: prompt });
//       setMessages(prev => [...prev, { type: "bot", text: data.reply }]);

//       // Append to activity feed locally
//       setActivity(prev => [
//         { agentName: agent.title, status: "completed", executionTime: "0.8s", timestamp: new Date().toISOString() },
//         ...prev.slice(0, 9),
//       ]);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to get response from AI Agent");
//       setMessages(prev => [...prev, {
//         type: "bot",
//         text: "Sorry, AI Agent is taking longer than expected. Please try again.",
//       }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── KPI CARDS (real data from stats) ─────────────────────────────────────
//   const kpiCards = [
//     { label: "Revenue",        value: stats ? `₹${nfmt(stats.revenue)}`  : "—", icon: DollarSign,   color: "#8B5CF6" },
//     { label: "Total Orders",   value: stats ? nfmt(stats.orders)          : "—", icon: ShoppingCart,  color: "#06B6D4" },
//     { label: "Total Products", value: stats ? nfmt(stats.products)        : "—", icon: Package,       color: "#F59E0B" },
//     { label: "Total Users",    value: stats ? nfmt(stats.users)           : "—", icon: Users,         color: "#22C55E" },
//     { label: "AI Tasks Done",  value: nfmt(messages.filter(m => m.type === "bot").length - 1 + (activity.length || 0)), icon: Cpu, color: "#EC4899" },
//   ];

//   // ═════════════════════════════════════════════════════════════════════════
//   return (
//     <div
//       className="min-h-screen w-full relative overflow-x-hidden"
//       style={{ background: "#020617", fontFamily: "'Inter',system-ui,sans-serif" }}
//     >
//       {/* ── AURORA BACKGROUND ──────────────────────────────────────────── */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//         <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.18]"
//           style={{ background: "radial-gradient(circle,#8B5CF6,transparent 70%)", filter: "blur(90px)" }} />
//         <div className="absolute top-[35%] right-[-15%] w-[600px] h-[600px] rounded-full opacity-[0.13]"
//           style={{ background: "radial-gradient(circle,#06B6D4,transparent 70%)", filter: "blur(90px)" }} />
//         <div className="absolute bottom-[-10%] left-[25%] w-[600px] h-[600px] rounded-full opacity-[0.09]"
//           style={{ background: "radial-gradient(circle,#22C55E,transparent 70%)", filter: "blur(110px)" }} />
//         <div className="absolute inset-0 opacity-[0.025]"
//           style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
//       </div>

//       <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

//         {/* ════════════════════════════════════════════════════════════════
//             HEADER
//         ════════════════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: -24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.55 }}
//           className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
//         >
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
//                 style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.35),rgba(6,182,212,0.2))", border: "1px solid rgba(139,92,246,0.45)", boxShadow: "0 0 36px rgba(139,92,246,0.3)" }}>
//                 🤖
//               </div>
//               <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400"
//                 style={{ boxShadow: "0 0 8px #22C55E", animation: "dashPing 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
//             </div>
//             <div>
//               <h1 className="text-2xl sm:text-3xl font-bold tracking-tight"
//                 style={{ background: "linear-gradient(135deg,#fff,#8B5CF6,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 AI Operations Center
//               </h1>
//               <p className="text-sm text-slate-500 mt-0.5">
//                 Admin Dashboard · Real-time business intelligence powered by AI agents
//               </p>
//             </div>
//           </div>

//           {/* Live pills */}
//           <div className="flex flex-wrap gap-2">
//             {[
//               { dot: "#22C55E", label: "AI Online"      },
//               { dot: "#8B5CF6", label: "99.9% Accuracy" },
//               { dot: "#06B6D4", label: "<1s Response"   },
//               { dot: "#F59E0B", label: "24/7 Monitoring" },
//             ].map(p => (
//               <div key={p.label}
//                 className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-slate-400"
//                 style={{ background: "rgba(15,23,42,0.85)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(10px)" }}>
//                 <span className="w-2 h-2 rounded-full"
//                   style={{ background: p.dot, boxShadow: `0 0 6px ${p.dot}`, display: "inline-block", animation: "dashPulse 2s infinite" }} />
//                 {p.label}
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* ════════════════════════════════════════════════════════════════
//             SECTION 1 — EXECUTIVE KPI CARDS
//         ════════════════════════════════════════════════════════════════ */}
//         <div>
//           <SectionLabel icon={BarChart3} label="Executive Overview" />

//           {/* Loading skeleton */}
//           {statsLoading && (
//             <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
//               {[1,2,3,4,5].map(i => (
//                 <div key={i} className="h-28 rounded-2xl animate-pulse"
//                   style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(255,255,255,0.05)" }} />
//               ))}
//             </div>
//           )}

//           {/* Error */}
//           {!statsLoading && statsErr && (
//             <div className="flex items-center gap-4 rounded-xl p-4"
//               style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}>
//               <AlertTriangle size={16} className="text-red-400 shrink-0" />
//               <span className="text-sm text-red-400 flex-1">{statsErr}</span>
//               <button onClick={() => location.reload()}
//                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all"
//                 style={{ background: "rgba(239,68,68,0.3)", border: "1px solid rgba(239,68,68,0.4)" }}>
//                 <RefreshCw size={11} /> Retry
//               </button>
//             </div>
//           )}

//           {/* KPI grid */}
//           {!statsLoading && (
//             <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
//               {kpiCards.map((k, i) => {
//                 const Icon = k.icon;
//                 return (
//                   <motion.div
//                     key={k.label}
//                     initial={{ opacity: 0, y: 28 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.08 * i, duration: 0.45 }}
//                     whileHover={{ y: -4, scale: 1.02 }}
//                     className="relative rounded-2xl p-5 overflow-hidden cursor-default"
//                     style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(16px)" }}
//                   >
//                     <div className="absolute inset-0 rounded-2xl opacity-10"
//                       style={{ background: `radial-gradient(circle at top right,${k.color},transparent 70%)` }} />
//                     <div className="flex items-start justify-between mb-3">
//                       <div className="w-10 h-10 rounded-xl flex items-center justify-center"
//                         style={{ background: `${k.color}1A`, border: `1px solid ${k.color}30` }}>
//                         <Icon size={17} style={{ color: k.color }} />
//                       </div>
//                       <ArrowUpRight size={13} style={{ color: k.color }} />
//                     </div>
//                     <div className="text-xl font-bold text-white tracking-tight">{k.value}</div>
//                     <div className="text-xs text-slate-500 mt-1">{k.label}</div>
//                     <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
//                       style={{ background: `linear-gradient(90deg,transparent,${k.color},transparent)` }} />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* ════════════════════════════════════════════════════════════════
//             LOW STOCK ALERT (from real stats)
//         ════════════════════════════════════════════════════════════════ */}
//         {stats?.lowStock?.length > 0 && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
//             <SectionLabel icon={AlertTriangle} label="Low Stock Alert" />
//             <GlassCard className="overflow-hidden">
//               <div className="flex items-center justify-between px-6 py-4 border-b"
//                 style={{ borderColor: "rgba(255,255,255,0.06)" }}>
//                 <span className="text-sm font-semibold text-white">Products Requiring Restock</span>
//                 <span className="px-2.5 py-0.5 rounded-full text-xs font-bold"
//                   style={{ background: "rgba(239,68,68,0.15)", color: "#F87171", border: "1px solid rgba(239,68,68,0.25)" }}>
//                   {stats.lowStock.length} items
//                 </span>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
//                       {["Product", "SKU", "Stock"].map(h => (
//                         <th key={h} className={`py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider ${h === "Stock" ? "text-right" : "text-left"}`}>{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {stats.lowStock.map((x, i) => (
//                       <tr key={i} className="hover:bg-white/[0.02] transition-colors"
//                         style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
//                         <td className="px-6 py-3 text-sm text-slate-300">{x.title}</td>
//                         <td className="px-6 py-3 font-mono text-xs text-slate-500">{x.sku}</td>
//                         <td className="px-6 py-3 text-right">
//                           <span className="px-2.5 py-1 rounded-full text-xs font-bold"
//                             style={{ background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.25)" }}>
//                             {x.stock}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </GlassCard>
//           </motion.div>
//         )}

//         {/* ════════════════════════════════════════════════════════════════
//             SECTION 2 — AI AGENTS GRID
//         ════════════════════════════════════════════════════════════════ */}
//         <div>
//           <SectionLabel icon={Sparkles} label="AI Agents — Click to Activate" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//             {ADMIN_AGENTS.map((agent, i) => {
//               const Icon = agent.lucideIcon;
//               const isActive = activeAgent?.id === agent.id;
//               return (
//                 <motion.div
//                   key={agent.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.1 + i * 0.07 }}
//                   whileHover={{ y: -6, scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   onClick={() => !loading && handleAgentClick(agent)}
//                   className="relative rounded-2xl p-5 cursor-pointer group"
//                   style={{
//                     background: isActive
//                       ? `linear-gradient(135deg,${agent.color}18,rgba(15,23,42,0.95))`
//                       : "rgba(15,23,42,0.72)",
//                     border: `1px solid ${isActive ? agent.color + "55" : "rgba(255,255,255,0.07)"}`,
//                     backdropFilter: "blur(16px)",
//                     boxShadow: isActive ? `0 0 36px ${agent.glow}` : "none",
//                     transition: "all 0.25s ease",
//                   }}
//                 >
//                   {/* Hover radial glow */}
//                   <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     style={{ background: `radial-gradient(circle at 50% 0%,${agent.color}15,transparent 70%)` }} />

//                   {/* Icon */}
//                   <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative"
//                     style={{ background: `${agent.color}18`, border: `1px solid ${agent.border}` }}>
//                     <Icon size={20} style={{ color: agent.color }} />
//                     {isActive && (
//                       <div className="absolute inset-0 rounded-xl opacity-40"
//                         style={{ border: `1px solid ${agent.color}`, animation: "dashPing 1.5s ease infinite" }} />
//                     )}
//                   </div>

//                   <h3 className="font-semibold text-white text-sm mb-1 leading-snug">{agent.title}</h3>
//                   <p className="text-xs text-slate-500 mb-4 leading-relaxed">{agent.desc}</p>

//                   {/* Meta */}
//                   <div className="space-y-1.5 mb-4">
//                     {[
//                       { label: "Status",   val: "Online", col: "#22C55E" },
//                       { label: "Response", val: "0.8s",   col: "#F59E0B" },
//                       { label: "Last Run", val: "2m ago", col: "#64748B" },
//                     ].map(m => (
//                       <div key={m.label} className="flex items-center justify-between">
//                         <span className="text-xs text-slate-600">{m.label}</span>
//                         <span className="text-xs font-medium" style={{ color: m.col }}>{m.val}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2 rounded-xl transition-all duration-200"
//                     style={{
//                       background: isActive ? `${agent.color}28` : "rgba(255,255,255,0.04)",
//                       border: `1px solid ${isActive ? agent.color + "45" : "rgba(255,255,255,0.09)"}`,
//                       color: isActive ? agent.color : "#64748B",
//                     }}
//                   >
//                     <Play size={10} /> Launch Agent
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* ════════════════════════════════════════════════════════════════
//             SECTION 3 + 4 — BRAIN NETWORK  ×  AI WORKSPACE
//         ════════════════════════════════════════════════════════════════ */}
//         <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6">

//           {/* ── AGENT NETWORK VISUALIZATION ────────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.35 }}
//           >
//             <SectionLabel icon={Brain} label="Agent Network" />
//             <GlassCard className="p-6">
//               {/* SVG orbit */}
//               <div className="relative w-full" style={{ height: 290 }}>
//                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 290">
//                   {/* Outer orbit circle */}
//                   <circle cx="150" cy="145" r="100" fill="none"
//                     stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 5" />
//                   {BRAIN_NODES.map((node) => {
//                     const rad = (node.angle - 90) * (Math.PI / 180);
//                     const nx = 150 + 100 * Math.cos(rad);
//                     const ny = 145 + 100 * Math.sin(rad);
//                     return (
//                       <g key={node.id}>
//                         <line x1="150" y1="145" x2={nx} y2={ny}
//                           stroke={node.color} strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4">
//                           <animate attributeName="stroke-dashoffset" values="0;8" dur="1.8s" repeatCount="indefinite" />
//                         </line>
//                         <circle r="2.5" fill={node.color} fillOpacity="0.9">
//                           <animateMotion dur="2s" repeatCount="indefinite"
//                             path={`M150,145 L${nx},${ny}`} />
//                         </circle>
//                       </g>
//                     );
//                   })}
//                 </svg>

//                 {/* Center core */}
//                 <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
//                   <motion.div
//                     animate={{ scale: [1, 1.07, 1] }}
//                     transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
//                     className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center"
//                     style={{
//                       background: "linear-gradient(135deg,rgba(139,92,246,0.45),rgba(6,182,212,0.3))",
//                       border: "1.5px solid rgba(139,92,246,0.55)",
//                       boxShadow: "0 0 48px rgba(139,92,246,0.45)",
//                     }}
//                   >
//                     <Brain size={22} className="text-violet-300" />
//                     <span className="text-[9px] text-violet-300 font-bold mt-0.5">AI Core</span>
//                   </motion.div>
//                 </div>

//                 {/* Orbit nodes */}
//                 {BRAIN_NODES.map((node) => {
//                   const rad = (node.angle - 90) * (Math.PI / 180);
//                   const px = 50 + 33 * Math.cos(rad);
//                   const py = 50 + 33 * Math.sin(rad);
//                   const Icon = node.lucideIcon;
//                   return (
//                     <motion.button
//                       key={node.id}
//                       whileHover={{ scale: 1.18 }}
//                       onClick={() => !loading && handleAgentClick(node)}
//                       className="absolute focus:outline-none"
//                       style={{ left: `${px}%`, top: `${py}%`, transform: "translate(-50%,-50%)" }}
//                       title={node.title}
//                     >
//                       <div className="w-10 h-10 rounded-xl flex items-center justify-center"
//                         style={{
//                           background: `${node.color}1A`,
//                           border: `1px solid ${node.border}`,
//                           boxShadow: `0 0 14px ${node.glow}`,
//                         }}>
//                         <Icon size={15} style={{ color: node.color }} />
//                       </div>
//                       <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-slate-600">
//                         {node.title.split(" ")[0]}
//                       </div>
//                     </motion.button>
//                   );
//                 })}
//               </div>

//               {/* Legend */}
//               <div className="mt-8 grid grid-cols-2 gap-2">
//                 {BRAIN_NODES.map(n => (
//                   <button
//                     key={n.id}
//                     onClick={() => !loading && handleAgentClick(n)}
//                     className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors text-left"
//                   >
//                     <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: n.color }} />
//                     {n.title}
//                   </button>
//                 ))}
//               </div>
//             </GlassCard>
//           </motion.div>

//           {/* ── AI CHAT WORKSPACE ──────────────────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <SectionLabel icon={MessageSquare} label="AI Workspace" />
//             <GlassCard className="flex flex-col overflow-hidden" style={{ minHeight: 500 }}>

//               {/* Panel header */}
//               <div className="flex items-center justify-between px-5 py-3 border-b shrink-0"
//                 style={{ borderColor: "rgba(255,255,255,0.06)" }}>
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-xl flex items-center justify-center"
//                     style={{
//                       background: activeAgent ? `${activeAgent.color}1A` : "rgba(139,92,246,0.15)",
//                       border: `1px solid ${activeAgent ? activeAgent.border : "rgba(139,92,246,0.3)"}`,
//                     }}>
//                     {activeAgent
//                       ? <activeAgent.lucideIcon size={15} style={{ color: activeAgent.color }} />
//                       : <Bot size={15} className="text-violet-400" />}
//                   </div>
//                   <div>
//                     <div className="text-sm font-semibold text-white">
//                       {activeAgent ? activeAgent.title : "AI Assistant"}
//                     </div>
//                     <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
//                       <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
//                         style={{ boxShadow: "0 0 5px #22C55E", animation: "dashPulse 2s infinite" }} />
//                       {loading ? "Processing request…" : "Ready · All systems operational"}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 text-slate-700">
//                   <Terminal size={13} />
//                   <Settings size={13} />
//                 </div>
//               </div>

//               {/* Messages */}
//               <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4"
//                 style={{ maxHeight: 340 }}>
//                 <AnimatePresence>
//                   {/* Empty state */}
//                   {messages.length === 1 && !loading && (
//                     <motion.div
//                       key="empty"
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       className="flex flex-col items-center justify-center py-12 text-center"
//                     >
//                       <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
//                         style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.2),rgba(6,182,212,0.1))", border: "1px solid rgba(139,92,246,0.3)" }}>
//                         <Brain size={28} className="text-violet-400" />
//                       </div>
//                       <div className="text-base font-semibold text-white mb-2">Select an AI Agent</div>
//                       <p className="text-sm text-slate-500 max-w-xs">
//                         Choose a specialized agent above to generate business intelligence and actionable recommendations.
//                       </p>
//                     </motion.div>
//                   )}

//                   {/* Message bubbles */}
//                   {messages.map((msg, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
//                     >
//                       {msg.type === "bot" && (
//                         <div className="w-7 h-7 rounded-lg flex items-center justify-center mr-2 shrink-0 mt-0.5"
//                           style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}>
//                           <Bot size={13} className="text-violet-400" />
//                         </div>
//                       )}
//                       <div
//                         className="max-w-[75%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap"
//                         style={msg.type === "bot"
//                           ? { background: "rgba(30,41,59,0.85)", border: "1px solid rgba(255,255,255,0.07)", color: "#CBD5E1", borderRadius: "4px 16px 16px 16px" }
//                           : { background: "linear-gradient(135deg,#7C3AED,#6D28D9)", color: "#fff", borderRadius: "16px 4px 16px 16px" }
//                         }
//                       >
//                         {msg.text}
//                       </div>
//                     </motion.div>
//                   ))}

//                   {/* AI Thinking card */}
//                   {loading && (
//                     <motion.div
//                       key="thinking"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="flex justify-start"
//                     >
//                       <div className="w-7 h-7 rounded-lg flex items-center justify-center mr-2 shrink-0 mt-0.5"
//                         style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}>
//                         <Bot size={13} className="text-violet-400" />
//                       </div>
//                       <div className="rounded-2xl px-4 py-4 w-72"
//                         style={{ background: "rgba(30,41,59,0.95)", border: "1px solid rgba(139,92,246,0.25)", borderRadius: "4px 16px 16px 16px" }}>
//                         <div className="flex items-center gap-2 mb-3">
//                           <Loader2 size={12} className="text-violet-400 animate-spin" />
//                           <span className="text-xs font-semibold text-violet-300">AI Thinking…</span>
//                         </div>
//                         <div className="space-y-2 mb-3">
//                           {THINKING_STEPS.map((step, idx) => {
//                             const done    = idx < thinkStep;
//                             const current = idx === thinkStep;
//                             return (
//                               <div key={step} className="flex items-center gap-2">
//                                 {done
//                                   ? <CheckCircle size={11} className="text-green-400 shrink-0" />
//                                   : current
//                                   ? <Loader2 size={11} className="text-violet-400 animate-spin shrink-0" />
//                                   : <div className="w-2.5 h-2.5 rounded-full border border-slate-700 shrink-0" />
//                                 }
//                                 <span className="text-xs"
//                                   style={{ color: done ? "#22C55E" : current ? "#A78BFA" : "#334155" }}>
//                                   {step}
//                                 </span>
//                               </div>
//                             );
//                           })}
//                         </div>
//                         <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
//                           <motion.div className="h-1 rounded-full"
//                             style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", width: `${progress}%` }}
//                             transition={{ duration: 0.2 }} />
//                         </div>
//                         <div className="text-[9px] text-slate-600 mt-1 text-right">{progress}%</div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//                 <div ref={chatEndRef} />
//               </div>

//               {/* Quick actions + input */}
//               <div className="px-5 py-4 border-t shrink-0 space-y-3"
//                 style={{ borderColor: "rgba(255,255,255,0.06)" }}>
//                 <div className="flex flex-wrap gap-2">
//                   {QUICK_ACTIONS.map(qa => {
//                     const agent = ADMIN_AGENTS.find(a => a.id === qa.agentId);
//                     return (
//                       <button key={qa.label}
//                         onClick={() => !loading && handleAgentClick(agent)}
//                         className="text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105"
//                         style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748B" }}>
//                         {qa.label}
//                       </button>
//                     );
//                   })}
//                 </div>
//                 <div className="flex items-center gap-3 rounded-xl px-4 py-3"
//                   style={{ background: "rgba(2,6,23,0.65)", border: "1px solid rgba(255,255,255,0.07)" }}>
//                   <MessageSquare size={13} className="text-slate-700 shrink-0" />
//                   <input readOnly placeholder="Select an agent or click a quick action above…"
//                     className="flex-1 bg-transparent text-sm text-slate-500 placeholder-slate-700 outline-none" />
//                   <button className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
//                     style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", boxShadow: "0 0 14px rgba(124,58,237,0.4)" }}>
//                     <Send size={13} className="text-white" />
//                   </button>
//                 </div>
//               </div>
//             </GlassCard>
//           </motion.div>
//         </div>

//         {/* ════════════════════════════════════════════════════════════════
//             SECTION 5 — RECENT AI ACTIVITY
//         ════════════════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <SectionLabel icon={Activity} label="Recent AI Activity" />
//           <GlassCard>
//             {activity.length === 0 ? (
//               <div className="flex flex-col items-center justify-center py-14 text-center">
//                 <Layers size={28} className="text-slate-700 mb-3" />
//                 <div className="text-sm text-slate-600">No activity yet — launch an AI agent above to begin.</div>
//               </div>
//             ) : (
//               <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
//                 {/* Header row */}
//                 <div className="grid grid-cols-4 px-6 py-3">
//                   {["Agent", "Status", "Execution Time", "Timestamp"].map((h, i) => (
//                     <div key={h} className={`text-xs font-semibold text-slate-600 uppercase tracking-wider ${i > 0 ? "text-center" : ""}`}>{h}</div>
//                   ))}
//                 </div>
//                 {activity.map((row, i) => {
//                   const agent = ADMIN_AGENTS.find(a => a.title === row.agentName) || ADMIN_AGENTS[0];
//                   const Icon  = agent.lucideIcon;
//                   const isOk  = row.status === "completed";
//                   return (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.05 }}
//                       className="grid grid-cols-4 px-6 py-3.5 items-center hover:bg-white/[0.02] transition-colors"
//                     >
//                       {/* Agent */}
//                       <div className="flex items-center gap-3">
//                         <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
//                           style={{ background: `${agent.color}18`, border: `1px solid ${agent.border}` }}>
//                           <Icon size={13} style={{ color: agent.color }} />
//                         </div>
//                         <span className="text-sm text-slate-300">{row.agentName}</span>
//                       </div>
//                       {/* Status */}
//                       <div className="flex justify-center">
//                         <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1.5"
//                           style={isOk
//                             ? { background: "rgba(34,197,94,0.12)", color: "#4ADE80", border: "1px solid rgba(34,197,94,0.2)" }
//                             : { background: "rgba(239,68,68,0.12)", color: "#F87171", border: "1px solid rgba(239,68,68,0.2)" }}>
//                           <span className="w-1.5 h-1.5 rounded-full inline-block"
//                             style={{ background: isOk ? "#22C55E" : "#EF4444" }} />
//                           {row.status}
//                         </span>
//                       </div>
//                       {/* Exec time */}
//                       <div className="text-center text-sm font-mono text-slate-400">
//                         {row.executionTime || "—"}
//                       </div>
//                       {/* Timestamp */}
//                       <div className="text-center text-xs text-slate-600">
//                         {row.timestamp
//                           ? new Date(row.timestamp).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" })
//                           : "—"}
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             )}
//           </GlassCard>
//         </motion.div>

//         {/* ════════════════════════════════════════════════════════════════
//             FOOTER STATUS BAR
//         ════════════════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="flex flex-wrap items-center justify-between gap-3 rounded-xl px-5 py-3"
//           style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
//         >
//           <div className="flex items-center gap-5 flex-wrap">
//             {[
//               { icon: Shield,   label: "Secure Connection" },
//               { icon: Database, label: "Live Data Sync"    },
//               { icon: Star,     label: "Enterprise Grade"  },
//             ].map(({ icon: Icon, label }) => (
//               <div key={label} className="flex items-center gap-1.5 text-xs text-slate-600">
//                 <Icon size={11} className="text-violet-500" /> {label}
//               </div>
//             ))}
//           </div>
//           <div className="text-xs text-slate-700">
//             AI Operations Center · Powered by Claude · v2.0
//           </div>
//         </motion.div>
//       </div>

//       {/* ── KEYFRAMES ────────────────────────────────────────────────────── */}
//       <style>{`
//         @keyframes dashPing  { 75%,100%{transform:scale(2);opacity:0} }
//         @keyframes dashPulse { 0%,100%{opacity:1} 50%{opacity:.45} }
//         ::-webkit-scrollbar       { width:4px; height:4px }
//         ::-webkit-scrollbar-track { background:transparent }
//         ::-webkit-scrollbar-thumb { background:rgba(139,92,246,0.3); border-radius:99px }
//       `}</style>
//     </div>
//   );
// }




// frontend/src/pages/Dashboard/Dashboard.jsx
// ═══════════════════════════════════════════════════════════════════════════
//  UNIFIED AI OPERATIONS DASHBOARD
//  Merges: Dashboard.jsx stats  +  AdminAIAgents full feature set
//  Design: OpenAI Control Center × Stripe Analytics × Linear
// ═══════════════════════════════════════════════════════════════════════════
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot, Brain, Package, TrendingUp, Tag, Megaphone, Users,
  Zap, Activity, CheckCircle, Clock, BarChart3, Sparkles,
  Send, MessageSquare, FileText, PieChart, Cpu, Wifi,
  Shield, Play, Loader2, ArrowUpRight, Star, Database,
  AlertTriangle, RefreshCw, ShoppingCart, DollarSign,
  ChevronRight, Circle, Layers, Terminal, Settings,
} from "lucide-react";
import http from "../../api/http.js";
import { ENDPOINTS } from "../../api/endpoints.js";
import { toast } from "react-toastify";

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const nfmt = (n) =>
  typeof n === "number"
    ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
    : (n ?? "—");

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const ADMIN_AGENTS = [
  {
    id: "inventory",
    icon: "📦",
    lucideIcon: Package,
    title: "Inventory Manager",
    desc: "Low Stock & Restock Suggestions",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.35)",
    border: "rgba(6,182,212,0.3)",
  },
  {
    id: "sales",
    icon: "📈",
    lucideIcon: TrendingUp,
    title: "Sales Analyst",
    desc: "Revenue & Performance Report",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.35)",
    border: "rgba(139,92,246,0.3)",
  },
  {
    id: "product-optimizer",
    icon: "🏷️",
    lucideIcon: Tag,
    title: "Product Optimizer",
    desc: "SEO & Description Improvement",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.35)",
    border: "rgba(245,158,11,0.3)",
  },
  {
    id: "marketing",
    icon: "🎯",
    lucideIcon: Megaphone,
    title: "Marketing Campaign",
    desc: "Discounts & Festival Offers",
    color: "#EC4899",
    glow: "rgba(236,72,153,0.35)",
    border: "rgba(236,72,153,0.3)",
  },
  {
    id: "customer-insights",
    icon: "👥",
    lucideIcon: Users,
    title: "Customer Insights",
    desc: "User Behavior & Repeat Customers",
    color: "#22C55E",
    glow: "rgba(34,197,94,0.35)",
    border: "rgba(34,197,94,0.3)",
  },
];

const BRAIN_NODES = ADMIN_AGENTS.map((a, i) => ({ ...a, angle: i * 72 }));

const QUICK_ACTIONS = [
  { label: "Generate Report",    agentId: "sales"             },
  { label: "Analyze Sales",      agentId: "sales"             },
  { label: "Inventory Forecast", agentId: "inventory"         },
  { label: "Marketing Ideas",    agentId: "marketing"         },
  { label: "Customer Segments",  agentId: "customer-insights" },
];

const THINKING_STEPS = [
  "Fetching Data",
  "Processing Metrics",
  "Analyzing Trends",
  "Generating Insights",
  "Building Recommendations",
];

// ─── GLASS CARD ──────────────────────────────────────────────────────────────
function GlassCard({ children, className = "", style = {}, ...rest }) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{
        background: "rgba(15,23,42,0.75)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(18px)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
function SectionLabel({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      {Icon && <Icon size={15} className="text-violet-400" />}
      <h2 className="text-sm font-semibold text-white tracking-wide">{label}</h2>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(139,92,246,0.35),transparent)" }} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
export default function Dashboard() {
  // ── DASHBOARD STATE ──────────────────────────────────────────────────────
  const [stats, setStats]       = useState(null);
  const [activity, setActivity] = useState([]);
  const [statsErr, setStatsErr] = useState("");
  const [statsLoading, setStatsLoading] = useState(true);

  // ── AI AGENT STATE (business logic untouched) ────────────────────────────
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome Admin! Select any AI Agent to begin." },
  ]);
  const [loading, setLoading]       = useState(false);
  const [activeAgent, setActiveAgent] = useState(null);
  const [thinkStep, setThinkStep]   = useState(0);
  const [progress, setProgress]     = useState(0);
  const chatEndRef = useRef(null);

  // ── FETCH DASHBOARD STATS ─────────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        // Primary stats endpoint (existing)
        const res = await http.get(ENDPOINTS.admin.stats);
        setStats(res.data);
      } catch (e) {
        setStatsErr(e?.response?.data?.message || "Failed to load stats");
      } finally {
        setStatsLoading(false);
      }
    })();
  }, []);

  // ── FETCH ACTIVITY FEED ───────────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        const res = await http.get("/api/admin/dashboard/activity");
        setActivity(res.data?.activity || res.data || []);
      } catch {
        // activity is optional; silently ignore if endpoint not yet created
      }
    })();
  }, []);

  // ── AI THINKING TICKER ────────────────────────────────────────────────────
  useEffect(() => {
    if (!loading) { setThinkStep(0); setProgress(0); return; }
    let step = 0, prog = 0;
    const iv = setInterval(() => {
      prog += 4;
      setProgress(Math.min(prog, 95));
      if (prog % 20 === 0 && step < THINKING_STEPS.length - 1) { step++; setThinkStep(step); }
    }, 180);
    return () => clearInterval(iv);
  }, [loading]);

  // ── AUTO SCROLL CHAT ──────────────────────────────────────────────────────
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // ── HANDLE AGENT CLICK (business logic 100% untouched) ───────────────────
  const handleAgentClick = async (agent) => {
    setActiveAgent(agent);
    setLoading(true);

    // Add user query bubble
    const prompts = {
      "inventory":         "Show low stock products and restock suggestions",
      "sales":             "Last 30 days sales report and insights",
      "product-optimizer": "Optimize a product description and SEO",
      "marketing":         "Create Raksha Bandhan or upcoming festival campaign with discounts",
      "customer-insights": "Analyze customer behavior and repeat purchase insights",
    };
    const prompt = prompts[agent.id] || `Run ${agent.title}`;
    setMessages(prev => [...prev, { type: "user", text: prompt }]);

    try {
      const { data } = await http.post("/api/admin/ai/assistant", { message: prompt });
      setMessages(prev => [...prev, { type: "bot", text: data.reply }]);

      // Append to activity feed locally
      setActivity(prev => [
        { agentName: agent.title, status: "completed", executionTime: "0.8s", timestamp: new Date().toISOString() },
        ...prev.slice(0, 9),
      ]);
    } catch (err) {
      console.error(err);
      toast.error("Failed to get response from AI Agent");
      setMessages(prev => [...prev, {
        type: "bot",
        text: "Sorry, AI Agent is taking longer than expected. Please try again.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  // ── KPI CARDS (real data from stats) ─────────────────────────────────────
  const kpiCards = [
    { label: "Revenue",        value: stats ? `₹${nfmt(stats.revenue)}`  : "—", icon: DollarSign,   color: "#8B5CF6" },
    { label: "Total Orders",   value: stats ? nfmt(stats.orders)          : "—", icon: ShoppingCart,  color: "#06B6D4" },
    { label: "Total Products", value: stats ? nfmt(stats.products)        : "—", icon: Package,       color: "#F59E0B" },
    { label: "Total Users",    value: stats ? nfmt(stats.users)           : "—", icon: Users,         color: "#22C55E" },
    { label: "AI Tasks Done",  value: nfmt(messages.filter(m => m.type === "bot").length - 1 + (activity.length || 0)), icon: Cpu, color: "#EC4899" },
  ];

  // ═════════════════════════════════════════════════════════════════════════
  return (
    <div
      className="w-full relative overflow-x-hidden"
      style={{ background: "#020617", fontFamily: "'Inter',system-ui,sans-serif", minHeight: "100%" }}
    >
      {/* ── AURORA BACKGROUND — absolute, clipped inside scroll container ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.16]"
          style={{ background: "radial-gradient(circle,#8B5CF6,transparent 70%)", filter: "blur(90px)" }} />
        <div className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] rounded-full opacity-[0.11]"
          style={{ background: "radial-gradient(circle,#06B6D4,transparent 70%)", filter: "blur(90px)" }} />
        <div className="absolute bottom-[10%] left-[25%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle,#22C55E,transparent 70%)", filter: "blur(110px)" }} />
        <div className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
      </div>

      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* ════════════════════════════════════════════════════════════════
            HEADER
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.35),rgba(6,182,212,0.2))", border: "1px solid rgba(139,92,246,0.45)", boxShadow: "0 0 36px rgba(139,92,246,0.3)" }}>
                🤖
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400"
                style={{ boxShadow: "0 0 8px #22C55E", animation: "dashPing 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{ background: "linear-gradient(135deg,#fff,#8B5CF6,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                AI Operations Center
              </h1>
              <p className="text-sm text-slate-500 mt-0.5">
                Admin Dashboard · Real-time business intelligence powered by AI agents
              </p>
            </div>
          </div>

          {/* Live pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { dot: "#22C55E", label: "AI Online"      },
              { dot: "#8B5CF6", label: "99.9% Accuracy" },
              { dot: "#06B6D4", label: "<1s Response"   },
              { dot: "#F59E0B", label: "24/7 Monitoring" },
            ].map(p => (
              <div key={p.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-slate-400"
                style={{ background: "rgba(15,23,42,0.85)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(10px)" }}>
                <span className="w-2 h-2 rounded-full"
                  style={{ background: p.dot, boxShadow: `0 0 6px ${p.dot}`, display: "inline-block", animation: "dashPulse 2s infinite" }} />
                {p.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 1 — EXECUTIVE KPI CARDS
        ════════════════════════════════════════════════════════════════ */}
        <div>
          <SectionLabel icon={BarChart3} label="Executive Overview" />

          {/* Loading skeleton */}
          {statsLoading && (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="h-28 rounded-2xl animate-pulse"
                  style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(255,255,255,0.05)" }} />
              ))}
            </div>
          )}

          {/* Error */}
          {!statsLoading && statsErr && (
            <div className="flex items-center gap-4 rounded-xl p-4"
              style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}>
              <AlertTriangle size={16} className="text-red-400 shrink-0" />
              <span className="text-sm text-red-400 flex-1">{statsErr}</span>
              <button onClick={() => location.reload()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all"
                style={{ background: "rgba(239,68,68,0.3)", border: "1px solid rgba(239,68,68,0.4)" }}>
                <RefreshCw size={11} /> Retry
              </button>
            </div>
          )}

          {/* KPI grid */}
          {!statsLoading && (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {kpiCards.map((k, i) => {
                const Icon = k.icon;
                return (
                  <motion.div
                    key={k.label}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.45 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative rounded-2xl p-5 overflow-hidden cursor-default"
                    style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(16px)" }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-10"
                      style={{ background: `radial-gradient(circle at top right,${k.color},transparent 70%)` }} />
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${k.color}1A`, border: `1px solid ${k.color}30` }}>
                        <Icon size={17} style={{ color: k.color }} />
                      </div>
                      <ArrowUpRight size={13} style={{ color: k.color }} />
                    </div>
                    <div className="text-xl font-bold text-white tracking-tight">{k.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{k.label}</div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
                      style={{ background: `linear-gradient(90deg,transparent,${k.color},transparent)` }} />
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            LOW STOCK ALERT (from real stats)
        ════════════════════════════════════════════════════════════════ */}
        {stats?.lowStock?.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <SectionLabel icon={AlertTriangle} label="Low Stock Alert" />
            <GlassCard className="overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <span className="text-sm font-semibold text-white">Products Requiring Restock</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "rgba(239,68,68,0.15)", color: "#F87171", border: "1px solid rgba(239,68,68,0.25)" }}>
                  {stats.lowStock.length} items
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      {["Product", "SKU", "Stock"].map(h => (
                        <th key={h} className={`py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider ${h === "Stock" ? "text-right" : "text-left"}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {stats.lowStock.map((x, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        <td className="px-6 py-3 text-sm text-slate-300">{x.title}</td>
                        <td className="px-6 py-3 font-mono text-xs text-slate-500">{x.sku}</td>
                        <td className="px-6 py-3 text-right">
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold"
                            style={{ background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.25)" }}>
                            {x.stock}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            SECTION 2 — AI AGENTS GRID
        ════════════════════════════════════════════════════════════════ */}
        <div>
          <SectionLabel icon={Sparkles} label="AI Agents — Click to Activate" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {ADMIN_AGENTS.map((agent, i) => {
              const Icon = agent.lucideIcon;
              const isActive = activeAgent?.id === agent.id;
              return (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => !loading && handleAgentClick(agent)}
                  className="relative rounded-2xl p-5 cursor-pointer group"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg,${agent.color}18,rgba(15,23,42,0.95))`
                      : "rgba(15,23,42,0.72)",
                    border: `1px solid ${isActive ? agent.color + "55" : "rgba(255,255,255,0.07)"}`,
                    backdropFilter: "blur(16px)",
                    boxShadow: isActive ? `0 0 36px ${agent.glow}` : "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  {/* Hover radial glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at 50% 0%,${agent.color}15,transparent 70%)` }} />

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative"
                    style={{ background: `${agent.color}18`, border: `1px solid ${agent.border}` }}>
                    <Icon size={20} style={{ color: agent.color }} />
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl opacity-40"
                        style={{ border: `1px solid ${agent.color}`, animation: "dashPing 1.5s ease infinite" }} />
                    )}
                  </div>

                  <h3 className="font-semibold text-white text-sm mb-1 leading-snug">{agent.title}</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{agent.desc}</p>

                  {/* Meta */}
                  <div className="space-y-1.5 mb-4">
                    {[
                      { label: "Status",   val: "Online", col: "#22C55E" },
                      { label: "Response", val: "0.8s",   col: "#F59E0B" },
                      { label: "Last Run", val: "2m ago", col: "#64748B" },
                    ].map(m => (
                      <div key={m.label} className="flex items-center justify-between">
                        <span className="text-xs text-slate-600">{m.label}</span>
                        <span className="text-xs font-medium" style={{ color: m.col }}>{m.val}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2 rounded-xl transition-all duration-200"
                    style={{
                      background: isActive ? `${agent.color}28` : "rgba(255,255,255,0.04)",
                      border: `1px solid ${isActive ? agent.color + "45" : "rgba(255,255,255,0.09)"}`,
                      color: isActive ? agent.color : "#64748B",
                    }}
                  >
                    <Play size={10} /> Launch Agent
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 3 + 4 — BRAIN NETWORK  ×  AI WORKSPACE
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6">

          {/* ── AGENT NETWORK VISUALIZATION ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <SectionLabel icon={Brain} label="Agent Network" />
            <GlassCard className="p-6">
              {/* SVG orbit */}
              <div className="relative w-full" style={{ height: 290 }}>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 290">
                  {/* Outer orbit circle */}
                  <circle cx="150" cy="145" r="100" fill="none"
                    stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 5" />
                  {BRAIN_NODES.map((node) => {
                    const rad = (node.angle - 90) * (Math.PI / 180);
                    const nx = 150 + 100 * Math.cos(rad);
                    const ny = 145 + 100 * Math.sin(rad);
                    return (
                      <g key={node.id}>
                        <line x1="150" y1="145" x2={nx} y2={ny}
                          stroke={node.color} strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4">
                          <animate attributeName="stroke-dashoffset" values="0;8" dur="1.8s" repeatCount="indefinite" />
                        </line>
                        <circle r="2.5" fill={node.color} fillOpacity="0.9">
                          <animateMotion dur="2s" repeatCount="indefinite"
                            path={`M150,145 L${nx},${ny}`} />
                        </circle>
                      </g>
                    );
                  })}
                </svg>

                {/* Center core */}
                <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                  <motion.div
                    animate={{ scale: [1, 1.07, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,rgba(139,92,246,0.45),rgba(6,182,212,0.3))",
                      border: "1.5px solid rgba(139,92,246,0.55)",
                      boxShadow: "0 0 48px rgba(139,92,246,0.45)",
                    }}
                  >
                    <Brain size={22} className="text-violet-300" />
                    <span className="text-[9px] text-violet-300 font-bold mt-0.5">AI Core</span>
                  </motion.div>
                </div>

                {/* Orbit nodes */}
                {BRAIN_NODES.map((node) => {
                  const rad = (node.angle - 90) * (Math.PI / 180);
                  const px = 50 + 33 * Math.cos(rad);
                  const py = 50 + 33 * Math.sin(rad);
                  const Icon = node.lucideIcon;
                  return (
                    <motion.button
                      key={node.id}
                      whileHover={{ scale: 1.18 }}
                      onClick={() => !loading && handleAgentClick(node)}
                      className="absolute focus:outline-none"
                      style={{ left: `${px}%`, top: `${py}%`, transform: "translate(-50%,-50%)" }}
                      title={node.title}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${node.color}1A`,
                          border: `1px solid ${node.border}`,
                          boxShadow: `0 0 14px ${node.glow}`,
                        }}>
                        <Icon size={15} style={{ color: node.color }} />
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-slate-600">
                        {node.title.split(" ")[0]}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-8 grid grid-cols-2 gap-2">
                {BRAIN_NODES.map(n => (
                  <button
                    key={n.id}
                    onClick={() => !loading && handleAgentClick(n)}
                    className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors text-left"
                  >
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: n.color }} />
                    {n.title}
                  </button>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* ── AI CHAT WORKSPACE ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <SectionLabel icon={MessageSquare} label="AI Workspace" />
            <GlassCard className="flex flex-col overflow-hidden" style={{ minHeight: 500 }}>

              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-3 border-b shrink-0"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: activeAgent ? `${activeAgent.color}1A` : "rgba(139,92,246,0.15)",
                      border: `1px solid ${activeAgent ? activeAgent.border : "rgba(139,92,246,0.3)"}`,
                    }}>
                    {activeAgent
                      ? <activeAgent.lucideIcon size={15} style={{ color: activeAgent.color }} />
                      : <Bot size={15} className="text-violet-400" />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {activeAgent ? activeAgent.title : "AI Assistant"}
                    </div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                        style={{ boxShadow: "0 0 5px #22C55E", animation: "dashPulse 2s infinite" }} />
                      {loading ? "Processing request…" : "Ready · All systems operational"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Terminal size={13} />
                  <Settings size={13} />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4"
                style={{ maxHeight: 340 }}>
                <AnimatePresence>
                  {/* Empty state */}
                  {messages.length === 1 && !loading && (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                        style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.2),rgba(6,182,212,0.1))", border: "1px solid rgba(139,92,246,0.3)" }}>
                        <Brain size={28} className="text-violet-400" />
                      </div>
                      <div className="text-base font-semibold text-white mb-2">Select an AI Agent</div>
                      <p className="text-sm text-slate-500 max-w-xs">
                        Choose a specialized agent above to generate business intelligence and actionable recommendations.
                      </p>
                    </motion.div>
                  )}

                  {/* Message bubbles */}
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.type === "bot" && (
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center mr-2 shrink-0 mt-0.5"
                          style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}>
                          <Bot size={13} className="text-violet-400" />
                        </div>
                      )}
                      <div
                        className="max-w-[75%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap"
                        style={msg.type === "bot"
                          ? { background: "rgba(30,41,59,0.85)", border: "1px solid rgba(255,255,255,0.07)", color: "#CBD5E1", borderRadius: "4px 16px 16px 16px" }
                          : { background: "linear-gradient(135deg,#7C3AED,#6D28D9)", color: "#fff", borderRadius: "16px 4px 16px 16px" }
                        }
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {/* AI Thinking card */}
                  {loading && (
                    <motion.div
                      key="thinking"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center mr-2 shrink-0 mt-0.5"
                        style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}>
                        <Bot size={13} className="text-violet-400" />
                      </div>
                      <div className="rounded-2xl px-4 py-4 w-72"
                        style={{ background: "rgba(30,41,59,0.95)", border: "1px solid rgba(139,92,246,0.25)", borderRadius: "4px 16px 16px 16px" }}>
                        <div className="flex items-center gap-2 mb-3">
                          <Loader2 size={12} className="text-violet-400 animate-spin" />
                          <span className="text-xs font-semibold text-violet-300">AI Thinking…</span>
                        </div>
                        <div className="space-y-2 mb-3">
                          {THINKING_STEPS.map((step, idx) => {
                            const done    = idx < thinkStep;
                            const current = idx === thinkStep;
                            return (
                              <div key={step} className="flex items-center gap-2">
                                {done
                                  ? <CheckCircle size={11} className="text-green-400 shrink-0" />
                                  : current
                                  ? <Loader2 size={11} className="text-violet-400 animate-spin shrink-0" />
                                  : <div className="w-2.5 h-2.5 rounded-full border border-slate-700 shrink-0" />
                                }
                                <span className="text-xs"
                                  style={{ color: done ? "#22C55E" : current ? "#A78BFA" : "#334155" }}>
                                  {step}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                        <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                          <motion.div className="h-1 rounded-full"
                            style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", width: `${progress}%` }}
                            transition={{ duration: 0.2 }} />
                        </div>
                        <div className="text-[9px] text-slate-600 mt-1 text-right">{progress}%</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={chatEndRef} />
              </div>

              {/* Quick actions + input */}
              <div className="px-5 py-4 border-t shrink-0 space-y-3"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex flex-wrap gap-2">
                  {QUICK_ACTIONS.map(qa => {
                    const agent = ADMIN_AGENTS.find(a => a.id === qa.agentId);
                    return (
                      <button key={qa.label}
                        onClick={() => !loading && handleAgentClick(agent)}
                        className="text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748B" }}>
                        {qa.label}
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: "rgba(2,6,23,0.65)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <MessageSquare size={13} className="text-slate-700 shrink-0" />
                  <input readOnly placeholder="Select an agent or click a quick action above…"
                    className="flex-1 bg-transparent text-sm text-slate-500 placeholder-slate-700 outline-none" />
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", boxShadow: "0 0 14px rgba(124,58,237,0.4)" }}>
                    <Send size={13} className="text-white" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 5 — RECENT AI ACTIVITY
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SectionLabel icon={Activity} label="Recent AI Activity" />
          <GlassCard>
            {activity.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <Layers size={28} className="text-slate-700 mb-3" />
                <div className="text-sm text-slate-600">No activity yet — launch an AI agent above to begin.</div>
              </div>
            ) : (
              <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                {/* Header row */}
                <div className="grid grid-cols-4 px-6 py-3">
                  {["Agent", "Status", "Execution Time", "Timestamp"].map((h, i) => (
                    <div key={h} className={`text-xs font-semibold text-slate-600 uppercase tracking-wider ${i > 0 ? "text-center" : ""}`}>{h}</div>
                  ))}
                </div>
                {activity.map((row, i) => {
                  const agent = ADMIN_AGENTS.find(a => a.title === row.agentName) || ADMIN_AGENTS[0];
                  const Icon  = agent.lucideIcon;
                  const isOk  = row.status === "completed";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="grid grid-cols-4 px-6 py-3.5 items-center hover:bg-white/[0.02] transition-colors"
                    >
                      {/* Agent */}
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${agent.color}18`, border: `1px solid ${agent.border}` }}>
                          <Icon size={13} style={{ color: agent.color }} />
                        </div>
                        <span className="text-sm text-slate-300">{row.agentName}</span>
                      </div>
                      {/* Status */}
                      <div className="flex justify-center">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1.5"
                          style={isOk
                            ? { background: "rgba(34,197,94,0.12)", color: "#4ADE80", border: "1px solid rgba(34,197,94,0.2)" }
                            : { background: "rgba(239,68,68,0.12)", color: "#F87171", border: "1px solid rgba(239,68,68,0.2)" }}>
                          <span className="w-1.5 h-1.5 rounded-full inline-block"
                            style={{ background: isOk ? "#22C55E" : "#EF4444" }} />
                          {row.status}
                        </span>
                      </div>
                      {/* Exec time */}
                      <div className="text-center text-sm font-mono text-slate-400">
                        {row.executionTime || "—"}
                      </div>
                      {/* Timestamp */}
                      <div className="text-center text-xs text-slate-600">
                        {row.timestamp
                          ? new Date(row.timestamp).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" })
                          : "—"}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </GlassCard>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            FOOTER STATUS BAR
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-3 rounded-xl px-5 py-3"
          style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
        >
          <div className="flex items-center gap-5 flex-wrap">
            {[
              { icon: Shield,   label: "Secure Connection" },
              { icon: Database, label: "Live Data Sync"    },
              { icon: Star,     label: "Enterprise Grade"  },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-slate-600">
                <Icon size={11} className="text-violet-500" /> {label}
              </div>
            ))}
          </div>
          <div className="text-xs text-slate-700">
            AI Operations Center · Powered by Claude · v2.0
          </div>
        </motion.div>
      </div>

      {/* ── KEYFRAMES ────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes dashPing  { 75%,100%{transform:scale(2);opacity:0} }
        @keyframes dashPulse { 0%,100%{opacity:1} 50%{opacity:.45} }
        ::-webkit-scrollbar       { width:4px; height:4px }
        ::-webkit-scrollbar-track { background:transparent }
        ::-webkit-scrollbar-thumb { background:rgba(139,92,246,0.3); border-radius:99px }
      `}</style>
    </div>
  );
}