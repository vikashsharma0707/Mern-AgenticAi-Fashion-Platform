// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchProducts } from '../../store/productSlice.js';
// // import { Link } from 'react-router-dom';

// // export default function AdminSearch(){
// //   const dispatch = useDispatch();
// //   const { list } = useSelector(s=>s.products);
// //   const [q, setQ] = useState('');
// //   const [brand, setBrand] = useState('');
// //   const [category, setCategory] = useState('');

// //   const run = () => dispatch(fetchProducts({ q, brand, category, limit: 200 }));

// //   useEffect(()=>{ run(); }, []); // initial

// //   return (
// //     <div>
// //       <div className="row gap">
// //         <input placeholder="Search text" value={q} onChange={e=>setQ(e.target.value)} />
// //         <input placeholder="Brand" value={brand} onChange={e=>setBrand(e.target.value)} />
// //         <input placeholder="Category" value={category} onChange={e=>setCategory(e.target.value)} />
// //         <button className="btn" onClick={run}>Search</button>
// //       </div>

// //       <table className="table" style={{marginTop:12}}>
// //         <thead>
// //           <tr><th>#</th><th>Title</th><th>Brand</th><th>Category</th><th>Price</th><th/></tr>
// //         </thead>
// //         <tbody>
// //           {list.map((p,i)=>(
// //             <tr key={p._id}>
// //               <td>{i+1}</td>
// //               <td>{p.title}</td>
// //               <td>{p.brand}</td>
// //               <td>{p.category}</td>
// //               <td>₹{p.price}</td>
// //               <td><Link className="btn" to={`/admin/products/${p._id}`}>Edit</Link></td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../../store/productSlice.js";
// import { Link } from "react-router-dom";
// import "./Search.css";

// export default function Search() {
//   const dispatch = useDispatch();
//   const { list, loading } = useSelector((s) => s.products);
//   const [q, setQ] = useState("");
//   const [brand, setBrand] = useState("");
//   const [category, setCategory] = useState("");

//   const run = () => dispatch(fetchProducts({ q, brand, category, limit: 200 }));

//   useEffect(() => { run(); /* initial */ }, []); // eslint-disable-line

//   const onEnter = (e) => { if (e.key === "Enter") run(); };
//   const onClear = () => { setQ(""); setBrand(""); setCategory(""); dispatch(fetchProducts({ limit: 200 })); };

//   return (
//     <div className="as-wrap">
//       <header className="as-head">
//         <h2>Search Products</h2>
//         <p className="muted">Filter by text, brand and category</p>
//       </header>

//       <div className="as-bar">
//         <div className="as-field">
//           <label>Search</label>
//           <input
//             placeholder="e.g. shirt, cotton"
//             value={q}
//             onChange={(e) => setQ(e.target.value)}
//             onKeyDown={onEnter}
//           />
//         </div>

//         <div className="as-field">
//           <label>Brand</label>
//           <input
//             placeholder="e.g. Adidas"
//             value={brand}
//             onChange={(e) => setBrand(e.target.value)}
//             onKeyDown={onEnter}
//           />
//         </div>

//         <div className="as-field">
//           <label>Category</label>
//           <input
//             placeholder="e.g. mens"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             onKeyDown={onEnter}
//           />
//         </div>

//         <div className="as-actions">
//           <button className="btn btn-dark" onClick={run} disabled={loading}>
//             {loading ? "Searching..." : "Search"}
//           </button>
//           <button className="btn btn-light" onClick={onClear} disabled={loading}>
//             Clear
//           </button>
//         </div>
//       </div>

//       <div className="as-summary">
//         <span className="chip">{list.length}</span>
//         <span className="muted">result(s)</span>
//       </div>

//       <div className="table-wrap">
//         <table className="table">
//           <thead>
//             <tr>
//               <th style={{width: 60}}>#</th>
//               <th>Title</th>
//               <th>Brand</th>
//               <th>Category</th>
//               <th className="right">Price</th>
//               <th className="right">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {list.map((p, i) => (
//               <tr key={p._id}>
//                 <td className="mono">{i + 1}</td>
//                 <td className="ellipsis" title={p.title}>{p.title}</td>
//                 <td className="ellipsis" title={p.brand}>{p.brand}</td>
//                 <td className="ellipsis" title={p.category}>{p.category}</td>
//                 <td className="right">₹{p.price}</td>
//                 <td className="right">
//                   <Link className="btn btn-light" to={`/admin/products/${p._id}`}>Edit</Link>
//                 </td>
//               </tr>
//             ))}
//             {!list.length && !loading && (
//               <tr>
//                 <td colSpan="6" className="center muted">No products found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



// frontend/src/pages/admin/Search.jsx
// Business logic 100% untouched — only UI rebuilt in dark theme
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice.js";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Edit3, Package, Tag, Layers, Loader2, ArrowUpRight } from "lucide-react";

