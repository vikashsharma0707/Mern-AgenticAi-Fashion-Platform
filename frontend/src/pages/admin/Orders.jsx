// // // import React, { useEffect, useState } from 'react';
// // // import http from '../../api/http.js';
// // // import { ENDPOINTS } from '../../api/endpoints.js';

// // // export default function AdminOrders(){
// // //   const [list, setList] = useState([]);
// // //   const load = async()=>{ const { data } = await http.get(ENDPOINTS.orders.base); setList(data); };
// // //   useEffect(()=>{ load(); }, []);

// // //   const update = async (id, status)=>{
// // //     await http.put(`${ENDPOINTS.orders.base}/${id}/status`, { status });
// // //     await load();
// // //   };

// // //   const statuses = ['pending','processing','shipped','delivered','cancelled'];
// // //   return (
// // //     <div>
// // //       <h2>Orders</h2>
// // //       {list.map(o => <div key={o._id} className="panel">
// // //         <div className="row space"><b>#{o._id.slice(-6)}</b><span>User: {o.user?.name} ({o.user?.email})</span></div>
// // //         <ul>{o.items.map((i,idx)=> <li key={idx}>{i.title} ({i.sku}) x{i.qty} = ₹{i.price*i.qty}</li>)}</ul>
// // //         <div className="row gap">
// // //           <span>Status:</span>
// // //           <select value={o.status} onChange={e=>update(o._id, e.target.value)}>
// // //             {statuses.map(s => <option key={s} value={s}>{s}</option>)}
// // //           </select>
// // //           <b>Total ₹{o.total}</b>
// // //         </div>
// // //       </div>)}
// // //     </div>
// // //   );
// // // }


// // import React, { useEffect, useState } from "react";
// // import http from "../../api/http.js";
// // import { ENDPOINTS } from "../../api/endpoints.js";
// // import "./Orders.css";

// // const nfmt = (n) =>
// //   typeof n === "number"
// //     ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
// //     : n;

// // export default function Orders() {
// //   const [list, setList] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [err, setErr] = useState("");

// //   const load = async () => {
// //     try {
// //       setLoading(true);
// //       const { data } = await http.get(ENDPOINTS.orders.base);
// //       setList(data || []);
// //       setErr("");
// //     } catch (e) {
// //       setErr(e?.response?.data?.message || "Failed to load orders");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => { load(); }, []);

// //   const update = async (id, status) => {
// //     try {
// //       await http.put(`${ENDPOINTS.orders.base}/${id}/status`, { status });
// //       await load();
// //     } catch (e) {
// //       alert(e?.response?.data?.message || "Update failed");
// //     }
// //   };

// //   const statuses = ["pending", "processing", "shipped", "delivered", "cancelled"];

// //   return (
// //     <div className="ao-wrap">
// //       <header className="ao-head">
// //         <h2>Orders</h2>
// //         <p className="muted">Manage order status and review line items</p>
// //       </header>

// //       {loading && (
// //         <div className="ao-list">
// //           {[1, 2, 3].map((i) => (
// //             <article key={i} className="ao-card shimmer" aria-hidden />
// //           ))}
// //         </div>
// //       )}

// //       {!loading && err && (
// //         <div className="ao-error" role="alert">
// //           <span>⚠️ {err}</span>
// //           <button className="btn btn-ghost" onClick={load}>Retry</button>
// //         </div>
// //       )}

// //       {!loading && !err && (
// //         <>
// //           {!list.length ? (
// //             <div className="empty">
// //               <div className="empty-box">No orders yet.</div>
// //             </div>
// //           ) : (
// //             <div className="ao-list">
// //               {list.map((o) => (
// //                 <article key={o._id} className="ao-card">
// //                   <div className="ao-card-head">
// //                     <div className="ao-id">
// //                       <b>#{(o._id || "").slice(-6)}</b>
// //                       <span className={`badge ${o.status}`}>{o.status}</span>
// //                     </div>
// //                     <div className="ao-user">
// //                       <span className="muted">User:</span>{" "}
// //                       <b>{o.user?.name || "—"}</b>{" "}
// //                       <span className="muted">({o.user?.email || "—"})</span>
// //                     </div>
// //                   </div>

