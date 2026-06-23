


// // // // import React, { useState } from "react";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { visual } from "../store/aiSlice.js";
// // // // import ProductCard from "./ProductCard.jsx";
// // // // import "./VisualSearch.css"; // नया CSS

// // // // export default function VisualSearch({ defaultCategory = "women" }) {
// // // //   const [cat, setCat] = useState(defaultCategory);
// // // //   const [file, setFile] = useState(null);
// // // //   const dispatch = useDispatch();
// // // //   const visualState = useSelector((s) => s.ai.visual);

// // // //   // Backend may return either an array of products OR { items: [...] }
// // // //   const products = Array.isArray(visualState)
// // // //     ? visualState
// // // //     : visualState?.items || [];

// // // //   const onFind = async () => {
// // // //     await dispatch(visual(file ? { category: cat, file } : cat));
// // // //   };

// // // //   return (
// // // //     <div className="panel visual-panel">
// // // //       <h2 className="vs-title">🔎 Visual Search</h2>
// // // //       <p className="vs-sub">Upload an image or pick a category to find similar products</p>

// // // //       <div className="vs-controls">
// // // //         <select
// // // //           className="vs-select"
// // // //           value={cat}
// // // //           onChange={(e) => setCat(e.target.value)}
// // // //         >
// // // //           <option value="men">Men</option>
// // // //           <option value="women">Women</option>
// // // //           <option value="kids">Kids</option>
// // // //           <option value="">All</option>
// // // //         </select>

// // // //         <label className="vs-upload">
// // // //           <input
// // // //             type="file"
// // // //             accept="image/*"
// // // //             onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // //           />
// // // //           {file ? file.name : "Choose Image"}
// // // //         </label>

// // // //         <button className="btn vs-btn" onClick={onFind}>
// // // //           Find Similar
// // // //         </button>
// // // //       </div>

// // // //       <div className="grid vs-results">
// // // //         {products.map((p) => (
// // // //           <ProductCard key={p._id} p={p} />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // import React, { useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { visual } from "../store/aiSlice.js";
// // // import ProductCard from "./ProductCard.jsx";
// // // import "./VisualSearch.css";

// // // export default function VisualSearch({ defaultCategory = "women" }) {
// // //   const [cat, setCat] = useState(defaultCategory);
// // //   const [file, setFile] = useState(null);
// // //   const [preview, setPreview] = useState(null);
// // //   const dispatch = useDispatch();
// // //   const visualState = useSelector((s) => s.ai.visual || []);
// // //   const loading = useSelector((s) => s.ai.loading?.visual || false);

// // //   const products = Array.isArray(visualState) ? visualState : visualState?.items || [];

// // //   const onFileChange = (e) => {
// // //     const selectedFile = e.target.files?.[0];
// // //     if (selectedFile) {
// // //       setFile(selectedFile);
// // //       setPreview(URL.createObjectURL(selectedFile));
// // //     }
// // //   };

// // //   const onFind = async () => {
// // //     if (!file && !cat) {
// // //       alert("Please upload an image or select category");
// // //       return;
// // //     }
// // //     await dispatch(visual(file ? { category: cat, file } : cat));
// // //   };

// // //   return (
// // //     <div className="panel visual-panel">
// // //       <h2 className="vs-title">🔎 Visual Search</h2>
// // //       <p className="vs-sub">Upload photo or choose category to find similar fashion</p>

// // //       {preview && (
// // //         <div className="image-preview">
// // //           <img src={preview} alt="Preview" />
// // //         </div>
// // //       )}

// // //       <div className="vs-controls">
// // //         <select
// // //           className="vs-select"
// // //           value={cat}
// // //           onChange={(e) => setCat(e.target.value)}
// // //         >
// // //           <option value="men">Men</option>
// // //           <option value="women">Women</option>
// // //           <option value="kids">Kids</option>
// // //           <option value="">All Categories</option>
// // //         </select>

