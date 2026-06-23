// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import http from '../../api/http.js';
// // import { ENDPOINTS } from '../../api/endpoints.js';

// // export default function InsertSimple(){
// //   const [input, setInput] = useState({
// //     title: '',
// //     brand: '',
// //     description: '',
// //     category: 'mens',
// //     price: ''
// //   });
// //   const [files, setFiles] = useState([]);
// //   const nav = useNavigate();

// //   const handleInput = (e) => {
// //     const { name, value } = e.target;
// //     setInput(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleImage = (e) => {
// //     setFiles([...e.target.files]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const { title, brand, category, price } = input;
// //     if (!title || !brand || !category || !(Number(price) > 0)) {
// //       alert('Title/Brand/Category/Price required');
// //       return;
// //     }

// //     const fd = new FormData();
// //     Object.entries(input).forEach(([k, v]) => fd.append(k, v));
// //     // variants optional; keeping empty
// //     fd.append('variants', JSON.stringify([]));
// //     files.forEach(f => fd.append('images', f));

// //     try {
// //       await http.post(ENDPOINTS.products.base, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
// //       alert('Data saved');
// //       nav('/admin/products');
// //     } catch (err) {
// //       alert(err?.response?.data?.message || 'Save failed');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Insert New Product</h2>
// //       <form onSubmit={handleSubmit} style={{maxWidth: 380}}>
// //         <label>Enter Product name</label>
// //         <input type="text" name="title" value={input.title} onChange={handleInput} />

// //         <label>Brand</label>
// //         <input type="text" name="brand" value={input.brand} onChange={handleInput} />

// //         <label>Description</label>
// //         <input type="text" name="description" value={input.description} onChange={handleInput} />

// //         <label>Select Category</label>
// //         <select name="category" value={input.category} onChange={handleInput}>
// //           <option value="mens">Men</option>
// //           <option value="womens">Women</option>
// //           <option value="kids">Kids</option>
// //           <option value="all">All</option>
// //         </select>

// //         <label>Enter Price</label>
// //         <input type="number" name="price" value={input.price} onChange={handleInput} />

// //         <label>Upload Image(s)</label>
// //         <input type="file" multiple name="images" onChange={handleImage} />

// //         <button className="btn" type="submit" style={{marginTop: 8}}>Submit</button>
// //       </form>
// //       <p className="muted" style={{marginTop:8}}>
// //         Note: Images backend pe Multer se <code>/uploads</code> me save hongi; Cloudinary ki zarurat nahi.
// //       </p>
// //     </div>
// //   );
// // }


// import React, { useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import http from "../../api/http.js";
// import { ENDPOINTS } from "../../api/endpoints.js";
// import "./InsertSimple.css";