// //                   <div className="ao-items-wrap">
// //                     <table className="ao-items">
// //                       <thead>
// //                         <tr>
// //                           <th>Item</th>
// //                           <th>SKU</th>
// //                           <th className="right">Qty</th>
// //                           <th className="right">Price</th>
// //                           <th className="right">Subtotal</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         {o.items?.map((i, idx) => (
// //                           <tr key={idx}>
// //                             <td className="ellipsis" title={i.title}>{i.title}</td>
// //                             <td className="mono">{i.sku}</td>
// //                             <td className="right">{i.qty}</td>
// //                             <td className="right">₹{nfmt(i.price)}</td>
// //                             <td className="right">₹{nfmt(i.price * i.qty)}</td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   </div>

// //                   <div className="ao-foot">
// //                     <div className="ao-status">
// //                       <label htmlFor={`st-${o._id}`}>Status</label>
// //                       <select
// //                         id={`st-${o._id}`}
// //                         value={o.status}
// //                         onChange={(e) => update(o._id, e.target.value)}
// //                       >
// //                         {statuses.map((s) => (
// //                           <option key={s} value={s}>{s}</option>
// //                         ))}
// //                       </select>
// //                     </div>

// //                     <div className="ao-total">
// //                       <span className="muted">Total</span>
// //                       <b>₹{nfmt(o.total)}</b>
// //                     </div>
// //                   </div>
// //                 </article>
// //               ))}
// //             </div>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   );
// // }




// import React, { useEffect, useMemo, useState } from "react";
// import http from "../../api/http.js";
// import { ENDPOINTS } from "../../api/endpoints.js";
// import "./Orders.css";

// const STATUSES = ["pending", "processing", "shipped", "delivered", "cancelled"];

// const nfmt = (n) =>
//   typeof n === "number"
//     ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
//     : n;

// export default function Orders() {
//   const [list, setList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState("");

//   // UI state
//   const [status, setStatus] = useState("");     // filter
//   const [q, setQ] = useState("");               // search
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(5);

//   const load = async () => {
//     try {
//       setLoading(true);
//       const { data } = await http.get(ENDPOINTS.orders.base);
//       setList(Array.isArray(data) ? data : []);
//       setErr("");
//       setPage(1); // reset to first page on reload
//     } catch (e) {
//       setErr(e?.response?.data?.message || "Failed to load orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { load(); }, []);

//   const update = async (id, next) => {
//     try {
//       await http.put(`${ENDPOINTS.orders.base}/${id}/status`, { status: next });
//       // Optimistic UI
//       setList((prev) => prev.map((o) => (o._id === id ? { ...o, status: next } : o)));
//     } catch (e) {
//       alert(e?.response?.data?.message || "Update failed");
//     }
//   };

//   // ---------- Derived data ----------
//   const filtered = useMemo(() => {
//     const s = (status || "").trim().toLowerCase();
//     const query = (q || "").trim().toLowerCase();

//     return list.filter((o) => {
//       const matchesStatus = !s || o.status?.toLowerCase() === s;
//       if (!matchesStatus) return false;

//       if (!query) return true;
//       const id = (o._id || "").toLowerCase();
//       const user = (o.user?.name || "").toLowerCase();
//       const email = (o.user?.email || "").toLowerCase();
//       const anyItem = (o.items || []).some((i) =>
//         (i.title || "").toLowerCase().includes(query) ||
//         (i.sku || "").toLowerCase().includes(query)
//       );
//       return (
//         id.includes(query) ||
//         user.includes(query) ||
//         email.includes(query) ||
//         anyItem
//       );
//     });
//   }, [list, status, q]);

//   const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
//   const pageSafe = Math.min(page, totalPages);
//   const sliceStart = (pageSafe - 1) * pageSize;
//   const pageItems = filtered.slice(sliceStart, sliceStart + pageSize);

//   // ---------- UI ----------
//   return (
//     <div className="ao-wrap">
//       <header className="ao-head">
//         <div>
//           <h2>Orders</h2>
//           <p className="muted">Manage order status, search, and review line items</p>
//         </div>
//         <div className="ao-head-actions">
//           <button className="btn btn-ghost" onClick={load} aria-label="Refresh orders">
//             ⟳ Refresh
//           </button>
//         </div>
//       </header>