// // //         <label className="vs-upload">
// // //           <input
// // //             type="file"
// // //             accept="image/*"
// // //             onChange={onFileChange}
// // //           />
// // //           {file ? file.name.substring(0, 25) + "..." : "Choose Image"}
// // //         </label>

// // //         <button className="btn vs-btn" onClick={onFind} disabled={loading}>
// // //           {loading ? "Searching..." : "Find Similar Products"}
// // //         </button>
// // //       </div>

// // //       {products.length > 0 && (
// // //         <div className="vs-results">
// // //           <h3>Similar Products ({products.length})</h3>
// // //           <div className="grid">
// // //             {products.map((p) => (
// // //               <ProductCard key={p._id} p={p} />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {products.length === 0 && !loading && (
// // //         <p className="no-results">No similar products found. Try another image.</p>
// // //       )}
// // //     </div>
// // //   );
// // // }





// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { visual } from "../store/aiSlice.js";
// // import ProductCard from "./ProductCard.jsx";

// // export default function VisualSearch({ defaultCategory = "women" }) {
// //   const [cat, setCat] = useState(defaultCategory);
// //   const [file, setFile] = useState(null);
// //   const [preview, setPreview] = useState(null);
// //   const [searched, setSearched] = useState(false);
// //   const dispatch = useDispatch();
// //   const visualState = useSelector((s) => s.ai.visual || []);
// //   const loading = useSelector((s) => s.ai.loading?.visual || false);

// //   const products = Array.isArray(visualState) ? visualState : visualState?.items || [];

// //   const onFileChange = (e) => {
// //     const selectedFile = e.target.files?.[0];
// //     if (selectedFile) {
// //       setFile(selectedFile);
// //       setPreview(URL.createObjectURL(selectedFile));
// //     }
// //   };

// //   const onFind = async () => {
// //     if (!file && !cat) {
// //       alert("Please upload an image or select a category");
// //       return;
// //     }
// //     setSearched(true);
// //     await dispatch(visual({ category: cat, file }));
// //   };

// //   return (
// //     <div className="bg-white border border-[#15171c]/10 rounded-sm p-7">
// //       <span className="block text-[11px] font-bold tracking-[0.3em] uppercase text-[#AD8A4D] mb-1.5">
// //         AI Powered
// //       </span>
// //       <h2 className="text-2xl font-bold tracking-tight text-[#15171c] mb-1.5">Visual Search</h2>
// //       <p className="text-sm text-[#15171c]/60 mb-6">
// //         Upload a photo or pick a category to find similar fashion
// //       </p>

// //       <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px_auto] gap-3 items-stretch">
// //         {/* Upload */}
// //         <label
// //           className="flex items-center gap-2.5 border-[1.5px] border-dashed border-[#15171c]/25 rounded-sm px-3.5 min-h-[48px] cursor-pointer
// //             transition-colors duration-200 hover:border-[#AD8A4D] hover:bg-[#AD8A4D]/5
// //             focus-within:outline focus-within:outline-2 focus-within:outline-[#AD8A4D] focus-within:outline-offset-1"
// //         >
// //           <input type="file" accept="image/*" onChange={onFileChange} className="hidden" />
// //           {preview ? (
// //             <img src={preview} alt="Your upload" className="w-8 h-8 rounded-sm object-cover flex-shrink-0" />
// //           ) : (
// //             <span className="text-lg">📷</span>
// //           )}
// //           <span className="text-sm text-[#15171c] whitespace-nowrap overflow-hidden text-ellipsis">
// //             {file ? file.name.slice(0, 22) + (file.name.length > 22 ? "…" : "") : "Choose an image"}
// //           </span>
// //         </label>

