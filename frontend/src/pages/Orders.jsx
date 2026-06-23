// // // // import React, { useEffect, useState } from 'react';
// // // // import http from '../api/http.js';
// // // // import { ENDPOINTS } from '../api/endpoints.js';
// // // // import { getSocket } from '../utils/socket.js';

// // // // export default function Orders(){
// // // //   const [list, setList] = useState([]);
// // // //   const load = async()=>{ const { data } = await http.get(ENDPOINTS.orders.mine); setList(data); };
// // // //   useEffect(()=>{ load(); const s=getSocket(); s.on('order:status', ({orderId,status})=>{ setList(x=>x.map(o=>o._id===orderId?{...o,status}:o));}); return ()=>{ getSocket().off('order:status'); };},[]);
// // // //   return (
// // // //     <div>
// // // //       <h2>My Orders</h2>
// // // //       {list.map(o => <div key={o._id} className="panel">
// // // //         <div className="row space"><b>#{o._id.slice(-6)}</b><span>Status: <b>{o.status}</b></span></div>
// // // //         <ul>{o.items.map((i,idx)=> <li key={idx}>{i.title} x{i.qty} = ₹{i.price*i.qty}</li>)}</ul>
// // // //         <div className="row space"><span>Total</span><b>₹{o.total}</b></div>
// // // //       </div>)}
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useEffect, useState } from "react";
// // // import http from "../api/http.js";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Orders(){
// // //   const [orders, setOrders] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const nav = useNavigate();

// // //   useEffect(() => {
// // //     (async () => {
// // //       try {
// // //         const { data } = await http.get("/api/orders/mine");
// // //         setOrders(data);
// // //       } catch (err) {
// // //         if (err?.response?.status === 401) nav("/profile");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     })();
// // //   }, [nav]);

// // //   if (loading) return <p>Loading…</p>;

// // //   return (
// // //     <div>
// // //       <h2>My Orders</h2>
// // //       {orders.length === 0 ? (
// // //         <p>No orders yet.</p>
// // //       ) : (
// // //         <table className="table">
// // //           <thead>
// // //             <tr><th>#</th><th>Items</th><th>Total</th><th>Status</th></tr>
// // //           </thead>
// // //           <tbody>
// // //             {orders.map((o, i) => (
// // //               <tr key={o._id}>
// // //                 <td>{i + 1}</td>
// // //                 <td>{o.items.map(it => `${it.title} x${it.qty}`).join(", ")}</td>
// // //                 <td>₹{o.total}</td>
// // //                 <td>{o.status}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // }




// // import React, { useEffect, useMemo, useState } from "react";
// // import http from "../api/http.js";
// // import { useNavigate } from "react-router-dom";
// // import "./Orders.css";

// // const STATUSES = ["pending", "processing", "shipped", "delivered", "cancelled"];
// // const nfmt = (n) =>
// //   typeof n === "number"
// //     ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
// //     : n;

// // export default function Orders() {
// //   const nav = useNavigate();

// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [err, setErr] = useState("");

// //   // UI state
// //   const [status, setStatus] = useState("");
// //   const [q, setQ] = useState("");
// //   const [expanded, setExpanded] = useState({}); // { [orderId]: true }
// //   const [page, setPage] = useState(1);
// //   const [pageSize, setPageSize] = useState(5);

// //   const load = async () => {
// //     try {
// //       setLoading(true);
// //       setErr("");
// //       const { data } = await http.get("/api/orders/mine");
// //       setOrders(Array.isArray(data) ? data : []);
// //       setPage(1);
// //     } catch (err) {
// //       if (err?.response?.status === 401) {
// //         nav("/profile");
// //         return;
// //       }
// //       setErr(err?.response?.data?.message || "Failed to load your orders");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => { load(); }, []); // eslint-disable-line

// //   const filtered = useMemo(() => {
// //     const s = (status || "").toLowerCase();
// //     const query = (q || "").trim().toLowerCase();

