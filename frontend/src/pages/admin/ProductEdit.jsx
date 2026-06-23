// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProduct, saveProduct } from '../../store/productSlice.js';

// const empty = { title:'', brand:'', category:'', description:'', price:0, oldPrice:0 };

// export default function ProductEdit(){
//   const { id } = useParams();
//   const isNew = id === 'new';
//   const dispatch = useDispatch();
//   const nav = useNavigate();
//   const p = useSelector(s=>s.products.current);
//   const [form, setForm] = useState(empty);
//   const [variants, setVariants] = useState([]);
//   const [images, setImages] = useState([]);

//   useEffect(()=>{ if(!isNew) dispatch(fetchProduct(id)); },[dispatch,id,isNew]);
//   useEffect(()=>{ if(p && !isNew){ setForm({ title:p.title, brand:p.brand, category:p.category, description:p.description, price:p.price, oldPrice:p.oldPrice||0 }); setVariants(p.variants||[]); }},[p,isNew]);

//   const addVariant = ()=> setVariants(v=>[...v,{ size:'M', color:'default', stock:0, price:form.price||0, sku:'' }]);
//   const setVar = (i, k, val)=> setVariants(v=>v.map((x,idx)=> idx===i?{...x,[k]:val}:x));
//   const rmVar = (i)=> setVariants(v=>v.filter((_,idx)=>idx!==i));

//   // Duplicate SKU validation
//   const dupSKU = new Set(variants.map(v=>v.sku)).size !== variants.length;

//   const save = async ()=>{
//     if (!form.title || !form.brand || !form.category || !(form.price>0)) return alert('Title/Brand/Category/Price required');
//     if (dupSKU) return alert('Duplicate SKUs not allowed');
//     const fd = new FormData();
//     Object.entries(form).forEach(([k,v])=>fd.append(k, v));
//     fd.append('variants', JSON.stringify(variants));
//     images.forEach(f => fd.append('images', f));
//     await dispatch(saveProduct({ id: isNew? null : id, form: fd }));
//     nav('/admin/products');
//   };

//   return (
//     <div>
//       <h2>{isNew?'New':'Edit'} Product</h2>
//       <div className="grid-cols-2">
//         <div className="panel">
//           <input placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
//           <input placeholder="Brand" value={form.brand} onChange={e=>setForm({...form,brand:e.target.value})}/>
//           <input placeholder="Category" value={form.category} onChange={e=>setForm({...form,category:e.target.value})}/>
//           <textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
//           <div className="row gap">
//             <input type="number" placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:Number(e.target.value)})}/>
//             <input type="number" placeholder="Old Price" value={form.oldPrice} onChange={e=>setForm({...form,oldPrice:Number(e.target.value)})}/>
//           </div>
//           <input type="file" multiple onChange={e=>setImages([...e.target.files])}/>
//         </div>
//         <div className="panel">
//           <div className="row space"><b>Variants</b><button className="btn" onClick={addVariant}>Add</button></div>
//           <table className="table">
//             <thead><tr><th>Size</th><th>Color</th><th>Stock</th><th>Price</th><th>SKU</th><th/></tr></thead>
//             <tbody>
//               {variants.map((v,i)=> <tr key={i}>
//                 <td><input value={v.size} onChange={e=>setVar(i,'size',e.target.value)}/></td>
//                 <td><input value={v.color} onChange={e=>setVar(i,'color',e.target.value)}/></td>
//                 <td><input type="number" value={v.stock} onChange={e=>setVar(i,'stock',Number(e.target.value))}/></td>
//                 <td><input type="number" value={v.price} onChange={e=>setVar(i,'price',Number(e.target.value))}/></td>
//                 <td><input value={v.sku} onChange={e=>setVar(i,'sku',e.target.value)}/></td>
//                 <td><button onClick={()=>rmVar(i)}>✕</button></td>
//               </tr>)}
//             </tbody>
//           </table>
//           {dupSKU && <div className="warn">Duplicate SKUs found</div>}
//         </div>
//       </div>
//       <button className="btn" onClick={save}>Save</button>
//     </div>
//   );
// }


// frontend/src/pages/admin/ProductEdit.jsx
// ══════════════════════════════════════════════════════
//  DARK THEME — matches AdminLayout perfectly
//  Business logic 100% untouched
// ══════════════════════════════════════════════════════
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, saveProduct } from "../../store/productSlice.js";
import { motion } from "framer-motion";
import {
  Save, Plus, Trash2, AlertTriangle, Package,
  Tag, Image, ArrowLeft, CheckCircle,
} from "lucide-react";