// //         {/* Category */}
// //         <select
// //           className="border-[1.5px] border-[#15171c]/15 rounded-sm px-3 text-sm text-[#15171c] bg-white cursor-pointer
// //             focus:outline focus:outline-2 focus:outline-[#AD8A4D] focus:outline-offset-1"
// //           value={cat}
// //           onChange={(e) => setCat(e.target.value)}
// //         >
// //           <option value="men">Men</option>
// //           <option value="women">Women</option>
// //           <option value="kids">Kids</option>
// //           <option value="">All Categories</option>
// //         </select>

// //         {/* Submit */}
// //         <button
// //           onClick={onFind}
// //           disabled={loading}
// //           className="bg-[#15171c] text-white rounded-sm px-6 text-sm font-semibold tracking-wide whitespace-nowrap
// //             flex items-center justify-center gap-2
// //             transition-all duration-200 enabled:hover:bg-[#2a2d36] enabled:active:scale-[0.97]
// //             disabled:bg-[#15171c]/30 disabled:cursor-not-allowed"
// //         >
// //           {loading ? (
// //             <>
// //               <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
// //               Searching…
// //             </>
// //           ) : (
// //             "Find Similar Products"
// //           )}
// //         </button>
// //       </div>

// //       {/* Loading skeleton */}
// //       {loading && (
// //         <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 mt-6">
// //           {Array.from({ length: 4 }).map((_, i) => (
// //             <div key={i} className="aspect-[3/4] rounded-sm bg-[#15171c]/10 animate-pulse" />
// //           ))}
// //         </div>
// //       )}

// //       {/* Results */}
// //       {!loading && products.length > 0 && (
// //         <div className="mt-7">
// //           <h3 className="text-[15px] font-semibold text-[#15171c] mb-3.5">
// //             Similar Products ({products.length})
// //           </h3>
// //           <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
// //             {products.map((p) => (
// //               // FIX: ProductCard expects a `product` prop, not `p` — the
// //               // previous `p={p}` meant ProductCard rendered with no data
// //               // at all even when results came back fine.
// //               <ProductCard key={p._id} product={p} />
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Empty state — only after an actual search, not on first load */}
// //       {!loading && searched && products.length === 0 && (
// //         <div className="text-center py-10 px-5 text-[#15171c]/55">
// //           <span className="block text-2xl mb-2">🔍</span>
// //           <p>No similar products found. Try a clearer photo or a different category.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }




// // frontend/src/components/VisualSearch.jsx
// // Business logic 100% untouched — premium UI rebuild
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { visual } from "../store/aiSlice.js";
// import ProductCard from "./ProductCard.jsx";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Camera, Sparkles, Search, Upload, X,
//   ChevronDown, ImageOff, Layers,
// } from "lucide-react";

// const CATEGORIES = [
//   { value: "men",   label: "Men"            },
//   { value: "women", label: "Women"          },
//   { value: "kids",  label: "Kids"           },
//   { value: "",      label: "All Categories" },
// ];

// export default function VisualSearch({ defaultCategory = "women" }) {
//   // ── STATE (untouched logic) ──────────────────────────────────────────────
//   const [cat, setCat]         = useState(defaultCategory);
//   const [file, setFile]       = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [searched, setSearched] = useState(false);
//   const dispatch    = useDispatch();
//   const visualState = useSelector(s => s.ai.visual || []);
//   const loading     = useSelector(s => s.ai.loading?.visual || false);
//   const products    = Array.isArray(visualState) ? visualState : visualState?.items || [];

//   const onFileChange = (e) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setPreview(URL.createObjectURL(selectedFile));
//     }
//   };

//   const onFind = async () => {
//     if (!file && !cat) { alert("Please upload an image or select a category"); return; }
//     setSearched(true);
//     await dispatch(visual({ category: cat, file }));
//   };

//   const clearFile = (e) => {
//     e.stopPropagation();
//     setFile(null);
//     setPreview(null);
//   };

//   return (
//     <div className="w-full" style={{ fontFamily: "'Inter',system-ui,sans-serif" }}>