// //     return orders.filter((o) => {
// //       const matchesStatus = !s || o.status?.toLowerCase() === s;
// //       if (!matchesStatus) return false;

// //       if (!query) return true;
// //       const id = (o._id || "").toLowerCase();
// //       const anyItem = (o.items || []).some(
// //         (i) =>
// //           (i.title || "").toLowerCase().includes(query) ||
// //           (i.sku || "").toLowerCase().includes(query)
// //       );
// //       return id.includes(query) || anyItem;
// //     });
// //   }, [orders, status, q]);

// //   const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
// //   const safePage = Math.min(page, totalPages);
// //   const start = (safePage - 1) * pageSize;
// //   const pageItems = filtered.slice(start, start + pageSize);

// //   const toggle = (id) => setExpanded((m) => ({ ...m, [id]: !m[id] }));

// //   return (
// //     <div className="mo-wrap">
// //       <header className="mo-head">
// //         <div>
// //           <h2>My Orders</h2>
// //           <p className="muted">Track your purchases, status and details</p>
// //         </div>
// //         <div className="mo-head-actions">
// //           <button className="btn btn-ghost" onClick={load} aria-label="Refresh">
// //             ⟳ Refresh
// //           </button>
// //         </div>
// //       </header>

// //       {/* Filters */}
// //       <section className="mo-filters" aria-label="Order filters">
// //         <div className="mo-fgrid">
// //           <div className="mo-field">
// //             <label htmlFor="flt-status">Status</label>
// //             <select
// //               id="flt-status"
// //               value={status}
// //               onChange={(e) => { setStatus(e.target.value); setPage(1); }}
// //             >
// //               <option value="">All</option>
// //               {STATUSES.map((s) => (
// //                 <option key={s} value={s}>{s}</option>
// //               ))}
// //             </select>
// //           </div>

// //           <div className="mo-field mo-span-2">
// //             <label htmlFor="flt-search">Search</label>
// //             <input
// //               id="flt-search"
// //               type="text"
// //               value={q}
// //               onChange={(e) => { setQ(e.target.value); setPage(1); }}
// //               placeholder="Order ID / item title / SKU…"
// //             />
// //           </div>

// //           <div className="mo-field">
// //             <label htmlFor="flt-size">Rows / page</label>
// //             <select
// //               id="flt-size"
// //               value={pageSize}
// //               onChange={(e) => { setPageSize(Number(e.target.value) || 5); setPage(1); }}
// //             >
// //               {[5, 10, 20].map((n) => <option key={n} value={n}>{n}</option>)}
// //             </select>
// //           </div>

// //           <div className="mo-field mo-actions">
// //             <button className="btn" onClick={() => { setStatus(""); setQ(""); setPage(1); }}>
// //               Clear
// //             </button>
// //             <button className="btn btn-primary" onClick={load}>
// //               Apply
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Error */}
// //       {!!err && (
// //         <div className="mo-error" role="alert">
// //           <span>⚠️ {err}</span>
// //           <button className="btn btn-ghost" onClick={load}>Retry</button>
// //         </div>
// //       )}

// //       {/* Loading */}
// //       {loading && (
// //         <div className="mo-list">
// //           {[1,2].map((i) => <article key={i} className="mo-card shimmer" aria-hidden />)}
// //         </div>
// //       )}

// //       {/* Empty */}
// //       {!loading && !err && !filtered.length && (
// //         <div className="empty">
// //           <div className="empty-box">No matching orders.</div>
// //         </div>
// //       )}

// //       {/* List */}
// //       {!loading && !err && !!filtered.length && (
// //         <>
// //           <div className="mo-list">
// //             {pageItems.map((o) => {
// //               const shortId = (o._id || "").slice(-6);
// //               const created = o.createdAt ? new Date(o.createdAt).toLocaleString() : "";
// //               const itemsCount = o.items?.reduce((a, c) => a + (c.qty || 0), 0) || 0;