function GlassCard({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-2xl ${className}`}
      style={{ background: "rgba(15,23,42,0.75)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(16px)", ...style }}>
      {children}
    </div>
  );
}

const inputCls  = "w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all placeholder-slate-700 focus:ring-1 focus:ring-violet-500";
const inputStyle = { background: "rgba(2,6,23,0.7)", border: "1px solid rgba(255,255,255,0.08)" };

export default function AdminSearch() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(s => s.products);
  const [q, setQ]               = useState("");
  const [brand, setBrand]       = useState("");
  const [category, setCategory] = useState("");

  const run    = () => dispatch(fetchProducts({ q, brand, category, limit: 200 }));
  const onEnter = (e) => { if (e.key === "Enter") run(); };
  const onClear = () => { setQ(""); setBrand(""); setCategory(""); dispatch(fetchProducts({ limit: 200 })); };

  useEffect(() => { run(); }, []); // eslint-disable-line

  return (
    <div className="w-full relative" style={{ background: "#020617", minHeight: "100%", fontFamily: "'Inter',system-ui,sans-serif" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle,#06B6D4,transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle,#8B5CF6,transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Search size={22} className="text-violet-400" /> Search Products
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">Filter catalog by keyword, brand and category</p>
        </motion.div>

        {/* SEARCH BAR */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          <GlassCard className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Keyword</label>
                <div className="relative">
                  <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
                  <input className={`${inputCls} pl-9`} style={inputStyle}
                    placeholder="e.g. shirt, cotton" value={q}
                    onChange={e => setQ(e.target.value)} onKeyDown={onEnter} />
                  {q && (
                    <button onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400">
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* Brand */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Brand</label>
                <div className="relative">
                  <Tag size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
                  <input className={`${inputCls} pl-9`} style={inputStyle}
                    placeholder="e.g. Adidas" value={brand}
                    onChange={e => setBrand(e.target.value)} onKeyDown={onEnter} />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Category</label>
                <div className="relative">
                  <Layers size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
                  <input className={`${inputCls} pl-9`} style={inputStyle}
                    placeholder="e.g. mens" value={category}
                    onChange={e => setCategory(e.target.value)} onKeyDown={onEnter} />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-4 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)", color: "#A78BFA" }}>
                  {list.length}
                </div>
                <span className="text-xs text-slate-500">result{list.length !== 1 ? "s" : ""}</span>
                {loading && <Loader2 size={13} className="text-violet-400 animate-spin ml-1" />}
              </div>
              <div className="flex gap-2">
                <button onClick={onClear} disabled={loading}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all disabled:opacity-40"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748B" }}>
                  Clear
                </button>
                <button onClick={run} disabled={loading}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105 disabled:opacity-40"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", color: "#fff", boxShadow: "0 0 14px rgba(124,58,237,0.3)" }}>
                  <Search size={11} /> {loading ? "Searching…" : "Search"}
                </button>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* RESULTS TABLE */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
          <GlassCard className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    {["#", "Title", "Brand", "Category", "Price", "Actions"].map((h, i) => (
                      <th key={h}
                        className={`py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider ${i >= 4 ? "text-right" : i === 0 ? "text-center w-12" : "text-left"}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {list.map((p, i) => (
                      <motion.tr key={p._id}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.02 }}
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                        <td className="py-3 px-5 text-center font-mono text-xs text-slate-600">{i + 1}</td>
                        <td className="py-3 px-5 max-w-[220px] truncate font-medium text-slate-200" title={p.title}>{p.title}</td>
                        <td className="py-3 px-5 text-slate-400 truncate max-w-[130px]" title={p.brand}>{p.brand}</td>
                        <td className="py-3 px-5">
                          <span className="px-2 py-0.5 rounded-full text-xs"
                            style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", color: "#22D3EE" }}>
                            {p.category}
                          </span>
                        </td>
                        <td className="py-3 px-5 text-right font-bold text-white">₹{p.price}</td>
                        <td className="py-3 px-5 text-right">
                          <Link to={`/admin/products/${p._id}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)", color: "#A78BFA" }}>
                            <Edit3 size={11} /> Edit
                          </Link>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>

                  {!list.length && !loading && (
                    <tr>
                      <td colSpan="6" className="py-14 text-center">
                        <Package size={28} className="mx-auto text-slate-700 mb-3" />
                        <div className="text-sm text-slate-600">No products found</div>
                        <div className="text-xs text-slate-700 mt-1">Try adjusting your search filters</div>
                      </td>
                    </tr>
                  )}

                  {loading && !list.length && (
                    <tr>
                      <td colSpan="6" className="py-14 text-center">
                        <Loader2 size={24} className="mx-auto text-violet-500 animate-spin mb-2" />
                        <div className="text-sm text-slate-600">Searching…</div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}