//       {/* ── HERO CARD ──────────────────────────────────────────────────── */}
//       <div className="relative overflow-hidden rounded-2xl"
//         style={{ background: "linear-gradient(135deg,#09090F 0%,#0F0A1E 50%,#090D1A 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>

//         {/* Aurora glows */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-20"
//             style={{ background: "radial-gradient(circle,#8B5CF6,transparent 70%)", filter: "blur(70px)" }} />
//           <div className="absolute bottom-[-20%] right-[-5%] w-[350px] h-[350px] rounded-full opacity-15"
//             style={{ background: "radial-gradient(circle,#06B6D4,transparent 70%)", filter: "blur(70px)" }} />
//           <div className="absolute inset-0 opacity-[0.025]"
//             style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
//         </div>

//         <div className="relative z-10 px-6 sm:px-10 py-10">

//           {/* Badge + heading */}
//           <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
//               style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }}>
//               <Sparkles size={12} className="text-violet-400" />
//               <span className="text-xs font-bold uppercase tracking-widest text-violet-400">AI Powered</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
//               Visual Search
//             </h2>
//             <p className="text-sm text-slate-400 max-w-md">
//               Upload a photo or pick a category — our AI finds visually similar fashion instantly.
//             </p>
//           </motion.div>

//           {/* ── SEARCH CONTROLS ───────────────────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
//             className="mt-8 flex flex-col sm:flex-row gap-3">

//             {/* Upload zone */}
//             <label className="relative flex-1 flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer group transition-all duration-200"
//               style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}
//               onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,92,246,0.45)"; e.currentTarget.style.background = "rgba(139,92,246,0.06)"; }}
//               onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}>
//               <input type="file" accept="image/*" onChange={onFileChange} className="hidden" />

//               {preview ? (
//                 <>
//                   <img src={preview} alt="upload" className="w-10 h-10 rounded-lg object-cover shrink-0"
//                     style={{ border: "1px solid rgba(139,92,246,0.4)" }} />
//                   <div className="flex-1 min-w-0">
//                     <div className="text-sm font-medium text-white truncate">
//                       {file.name.length > 28 ? file.name.slice(0, 28) + "…" : file.name}
//                     </div>
//                     <div className="text-xs text-slate-500 mt-0.5">{Math.round(file.size / 1024)} KB · Ready to search</div>
//                   </div>
//                   <button onClick={clearFile}
//                     className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110"
//                     style={{ background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171" }}>
//                     <X size={11} />
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-105"
//                     style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}>
//                     <Camera size={18} className="text-violet-400" />
//                   </div>
//                   <div>
//                     <div className="text-sm font-medium text-slate-300">Upload an image</div>
//                     <div className="text-xs text-slate-600 mt-0.5">JPG, PNG, WEBP · Max 10 MB</div>
//                   </div>
//                   <Upload size={14} className="ml-auto text-slate-700 group-hover:text-violet-500 transition-colors" />
//                 </>
//               )}
//             </label>

//             {/* Category select */}
//             <div className="relative shrink-0">
//               <Layers size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
//               <select value={cat} onChange={e => setCat(e.target.value)}
//                 className="appearance-none h-full w-full sm:w-44 rounded-xl pl-9 pr-8 py-3 text-sm font-medium text-white outline-none cursor-pointer transition-all focus:ring-1 focus:ring-violet-500"
//                 style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
//                 {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
//               </select>
//               <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
//             </div>

//             {/* Search button */}
//             <button onClick={onFind} disabled={loading}
//               className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 disabled:opacity-50 shrink-0"
//               style={{ background: loading ? "rgba(124,58,237,0.4)" : "linear-gradient(135deg,#7C3AED,#4F46E5)", color: "#fff", boxShadow: loading ? "none" : "0 0 24px rgba(124,58,237,0.45)" }}
//               onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = "scale(1.03)"; }}
//               onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}>
//               {loading ? (
//                 <>
//                   <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
//                   Searching…
//                 </>
//               ) : (
//                 <>
//                   <Search size={15} /> Find Similar
//                 </>
//               )}
//             </button>
//           </motion.div>