// //               return (
// //                 <article key={o._id} className="mo-card">
// //                   <div className="mo-row space">
// //                     <div className="mo-id">
// //                       <b>#{shortId || "------"}</b>
// //                       <span className={`badge ${o.status}`}>{o.status}</span>
// //                       {created && <span className="muted">• {created}</span>}
// //                     </div>

// //                     <div className="mo-total">
// //                       <span className="muted">Total</span>
// //                       <b>₹{nfmt(o.total)}</b>
// //                     </div>
// //                   </div>

// //                   <div className="mo-row wrap gap">
// //                     <div className="muted">
// //                       <b>{itemsCount}</b> item{o.items?.length > 1 ? "s" : ""}
// //                     </div>
// //                     <button
// //                       className="btn btn-ghost"
// //                       onClick={() => toggle(o._id)}
// //                       aria-expanded={!!expanded[o._id]}
// //                       aria-controls={`items-${o._id}`}
// //                     >
// //                       {expanded[o._id] ? "Hide items" : "View items"}
// //                     </button>
// //                   </div>

// //                   {expanded[o._id] && (
// //                     <div
// //                       id={`items-${o._id}`}
// //                       className="mo-items-wrap"
// //                       role="region"
// //                       aria-label={`Items for order ${shortId}`}
// //                     >
// //                       <table className="mo-items">
// //                         <thead>
// //                           <tr>
// //                             <th>Item</th>
// //                             <th>SKU</th>
// //                             <th className="right">Qty</th>
// //                             <th className="right">Price</th>
// //                             <th className="right">Subtotal</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {(o.items || []).map((i, idx) => (
// //                             <tr key={idx}>
// //                               <td className="ellipsis" title={i.title}>{i.title}</td>
// //                               <td className="mono">{i.sku}</td>
// //                               <td className="right">{i.qty}</td>
// //                               <td className="right">₹{nfmt(i.price)}</td>
// //                               <td className="right">₹{nfmt((i.price || 0) * (i.qty || 0))}</td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   )}
// //                 </article>
// //               );
// //             })}
// //           </div>

// //           {/* Pagination */}
// //           <nav className="pager" aria-label="Pagination">
// //             <button
// //               className="btn"
// //               onClick={() => setPage((p) => Math.max(1, p - 1))}
// //               disabled={safePage <= 1}
// //             >
// //               ← Prev
// //             </button>
// //             <div className="pager-info">
// //               Page <b>{safePage}</b> of <b>{totalPages}</b> • {filtered.length} order(s)
// //             </div>
// //             <button
// //               className="btn"
// //               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// //               disabled={safePage >= totalPages}
// //             >
// //               Next →
// //             </button>
// //           </nav>
// //         </>
// //       )}
// //     </div>
// //   );
// // }




// import React, { useEffect, useMemo, useState } from "react";
// import http from "../api/http.js";
// import { useNavigate } from "react-router-dom";
// import "./Orders.css";                    // Keep your existing CSS

// const STATUSES = ["pending", "processing", "shipped", "delivered", "cancelled"];

// const nfmt = (n) =>
//   typeof n === "number"
//     ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
//     : n;

// export default function Orders() {
//   const nav = useNavigate();

//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState("");

//   // Filters
//   const [status, setStatus] = useState("");
//   const [q, setQ] = useState("");
//   const [expanded, setExpanded] = useState({});
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(5);

//   const loadOrders = async () => {
//     try {
//       setLoading(true);
//       setErr("");
//       const { data } = await http.get("/api/orders/mine");
//       setOrders(Array.isArray(data) ? data : []);
//       setPage(1);
//     } catch (error) {
//       if (error?.response?.status === 401) {
//         nav("/profile");
//         return;
//       }
//       setErr(error?.response?.data?.message || "Failed to load orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadOrders();
//   }, []);

//   const filteredOrders = useMemo(() => {
//     const s = (status || "").toLowerCase();
//     const query = (q || "").trim().toLowerCase();