//       {/* Filters */}
//       <section className="ao-filters" aria-label="Order filters">
//         <div className="ao-fgrid">
//           <div className="ao-field">
//             <label htmlFor="flt-status">Status</label>
//             <select
//               id="flt-status"
//               value={status}
//               onChange={(e) => { setStatus(e.target.value); setPage(1); }}
//             >
//               <option value="">All</option>
//               {STATUSES.map((s) => (
//                 <option key={s} value={s}>{s}</option>
//               ))}
//             </select>
//           </div>

//           <div className="ao-field ao-span-2">
//             <label htmlFor="flt-search">Search</label>
//             <input
//               id="flt-search"
//               type="text"
//               value={q}
//               onChange={(e) => { setQ(e.target.value); setPage(1); }}
//               placeholder="Order ID / customer / email / item / SKU…"
//             />
//           </div>

//           <div className="ao-field">
//             <label htmlFor="flt-size">Rows / page</label>
//             <select
//               id="flt-size"
//               value={pageSize}
//               onChange={(e) => { setPageSize(Number(e.target.value) || 5); setPage(1); }}
//             >
//               {[5, 10, 20, 50].map((n) => <option key={n} value={n}>{n}</option>)}
//             </select>
//           </div>

//           <div className="ao-field ao-actions">
//             <button className="btn" onClick={() => { setStatus(""); setQ(""); setPage(1); }}>
//               Clear
//             </button>
//             <button className="btn btn-primary" onClick={load}>
//               Apply
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Loading */}
//       {loading && (
//         <div className="ao-list" aria-live="polite">
//           {[1, 2, 3].map((i) => (
//             <article key={i} className="ao-card shimmer" aria-hidden />
//           ))}
//         </div>
//       )}

//       {/* Error */}
//       {!loading && err && (
//         <div className="ao-error" role="alert">
//           <span>⚠️ {err}</span>
//           <button className="btn btn-ghost" onClick={load}>Retry</button>
//         </div>
//       )}

//       {/* Empty */}
//       {!loading && !err && !filtered.length && (
//         <div className="empty">
//           <div className="empty-box">No matching orders.</div>
//         </div>
//       )}

//       {/* List */}
//       {!loading && !err && !!filtered.length && (
//         <>
//           <div className="ao-list">
//             {pageItems.map((o) => {
//               const shortId = (o._id || "").slice(-6);
//               const created = o.createdAt ? new Date(o.createdAt).toLocaleString() : "";
//               return (
//                 <article key={o._id} className="ao-card">
//                   <div className="ao-card-head">
//                     <div className="ao-id">
//                       <b>#{shortId || "------"}</b>
//                       <span className={`badge ${o.status}`}>{o.status}</span>
//                       {created && <span className="muted">• {created}</span>}
//                     </div>
//                     <div className="ao-user">
//                       <span className="muted">User:</span>{" "}
//                       <b>{o.user?.name || "—"}</b>{" "}
//                       <span className="muted">({o.user?.email || "—"})</span>
//                     </div>
//                   </div>

//                   <div className="ao-items-wrap" role="region" aria-label={`Order ${shortId} items`}>
//                     <table className="ao-items">
//                       <thead>
//                         <tr>
//                           <th>Item</th>
//                           <th>SKU</th>
//                           <th className="right">Qty</th>
//                           <th className="right">Price</th>
//                           <th className="right">Subtotal</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {(o.items || []).map((i, idx) => (
//                           <tr key={idx}>
//                             <td className="ellipsis" title={i.title}>{i.title}</td>
//                             <td className="mono">{i.sku}</td>
//                             <td className="right">{i.qty}</td>
//                             <td className="right">₹{nfmt(i.price)}</td>
//                             <td className="right">₹{nfmt((i.price || 0) * (i.qty || 0))}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   <div className="ao-foot">
//                     <div className="ao-status">
//                       <label htmlFor={`st-${o._id}`}>Status</label>
//                       <select
//                         id={`st-${o._id}`}
//                         value={o.status}
//                         onChange={(e) => update(o._id, e.target.value)}
//                         aria-label={`Update status for order ${shortId}`}
//                       >
//                         {STATUSES.map((s) => (
//                           <option key={s} value={s}>{s}</option>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="ao-total">
//                       <span className="muted">Total</span>
//                       <b>₹{nfmt(o.total)}</b>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {/* Pagination */}
//           <nav className="pager" aria-label="Pagination">
//             <button
//               className="btn"
//               onClick={() => setPage((p) => Math.max(1, p - 1))}
//               disabled={pageSafe <= 1}
//             >
//               ← Prev
//             </button>
//             <div className="pager-info">
//               Page <b>{pageSafe}</b> of <b>{totalPages}</b> • {filtered.length} orders
//             </div>
//             <button
//               className="btn"
//               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//               disabled={pageSafe >= totalPages}
//             >
//               Next →
//             </button>
//           </nav>
//         </>
//       )}
//     </div>
//   );
// }