//           {/* Hint row */}
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
//             className="flex flex-wrap items-center gap-4 mt-5">
//             {["Clear product shot works best", "Fashion category narrows results", "Supports any style or colour"].map(tip => (
//               <div key={tip} className="flex items-center gap-1.5 text-xs text-slate-600">
//                 <span className="w-1 h-1 rounded-full bg-violet-600 inline-block" />
//                 {tip}
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* ── LOADING SKELETONS ───────────────────────────────────────────── */}
//       <AnimatePresence>
//         {loading && (
//           <motion.div
//             key="skeletons"
//             initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
//             className="mt-8">
//             <div className="flex items-center gap-3 mb-5">
//               <div className="w-4 h-4 rounded-full border-2 border-violet-500/40 border-t-violet-400 animate-spin" />
//               <span className="text-sm font-semibold text-violet-300">AI is scanning the catalog…</span>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <div key={i} className="rounded-2xl overflow-hidden animate-pulse"
//                   style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(255,255,255,0.05)", animationDelay: `${i * 0.08}s` }}>
//                   <div className="aspect-[3/4]" style={{ background: "rgba(139,92,246,0.07)" }} />
//                   <div className="p-3 space-y-2">
//                     <div className="h-3 rounded-full w-3/4" style={{ background: "rgba(255,255,255,0.05)" }} />
//                     <div className="h-3 rounded-full w-1/2" style={{ background: "rgba(255,255,255,0.03)" }} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ── RESULTS ────────────────────────────────────────────────────── */}
//       <AnimatePresence>
//         {!loading && products.length > 0 && (
//           <motion.div
//             key="results"
//             initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
//             className="mt-8">
//             {/* Results header */}
//             <div className="flex items-center justify-between mb-5">
//               <div className="flex items-center gap-3">
//                 <Sparkles size={15} className="text-violet-400" />
//                 <h3 className="text-base font-bold text-white">Similar Products</h3>
//                 <span className="px-2.5 py-0.5 rounded-full text-xs font-bold"
//                   style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)", color: "#A78BFA" }}>
//                   {products.length} found
//                 </span>
//               </div>
//               <div className="h-px flex-1 mx-5"
//                 style={{ background: "linear-gradient(90deg,rgba(139,92,246,0.3),transparent)" }} />
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//               {products.map((p, i) => (
//                 <motion.div key={p._id}
//                   initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.04 }}>
//                   <ProductCard product={p} />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ── EMPTY STATE ─────────────────────────────────────────────────── */}
//       <AnimatePresence>
//         {!loading && searched && products.length === 0 && (
//           <motion.div
//             key="empty"
//             initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
//             className="mt-8 flex flex-col items-center justify-center py-16 rounded-2xl text-center"
//             style={{ background: "rgba(15,23,42,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>
//             <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
//               style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}>
//               <ImageOff size={26} className="text-slate-600" />
//             </div>
//             <h4 className="text-base font-semibold text-slate-400 mb-2">No similar products found</h4>
//             <p className="text-sm text-slate-600 max-w-xs">
//               Try a clearer product photo, or switch to a different category for better results.
//             </p>
//             <button onClick={() => { setFile(null); setPreview(null); setSearched(false); }}
//               className="mt-5 px-5 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
//               style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)", color: "#A78BFA" }}>
//               Try Again
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// }






// frontend/src/components/VisualSearch.jsx
// Business logic 100% untouched — restyled to match the site's cream/gold palette
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { visual } from "../store/aiSlice.js";
import ProductCard from "./ProductCard.jsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera, Sparkles, Search, Upload, X,
  ChevronDown, ImageOff, Layers,
} from "lucide-react";

const INK = "#15171c";
const SAND = "#F7F4EE";
const GOLD = "#AD8A4D";
const RUST = "#8C3A2E";