const empty = { title: "", brand: "", category: "", description: "", price: 0, oldPrice: 0 };

function GlassCard({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-2xl ${className}`}
      style={{ background: "rgba(15,23,42,0.75)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(16px)", ...style }}>
      {children}
    </div>
  );
}

function SectionLabel({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <Icon size={14} className="text-violet-400" />
      <span className="text-sm font-semibold text-white">{label}</span>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(139,92,246,0.3),transparent)" }} />
    </div>
  );
}

export default function ProductEdit() {
  // ── LOGIC (untouched) ─────────────────────────────────────────────────────
  const { id }   = useParams();
  const isNew    = id === "new";
  const dispatch = useDispatch();
  const nav      = useNavigate();
  const p        = useSelector(s => s.products.current);

  const [form, setForm]         = useState(empty);
  const [variants, setVariants] = useState([]);
  const [images, setImages]     = useState([]);
  const [saving, setSaving]     = useState(false);

  useEffect(() => { if (!isNew) dispatch(fetchProduct(id)); }, [dispatch, id, isNew]);
  useEffect(() => {
    if (p && !isNew) {
      setForm({ title: p.title, brand: p.brand, category: p.category, description: p.description, price: p.price, oldPrice: p.oldPrice || 0 });
      setVariants(p.variants || []);
    }
  }, [p, isNew]);

  const addVariant = () => setVariants(v => [...v, { size: "M", color: "default", stock: 0, price: form.price || 0, sku: "" }]);
  const setVar     = (i, k, val) => setVariants(v => v.map((x, idx) => idx === i ? { ...x, [k]: val } : x));
  const rmVar      = (i) => setVariants(v => v.filter((_, idx) => idx !== i));

  const dupSKU = new Set(variants.map(v => v.sku)).size !== variants.length;

  const save = async () => {
    if (!form.title || !form.brand || !form.category || !(form.price > 0)) return alert("Title/Brand/Category/Price required");
    if (dupSKU) return alert("Duplicate SKUs not allowed");
    setSaving(true);
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    fd.append("variants", JSON.stringify(variants));
    images.forEach(f => fd.append("images", f));
    await dispatch(saveProduct({ id: isNew ? null : id, form: fd }));
    setSaving(false);
    nav("/admin/products");
  };

  // ── STYLES ────────────────────────────────────────────────────────────────
  const inputCls  = "w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all placeholder-slate-700 focus:ring-1 focus:ring-violet-500";
  const inputStyle = { background: "rgba(2,6,23,0.7)", border: "1px solid rgba(255,255,255,0.08)" };
  const labelCls  = "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5";

  return (
    <div className="w-full relative" style={{ background: "#020617", minHeight: "100%", fontFamily: "'Inter',system-ui,sans-serif" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle,#8B5CF6,transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* ── HEADER ─────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button onClick={() => nav("/admin/products")}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748B" }}>
              <ArrowLeft size={15} />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Package size={22} className="text-violet-400" />
                {isNew ? "New Product" : "Edit Product"}
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                {isNew ? "Add a new product to your catalog" : `Editing: ${form.title || "…"}`}
              </p>
            </div>
          </div>

          <button onClick={save} disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", color: "#fff", boxShadow: "0 0 20px rgba(124,58,237,0.35)" }}>
            {saving ? (
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
            ) : <Save size={15} />}
            {saving ? "Saving…" : "Save Product"}
          </button>
        </motion.div>

        {/* ── MAIN GRID ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT — Basic Info */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <GlassCard className="p-6">
              <SectionLabel icon={Tag} label="Product Information" />
              <div className="space-y-4">
                <div>
                  <label className={labelCls}>Title *</label>
                  <input className={inputCls} style={inputStyle}
                    placeholder="Product title" value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Brand *</label>
                    <input className={inputCls} style={inputStyle}
                      placeholder="Brand name" value={form.brand}
                      onChange={e => setForm({ ...form, brand: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>Category *</label>
                    <input className={inputCls} style={inputStyle}
                      placeholder="Category" value={form.category}
                      onChange={e => setForm({ ...form, category: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Description</label>
                  <textarea className={`${inputCls} resize-none`} style={inputStyle} rows={4}
                    placeholder="Product description…" value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Price (₹) *</label>
                    <input type="number" min="0" className={inputCls} style={inputStyle}
                      placeholder="0" value={form.price}
                      onChange={e => setForm({ ...form, price: Number(e.target.value) })} />
                  </div>
                  <div>
                    <label className={labelCls}>Old Price (₹)</label>
                    <input type="number" min="0" className={inputCls} style={inputStyle}
                      placeholder="0" value={form.oldPrice}
                      onChange={e => setForm({ ...form, oldPrice: Number(e.target.value) })} />
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Images */}
            <GlassCard className="p-6 mt-6">
              <SectionLabel icon={Image} label="Product Images" />
              <label
                className="flex flex-col items-center justify-center w-full rounded-xl py-8 cursor-pointer transition-all hover:border-violet-500/40"
                style={{ border: "2px dashed rgba(255,255,255,0.08)", background: "rgba(2,6,23,0.4)" }}>
                <Image size={24} className="text-slate-600 mb-2" />
                <span className="text-sm text-slate-500">Click to upload images</span>
                <span className="text-xs text-slate-700 mt-1">PNG, JPG, WEBP supported</span>
                <input type="file" multiple className="hidden"
                  onChange={e => setImages([...e.target.files])} />
              </label>
              {images.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {images.map((f, i) => (
                    <div key={i} className="px-2.5 py-1 rounded-lg text-xs"
                      style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)", color: "#A78BFA" }}>
                      {f.name}
                    </div>
                  ))}
                </div>
              )}
            </GlassCard>
          </motion.div>

          {/* RIGHT — Variants */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-violet-400" />
                  <span className="text-sm font-semibold text-white">Variants</span>
                </div>
                <button onClick={addVariant}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                  style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.35)", color: "#A78BFA" }}>
                  <Plus size={12} /> Add Variant
                </button>
              </div>

              {dupSKU && (
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl mb-4 text-xs"
                  style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#F87171" }}>
                  <AlertTriangle size={13} /> Duplicate SKUs found — please make them unique
                </div>
              )}

              {variants.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center"
                  style={{ border: "1px dashed rgba(255,255,255,0.06)", borderRadius: "12px" }}>
                  <Package size={24} className="text-slate-700 mb-2" />
                  <span className="text-sm text-slate-600">No variants yet</span>
                  <span className="text-xs text-slate-700 mt-1">Click "Add Variant" to add sizes, colors & stock</span>
                </div>
              ) : (
                <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                  {variants.map((v, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl p-4"
                      style={{ background: "rgba(2,6,23,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-violet-400">Variant #{i + 1}</span>
                        <button onClick={() => rmVar(i)}
                          className="w-6 h-6 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                          style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.2)", color: "#F87171" }}>
                          <Trash2 size={11} />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Size",  key: "size",  type: "text",   placeholder: "M" },
                          { label: "Color", key: "color", type: "text",   placeholder: "default" },
                          { label: "Stock", key: "stock", type: "number", placeholder: "0" },
                          { label: "Price", key: "price", type: "number", placeholder: "0" },
                        ].map(f => (
                          <div key={f.key}>
                            <label className={labelCls}>{f.label}</label>
                            <input type={f.type} placeholder={f.placeholder}
                              className={inputCls} style={{ ...inputStyle, padding: "8px 12px", fontSize: "12px" }}
                              value={v[f.key]}
                              onChange={e => setVar(i, f.key, f.type === "number" ? Number(e.target.value) : e.target.value)} />
                          </div>
                        ))}
                        <div className="col-span-2">
                          <label className={labelCls}>SKU</label>
                          <input type="text" placeholder="SKU-001"
                            className={inputCls} style={{ ...inputStyle, padding: "8px 12px", fontSize: "12px" }}
                            value={v.sku}
                            onChange={e => setVar(i, "sku", e.target.value)} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </GlassCard>
          </motion.div>
        </div>

        {/* ── BOTTOM SAVE ────────────────────────────────────────────── */}
        <div className="flex justify-end gap-3 pb-4">
          <button onClick={() => nav("/admin/products")}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748B" }}>
            Cancel
          </button>
          <button onClick={save} disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", color: "#fff", boxShadow: "0 0 20px rgba(124,58,237,0.35)" }}>
            <Save size={14} />
            {saving ? "Saving…" : "Save Product"}
          </button>
        </div>
      </div>
    </div>
  );
}