// frontend/src/pages/admin/Orders.jsx
// ══════════════════════════════════════════════════════
//  DARK THEME — matches AdminLayout perfectly
//  Business logic 100% untouched
// ══════════════════════════════════════════════════════
import React, { useEffect, useMemo, useState } from "react";
import http from "../../api/http.js";
import { ENDPOINTS } from "../../api/endpoints.js";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw, Search, Filter, ChevronLeft, ChevronRight,
  AlertTriangle, Package, User, Clock, Hash, ShoppingBag,
  TrendingUp, CheckCircle, XCircle, Truck, Loader2,
} from "lucide-react";

const STATUSES = ["pending", "processing", "shipped", "delivered", "cancelled"];

const STATUS_CONFIG = {
  pending:    { color: "#F59E0B", bg: "rgba(245,158,11,0.12)",  border: "rgba(245,158,11,0.25)"  },
  processing: { color: "#06B6D4", bg: "rgba(6,182,212,0.12)",   border: "rgba(6,182,212,0.25)"   },
  shipped:    { color: "#8B5CF6", bg: "rgba(139,92,246,0.12)",  border: "rgba(139,92,246,0.25)"  },
  delivered:  { color: "#22C55E", bg: "rgba(34,197,94,0.12)",   border: "rgba(34,197,94,0.25)"   },
  cancelled:  { color: "#EF4444", bg: "rgba(239,68,68,0.12)",   border: "rgba(239,68,68,0.25)"   },
};

const nfmt = (n) =>
  typeof n === "number" ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 }) : n;