const CATEGORIES = [
  { value: "men",   label: "Men"            },
  { value: "women", label: "Women"          },
  { value: "kids",  label: "Kids"           },
  { value: "",      label: "All Categories" },
];

export default function VisualSearch({ defaultCategory = "women" }) {
  // ── STATE (untouched logic) ──────────────────────────────────────────────
  const [cat, setCat]         = useState(defaultCategory);
  const [file, setFile]       = useState(null);
  const [preview, setPreview] = useState(null);
  const [searched, setSearched] = useState(false);
  const dispatch    = useDispatch();
  const visualState = useSelector(s => s.ai.visual || []);
  const loading     = useSelector(s => s.ai.loading?.visual || false);
  const products    = Array.isArray(visualState) ? visualState : visualState?.items || [];

  const onFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const onFind = async () => {
    if (!file && !cat) { alert("Please upload an image or select a category"); return; }
    setSearched(true);
    await dispatch(visual({ category: cat, file }));
  };

  const clearFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="w-full" style={{ fontFamily: "'Inter',system-ui,sans-serif" }}>

      {/* ── HERO CARD ──────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${SAND} 0%, #F1ECE1 55%, #EFE7D8 100%)`, border: `1px solid ${INK}1A` }}>

        {/* Soft warm glows instead of neon aurora */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-40"
            style={{ background: `radial-gradient(circle, ${GOLD}, transparent 70%)`, filter: "blur(80px)" }} />
          <div className="absolute bottom-[-20%] right-[-5%] w-[350px] h-[350px] rounded-full opacity-25"
            style={{ background: `radial-gradient(circle, ${RUST}, transparent 70%)`, filter: "blur(80px)" }} />
          <div className="absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage: `linear-gradient(${INK} 1px,transparent 1px),linear-gradient(90deg,${INK} 1px,transparent 1px)`, backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative z-10 px-6 sm:px-10 py-10">

          {/* Badge + heading */}
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style={{ background: `${GOLD}1F`, border: `1px solid ${GOLD}55` }}>
              <Sparkles size={12} style={{ color: GOLD }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RUST }}>AI Powered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2" style={{ color: INK }}>
              Visual Search
            </h2>
            <p className="text-sm max-w-md" style={{ color: `${INK}99` }}>
              Upload a photo or pick a category — our AI finds visually similar fashion instantly.
            </p>
          </motion.div>

          {/* ── SEARCH CONTROLS ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-8 flex flex-col sm:flex-row gap-3">

            {/* Upload zone */}
            <label className="relative flex-1 flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer group transition-all duration-200"
              style={{ background: "#ffffff", border: `1px solid ${INK}1A` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${GOLD}80`; e.currentTarget.style.background = `${GOLD}0D`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${INK}1A`; e.currentTarget.style.background = "#ffffff"; }}>
              <input type="file" accept="image/*" onChange={onFileChange} className="hidden" />

              {preview ? (
                <>
                  <img src={preview} alt="upload" className="w-10 h-10 rounded-lg object-cover shrink-0"
                    style={{ border: `1px solid ${GOLD}70` }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate" style={{ color: INK }}>
                      {file.name.length > 28 ? file.name.slice(0, 28) + "…" : file.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: `${INK}66` }}>{Math.round(file.size / 1024)} KB · Ready to search</div>
                  </div>
                  <button onClick={clearFile}
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110"
                    style={{ background: `${RUST}1A`, border: `1px solid ${RUST}40`, color: RUST }}>
                    <X size={11} />
                  </button>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-105"
                    style={{ background: `${GOLD}1F`, border: `1px solid ${GOLD}40` }}>
                    <Camera size={18} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: INK }}>Upload an image</div>
                    <div className="text-xs mt-0.5" style={{ color: `${INK}55` }}>JPG, PNG, WEBP · Max 10 MB</div>
                  </div>
                  <Upload size={14} className="ml-auto transition-colors" style={{ color: `${INK}40` }} />
                </>
              )}
            </label>

            {/* Category select */}
            <div className="relative shrink-0">
              <Layers size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: `${INK}55` }} />
              <select value={cat} onChange={e => setCat(e.target.value)}
                className="appearance-none h-full w-full sm:w-44 rounded-xl pl-9 pr-8 py-3 text-sm font-medium outline-none cursor-pointer transition-all"
                style={{ background: "#ffffff", border: `1px solid ${INK}1A`, color: INK }}
                onFocus={e => { e.currentTarget.style.borderColor = GOLD; }}
                onBlur={e => { e.currentTarget.style.borderColor = `${INK}1A`; }}>
                {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
              <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: `${INK}55` }} />
            </div>

            {/* Search button */}
            <button onClick={onFind} disabled={loading}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 disabled:opacity-50 shrink-0"
              style={{
                background: loading ? `${RUST}66` : `linear-gradient(135deg, ${RUST}, #b5503f)`,
                color: "#fff",
                boxShadow: loading ? "none" : `0 8px 24px ${RUST}40`,
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = "scale(1.03)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}>
              {loading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                  Searching…
                </>
              ) : (
                <>
                  <Search size={15} /> Find Similar
                </>
              )}
            </button>
          </motion.div>

          {/* Hint row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-5">
            {["Clear product shot works best", "Fashion category narrows results", "Supports any style or colour"].map(tip => (
              <div key={tip} className="flex items-center gap-1.5 text-xs" style={{ color: `${INK}66` }}>
                <span className="w-1 h-1 rounded-full inline-block" style={{ background: GOLD }} />
                {tip}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── LOADING SKELETONS ───────────────────────────────────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="skeletons"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-4 h-4 rounded-full border-2 animate-spin" style={{ borderColor: `${GOLD}40`, borderTopColor: GOLD }} />
              <span className="text-sm font-semibold" style={{ color: RUST }}>AI is scanning the catalog…</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden animate-pulse"
                  style={{ background: "#ffffff", border: `1px solid ${INK}0F`, animationDelay: `${i * 0.08}s` }}>
                  <div className="aspect-[3/4]" style={{ background: `${GOLD}14` }} />
                  <div className="p-3 space-y-2">
                    <div className="h-3 rounded-full w-3/4" style={{ background: `${INK}0D` }} />
                    <div className="h-3 rounded-full w-1/2" style={{ background: `${INK}08` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── RESULTS ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!loading && products.length > 0 && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-8">
            {/* Results header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <Sparkles size={15} style={{ color: GOLD }} />
                <h3 className="text-base font-bold" style={{ color: INK }}>Similar Products</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: `${GOLD}1F`, border: `1px solid ${GOLD}40`, color: RUST }}>
                  {products.length} found
                </span>
              </div>
              <div className="h-px flex-1 mx-5"
                style={{ background: `linear-gradient(90deg, ${GOLD}55, transparent)` }} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map((p, i) => (
                <motion.div key={p._id}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}>
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── EMPTY STATE ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!loading && searched && products.length === 0 && (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="mt-8 flex flex-col items-center justify-center py-16 rounded-2xl text-center"
            style={{ background: "#ffffff", border: `1px solid ${INK}0F` }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: `${GOLD}14`, border: `1px solid ${GOLD}30` }}>
              <ImageOff size={26} style={{ color: `${INK}55` }} />
            </div>
            <h4 className="text-base font-semibold mb-2" style={{ color: `${INK}99` }}>No similar products found</h4>
            <p className="text-sm max-w-xs" style={{ color: `${INK}66` }}>
              Try a clearer product photo, or switch to a different category for better results.
            </p>
            <button onClick={() => { setFile(null); setPreview(null); setSearched(false); }}
              className="mt-5 px-5 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
              style={{ background: `${GOLD}1F`, border: `1px solid ${GOLD}40`, color: RUST }}>
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}