//     return orders.filter((order) => {
//       const matchesStatus = !s || order.status?.toLowerCase() === s;
//       if (!matchesStatus) return false;

//       if (!query) return true;

//       const orderId = (order._id || "").toLowerCase();
//       const matchesSearch = 
//         orderId.includes(query) ||
//         (order.items || []).some((item) =>
//           (item.title || "").toLowerCase().includes(query) ||
//           (item.sku || "").toLowerCase().includes(query)
//         );

//       return matchesSearch;
//     });
//   }, [orders, status, q]);

//   const totalPages = Math.max(1, Math.ceil(filteredOrders.length / pageSize));
//   const currentPage = Math.min(page, totalPages);
//   const startIndex = (currentPage - 1) * pageSize;
//   const paginatedOrders = filteredOrders.slice(startIndex, startIndex + pageSize);

//   const toggleExpand = (id) => {
//     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <div className="mo-wrap">
//       <header className="mo-head">
//         <div>
//           <h2>My Orders</h2>
//           <p className="muted">Track your purchases, status, and payment details</p>
//         </div>
//         <button className="btn btn-ghost" onClick={loadOrders}>
//           ⟳ Refresh
//         </button>
//       </header>

//       {/* Filters */}
//       <section className="mo-filters">
//         <div className="mo-fgrid">
//           <div className="mo-field">
//             <label>Status</label>
//             <select
//               value={status}
//               onChange={(e) => { setStatus(e.target.value); setPage(1); }}
//             >
//               <option value="">All Status</option>
//               {STATUSES.map((s) => (
//                 <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
//               ))}
//             </select>
//           </div>

//           <div className="mo-field mo-span-2">
//             <label>Search</label>
//             <input
//               type="text"
//               value={q}
//               onChange={(e) => { setQ(e.target.value); setPage(1); }}
//               placeholder="Order ID, Product name, SKU..."
//             />
//           </div>

//           <div className="mo-field">
//             <label>Rows per page</label>
//             <select
//               value={pageSize}
//               onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
//             >
//               {[5, 10, 20].map((n) => (
//                 <option key={n} value={n}>{n}</option>
//               ))}
//             </select>
//           </div>

//           <div className="mo-field mo-actions">
//             <button className="btn" onClick={() => { setStatus(""); setQ(""); setPage(1); }}>
//               Clear
//             </button>
//             <button className="btn btn-primary" onClick={loadOrders}>
//               Apply
//             </button>
//           </div>
//         </div>
//       </section>

//       {err && (
//         <div className="mo-error">
//           ⚠️ {err}
//           <button className="btn btn-ghost" onClick={loadOrders}>Retry</button>
//         </div>
//       )}

//       {loading && <div className="loading">Loading your orders...</div>}

//       {!loading && !err && filteredOrders.length === 0 && (
//         <div className="empty">
//           <p>No orders found.</p>
//         </div>
//       )}

//       {!loading && filteredOrders.length > 0 && (
//         <>
//           <div className="mo-list">
//             {paginatedOrders.map((order) => {
//               const shortId = order._id?.slice(-8) || "N/A";
//               const created = order.createdAt
//                 ? new Date(order.createdAt).toLocaleDateString("en-IN")
//                 : "";

//               const totalItems = order.items?.reduce((sum, i) => sum + (i.qty || 0), 0) || 0;

//               return (
//                 <article key={order._id} className="mo-card">
//                   <div className="mo-row space">
//                     <div>
//                       <b>#{shortId}</b>
//                       <span className={`badge ${order.status}`}>{order.status}</span>
//                       {created && <span className="muted"> • {created}</span>}
//                     </div>

//                     <div className="mo-total">
//                       <span className="muted">Total</span>
//                       <b>₹{nfmt(order.total)}</b>
//                       {order.discountApplied > 0 && (
//                         <span className="discount">(-₹{nfmt(order.discountApplied)})</span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="mo-row wrap gap">
//                     <div>
//                       <strong>{totalItems}</strong> item{totalItems > 1 ? "s" : ""} • 
//                       <span className="muted"> {order.paymentMethod?.toUpperCase() || "COD"}</span>
//                     </div>