function GlassCard({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-2xl ${className}`}
      style={{ background: "rgba(15,23,42,0.75)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(16px)", ...style }}>
      {children}
    </div>
  );
}

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] || { color: "#94A3B8", bg: "rgba(148,163,184,0.12)", border: "rgba(148,163,184,0.25)" };
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color }}>
      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: cfg.color }} />
      {status}
    </span>
  );
}

export default function Orders() {
  // ── STATE (untouched logic) ───────────────────────────────────────────────
  const [list, setList]         = useState([]);
  const [loading, setLoading]   = useState(true);
  const [err, setErr]           = useState("");
  const [status, setStatus]     = useState("");
  const [q, setQ]               = useState("");
  const [page, setPage]         = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const load = async () => {
    try {
      setLoading(true);
      const { data } = await http.get(ENDPOINTS.orders.base);
      setList(Array.isArray(data) ? data : []);
      setErr("");
      setPage(1);
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const update = async (id, next) => {
    try {
      await http.put(`${ENDPOINTS.orders.base}/${id}/status`, { status: next });
      setList((prev) => prev.map((o) => (o._id === id ? { ...o, status: next } : o)));
    } catch (e) {
      alert(e?.response?.data?.message || "Update failed");
    }
  };

  const filtered = useMemo(() => {
    const s = (status || "").trim().toLowerCase();
    const query = (q || "").trim().toLowerCase();
    return list.filter((o) => {
      if (s && o.status?.toLowerCase() !== s) return false;
      if (!query) return true;
      const id    = (o._id || "").toLowerCase();
      const user  = (o.user?.name || "").toLowerCase();
      const email = (o.user?.email || "").toLowerCase();
      const anyItem = (o.items || []).some((i) =>
        (i.title || "").toLowerCase().includes(query) ||
        (i.sku   || "").toLowerCase().includes(query)
      );
      return id.includes(query) || user.includes(query) || email.includes(query) || anyItem;
    });
  }, [list, status, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageSafe   = Math.min(page, totalPages);
  const pageItems  = filtered.slice((pageSafe - 1) * pageSize, pageSafe * pageSize);

  // ── KPI COUNTS ────────────────────────────────────────────────────────────
  const counts = useMemo(() => ({
    total:     list.length,
    pending:   list.filter(o => o.status === "pending").length,
    delivered: list.filter(o => o.status === "delivered").length,
    revenue:   list.reduce((s, o) => s + (o.total || 0), 0),
  }), [list]);

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="w-full relative" style={{ background: "#020617", minHeight: "100%", fontFamily: "'Inter',system-ui,sans-serif" }}>
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle,#8B5CF6,transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle,#06B6D4,transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* ── HEADER ────────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <ShoppingBag size={22} className="text-violet-400" /> Orders
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">Manage order status, search and review line items</p>
          </div>
          <button onClick={load}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", color: "#A78BFA" }}>
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> Refresh
          </button>
        </motion.div>

        {/* ── KPI CARDS ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Orders",   value: nfmt(counts.total),      icon: Hash,        color: "#8B5CF6" },
            { label: "Pending",        value: nfmt(counts.pending),     icon: Clock,       color: "#F59E0B" },
            { label: "Delivered",      value: nfmt(counts.delivered),   icon: CheckCircle, color: "#22C55E" },
            { label: "Total Revenue",  value: `₹${nfmt(counts.revenue)}`, icon: TrendingUp, color: "#06B6D4" },
          ].map((k, i) => {
            const Icon = k.icon;
            return (
              <motion.div key={k.label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="relative rounded-2xl p-5 overflow-hidden"
                style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="absolute inset-0 opacity-10 rounded-2xl"
                  style={{ background: `radial-gradient(circle at top right,${k.color},transparent 70%)` }} />
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${k.color}1A`, border: `1px solid ${k.color}30` }}>
                  <Icon size={16} style={{ color: k.color }} />
                </div>
                <div className="text-xl font-bold text-white">{k.value}</div>
                <div className="text-xs text-slate-500 mt-1">{k.label}</div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg,transparent,${k.color},transparent)` }} />
              </motion.div>
            );
          })}
        </div>

        {/* ── FILTERS ───────────────────────────────────────────────────── */}
        <GlassCard className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Status */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Status</label>
              <select value={status} onChange={e => { setStatus(e.target.value); setPage(1); }}
                className="w-full rounded-xl px-3 py-2.5 text-sm text-white outline-none transition-all"
                style={{ background: "rgba(2,6,23,0.7)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}>
                <option value="">All</option>
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Search</label>
              <div className="relative">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
                <input type="text" value={q}
                  onChange={e => { setQ(e.target.value); setPage(1); }}
                  placeholder="Order ID / customer / email / item / SKU…"
                  className="w-full rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none"
                  style={{ background: "rgba(2,6,23,0.7)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
              </div>
            </div>

            {/* Rows/page */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Rows / page</label>
              <select value={pageSize} onChange={e => { setPageSize(Number(e.target.value) || 5); setPage(1); }}
                className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                style={{ background: "rgba(2,6,23,0.7)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}>
                {[5, 10, 20, 50].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          {/* Actions row */}
          <div className="flex items-center justify-between mt-4 pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-xs text-slate-500">
              Showing <span className="text-white font-semibold">{pageItems.length}</span> of{" "}
              <span className="text-white font-semibold">{filtered.length}</span> orders
            </span>
            <div className="flex gap-2">
              <button onClick={() => { setStatus(""); setQ(""); setPage(1); }}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748B" }}>
                Clear
              </button>
              <button onClick={load}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.35)", color: "#A78BFA" }}>
                Apply
              </button>
            </div>
          </div>
        </GlassCard>

        {/* ── LOADING ───────────────────────────────────────────────────── */}
        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-40 rounded-2xl animate-pulse"
                style={{ background: "rgba(15,23,42,0.5)", border: "1px solid rgba(255,255,255,0.05)" }} />
            ))}
          </div>
        )}

        {/* ── ERROR ─────────────────────────────────────────────────────── */}
        {!loading && err && (
          <div className="flex items-center gap-4 rounded-xl p-4"
            style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
            <AlertTriangle size={16} className="text-red-400 shrink-0" />
            <span className="text-sm text-red-400 flex-1">{err}</span>
            <button onClick={load}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{ background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171" }}>
              Retry
            </button>
          </div>
        )}

        {/* ── EMPTY ─────────────────────────────────────────────────────── */}
        {!loading && !err && !filtered.length && (
          <GlassCard className="flex flex-col items-center justify-center py-16 text-center">
            <Package size={32} className="text-slate-700 mb-3" />
            <div className="text-base font-semibold text-slate-500">No matching orders</div>
            <div className="text-xs text-slate-600 mt-1">Try adjusting your filters</div>
          </GlassCard>
        )}

        {/* ── ORDER CARDS ───────────────────────────────────────────────── */}
        {!loading && !err && !!filtered.length && (
          <>
            <AnimatePresence>
              <div className="space-y-4">
                {pageItems.map((o, idx) => {
                  const shortId = (o._id || "").slice(-6);
                  const created = o.createdAt ? new Date(o.createdAt).toLocaleString("en-IN") : "";
                  return (
                    <motion.div key={o._id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}>
                      <GlassCard>
                        {/* Card header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4"
                          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                          <div className="flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                                style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}>
                                <Hash size={12} className="text-violet-400" />
                              </div>
                              <span className="font-bold text-white text-sm">#{shortId || "------"}</span>
                            </div>
                            <StatusBadge status={o.status} />
                            {created && <span className="text-xs text-slate-600 flex items-center gap-1"><Clock size={10} />{created}</span>}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <User size={13} className="text-slate-600" />
                            <span className="font-semibold text-slate-300">{o.user?.name || "—"}</span>
                            <span className="text-slate-600">({o.user?.email || "—"})</span>
                          </div>
                        </div>

                        {/* Items table */}
                        <div className="overflow-x-auto px-5 py-3">
                          <table className="w-full text-sm">
                            <thead>
                              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                {["Item", "SKU", "Qty", "Price", "Subtotal"].map((h, i) => (
                                  <th key={h} className={`py-2 text-xs font-semibold text-slate-600 uppercase tracking-wider ${i >= 2 ? "text-right" : "text-left"}`}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {(o.items || []).map((item, i) => (
                                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                                  <td className="py-2.5 text-slate-300 max-w-[200px] truncate" title={item.title}>{item.title}</td>
                                  <td className="py-2.5 font-mono text-xs text-slate-500">{item.sku}</td>
                                  <td className="py-2.5 text-right text-slate-400">{item.qty}</td>
                                  <td className="py-2.5 text-right text-slate-400">₹{nfmt(item.price)}</td>
                                  <td className="py-2.5 text-right font-semibold text-white">₹{nfmt((item.price || 0) * (item.qty || 0))}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Card footer */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 py-4"
                          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                          <div className="flex items-center gap-3">
                            <Truck size={14} className="text-slate-600" />
                            <label className="text-xs text-slate-500 font-semibold">Update Status</label>
                            <select value={o.status}
                              onChange={e => update(o._id, e.target.value)}
                              className="rounded-lg px-3 py-1.5 text-xs font-semibold outline-none transition-all"
                              style={{ background: "rgba(2,6,23,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: STATUS_CONFIG[o.status]?.color || "#fff" }}>
                              {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500">Total</span>
                            <span className="text-lg font-bold text-white">₹{nfmt(o.total)}</span>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatePresence>

            {/* ── PAGINATION ──────────────────────────────────────────── */}
            <div className="flex items-center justify-between">
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={pageSafe <= 1}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all disabled:opacity-30"
                style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)", color: "#94A3B8" }}>
                <ChevronLeft size={15} /> Prev
              </button>
              <div className="text-sm text-slate-500">
                Page <span className="text-white font-semibold">{pageSafe}</span> of{" "}
                <span className="text-white font-semibold">{totalPages}</span>
                <span className="ml-2 text-slate-600">· {filtered.length} orders</span>
              </div>
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={pageSafe >= totalPages}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all disabled:opacity-30"
                style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)", color: "#94A3B8" }}>
                Next <ChevronRight size={15} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}