// export default function InsertSimple() {
//   const [input, setInput] = useState({
//     title: "",
//     brand: "",
//     description: "",
//     category: "mens",
//     price: ""
//   });
//   const [files, setFiles] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);
//   const nav = useNavigate();

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImage = (e) => {
//     const picked = Array.from(e.target.files || []);
//     setFiles(picked);
//   };

//   const previews = useMemo(
//     () =>
//       files.map((f) => ({
//         name: f.name,
//         url: URL.createObjectURL(f),
//         sizeKB: Math.round(f.size / 1024)
//       })),
//     [files]
//   );

//   const validate = () => {
//     const e = {};
//     if (!input.title?.trim()) e.title = "Title required";
//     if (!input.brand?.trim()) e.brand = "Brand required";
//     if (!input.category?.trim()) e.category = "Category required";
//     if (!(Number(input.price) > 0)) e.price = "Enter a valid price";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const fd = new FormData();
//     Object.entries(input).forEach(([k, v]) => fd.append(k, v));
//     fd.append("variants", JSON.stringify([])); // optional
//     files.forEach((f) => fd.append("images", f));

//     try {
//       setSubmitting(true);
//       await http.post(ENDPOINTS.products.base, fd, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       // success UI
//       alert("Product saved");
//       nav("/admin/products");
//     } catch (err) {
//       alert(err?.response?.data?.message || "Save failed");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="ins-wrap">
//       <header className="ins-head">
//         <h2>Insert New Product</h2>
//         <p className="muted">Add basic details and images (JPEG/PNG/WebP).</p>
//       </header>

//       <form className="ins-form" onSubmit={handleSubmit} noValidate>
//         <div className="ins-field">
//           <label htmlFor="title">Product name</label>
//           <input
//             id="title"
//             type="text"
//             name="title"
//             value={input.title}
//             onChange={handleInput}
//             className={errors.title ? "invalid" : ""}
//             placeholder="e.g. Classic Cotton T-Shirt"
//           />
//           {errors.title && <div className="err">{errors.title}</div>}
//         </div>

//         <div className="ins-field">
//           <label htmlFor="brand">Brand</label>
//           <input
//             id="brand"
//             type="text"
//             name="brand"
//             value={input.brand}
//             onChange={handleInput}
//             className={errors.brand ? "invalid" : ""}
//             placeholder="e.g. Acme"
//           />
//           {errors.brand && <div className="err">{errors.brand}</div>}
//         </div>

//         <div className="ins-field span-2">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             rows="3"
//             value={input.description}
//             onChange={handleInput}
//             placeholder="Short details about the product"
//           />
//         </div>

//         <div className="ins-field">
//           <label htmlFor="category">Category</label>
//           <select
//             id="category"
//             name="category"
//             value={input.category}
//             onChange={handleInput}
//             className={errors.category ? "invalid" : ""}
//           >
//             <option value="mens">Men</option>
//             <option value="womens">Women</option>
//             <option value="kids">Kids</option>
//             <option value="all">All</option>
//           </select>
//           {errors.category && <div className="err">{errors.category}</div>}
//         </div>

//         <div className="ins-field">
//           <label htmlFor="price">Price (₹)</label>
//           <input
//             id="price"
//             type="number"
//             name="price"
//             min="0"
//             step="1"
//             value={input.price}
//             onChange={handleInput}
//             className={errors.price ? "invalid" : ""}
//             placeholder="e.g. 1299"
//           />
//           {errors.price && <div className="err">{errors.price}</div>}
//         </div>

//         <div className="ins-field span-2">
//           <label htmlFor="images">Upload image(s)</label>
//           <input
//             id="images"
//             type="file"
//             name="images"
//             multiple
//             accept="image/*"
//             onChange={handleImage}
//           />
//           {!!files.length && (
//             <div className="ins-previews">
//               {previews.map((p) => (
//                 <figure className="ins-thumb" key={p.name} title={p.name}>
//                   <img src={p.url} alt={p.name} />
//                   <figcaption className="muted">
//                     {p.sizeKB} KB
//                   </figcaption>
//                 </figure>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="ins-actions span-2">
//           <button className="btn btn-dark" type="submit" disabled={submitting}>
//             {submitting ? "Saving..." : "Submit"}
//           </button>
//           <button
//             className="btn btn-light"
//             type="button"
//             disabled={submitting}
//             onClick={() => nav(-1)}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>

//       <p className="muted footnote">
//         Note: Images backend pe Multer se <code>/uploads</code> me save hongi; Cloudinary
//         ki zarurat nahi.
//       </p>
//     </div>
//   );
// }



// frontend/src/pages/admin/InsertSimple.jsx
// Business logic 100% untouched — only UI rebuilt in dark theme
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../api/http.js";
import { ENDPOINTS } from "../../api/endpoints.js";
import { motion } from "framer-motion";
import { Package, Tag, FileText, Image, DollarSign, Save, ArrowLeft, X, Upload, CheckCircle } from "lucide-react";

function GlassCard({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-2xl ${className}`}
      style={{ background: "rgba(15,23,42,0.75)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(16px)", ...style }}>
      {children}
    </div>
  );
}

function Field({ label, icon: Icon, error, children }) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        {Icon && <Icon size={11} className="text-violet-500" />} {label}
      </label>
      {children}
      {error && (
        <div className="flex items-center gap-1.5 text-xs text-red-400">
          <span className="w-1 h-1 rounded-full bg-red-400 inline-block" /> {error}
        </div>
      )}
    </div>
  );
}

const inputCls = "w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all placeholder-slate-700 focus:ring-1 focus:ring-violet-500";
const inputStyle = { background: "rgba(2,6,23,0.7)", border: "1px solid rgba(255,255,255,0.08)" };
const inputErrStyle = { background: "rgba(2,6,23,0.7)", border: "1px solid rgba(239,68,68,0.4)" };

export default function InsertSimple() {
  const [input, setInput] = useState({ title: "", brand: "", description: "", category: "mens", price: "" });
  const [files, setFiles]       = useState([]);
  const [errors, setErrors]     = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]   = useState(false);
  const nav = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleImage = (e) => setFiles(Array.from(e.target.files || []));

  const removeFile = (name) => setFiles(prev => prev.filter(f => f.name !== name));

  const previews = useMemo(() =>
    files.map(f => ({ name: f.name, url: URL.createObjectURL(f), sizeKB: Math.round(f.size / 1024) })),
    [files]
  );

  const validate = () => {
    const e = {};
    if (!input.title?.trim())      e.title    = "Title required";
    if (!input.brand?.trim())      e.brand    = "Brand required";
    if (!input.category?.trim())   e.category = "Category required";
    if (!(Number(input.price) > 0)) e.price   = "Enter a valid price";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const fd = new FormData();
    Object.entries(input).forEach(([k, v]) => fd.append(k, v));
    fd.append("variants", JSON.stringify([]));
    files.forEach(f => fd.append("images", f));
    try {
      setSubmitting(true);
      await http.post(ENDPOINTS.products.base, fd, { headers: { "Content-Type": "multipart/form-data" } });
      setSuccess(true);
      setTimeout(() => nav("/admin/products"), 1200);
    } catch (err) {
      alert(err?.response?.data?.message || "Save failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full relative" style={{ background: "#020617", minHeight: "100%", fontFamily: "'Inter',system-ui,sans-serif" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle,#8B5CF6,transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle,#06B6D4,transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative z-10 max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button onClick={() => nav(-1)}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748B" }}>
              <ArrowLeft size={15} />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Package size={22} className="text-violet-400" /> Insert New Product
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">Add basic details and images (JPEG / PNG / WebP)</p>
            </div>
          </div>
        </motion.div>

        {/* SUCCESS BANNER */}
        {success && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl"
            style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}>
            <CheckCircle size={16} className="text-green-400" />
            <span className="text-sm font-semibold text-green-400">Product saved! Redirecting…</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-5">

            {/* BASIC INFO CARD */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Tag size={14} className="text-violet-400" />
                  <span className="text-sm font-semibold text-white">Product Information</span>
                  <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(139,92,246,0.3),transparent)" }} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Product Name" icon={Package} error={errors.title}>
                    <input name="title" type="text" value={input.title} onChange={handleInput}
                      placeholder="e.g. Classic Cotton T-Shirt"
                      className={inputCls} style={errors.title ? inputErrStyle : inputStyle} />
                  </Field>

                  <Field label="Brand" icon={Tag} error={errors.brand}>
                    <input name="brand" type="text" value={input.brand} onChange={handleInput}
                      placeholder="e.g. Acme"
                      className={inputCls} style={errors.brand ? inputErrStyle : inputStyle} />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Description" icon={FileText}>
                      <textarea name="description" rows={3} value={input.description} onChange={handleInput}
                        placeholder="Short details about the product…"
                        className={`${inputCls} resize-none`} style={inputStyle} />
                    </Field>
                  </div>

                  <Field label="Category" error={errors.category}>
                    <select name="category" value={input.category} onChange={handleInput}
                      className={inputCls} style={errors.category ? inputErrStyle : inputStyle}>
                      <option value="mens">Men</option>
                      <option value="womens">Women</option>
                      <option value="kids">Kids</option>
                      <option value="all">All</option>
                    </select>
                  </Field>

                  <Field label="Price (₹)" icon={DollarSign} error={errors.price}>
                    <input name="price" type="number" min="0" step="1" value={input.price} onChange={handleInput}
                      placeholder="e.g. 1299"
                      className={inputCls} style={errors.price ? inputErrStyle : inputStyle} />
                  </Field>
                </div>
              </GlassCard>
            </motion.div>

            {/* IMAGE UPLOAD CARD */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Image size={14} className="text-violet-400" />
                  <span className="text-sm font-semibold text-white">Product Images</span>
                  <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(139,92,246,0.3),transparent)" }} />
                </div>

                {/* Drop zone */}
                <label className="flex flex-col items-center justify-center w-full rounded-xl py-10 cursor-pointer transition-all group"
                  style={{ border: "2px dashed rgba(139,92,246,0.2)", background: "rgba(2,6,23,0.5)" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(139,92,246,0.45)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(139,92,246,0.2)"}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}>
                    <Upload size={20} className="text-violet-400" />
                  </div>
                  <span className="text-sm font-semibold text-slate-400">Click to upload images</span>
                  <span className="text-xs text-slate-600 mt-1">JPEG · PNG · WebP supported</span>
                  <input type="file" name="images" multiple accept="image/*" className="hidden" onChange={handleImage} />
                </label>

                {/* Previews */}
                {previews.length > 0 && (
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {previews.map(p => (
                      <motion.div key={p.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="relative group rounded-xl overflow-hidden"
                        style={{ border: "1px solid rgba(255,255,255,0.08)", aspectRatio: "1" }}>
                        <img src={p.url} alt={p.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: "linear-gradient(to top,rgba(0,0,0,0.8),transparent)" }}>
                          <span className="text-[10px] text-white truncate">{p.name}</span>
                          <span className="text-[10px] text-slate-400">{p.sizeKB} KB</span>
                        </div>
                        <button type="button" onClick={() => removeFile(p.name)}
                          className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: "rgba(239,68,68,0.8)" }}>
                          <X size={10} className="text-white" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </GlassCard>
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="flex items-center justify-end gap-3 pb-4">
              <button type="button" onClick={() => nav(-1)} disabled={submitting}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748B" }}>
                Cancel
              </button>
              <button type="submit" disabled={submitting}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", color: "#fff", boxShadow: "0 0 20px rgba(124,58,237,0.35)" }}>
                {submitting ? (
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                ) : <Save size={14} />}
                {submitting ? "Saving…" : "Save Product"}
              </button>
            </motion.div>

            <p className="text-xs text-slate-700 text-center pb-4">
              Images are saved via Multer to <code className="text-violet-600">/uploads</code> — Cloudinary not required.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}