//                     <button
//                       className="btn btn-ghost"
//                       onClick={() => toggleExpand(order._id)}
//                     >
//                       {expanded[order._id] ? "Hide Details" : "View Items"}
//                     </button>
//                   </div>

//                   {expanded[order._id] && (
//                     <div className="mo-items-wrap">
//                       <table className="mo-items">
//                         <thead>
//                           <tr>
//                             <th>Product</th>
//                             <th>SKU</th>
//                             <th>Size</th>
//                             <th className="right">Qty</th>
//                             <th className="right">Price</th>
//                             <th className="right">Subtotal</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {order.items?.map((item, idx) => (
//                             <tr key={idx}>
//                               <td>{item.title}</td>
//                               <td className="mono">{item.sku}</td>
//                               <td>{item.size}</td>
//                               <td className="right">{item.qty}</td>
//                               <td className="right">₹{nfmt(item.price)}</td>
//                               <td className="right">₹{nfmt(item.price * item.qty)}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>

//                       {order.agentAdvice && (
//                         <div className="agent-note">
//                           <strong>AI Suggestion:</strong> {order.agentAdvice}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </article>
//               );
//             })}
//           </div>

//           {/* Pagination */}
//           <nav className="pager">
//             <button
//               className="btn"
//               onClick={() => setPage((p) => Math.max(1, p - 1))}
//               disabled={currentPage <= 1}
//             >
//               ← Prev
//             </button>
//             <span>
//               Page <b>{currentPage}</b> of {totalPages}
//             </span>
//             <button
//               className="btn"
//               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//               disabled={currentPage >= totalPages}
//             >
//               Next →
//             </button>
//           </nav>
//         </>
//       )}
//     </div>
//   );
// }






import React, { useEffect, useMemo, useState } from "react";
import http from "../api/http.js";
import { useNavigate } from "react-router-dom";

const STATUSES = ["pending", "processing", "shipped", "delivered", "cancelled"];

const nfmt = (n) =>
  typeof n === "number"
    ? n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
    : n;

export default function Orders() {
  const nav = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // Filters
  const [status, setStatus] = useState("");
  const [q, setQ] = useState("");
  const [expanded, setExpanded] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const loadOrders = async () => {
    try {
      setLoading(true);
      setErr("");
      const { data } = await http.get("/api/orders/mine");
      setOrders(Array.isArray(data) ? data : []);
      setPage(1);
    } catch (error) {
      if (error?.response?.status === 401) {
        nav("/profile");
        return;
      }
      setErr(error?.response?.data?.message || "Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    const s = (status || "").toLowerCase();
    const query = (q || "").trim().toLowerCase();
    return orders.filter((order) => {
      const matchesStatus = !s || order.status?.toLowerCase() === s;
      if (!matchesStatus) return false;
      if (!query) return true;
      const orderId = (order._id || "").toLowerCase();
      const matchesSearch =
        orderId.includes(query) ||
        (order.items || []).some((item) =>
          (item.title || "").toLowerCase().includes(query) ||
          (item.sku || "").toLowerCase().includes(query)
        );
      return matchesSearch;
    });
  }, [orders, status, q]);

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + pageSize);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">My Orders</h2>
          <p className="text-gray-500 mt-1">
            Track your purchases, status, and payment details
          </p>
        </div>
        <button
          onClick={loadOrders}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
        >
          ⟳ Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Status Filter */}
          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                setPage(1);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            >
              <option value="">All Status</option>
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div className="lg:col-span-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
              }}
              placeholder="Order ID, Product name, SKU..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Page Size */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rows per page
            </label>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            >
              {[5, 10, 20].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-2 flex items-end gap-3">
            <button
              onClick={() => {
                setStatus("");
                setQ("");
                setPage(1);
              }}
              className="flex-1 px-5 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 font-medium transition-colors"
            >
              Clear
            </button>
            <button
              onClick={loadOrders}
              className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Error */}
      {err && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl flex items-center justify-between mb-6">
          <span>⚠️ {err}</span>
          <button
            onClick={loadOrders}
            className="text-red-600 hover:text-red-700 font-medium underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="text-center py-12 text-gray-500">Loading your orders...</div>
      )}

      {/* Empty State */}
      {!loading && !err && filteredOrders.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-100">
          <p className="text-xl text-gray-500">No orders found.</p>
        </div>
      )}

      {/* Orders List */}
      {!loading && filteredOrders.length > 0 && (
        <>
          <div className="space-y-6">
            {paginatedOrders.map((order) => {
              const shortId = order._id?.slice(-8) || "N/A";
              const created = order.createdAt
                ? new Date(order.createdAt).toLocaleDateString("en-IN")
                : "";
              const totalItems =
                order.items?.reduce((sum, i) => sum + (i.qty || 0), 0) || 0;

              return (
                <div
                  key={order._id}
                  className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Order Header */}
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="font-mono font-bold text-lg">#{shortId}</span>
                      </div>
                      <span
                        className={`px-4 py-1.5 text-sm font-medium rounded-full capitalize
                          ${
                            order.status === "delivered"
                              ? "bg-green-100 text-green-700"
                              : order.status === "cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                      >
                        {order.status}
                      </span>
                      {created && <span className="text-gray-500">• {created}</span>}
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ₹{nfmt(order.total)}
                      </p>
                      {order.discountApplied > 0 && (
                        <p className="text-sm text-green-600">
                          (-₹{nfmt(order.discountApplied)})
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Order Meta */}
                  <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4 bg-gray-50">
                    <div className="text-gray-700">
                      <strong>{totalItems}</strong> item{totalItems > 1 ? "s" : ""} •{" "}
                      <span className="font-medium">
                        {order.paymentMethod?.toUpperCase() || "COD"}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleExpand(order._id)}
                      className="px-6 py-2.5 text-sm font-medium border border-gray-300 hover:bg-gray-100 rounded-2xl transition-colors"
                    >
                      {expanded[order._id] ? "Hide Details" : "View Items"}
                    </button>
                  </div>

                  {/* Expanded Items Table */}
                  {expanded[order._id] && (
                    <div className="p-6 border-t border-gray-100">
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 font-medium text-gray-600">Product</th>
                              <th className="text-left py-3 font-medium text-gray-600">SKU</th>
                              <th className="text-left py-3 font-medium text-gray-600">Size</th>
                              <th className="text-right py-3 font-medium text-gray-600">Qty</th>
                              <th className="text-right py-3 font-medium text-gray-600">Price</th>
                              <th className="text-right py-3 font-medium text-gray-600">Subtotal</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {order.items?.map((item, idx) => (
                              <tr key={idx} className="hover:bg-gray-50">
                                <td className="py-4">{item.title}</td>
                                <td className="py-4 font-mono text-sm text-gray-500">{item.sku}</td>
                                <td className="py-4">{item.size}</td>
                                <td className="py-4 text-right">{item.qty}</td>
                                <td className="py-4 text-right">₹{nfmt(item.price)}</td>
                                <td className="py-4 text-right font-medium">
                                  ₹{nfmt(item.price * item.qty)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {order.agentAdvice && (
                        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                          <strong className="text-blue-700">AI Suggestion:</strong>{" "}
                          <span className="text-blue-800">{order.agentAdvice}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-10 px-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="px-6 py-3 border border-gray-300 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium flex items-center gap-2"
            >
              ← Prev
            </button>

            <span className="text-gray-600 font-medium">
              Page <b className="text-gray-900">{currentPage}</b> of {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="px-6 py-3 border border-gray-300 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium flex items-center gap-2"
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
}