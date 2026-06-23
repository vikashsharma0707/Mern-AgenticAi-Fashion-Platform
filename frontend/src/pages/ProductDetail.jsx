



// // // // import React, { useEffect, useMemo, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import http from "../api/http.js";
// // // // import { useDispatch } from "react-redux";
// // // // import { addToCart } from "../store/cartSlice.js";
// // // // import RecoRail from "../components/RecoRail.jsx";
// // // // import ReviewSummary from "../components/ReviewSummary.jsx";
// // // // import SizeAdvisor from "../components/SizeAdvisor.jsx";
// // // // import "./ProductDetail.css";

// // // // const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";
// // // // const imgUrl = (src) => (src?.startsWith("/uploads") ? `${API_BASE}${src}` : (src || ""));

// // // // export default function ProductDetail() {
// // // //   const { id } = useParams();
// // // //   const [product, setProduct] = useState(null);
// // // //   const [active, setActive] = useState(0);
// // // //   const [qty, setQty] = useState(1);
// // // //   const [selectedColor, setSelectedColor] = useState("");
// // // //   const [selectedSize, setSelectedSize] = useState("");
// // // //   const [showGuide, setShowGuide] = useState(false);
// // // //   const [error, setError] = useState("");

// // // //   const dispatch = useDispatch();
// // // //   const nav = useNavigate();

// // // //   useEffect(() => {
// // // //     let mounted = true;
// // // //     (async () => {
// // // //       try {
// // // //         setError("");
// // // //         const { data } = await http.get(`/api/products/${id}`);
// // // //         if (!mounted) return;
// // // //         setProduct(data);
// // // //         // sensible defaults
// // // //         const first = data?.variants?.[0];
// // // //         setSelectedColor(first?.color || "default");
// // // //         setSelectedSize(first?.size || (data?.variants?.length ? "" : "free"));
// // // //       } catch (e) {
// // // //         if (!mounted) return;
// // // //         setError("Product load failed");
// // // //       }
// // // //     })();
// // // //     return () => { mounted = false; };
// // // //   }, [id]);

// // // //   const colors = useMemo(() => {
// // // //     const set = new Set((product?.variants || []).map(v => (v.color || "default")));
// // // //     return [...set];
// // // //   }, [product]);

// // // //   const sizes = useMemo(() => {
// // // //     const set = new Set((product?.variants || []).map(v => (v.size || "free")));
// // // //     return [...set];
// // // //   }, [product]);

// // // //   const chosen =
// // // //     product?.variants?.find(
// // // //       v => (v.color || "default") === (selectedColor || "default") &&
// // // //            (v.size || "free") === (selectedSize || "free")
// // // //     ) || null;

// // // //   const stock = Number(chosen?.stock ?? 0);
// // // //   const sizeRequired = sizes.length > 0 && !["free","one size","onesize","free size"].includes((sizes[0]||"").toLowerCase());
// // // //   const canBuy = (!sizeRequired || !!selectedSize) && stock > 0;

// // // //   const add = () => {
// // // //     if (sizeRequired && !selectedSize) {
// // // //       setError("Please select a size");
// // // //       return;
// // // //     }
// // // //     setError("");
// // // //     dispatch(addToCart({
// // // //       ...product,
// // // //       sku: chosen?.sku || product?.variants?.[0]?.sku || 'SKU',
// // // //       size: selectedSize || 'free',
// // // //       color: selectedColor || 'default',
// // // //       qty
// // // //     }));
// // // //   };

// // // //   const buy = () => {
// // // //     add();
// // // //     // if validation failed, don't navigate
// // // //     if (sizeRequired && !selectedSize) return;
// // // //     if ((chosen?.stock ?? 0) <= 0) return;
// // // //     nav("/checkout");
// // // //   };

// // // //   if (error && !product) {
// // // //     return <div className="container"><p className="error">{error}</p></div>;
// // // //   }
// // // //   if (!product) return <div className="container"><p>Loading…</p></div>;

// // // //   return (
// // // //     <div className="container product-detail">
// // // //       <div className="pd-grid">
// // // //         {/* Gallery */}
// // // //         <div className="pd-gallery">
// // // //           <div className="pd-thumbs">
// // // //             {(product.images || []).map((src, i) => (
// // // //               <div key={i} className={`pd-thumb ${active===i?'active':''}`} onClick={()=>setActive(i)}>
// // // //                 <img src={imgUrl(src)} alt={`${product.title} thumbnail ${i+1}`} />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //           <div className="pd-mainimg">
// // // //             {product.images?.[active]
// // // //               ? <img src={imgUrl(product.images[active])} alt={product.title}/>
// // // //               : <div className="noimg">No Image</div>}
// // // //           </div>
// // // //         </div>

// // // //         {/* Info */}
// // // //         <div className="pd-info">
// // // //           <div className="pd-breadcrumb">{(product.category || '').toUpperCase()} • {product.brand}</div>
// // // //           <h1 className="pd-title">{product.title}</h1>

// // // //           <div className="pd-rating">
// // // //             <span className="pd-pill">{(product.ratingAvg || 0).toFixed(1)}★</span>
// // // //             <span className="muted">{product.ratingCount || 0} ratings</span>
// // // //           </div>

// // // //           <div className="pd-priceRow">
// // // //             <div className="pd-price">₹{product.price}</div>
// // // //             {product.oldPrice ? <div className="pd-old">₹{product.oldPrice}</div> : null}
// // // //             {product.oldPrice ? (
// // // //               <div className="pd-discount">
// // // //                 {Math.max(0, Math.round(100 - (product.price / product.oldPrice) * 100))}% off
// // // //               </div>
// // // //             ) : null}
// // // //           </div>

// // // //           {colors.length ? (
// // // //             <div className="pd-section">
// // // //               <div className="pd-label">Color</div>
// // // //               <div className="pd-swatches">
// // // //                 {colors.map(c => (
// // // //                   <button key={c}
// // // //                           className={`swatch ${selectedColor===c?'selected':''}`}
// // // //                           onClick={()=>setSelectedColor(c)}>
// // // //                     <span style={{background: c==='default'?'#f3f4f6': c}}/>
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           ) : null}

// // // //           {sizes.length ? (
// // // //             <div className="pd-section">
// // // //               <div className="pd-label">Size</div>
// // // //               <div className="pd-sizes">
// // // //                 {sizes.map((s) => (
// // // //                   <button
// // // //                     key={s}
// // // //                     className={`sizebtn ${selectedSize === s ? "active" : ""}`}
// // // //                     onClick={() => setSelectedSize(s)}
// // // //                   >
// // // //                     {String(s).toUpperCase()}
// // // //                   </button>
// // // //                 ))}
// // // //                 <a className="sizechart" href="#"
// // // //                    onClick={(e) => { e.preventDefault(); setShowGuide(true); }}>
// // // //                   Size Chart
// // // //                 </a>
// // // //               </div>
// // // //             </div>
// // // //           ) : null}

// // // //           {/* Size Advisor (fixed: product prop instead of undefined `p`) */}
// // // //           <SizeAdvisor
// // // //             product={product}
// // // //             selectedSize={selectedSize}
// // // //             onPick={(sz) => setSelectedSize(sz)}
// // // //           />

// // // //           <div className="pd-actions">
// // // //             <div className="qty">
// // // //               <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
// // // //               <input
// // // //                 inputMode="numeric"
// // // //                 value={qty}
// // // //                 onChange={(e)=> {
// // // //                   const val = Number(e.target.value);
// // // //                   setQty(Number.isFinite(val) && val > 0 ? Math.floor(val) : 1);
// // // //                 }}
// // // //               />
// // // //               <button onClick={() => setQty((q) => q + 1)}>+</button>
// // // //             </div>
// // // //             <button className="btn btn-cart" onClick={add} disabled={!canBuy}>ADD TO CART</button>
// // // //             <button className="btn btn-buy" onClick={buy} disabled={!canBuy}>BUY NOW</button>
// // // //             <span className="muted">
// // // //               {canBuy ? `In stock: ${stock}` : stock <= 0 ? `Out of stock` : `Select size`}
// // // //             </span>
// // // //           </div>

// // // //           {error ? <p className="error" style={{marginTop:8}}>{error}</p> : null}

// // // //           <div className="pd-section">
// // // //             <div className="pd-label">Offers</div>
// // // //             <ul className="pd-coupons">
// // // //               <li>Free returns within 7 days</li>
// // // //               <li>Cash on Delivery available</li>
// // // //             </ul>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* AI widgets */}
// // // //       <div className="panel">
// // // //         <h3>Review Summary</h3>
// // // //         <ReviewSummary id={product._id} />
// // // //       </div>

// // // //       <div className="panel">
// // // //         <h3>Similar Products</h3>
// // // //         <RecoRail product={product}/>
// // // //       </div>

// // // //       {/* Size guide modal */}
// // // //       {showGuide && (
// // // //         <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,.4)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:50}}
// // // //              onClick={()=>setShowGuide(false)}>
// // // //           <div className="panel" style={{width:520}} onClick={e=>e.stopPropagation()}>
// // // //             <h3>Size Guide</h3>
// // // //             <table className="table">
// // // //               <thead><tr><th>Size</th><th>Chest (in)</th><th>Length (in)</th></tr></thead>
// // // //               <tbody>
// // // //                 <tr><td>S</td><td>36-38</td><td>26</td></tr>
// // // //                 <tr><td>M</td><td>38-40</td><td>27</td></tr>
// // // //                 <tr><td>L</td><td>40-42</td><td>28</td></tr>
// // // //                 <tr><td>XL</td><td>42-44</td><td>29</td></tr>
// // // //               </tbody>
// // // //             </table>
// // // //             <div className="row" style={{justifyContent:"flex-end"}}>
// // // //               <button className="btn" onClick={()=>setShowGuide(false)}>Close</button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }




// // // // frontend/src/pages/ProductDetail.jsx
// // // import React, { useEffect, useMemo, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { useDispatch } from "react-redux";
// // // import http from "../api/http.js";
// // // import { addToCart } from "../store/cartSlice.js";
// // // import RecoRail from "../components/RecoRail.jsx";
// // // import ReviewSummary from "../components/ReviewSummary.jsx";
// // // import SizeAdvisor from "../components/SizeAdvisor.jsx";
// // // import VirtualTryOn from "../components/VirtualTryOn.jsx";
// // // import "./ProductDetail.css";

// // // const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";
// // // const imgUrl = (src) => (src?.startsWith("/uploads") ? `${API_BASE}${src}` : (src || ""));

// // // export default function ProductDetail() {
// // //   const { id } = useParams();
// // //   const [product, setProduct] = useState(null);
// // //   const [active, setActive] = useState(0);
// // //   const [qty, setQty] = useState(1);
// // //   const [selectedColor, setSelectedColor] = useState("");
// // //   const [selectedSize, setSelectedSize] = useState("");
// // //   const [showGuide, setShowGuide] = useState(false);
// // //   const [error, setError] = useState("");

// // //   const dispatch = useDispatch();
// // //   const nav = useNavigate();

// // //   useEffect(() => {
// // //     let mounted = true;
// // //     (async () => {
// // //       try {
// // //         setError("");
// // //         const { data } = await http.get(`/api/products/${id}`);
// // //         if (!mounted) return;
// // //         setProduct(data);
// // //         const first = data?.variants?.[0];
// // //         setSelectedColor(first?.color || "default");
// // //         setSelectedSize(first?.size || (data?.variants?.length ? "" : "free"));
// // //       } catch (e) {
// // //         if (!mounted) return;
// // //         setError("Product load failed");
// // //       }
// // //     })();
// // //     return () => { mounted = false; };
// // //   }, [id]);

// // //   const colors = useMemo(() => {
// // //     const set = new Set((product?.variants || []).map(v => (v.color || "default")));
// // //     return [...set];
// // //   }, [product]);

// // //   const sizes = useMemo(() => {
// // //     const set = new Set((product?.variants || []).map(v => (v.size || "free")));
// // //     return [...set];
// // //   }, [product]);

// // //   const chosen = product?.variants?.find(
// // //     v => (v.color || "default") === (selectedColor || "default") &&
// // //          (v.size || "free") === (selectedSize || "free")
// // //   ) || null;

// // //   const stock = Number(chosen?.stock ?? 0);
// // //   const sizeRequired = sizes.length > 0 && !["free","one size","onesize","free size"].includes((sizes[0]||"").toLowerCase());
// // //   const canBuy = (!sizeRequired || !!selectedSize) && stock > 0;

// // //   const add = () => {
// // //     if (sizeRequired && !selectedSize) {
// // //       setError("Please select a size");
// // //       return;
// // //     }
// // //     setError("");
// // //     dispatch(addToCart({
// // //       ...product,
// // //       sku: chosen?.sku || product?.variants?.[0]?.sku || 'SKU',
// // //       size: selectedSize || 'free',
// // //       color: selectedColor || 'default',
// // //       qty
// // //     }));
// // //   };

// // //   const buy = () => {
// // //     add();
// // //     if (sizeRequired && !selectedSize) return;
// // //     if ((chosen?.stock ?? 0) <= 0) return;
// // //     nav("/checkout");
// // //   };

// // //   if (error && !product) return <div className="container"><p className="error">{error}</p></div>;
// // //   if (!product) return <div className="container"><p>Loading…</p></div>;

// // //   return (
// // //     <div className="container product-detail">
// // //       <div className="pd-grid">
// // //         {/* Gallery */}
// // //         <div className="pd-gallery">
// // //           <div className="pd-thumbs">
// // //             {(product.images || []).map((src, i) => (
// // //               <div key={i} className={`pd-thumb ${active===i?'active':''}`} onClick={()=>setActive(i)}>
// // //                 <img src={imgUrl(src)} alt={`${product.title} thumbnail ${i+1}`} />
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <div className="pd-mainimg">
// // //             {product.images?.[active]
// // //               ? <img src={imgUrl(product.images[active])} alt={product.title}/>
// // //               : <div className="noimg">No Image</div>}
// // //           </div>
// // //         </div>

// // //         {/* Info */}
// // //         <div className="pd-info">
// // //           <div className="pd-breadcrumb">{(product.category || '').toUpperCase()} • {product.brand}</div>
// // //           <h1 className="pd-title">{product.title}</h1>

// // //           <div className="pd-rating">
// // //             <span className="pd-pill">{(product.ratingAvg || 0).toFixed(1)}★</span>
// // //             <span className="muted">{product.ratingCount || 0} ratings</span>
// // //           </div>

// // //           <div className="pd-priceRow">
// // //             <div className="pd-price">₹{product.price}</div>
// // //             {product.oldPrice ? <div className="pd-old">₹{product.oldPrice}</div> : null}
// // //             {product.oldPrice ? (
// // //               <div className="pd-discount">
// // //                 {Math.max(0, Math.round(100 - (product.price / product.oldPrice) * 100))}% off
// // //               </div>
// // //             ) : null}
// // //           </div>

// // //           {colors.length ? (
// // //             <div className="pd-section">
// // //               <div className="pd-label">Color</div>
// // //               <div className="pd-swatches">
// // //                 {colors.map(c => (
// // //                   <button key={c}
// // //                           className={`swatch ${selectedColor===c?'selected':''}`}
// // //                           onClick={()=>setSelectedColor(c)}>
// // //                     <span style={{background: c==='default'?'#f3f4f6': c}}/>
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ) : null}

// // //           {sizes.length ? (
// // //             <div className="pd-section">
// // //               <div className="pd-label">Size</div>
// // //               <div className="pd-sizes">
// // //                 {sizes.map((s) => (
// // //                   <button
// // //                     key={s}
// // //                     className={`sizebtn ${selectedSize === s ? "active" : ""}`}
// // //                     onClick={() => setSelectedSize(s)}
// // //                   >
// // //                     {String(s).toUpperCase()}
// // //                   </button>
// // //                 ))}
// // //                 <a className="sizechart" href="#"
// // //                    onClick={(e) => { e.preventDefault(); setShowGuide(true); }}>
// // //                   Size Chart
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           ) : null}

// // //           <SizeAdvisor
// // //             product={product}
// // //             selectedSize={selectedSize}
// // //             onPick={(sz) => setSelectedSize(sz)}
// // //           />

// // //           {/* Virtual Try-On */}
// // //           <VirtualTryOn product={product} />

// // //           <div className="pd-actions">
// // //             <div className="qty">
// // //               <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
// // //               <input
// // //                 inputMode="numeric"
// // //                 value={qty}
// // //                 onChange={(e)=> {
// // //                   const val = Number(e.target.value);
// // //                   setQty(Number.isFinite(val) && val > 0 ? Math.floor(val) : 1);
// // //                 }}
// // //               />
// // //               <button onClick={() => setQty((q) => q + 1)}>+</button>
// // //             </div>
// // //             <button className="btn btn-cart" onClick={add} disabled={!canBuy}>ADD TO CART</button>
// // //             <button className="btn btn-buy" onClick={buy} disabled={!canBuy}>BUY NOW</button>
// // //             <span className="muted">
// // //               {canBuy ? `In stock: ${stock}` : stock <= 0 ? `Out of stock` : `Select size`}
// // //             </span>
// // //           </div>

// // //           {error ? <p className="error" style={{marginTop:8}}>{error}</p> : null}

// // //           <div className="pd-section">
// // //             <div className="pd-label">Offers</div>
// // //             <ul className="pd-coupons">
// // //               <li>Free returns within 7 days</li>
// // //               <li>Cash on Delivery available</li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* AI widgets */}
// // //       <div className="panel">
// // //         <h3>Review Summary</h3>
// // //         <ReviewSummary id={product._id} />
// // //       </div>

// // //       <div className="panel">
// // //         <h3>Similar Products</h3>
// // //         <RecoRail product={product}/>
// // //       </div>

// // //       {/* Size guide modal */}
// // //       {showGuide && (
// // //         <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,.4)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:50}}
// // //              onClick={()=>setShowGuide(false)}>
// // //           <div className="panel" style={{width:520}} onClick={e=>e.stopPropagation()}>
// // //             <h3>Size Guide</h3>
// // //             <table className="table">
// // //               <thead><tr><th>Size</th><th>Chest (in)</th><th>Length (in)</th></tr></thead>
// // //               <tbody>
// // //                 <tr><td>S</td><td>36-38</td><td>26</td></tr>
// // //                 <tr><td>M</td><td>38-40</td><td>27</td></tr>
// // //                 <tr><td>L</td><td>40-42</td><td>28</td></tr>
// // //                 <tr><td>XL</td><td>42-44</td><td>29</td></tr>
// // //               </tbody>
// // //             </table>
// // //             <div className="row" style={{justifyContent:"flex-end"}}>
// // //               <button className="btn" onClick={()=>setShowGuide(false)}>Close</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }



// // // frontend/src/pages/ProductDetail.jsx
// // import React, { useEffect, useMemo, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import { toast } from "react-toastify";
// // import http from "../api/http.js";
// // import { addToCart } from "../store/cartSlice.js";
// // import RecoRail from "../components/RecoRail.jsx";
// // import ReviewSummary from "../components/ReviewSummary.jsx";
// // import SizeAdvisor from "../components/SizeAdvisor.jsx";
// // import VirtualTryOn from "../components/VirtualTryOn.jsx";

// // const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";
// // const imgUrl = (src) => (src?.startsWith("/uploads") ? `${API_BASE}${src}` : (src || ""));

// // /* ---------- small presentational pieces, kept in-file since this page
// //    already owns most of the layout decisions; split out if reused elsewhere ---------- */

// // function GallerySkeleton() {
// //   return (
// //     <div className="grid grid-cols-[72px_1fr] gap-3">
// //       <div className="flex flex-col gap-2">
// //         {Array.from({ length: 4 }).map((_, i) => (
// //           <div key={i} className="w-[72px] h-[72px] rounded-md bg-[#15171c]/10 animate-pulse" />
// //         ))}
// //       </div>
// //       <div className="aspect-square rounded-lg bg-[#15171c]/10 animate-pulse" />
// //     </div>
// //   );
// // }

// // function InfoSkeleton() {
// //   return (
// //     <div className="space-y-3">
// //       <div className="h-3 w-1/3 bg-[#15171c]/10 rounded animate-pulse" />
// //       <div className="h-7 w-2/3 bg-[#15171c]/10 rounded animate-pulse" />
// //       <div className="h-4 w-1/4 bg-[#15171c]/10 rounded animate-pulse" />
// //       <div className="h-8 w-1/3 bg-[#15171c]/10 rounded animate-pulse" />
// //       <div className="h-24 w-full bg-[#15171c]/10 rounded animate-pulse mt-6" />
// //     </div>
// //   );
// // }

// // const HeartIcon = ({ filled, ...props }) => (
// //   <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" {...props}>
// //     <path d="M12 20s-7-4.4-9.3-8.8C1.3 8 2.7 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.3 0 4.7 3 3.3 6.2C19 15.6 12 20 12 20Z" />
// //   </svg>
// // );

// // export default function ProductDetail() {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState(null);
// //   const [active, setActive] = useState(0);
// //   const [qty, setQty] = useState(1);
// //   const [selectedColor, setSelectedColor] = useState("");
// //   const [selectedSize, setSelectedSize] = useState("");
// //   const [showGuide, setShowGuide] = useState(false);
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   // Bonus features — local UI state only, no backend contract assumed
// //   const [wished, setWished] = useState(false);
// //   const [pincode, setPincode] = useState("");
// //   const [pincodeStatus, setPincodeStatus] = useState(null); // null | "checking" | "ok" | "fail"
// //   const [addLoading, setAddLoading] = useState(false);
// //   const [buyLoading, setBuyLoading] = useState(false);
// //   const [zoomActive, setZoomActive] = useState(false);
// //   const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
// //   const [showStickyBar, setShowStickyBar] = useState(false);

// //   const dispatch = useDispatch();
// //   const nav = useNavigate();

// //   useEffect(() => {
// //     let mounted = true;
// //     (async () => {
// //       try {
// //         setLoading(true);
// //         setError("");
// //         const { data } = await http.get(`/api/products/${id}`);
// //         if (!mounted) return;
// //         setProduct(data);
// //         const first = data?.variants?.[0];
// //         setSelectedColor(first?.color || "default");
// //         setSelectedSize(first?.size || (data?.variants?.length ? "" : "free"));
// //       } catch (e) {
// //         if (!mounted) return;
// //         setError("Product load failed");
// //       } finally {
// //         if (mounted) setLoading(false);
// //       }
// //     })();
// //     return () => {
// //       mounted = false;
// //     };
// //   }, [id]);

// //   // Sticky CTA bar appears once the user scrolls past the main actions area
// //   useEffect(() => {
// //     const onScroll = () => setShowStickyBar(window.scrollY > 480);
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   const colors = useMemo(() => {
// //     const set = new Set((product?.variants || []).map((v) => v.color || "default"));
// //     return [...set];
// //   }, [product]);

// //   const sizes = useMemo(() => {
// //     const set = new Set((product?.variants || []).map((v) => v.size || "free"));
// //     return [...set];
// //   }, [product]);

// //   const chosen =
// //     product?.variants?.find(
// //       (v) =>
// //         (v.color || "default") === (selectedColor || "default") &&
// //         (v.size || "free") === (selectedSize || "free")
// //     ) || null;

// //   const stock = Number(chosen?.stock ?? 0);
// //   const sizeRequired =
// //     sizes.length > 0 && !["free", "one size", "onesize", "free size"].includes((sizes[0] || "").toLowerCase());
// //   const canBuy = (!sizeRequired || !!selectedSize) && stock > 0;

// //   const discountPct = product?.oldPrice
// //     ? Math.max(0, Math.round(100 - (product.price / product.oldPrice) * 100))
// //     : 0;

// //   const add = async () => {
// //     if (sizeRequired && !selectedSize) {
// //       setError("Please select a size");
// //       toast.error("Please select a size");
// //       return;
// //     }
// //     setError("");
// //     setAddLoading(true);
// //     try {
// //       dispatch(
// //         addToCart({
// //           ...product,
// //           sku: chosen?.sku || product?.variants?.[0]?.sku || "SKU",
// //           size: selectedSize || "free",
// //           color: selectedColor || "default",
// //           qty,
// //         })
// //       );
// //       toast.success("Added to cart 🛒");
// //     } finally {
// //       setAddLoading(false);
// //     }
// //   };

// //   const buy = async () => {
// //     if (sizeRequired && !selectedSize) {
// //       setError("Please select a size");
// //       toast.error("Please select a size");
// //       return;
// //     }
// //     if ((chosen?.stock ?? 0) <= 0) return;
// //     setBuyLoading(true);
// //     try {
// //       await add();
// //       nav("/checkout");
// //     } finally {
// //       setBuyLoading(false);
// //     }
// //   };

// //   const checkPincode = async () => {
// //     if (!/^\d{6}$/.test(pincode)) {
// //       setPincodeStatus("fail");
// //       return;
// //     }
// //     setPincodeStatus("checking");
// //     // Simulated delivery check — wire to a real serviceability endpoint
// //     // when available; this keeps the UI functional in the meantime.
// //     await new Promise((r) => setTimeout(r, 700));
// //     setPincodeStatus("ok");
// //   };

// //   const handleMouseMove = (e) => {
// //     const rect = e.currentTarget.getBoundingClientRect();
// //     const x = ((e.clientX - rect.left) / rect.width) * 100;
// //     const y = ((e.clientY - rect.top) / rect.height) * 100;
// //     setZoomPos({ x, y });
// //   };

// //   if (error && !product && !loading) {
// //     return (
// //       <div className="max-w-7xl mx-auto px-4 py-20 text-center">
// //         <p className="text-[#8C3A2E] font-medium">{error}</p>
// //         <button
// //           onClick={() => nav(-1)}
// //           className="mt-4 text-sm text-[#AD8A4D] font-semibold hover:text-[#8C3A2E] transition-colors"
// //         >
// //           ← Go back
// //         </button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 bg-[#F7F4EE] min-h-screen">
// //       {loading ? (
// //         <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-8">
// //           <GallerySkeleton />
// //           <InfoSkeleton />
// //         </div>
// //       ) : (
// //         <>
// //           <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-8">
// //             {/* ============ GALLERY ============ */}
// //             <div className="grid grid-cols-[72px_1fr] gap-3">
// //               <div className="flex flex-col gap-2 max-h-[520px] overflow-y-auto">
// //                 {(product.images || []).map((src, i) => (
// //                   <button
// //                     key={i}
// //                     onClick={() => setActive(i)}
// //                     className={`shrink-0 w-[72px] h-[72px] rounded-md border overflow-hidden transition-all duration-150 ${
// //                       active === i
// //                         ? "border-[#15171c] ring-2 ring-[#15171c]"
// //                         : "border-[#15171c]/10 hover:border-[#AD8A4D]/50"
// //                     }`}
// //                   >
// //                     <img
// //                       src={imgUrl(src)}
// //                       alt={`${product.title} thumbnail ${i + 1}`}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </button>
// //                 ))}
// //               </div>

// //               <div
// //                 className="relative aspect-square rounded-lg border border-[#15171c]/10 bg-white overflow-hidden cursor-zoom-in"
// //                 onMouseEnter={() => setZoomActive(true)}
// //                 onMouseLeave={() => setZoomActive(false)}
// //                 onMouseMove={handleMouseMove}
// //               >
// //                 {product.images?.[active] ? (
// //                   <img
// //                     src={imgUrl(product.images[active])}
// //                     alt={product.title}
// //                     className="w-full h-full object-contain transition-transform duration-200"
// //                     style={
// //                       zoomActive
// //                         ? { transform: "scale(1.9)", transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
// //                         : undefined
// //                     }
// //                   />
// //                 ) : (
// //                   <div className="w-full h-full flex items-center justify-center text-[#15171c]/40 text-sm">
// //                     No Image
// //                   </div>
// //                 )}

// //                 {/* Wishlist heart — floats over the main image, top-right */}
// //                 <button
// //                   onClick={() => setWished((w) => !w)}
// //                   aria-label="Add to wishlist"
// //                   className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
// //                     wished ? "bg-[#8C3A2E] text-white" : "bg-white text-[#15171c]/60 hover:text-[#8C3A2E]"
// //                   }`}
// //                 >
// //                   <HeartIcon filled={wished} className="w-[18px] h-[18px]" />
// //                 </button>

// //                 {discountPct > 0 && (
// //                   <span className="absolute top-3 left-3 bg-[#15171c] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
// //                     {discountPct}% OFF
// //                   </span>
// //                 )}
// //               </div>
// //             </div>

// //             {/* ============ INFO ============ */}
// //             <div>
// //               <div className="text-[12px] font-medium tracking-wide text-[#15171c]/50 uppercase">
// //                 {(product.category || "").toUpperCase()} • {product.brand}
// //               </div>
// //               <h1 className="text-2xl sm:text-3xl font-bold text-[#15171c] tracking-tight mt-1.5 mb-3">
// //                 {product.title}
// //               </h1>

// //               <div className="flex items-center gap-2.5 mb-3">
// //                 <span className="inline-flex items-center gap-1 bg-[#1f7a4d] text-white text-[12px] font-semibold px-2.5 py-1 rounded-full">
// //                   {(product.ratingAvg || 0).toFixed(1)} ★
// //                 </span>
// //                 <span className="text-sm text-[#15171c]/50">{product.ratingCount || 0} ratings</span>
// //               </div>

// //               <div className="flex items-baseline gap-3 mb-5">
// //                 <span className="text-3xl font-bold text-[#15171c]">₹{product.price}</span>
// //                 {product.oldPrice && (
// //                   <span className="text-base text-[#15171c]/40 line-through">₹{product.oldPrice}</span>
// //                 )}
// //                 {discountPct > 0 && (
// //                   <span className="text-base font-bold text-[#1f7a4d]">{discountPct}% off</span>
// //                 )}
// //               </div>

// //               {/* Color swatches */}
// //               {colors.length > 0 && (
// //                 <div className="mb-5">
// //                   <div className="text-[13px] font-semibold text-[#15171c] mb-2">Color</div>
// //                   <div className="flex gap-2">
// //                     {colors.map((c) => (
// //                       <button
// //                         key={c}
// //                         onClick={() => setSelectedColor(c)}
// //                         className={`w-8 h-8 rounded-full p-0.5 border transition-all duration-150 ${
// //                           selectedColor === c
// //                             ? "border-[#15171c] ring-2 ring-[#15171c]/30"
// //                             : "border-[#15171c]/15 hover:border-[#AD8A4D]"
// //                         }`}
// //                       >
// //                         <span
// //                           className="block w-full h-full rounded-full border border-[#15171c]/10"
// //                           style={{ background: c === "default" ? "#f3f4f6" : c }}
// //                         />
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Size buttons */}
// //               {sizes.length > 0 && (
// //                 <div className="mb-5">
// //                   <div className="flex items-center justify-between mb-2">
// //                     <div className="text-[13px] font-semibold text-[#15171c]">Size</div>
// //                     <button
// //                       onClick={() => setShowGuide(true)}
// //                       className="text-[12px] text-[#AD8A4D] hover:text-[#8C3A2E] font-medium transition-colors"
// //                     >
// //                       Size Chart
// //                     </button>
// //                   </div>
// //                   <div className="flex flex-wrap gap-2">
// //                     {sizes.map((s) => (
// //                       <button
// //                         key={s}
// //                         onClick={() => setSelectedSize(s)}
// //                         className={`px-4 py-2 text-[13px] font-semibold rounded-md border transition-all duration-150 ${
// //                           selectedSize === s
// //                             ? "bg-[#15171c] text-white border-[#15171c]"
// //                             : "bg-white text-[#15171c] border-[#15171c]/20 hover:border-[#AD8A4D]"
// //                         }`}
// //                       >
// //                         {String(s).toUpperCase()}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}

// //               <SizeAdvisor product={product} selectedSize={selectedSize} onPick={(sz) => setSelectedSize(sz)} />

// //               <VirtualTryOn product={product} />

// //               {/* Quantity + actions */}
// //               <div className="flex flex-wrap items-center gap-3 mt-6" id="pd-actions">
// //                 <div className="inline-flex items-center border border-[#15171c]/15 rounded-full overflow-hidden">
// //                   <button
// //                     onClick={() => setQty((q) => Math.max(1, q - 1))}
// //                     className="w-9 h-9 flex items-center justify-center text-[#15171c] hover:bg-[#F7F4EE] transition-colors"
// //                   >
// //                     −
// //                   </button>
// //                   <input
// //                     inputMode="numeric"
// //                     value={qty}
// //                     onChange={(e) => {
// //                       const val = Number(e.target.value);
// //                       setQty(Number.isFinite(val) && val > 0 ? Math.floor(val) : 1);
// //                     }}
// //                     className="w-12 text-center text-sm font-medium text-[#15171c] outline-none"
// //                   />
// //                   <button
// //                     onClick={() => setQty((q) => q + 1)}
// //                     className="w-9 h-9 flex items-center justify-center text-[#15171c] hover:bg-[#F7F4EE] transition-colors"
// //                   >
// //                     +
// //                   </button>
// //                 </div>

// //                 <button
// //                   onClick={add}
// //                   disabled={!canBuy || addLoading}
// //                   className="flex-1 sm:flex-none min-w-[150px] bg-[#15171c] text-white font-semibold text-sm rounded-full py-2.5 px-6
// //                     transition-all duration-200 hover:bg-[#2a2d36] active:scale-[0.97]
// //                     disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
// //                 >
// //                   {addLoading && <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />}
// //                   ADD TO CART
// //                 </button>

// //                 <button
// //                   onClick={buy}
// //                   disabled={!canBuy || buyLoading}
// //                   className="flex-1 sm:flex-none min-w-[150px] bg-[#8C3A2E] text-white font-semibold text-sm rounded-full py-2.5 px-6
// //                     transition-all duration-200 hover:bg-[#73302a] active:scale-[0.97]
// //                     disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
// //                 >
// //                   {buyLoading && <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />}
// //                   BUY NOW
// //                 </button>
// //               </div>

// //               <p className="text-[13px] text-[#15171c]/60 mt-2">
// //                 {canBuy
// //                   ? stock <= 5
// //                     ? <span className="text-[#8C3A2E] font-medium">Only {stock} left — order soon</span>
// //                     : `In stock: ${stock}`
// //                   : stock <= 0
// //                   ? <span className="text-[#8C3A2E] font-medium">Out of stock</span>
// //                   : "Select size"}
// //               </p>

// //               {error && <p className="text-[#8C3A2E] text-sm mt-2">{error}</p>}

// //               {/* Delivery / pincode check */}
// //               <div className="mt-6">
// //                 <div className="text-[13px] font-semibold text-[#15171c] mb-2">Check Delivery</div>
// //                 <div className="flex gap-2 max-w-sm">
// //                   <input
// //                     value={pincode}
// //                     onChange={(e) => {
// //                       setPincode(e.target.value.replace(/\D/g, "").slice(0, 6));
// //                       setPincodeStatus(null);
// //                     }}
// //                     placeholder="Enter pincode"
// //                     className="flex-1 px-3.5 py-2.5 text-sm border border-[#15171c]/15 rounded-md
// //                       outline-none transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15"
// //                   />
// //                   <button
// //                     onClick={checkPincode}
// //                     className="px-4 py-2.5 text-sm font-semibold rounded-md border border-[#15171c]/15 text-[#15171c]
// //                       hover:border-[#AD8A4D] hover:text-[#AD8A4D] transition-colors"
// //                   >
// //                     Check
// //                   </button>
// //                 </div>
// //                 {pincodeStatus === "checking" && (
// //                   <p className="text-[12px] text-[#15171c]/50 mt-1.5">Checking…</p>
// //                 )}
// //                 {pincodeStatus === "ok" && (
// //                   <p className="text-[12px] text-[#1f7a4d] font-medium mt-1.5">
// //                     ✓ Delivery available to {pincode}, usually in 3–5 days
// //                   </p>
// //                 )}
// //                 {pincodeStatus === "fail" && (
// //                   <p className="text-[12px] text-[#8C3A2E] font-medium mt-1.5">Enter a valid 6-digit pincode</p>
// //                 )}
// //               </div>

// //               {/* Offers */}
// //               <div className="mt-6">
// //                 <div className="text-[13px] font-semibold text-[#15171c] mb-2">Offers</div>
// //                 <ul className="space-y-1.5 text-sm text-[#15171c]/70">
// //                   <li className="flex items-center gap-2">
// //                     <span className="text-[#1f7a4d]">✓</span> Free returns within 7 days
// //                   </li>
// //                   <li className="flex items-center gap-2">
// //                     <span className="text-[#1f7a4d]">✓</span> Cash on Delivery available
// //                   </li>
// //                 </ul>
// //               </div>

// //               {/* Trust badges */}
// //               <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[#15171c]/10">
// //                 {[
// //                   { icon: "↺", label: "7-Day Returns" },
// //                   { icon: "🔒", label: "Secure Payment" },
// //                   { icon: "✓", label: "100% Authentic" },
// //                 ].map((b) => (
// //                   <div key={b.label} className="flex flex-col items-center text-center gap-1">
// //                     <span className="text-lg">{b.icon}</span>
// //                     <span className="text-[11px] text-[#15171c]/60 font-medium">{b.label}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* ============ AI widgets / Reviews / Recos ============ */}
// //           <div className="bg-white border border-[#15171c]/10 rounded-lg p-5 mt-10">
// //             <h3 className="text-[15px] font-semibold text-[#15171c] mb-3">Review Summary</h3>
// //             <ReviewSummary id={product._id} />
// //           </div>

// //           <div className="bg-white border border-[#15171c]/10 rounded-lg p-5 mt-6">
// //             <h3 className="text-[15px] font-semibold text-[#15171c] mb-3">Similar Products</h3>
// //             <RecoRail product={product} />
// //           </div>
// //         </>
// //       )}

// //       {/* ============ Sticky mobile CTA bar ============ */}
// //       {!loading && product && showStickyBar && (
// //         <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#15171c]/10 shadow-[0_-8px_24px_rgba(21,23,28,0.08)] lg:hidden">
// //           <div className="flex items-center gap-3 px-4 py-3">
// //             <div className="flex-1 min-w-0">
// //               <div className="text-[13px] font-medium text-[#15171c] truncate">{product.title}</div>
// //               <div className="text-[14px] font-bold text-[#15171c]">₹{product.price}</div>
// //             </div>
// //             <button
// //               onClick={add}
// //               disabled={!canBuy}
// //               className="bg-[#15171c] text-white text-[12px] font-semibold rounded-full px-4 py-2.5 disabled:opacity-40"
// //             >
// //               ADD TO CART
// //             </button>
// //             <button
// //               onClick={buy}
// //               disabled={!canBuy}
// //               className="bg-[#8C3A2E] text-white text-[12px] font-semibold rounded-full px-4 py-2.5 disabled:opacity-40"
// //             >
// //               BUY NOW
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* ============ Size guide modal ============ */}
// //       {showGuide && (
// //         <div
// //           className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
// //           onClick={() => setShowGuide(false)}
// //         >
// //           <div
// //             className="bg-white rounded-lg p-5 w-full max-w-[520px]"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <h3 className="text-[16px] font-semibold text-[#15171c] mb-3">Size Guide</h3>
// //             <table className="w-full text-sm">
// //               <thead>
// //                 <tr className="text-left text-[#15171c]/50 border-b border-[#15171c]/10">
// //                   <th className="py-2">Size</th>
// //                   <th className="py-2">Chest (in)</th>
// //                   <th className="py-2">Length (in)</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="text-[#15171c]">
// //                 <tr className="border-b border-[#15171c]/5"><td className="py-2">S</td><td>36-38</td><td>26</td></tr>
// //                 <tr className="border-b border-[#15171c]/5"><td className="py-2">M</td><td>38-40</td><td>27</td></tr>
// //                 <tr className="border-b border-[#15171c]/5"><td className="py-2">L</td><td>40-42</td><td>28</td></tr>
// //                 <tr><td className="py-2">XL</td><td>42-44</td><td>29</td></tr>
// //               </tbody>
// //             </table>
// //             <div className="flex justify-end mt-4">
// //               <button
// //                 onClick={() => setShowGuide(false)}
// //                 className="bg-[#15171c] text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-[#2a2d36] transition-colors"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }






// // frontend/src/pages/ProductDetail.jsx
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import http from "../api/http.js";
// import { addToCart } from "../store/cartSlice.js";
// import RecoRail from "../components/RecoRail.jsx";
// import ReviewSummary from "../components/ReviewSummary.jsx";
// import SizeAdvisor from "../components/SizeAdvisor.jsx";
// import VirtualTryOn from "../components/VirtualTryOn.jsx";

// const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";
// const imgUrl = (src) => (src?.startsWith("/uploads") ? `${API_BASE}${src}` : (src || ""));

// /* ============================================================
//    Design tokens (kept consistent with the brand palette already
//    in use elsewhere in the app — extended with a couple of
//    derived tints for premium surfaces / gradients).
//    ============================================================ */
// const INK = "#15171c";
// const SAND = "#F7F4EE";
// const GOLD = "#AD8A4D";
// const RUST = "#8C3A2E";
// const GREEN = "#1f7a4d";

// /* ---------- skeletons ---------- */

// function GallerySkeleton() {
//   return (
//     <div className="grid grid-cols-[72px_1fr] gap-3">
//       <div className="flex flex-col gap-2">
//         {Array.from({ length: 4 }).map((_, i) => (
//           <div key={i} className="w-[72px] h-[72px] rounded-md bg-[#15171c]/10 animate-pulse" />
//         ))}
//       </div>
//       <div className="aspect-square rounded-xl bg-gradient-to-br from-[#15171c]/10 via-[#15171c]/5 to-[#15171c]/10 animate-pulse" />
//     </div>
//   );
// }

// function InfoSkeleton() {
//   return (
//     <div className="space-y-3">
//       <div className="h-3 w-1/3 bg-[#15171c]/10 rounded animate-pulse" />
//       <div className="h-7 w-2/3 bg-[#15171c]/10 rounded animate-pulse" />
//       <div className="h-4 w-1/4 bg-[#15171c]/10 rounded animate-pulse" />
//       <div className="h-8 w-1/3 bg-[#15171c]/10 rounded animate-pulse" />
//       <div className="h-24 w-full bg-[#15171c]/10 rounded animate-pulse mt-6" />
//     </div>
//   );
// }

// /* ---------- icons ---------- */

// const HeartIcon = ({ filled, ...props }) => (
//   <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" {...props}>
//     <path d="M12 20s-7-4.4-9.3-8.8C1.3 8 2.7 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.3 0 4.7 3 3.3 6.2C19 15.6 12 20 12 20Z" />
//   </svg>
// );

// const StarIcon = ({ fill = 1, size = 14 }) => {
//   const id = useRef(`star-${Math.random().toString(36).slice(2)}`).current;
//   return (
//     <svg width={size} height={size} viewBox="0 0 20 20">
//       <defs>
//         <linearGradient id={id}>
//           <stop offset={`${fill * 100}%`} stopColor="#FFC23C" />
//           <stop offset={`${fill * 100}%`} stopColor="#E4E1D8" />
//         </linearGradient>
//       </defs>
//       <path
//         fill={`url(#${id})`}
//         d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.5z"
//       />
//     </svg>
//   );
// };

// function StarRow({ value = 0, size = 14 }) {
//   return (
//     <div className="flex items-center gap-[2px]" aria-label={`${value} out of 5 stars`}>
//       {Array.from({ length: 5 }).map((_, i) => {
//         const fill = Math.max(0, Math.min(1, value - i));
//         return <StarIcon key={i} fill={fill} size={size} />;
//       })}
//     </div>
//   );
// }

// const ChevronIcon = ({ open }) => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
//   >
//     <path d="M6 9l6 6 6-6" />
//   </svg>
// );

// const SparkleIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//     <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2zM19 14l.8 2.6L22.4 17.4 19.8 18.2 19 21l-.8-2.8-2.6-.8 2.6-.8L19 14z" />
//   </svg>
// );

// /* ---------- collapsible section, used for mobile accordions ---------- */

// function Collapsible({ title, defaultOpen = false, children }) {
//   const [open, setOpen] = useState(defaultOpen);
//   return (
//     <div className="border-b border-[#15171c]/10">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full flex items-center justify-between py-4 text-left"
//       >
//         <span className="text-[14px] font-semibold text-[#15171c]">{title}</span>
//         <span className="text-[#15171c]/50"><ChevronIcon open={open} /></span>
//       </button>
//       <div
//         className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
//         style={{ maxHeight: open ? 1000 : 0, opacity: open ? 1 : 0 }}
//       >
//         <div className="pb-4">{children}</div>
//       </div>
//     </div>
//   );
// }

// export default function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [active, setActive] = useState(0);
//   const [qty, setQty] = useState(1);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [showGuide, setShowGuide] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Bonus features — local UI state only, no backend contract assumed
//   const [wished, setWished] = useState(false);
//   const [pincode, setPincode] = useState("");
//   const [pincodeStatus, setPincodeStatus] = useState(null); // null | "checking" | "ok" | "fail"
//   const [addLoading, setAddLoading] = useState(false);
//   const [buyLoading, setBuyLoading] = useState(false);
//   const [zoomActive, setZoomActive] = useState(false);
//   const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
//   const [showStickyBar, setShowStickyBar] = useState(false);
//   const [fullscreenOpen, setFullscreenOpen] = useState(false);
//   const [hoverColor, setHoverColor] = useState(null);
//   const [reviewFilter, setReviewFilter] = useState("recent"); // recent | 5 | 4

//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const { data } = await http.get(`/api/products/${id}`);
//         if (!mounted) return;
//         setProduct(data);
//         const first = data?.variants?.[0];
//         setSelectedColor(first?.color || "default");
//         setSelectedSize(first?.size || (data?.variants?.length ? "" : "free"));
//       } catch (e) {
//         if (!mounted) return;
//         setError("Product load failed");
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     })();
//     return () => {
//       mounted = false;
//     };
//   }, [id]);

//   // Sticky CTA bar appears once the user scrolls past the main actions area
//   useEffect(() => {
//     const onScroll = () => setShowStickyBar(window.scrollY > 480);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Esc closes the fullscreen viewer
//   useEffect(() => {
//     if (!fullscreenOpen) return;
//     const onKey = (e) => e.key === "Escape" && setFullscreenOpen(false);
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [fullscreenOpen]);

//   const colors = useMemo(() => {
//     const set = new Set((product?.variants || []).map((v) => v.color || "default"));
//     return [...set];
//   }, [product]);

//   const sizes = useMemo(() => {
//     const set = new Set((product?.variants || []).map((v) => v.size || "free"));
//     return [...set];
//   }, [product]);

//   // Stock per individual size, for the chosen color — drives disabled pill state
//   const stockForSize = (size) => {
//     const v = product?.variants?.find(
//       (v) => (v.color || "default") === (selectedColor || "default") && (v.size || "free") === (size || "free")
//     );
//     return Number(v?.stock ?? 0);
//   };

//   const chosen =
//     product?.variants?.find(
//       (v) =>
//         (v.color || "default") === (selectedColor || "default") &&
//         (v.size || "free") === (selectedSize || "free")
//     ) || null;

//   const stock = Number(chosen?.stock ?? 0);
//   const sizeRequired =
//     sizes.length > 0 && !["free", "one size", "onesize", "free size"].includes((sizes[0] || "").toLowerCase());
//   const canBuy = (!sizeRequired || !!selectedSize) && stock > 0;

//   const discountPct = product?.oldPrice
//     ? Math.max(0, Math.round(100 - (product.price / product.oldPrice) * 100))
//     : 0;

//   const images = product?.images || [];

//   const add = async () => {
//     if (sizeRequired && !selectedSize) {
//       setError("Please select a size");
//       toast.error("Please select a size");
//       return;
//     }
//     setError("");
//     setAddLoading(true);
//     try {
//       dispatch(
//         addToCart({
//           ...product,
//           sku: chosen?.sku || product?.variants?.[0]?.sku || "SKU",
//           size: selectedSize || "free",
//           color: selectedColor || "default",
//           qty,
//         })
//       );
//       toast.success("Added to cart 🛒");
//     } finally {
//       setAddLoading(false);
//     }
//   };

//   const buy = async () => {
//     if (sizeRequired && !selectedSize) {
//       setError("Please select a size");
//       toast.error("Please select a size");
//       return;
//     }
//     if ((chosen?.stock ?? 0) <= 0) return;
//     setBuyLoading(true);
//     try {
//       await add();
//       nav("/checkout");
//     } finally {
//       setBuyLoading(false);
//     }
//   };

//   const checkPincode = async () => {
//     if (!/^\d{6}$/.test(pincode)) {
//       setPincodeStatus("fail");
//       return;
//     }
//     setPincodeStatus("checking");
//     // Simulated delivery check — wire to a real serviceability endpoint
//     // when available; this keeps the UI functional in the meantime.
//     await new Promise((r) => setTimeout(r, 700));
//     setPincodeStatus("ok");
//   };

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setZoomPos({ x, y });
//   };

//   const deliveryDate = useMemo(() => {
//     const d = new Date();
//     d.setDate(d.getDate() + 4);
//     return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
//   }, [pincodeStatus]);

//   if (error && !product && !loading) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-20 text-center">
//         <p className="text-[#8C3A2E] font-medium">{error}</p>
//         <button
//           onClick={() => nav(-1)}
//           className="mt-4 text-sm text-[#AD8A4D] font-semibold hover:text-[#8C3A2E] transition-colors"
//         >
//           ← Go back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 bg-[#F7F4EE] min-h-screen font-sans">
//       {loading ? (
//         <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-8">
//           <GallerySkeleton />
//           <InfoSkeleton />
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr_280px] gap-8">
//             {/* ============ GALLERY ============ */}
//             <div className="grid grid-cols-[72px_1fr] gap-3">
//               <div className="flex flex-col gap-2 max-h-[520px] overflow-y-auto pr-0.5">
//                 {images.map((src, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActive(i)}
//                     className={`group relative shrink-0 w-[72px] h-[72px] rounded-md overflow-hidden transition-all duration-200 ${
//                       active === i
//                         ? "ring-2 ring-offset-2 ring-offset-[#F7F4EE] ring-[#15171c]"
//                         : "ring-1 ring-[#15171c]/10 hover:ring-[#AD8A4D]/60"
//                     }`}
//                   >
//                     <img
//                       src={imgUrl(src)}
//                       alt={`${product.title} thumbnail ${i + 1}`}
//                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </button>
//                 ))}
//               </div>

//               <div className="relative">
//                 <div
//                   className="relative aspect-square rounded-xl border border-[#15171c]/10 bg-white overflow-hidden cursor-zoom-in shadow-[0_1px_2px_rgba(21,23,28,0.04)]"
//                   onMouseEnter={() => setZoomActive(true)}
//                   onMouseLeave={() => setZoomActive(false)}
//                   onMouseMove={handleMouseMove}
//                   onClick={() => setFullscreenOpen(true)}
//                 >
//                   {images[active] ? (
//                     <img
//                       key={active}
//                       src={imgUrl(images[active])}
//                       alt={product.title}
//                       className="w-full h-full object-contain transition-transform duration-300 ease-out animate-[fadeScale_.35s_ease-out]"
//                       style={
//                         zoomActive
//                           ? { transform: "scale(1.9)", transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
//                           : undefined
//                       }
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center text-[#15171c]/40 text-sm">
//                       No Image
//                     </div>
//                   )}

//                   {/* Wishlist heart */}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setWished((w) => !w);
//                     }}
//                     aria-label="Add to wishlist"
//                     className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 active:scale-90 ${
//                       wished ? "bg-[#8C3A2E] text-white scale-105" : "bg-white text-[#15171c]/60 hover:text-[#8C3A2E]"
//                     }`}
//                   >
//                     <HeartIcon filled={wished} className="w-[18px] h-[18px]" />
//                   </button>

//                   {discountPct > 0 && (
//                     <span className="absolute top-3 left-3 bg-[#15171c] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm animate-[pulseGlow_2.4s_ease-in-out_infinite]">
//                       {discountPct}% OFF
//                     </span>
//                   )}

//                   {/* image position dots, mobile-friendly */}
//                   {images.length > 1 && (
//                     <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
//                       {images.map((_, i) => (
//                         <span
//                           key={i}
//                           className={`h-1.5 rounded-full transition-all duration-200 ${
//                             i === active ? "w-4 bg-[#15171c]" : "w-1.5 bg-[#15171c]/25"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <p className="text-center text-[11px] text-[#15171c]/40 mt-2 select-none">Tap image to view full screen</p>
//               </div>
//             </div>

//             {/* ============ INFO ============ */}
//             <div>
//               <div className="flex items-center gap-2 text-[12px] font-semibold tracking-wide text-[#15171c]/50 uppercase">
//                 <span className="bg-[#15171c]/[0.05] px-2 py-0.5 rounded-full">{product.brand}</span>
//                 <span className="text-[#15171c]/30">•</span>
//                 <span>{(product.category || "").toUpperCase()}</span>
//               </div>

//               <h1 className="text-[28px] sm:text-[32px] font-bold text-[#15171c] tracking-tight leading-tight mt-2 mb-3">
//                 {product.title}
//               </h1>

//               <div className="flex items-center gap-2.5 mb-4">
//                 <StarRow value={product.ratingAvg || 0} />
//                 <span className="text-[13px] font-semibold text-[#15171c]">{(product.ratingAvg || 0).toFixed(1)}</span>
//                 <span className="text-[13px] text-[#15171c]/45">({product.ratingCount || 0} ratings)</span>
//               </div>

//               <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-[#15171c]/10">
//                 <span className="text-[34px] font-bold text-[#15171c] tracking-tight">₹{product.price}</span>
//                 {product.oldPrice && (
//                   <span className="text-[16px] text-[#15171c]/40 line-through">₹{product.oldPrice}</span>
//                 )}
//                 {discountPct > 0 && (
//                   <span className="text-[15px] font-bold text-[#1f7a4d]">{discountPct}% off</span>
//                 )}
//               </div>

//               {/* Color swatches */}
//               {colors.length > 0 && (
//                 <div className="mb-6">
//                   <div className="text-[13px] font-semibold text-[#15171c] mb-2.5">
//                     Color {selectedColor && selectedColor !== "default" && (
//                       <span className="text-[#15171c]/45 font-normal capitalize">— {selectedColor}</span>
//                     )}
//                   </div>
//                   <div className="flex gap-3 flex-wrap">
//                     {colors.map((c) => (
//                       <div key={c} className="relative">
//                         <button
//                           onClick={() => setSelectedColor(c)}
//                           onMouseEnter={() => setHoverColor(c)}
//                           onMouseLeave={() => setHoverColor(null)}
//                           className={`w-10 h-10 rounded-full p-[3px] transition-all duration-200 ${
//                             selectedColor === c
//                               ? "ring-2 ring-[#15171c] ring-offset-2 ring-offset-[#F7F4EE] scale-105"
//                               : "ring-1 ring-[#15171c]/15 hover:ring-[#AD8A4D] hover:scale-105"
//                           }`}
//                         >
//                           <span
//                             className="block w-full h-full rounded-full shadow-inner"
//                             style={{
//                               background: c === "default" ? "#f3f4f6" : c,
//                               boxShadow: "inset 0 0 0 1px rgba(21,23,28,0.08), inset 0 -2px 4px rgba(255,255,255,0.4)",
//                             }}
//                           />
//                         </button>
//                         {hoverColor === c && (
//                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#15171c] text-white text-[11px] font-medium px-2 py-1 rounded-md whitespace-nowrap capitalize pointer-events-none animate-[fadeIn_.15s_ease-out]">
//                             {c}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Size pills */}
//               {sizes.length > 0 && (
//                 <div className="mb-6">
//                   <div className="flex items-center justify-between mb-2.5">
//                     <div className="text-[13px] font-semibold text-[#15171c]">Size</div>
//                     <button
//                       onClick={() => setShowGuide(true)}
//                       className="text-[12px] text-[#AD8A4D] hover:text-[#8C3A2E] font-medium transition-colors underline-offset-2 hover:underline"
//                     >
//                       Size Chart
//                     </button>
//                   </div>
//                   <div className="flex flex-wrap gap-2.5">
//                     {sizes.map((s) => {
//                       const oos = stockForSize(s) <= 0;
//                       const isActive = selectedSize === s;
//                       return (
//                         <button
//                           key={s}
//                           disabled={oos}
//                           onClick={() => setSelectedSize(s)}
//                           className={`relative px-5 py-2.5 text-[13px] font-semibold rounded-full border transition-all duration-200 ${
//                             oos
//                               ? "bg-[#15171c]/[0.03] text-[#15171c]/30 border-[#15171c]/10 cursor-not-allowed line-through"
//                               : isActive
//                               ? "bg-[#15171c] text-white border-[#15171c] shadow-[0_0_0_3px_rgba(21,23,28,0.12)] scale-[1.04]"
//                               : "bg-white text-[#15171c] border-[#15171c]/15 hover:border-[#AD8A4D] hover:scale-[1.02]"
//                           }`}
//                         >
//                           {String(s).toUpperCase()}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               {/* Smart features */}
//               <div className="space-y-3 mb-2">
//                 <div className="rounded-xl border border-[#AD8A4D]/25 bg-gradient-to-br from-[#AD8A4D]/[0.06] to-transparent p-4">
//                   <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#AD8A4D] uppercase tracking-wide mb-2">
//                     <SparkleIcon className="w-3.5 h-3.5" />
//                     AI Size Match
//                   </div>
//                   <SizeAdvisor product={product} selectedSize={selectedSize} onPick={(sz) => setSelectedSize(sz)} />
//                 </div>

//                 <div className="rounded-xl border border-[#15171c]/10 bg-white p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-[11px] font-bold text-[#15171c] uppercase tracking-wide">Virtual Try-On</span>
//                     <span className="text-[10px] font-bold text-white bg-[#15171c] px-2 py-0.5 rounded-full">PREMIUM</span>
//                   </div>
//                   <VirtualTryOn product={product} />
//                 </div>
//               </div>

//               {/* Quantity + actions */}
//               <div className="flex flex-wrap items-center gap-3 mt-6" id="pd-actions">
//                 <div className="inline-flex items-center border border-[#15171c]/15 rounded-full overflow-hidden bg-white">
//                   <button
//                     onClick={() => setQty((q) => Math.max(1, q - 1))}
//                     className="w-10 h-10 flex items-center justify-center text-[#15171c] hover:bg-[#F7F4EE] active:scale-90 transition-all"
//                   >
//                     −
//                   </button>
//                   <input
//                     inputMode="numeric"
//                     value={qty}
//                     onChange={(e) => {
//                       const val = Number(e.target.value);
//                       setQty(Number.isFinite(val) && val > 0 ? Math.floor(val) : 1);
//                     }}
//                     className="w-12 text-center text-sm font-semibold text-[#15171c] outline-none bg-transparent"
//                   />
//                   <button
//                     onClick={() => setQty((q) => q + 1)}
//                     className="w-10 h-10 flex items-center justify-center text-[#15171c] hover:bg-[#F7F4EE] active:scale-90 transition-all"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <button
//                   onClick={add}
//                   disabled={!canBuy || addLoading}
//                   className="relative overflow-hidden flex-1 sm:flex-none min-w-[150px] bg-[#15171c] text-white font-semibold text-sm rounded-full py-3 px-6
//                     transition-all duration-200 hover:bg-[#2a2d36] active:scale-[0.97] hover:shadow-lg
//                     disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {addLoading && <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />}
//                   ADD TO CART
//                 </button>

//                 <button
//                   onClick={buy}
//                   disabled={!canBuy || buyLoading}
//                   className="relative overflow-hidden flex-1 sm:flex-none min-w-[150px] text-white font-semibold text-sm rounded-full py-3 px-6
//                     bg-gradient-to-r from-[#8C3A2E] to-[#b5503f]
//                     transition-all duration-200 hover:shadow-lg hover:shadow-[#8C3A2E]/30 active:scale-[0.97]
//                     disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {buyLoading && <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />}
//                   BUY NOW
//                 </button>
//               </div>

//               <p className="text-[13px] text-[#15171c]/60 mt-3">
//                 {canBuy
//                   ? stock <= 5
//                     ? <span className="text-[#8C3A2E] font-semibold">⚡ Only {stock} left — order soon</span>
//                     : `In stock: ${stock}`
//                   : stock <= 0
//                   ? <span className="text-[#8C3A2E] font-semibold">Out of stock</span>
//                   : "Select size"}
//               </p>

//               {error && <p className="text-[#8C3A2E] text-sm mt-2">{error}</p>}

//               {/* Delivery / pincode check */}
//               <div className="mt-7 rounded-xl border border-[#15171c]/10 bg-white p-4">
//                 <div className="text-[13px] font-semibold text-[#15171c] mb-3">Check Delivery</div>
//                 <div className="flex gap-2 max-w-sm">
//                   <div className="flex-1">
//                     <input
//                       value={pincode}
//                       onChange={(e) => {
//                         setPincode(e.target.value.replace(/\D/g, "").slice(0, 6));
//                         setPincodeStatus(null);
//                       }}
//                       placeholder="Enter pincode"
//                       className="w-full px-1 py-2 text-sm bg-transparent border-b-2 border-[#15171c]/15
//                         outline-none transition-colors duration-200 focus:border-[#AD8A4D]"
//                     />
//                   </div>
//                   <button
//                     onClick={checkPincode}
//                     className="px-4 py-2 text-sm font-semibold rounded-md border border-[#15171c]/15 text-[#15171c]
//                       hover:border-[#AD8A4D] hover:text-[#AD8A4D] transition-colors active:scale-95"
//                   >
//                     Check
//                   </button>
//                 </div>
//                 {pincodeStatus === "checking" && (
//                   <p className="text-[12px] text-[#15171c]/50 mt-2">Checking…</p>
//                 )}
//                 {pincodeStatus === "ok" && (
//                   <div className="mt-3 flex items-start gap-2 bg-[#1f7a4d]/[0.07] border border-[#1f7a4d]/20 rounded-lg px-3 py-2.5 animate-[fadeIn_.25s_ease-out]">
//                     <span className="text-[#1f7a4d] mt-0.5">
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                         <path d="M5 13l4 4L19 7" />
//                       </svg>
//                     </span>
//                     <div>
//                       <p className="text-[12.5px] text-[#1f7a4d] font-semibold">Delivery available to {pincode}</p>
//                       <p className="text-[12px] text-[#15171c]/55">Arriving by {deliveryDate}</p>
//                     </div>
//                   </div>
//                 )}
//                 {pincodeStatus === "fail" && (
//                   <p className="text-[12px] text-[#8C3A2E] font-medium mt-2">Enter a valid 6-digit pincode</p>
//                 )}
//               </div>

//               {/* Offers */}
//               <div className="mt-6">
//                 <div className="text-[13px] font-semibold text-[#15171c] mb-2">Offers</div>
//                 <ul className="space-y-1.5 text-sm text-[#15171c]/70">
//                   <li className="flex items-center gap-2">
//                     <span className="text-[#1f7a4d]">✓</span> Free returns within 7 days
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-[#1f7a4d]">✓</span> Cash on Delivery available
//                   </li>
//                 </ul>
//               </div>

//               {/* Trust badges */}
//               <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[#15171c]/10">
//                 {[
//                   { icon: "↺", label: "7-Day Returns" },
//                   { icon: "🔒", label: "Secure Payment" },
//                   { icon: "✓", label: "100% Authentic" },
//                 ].map((b) => (
//                   <div key={b.label} className="flex flex-col items-center text-center gap-1.5">
//                     <span className="text-lg">{b.icon}</span>
//                     <span className="text-[11px] text-[#15171c]/60 font-medium">{b.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ============ DESKTOP STICKY SIDE CTA PANEL ============ */}
//             <div className="hidden lg:block">
//               <div className="sticky top-6 rounded-xl border border-[#15171c]/10 bg-white p-5 shadow-[0_8px_24px_rgba(21,23,28,0.05)]">
//                 <p className="text-[12px] text-[#15171c]/50 font-medium mb-1 truncate">{product.title}</p>
//                 <div className="flex items-baseline gap-2 mb-4">
//                   <span className="text-[24px] font-bold text-[#15171c]">₹{product.price}</span>
//                   {discountPct > 0 && <span className="text-[12px] font-bold text-[#1f7a4d]">{discountPct}% off</span>}
//                 </div>
//                 <button
//                   onClick={buy}
//                   disabled={!canBuy || buyLoading}
//                   className="w-full text-white font-semibold text-sm rounded-full py-3 mb-2.5
//                     bg-gradient-to-r from-[#8C3A2E] to-[#b5503f]
//                     transition-all duration-200 hover:shadow-lg hover:shadow-[#8C3A2E]/30 active:scale-[0.97]
//                     disabled:opacity-40 disabled:cursor-not-allowed"
//                 >
//                   BUY NOW
//                 </button>
//                 <button
//                   onClick={add}
//                   disabled={!canBuy || addLoading}
//                   className="w-full bg-[#15171c] text-white font-semibold text-sm rounded-full py-3
//                     transition-all duration-200 hover:bg-[#2a2d36] active:scale-[0.97]
//                     disabled:opacity-40 disabled:cursor-not-allowed"
//                 >
//                   ADD TO CART
//                 </button>
//                 <div className="mt-4 pt-4 border-t border-[#15171c]/10 space-y-2 text-[12px] text-[#15171c]/60">
//                   <div className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> Free 7-day returns</div>
//                   <div className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> Cash on Delivery</div>
//                   <div className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> 100% Authentic</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ============ AI Review Summary ============ */}
//           <div className="bg-white border border-[#15171c]/10 rounded-xl p-5 mt-10">
//             <div className="flex items-center gap-1.5 mb-3">
//               <SparkleIcon className="w-4 h-4 text-[#AD8A4D]" />
//               <h3 className="text-[15px] font-semibold text-[#15171c]">AI Review Summary</h3>
//             </div>
//             <ReviewSummary id={product._id} />
//           </div>

//           {/* ============ Reviews filter bar ============ */}
//           <div className="bg-white border border-[#15171c]/10 rounded-xl p-5 mt-6">
//             <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
//               <h3 className="text-[15px] font-semibold text-[#15171c]">Customer Reviews</h3>
//               <div className="flex gap-2">
//                 {[
//                   { key: "recent", label: "Most Recent" },
//                   { key: "5", label: "5★" },
//                   { key: "4", label: "4★" },
//                 ].map((f) => (
//                   <button
//                     key={f.key}
//                     onClick={() => setReviewFilter(f.key)}
//                     className={`px-3 py-1.5 text-[12px] font-semibold rounded-full border transition-all duration-150 ${
//                       reviewFilter === f.key
//                         ? "bg-[#15171c] text-white border-[#15171c]"
//                         : "bg-white text-[#15171c]/70 border-[#15171c]/15 hover:border-[#AD8A4D]"
//                     }`}
//                   >
//                     {f.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <p className="text-[12.5px] text-[#15171c]/45">
//               Filter applies to reviews rendered by the review list component — wire {`{reviewFilter}`} through once that endpoint supports it.
//             </p>
//           </div>

//           {/* ============ Similar / Frequently bought ============ */}
//           <div className="bg-white border border-[#15171c]/10 rounded-xl p-5 mt-6">
//             <h3 className="text-[15px] font-semibold text-[#15171c] mb-3">Similar Products</h3>
//             <RecoRail product={product} />
//           </div>

//           {/* ============ Mobile accordions ============ */}
//           <div className="lg:hidden bg-white border border-[#15171c]/10 rounded-xl px-5 mt-6">
//             <Collapsible title="Offers" defaultOpen>
//               <ul className="space-y-1.5 text-sm text-[#15171c]/70">
//                 <li className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> Free returns within 7 days</li>
//                 <li className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> Cash on Delivery available</li>
//               </ul>
//             </Collapsible>
//             <Collapsible title="Delivery & Returns">
//               <p className="text-sm text-[#15171c]/70">Use the delivery check above to confirm an estimate for your pincode. Returns are accepted within 7 days, unused and with tags attached.</p>
//             </Collapsible>
//             <Collapsible title="Care Instructions">
//               <p className="text-sm text-[#15171c]/70">Refer to the product label for fabric-specific washing and care guidance.</p>
//             </Collapsible>
//           </div>
//         </>
//       )}

//       {/* ============ Sticky mobile CTA bar ============ */}
//       {!loading && product && showStickyBar && (
//         <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-[#15171c]/10 shadow-[0_-8px_24px_rgba(21,23,28,0.08)] lg:hidden animate-[slideUp_.25s_ease-out]">
//           <div className="flex items-center gap-3 px-4 py-3">
//             <div className="flex-1 min-w-0">
//               <div className="text-[13px] font-medium text-[#15171c] truncate">{product.title}</div>
//               <div className="text-[14px] font-bold text-[#15171c]">₹{product.price}</div>
//             </div>
//             <button
//               onClick={add}
//               disabled={!canBuy}
//               className="bg-[#15171c] text-white text-[12px] font-semibold rounded-full px-4 py-2.5 disabled:opacity-40 active:scale-95 transition-transform"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={buy}
//               disabled={!canBuy}
//               className="bg-gradient-to-r from-[#8C3A2E] to-[#b5503f] text-white text-[12px] font-semibold rounded-full px-4 py-2.5 disabled:opacity-40 active:scale-95 transition-transform"
//             >
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ============ Size guide modal ============ */}
//       {showGuide && (
//         <div
//           className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 animate-[fadeIn_.15s_ease-out]"
//           onClick={() => setShowGuide(false)}
//         >
//           <div
//             className="bg-white rounded-xl p-5 w-full max-w-[520px] animate-[fadeScale_.2s_ease-out]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h3 className="text-[16px] font-semibold text-[#15171c] mb-3">Size Guide</h3>
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="text-left text-[#15171c]/50 border-b border-[#15171c]/10">
//                   <th className="py-2">Size</th>
//                   <th className="py-2">Chest (in)</th>
//                   <th className="py-2">Length (in)</th>
//                 </tr>
//               </thead>
//               <tbody className="text-[#15171c]">
//                 <tr className="border-b border-[#15171c]/5"><td className="py-2">S</td><td>36-38</td><td>26</td></tr>
//                 <tr className="border-b border-[#15171c]/5"><td className="py-2">M</td><td>38-40</td><td>27</td></tr>
//                 <tr className="border-b border-[#15171c]/5"><td className="py-2">L</td><td>40-42</td><td>28</td></tr>
//                 <tr><td className="py-2">XL</td><td>42-44</td><td>29</td></tr>
//               </tbody>
//             </table>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={() => setShowGuide(false)}
//                 className="bg-[#15171c] text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-[#2a2d36] transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ============ Fullscreen image viewer ============ */}
//       {fullscreenOpen && images[active] && (
//         <div
//           className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 animate-[fadeIn_.15s_ease-out]"
//           onClick={() => setFullscreenOpen(false)}
//         >
//           <button
//             onClick={() => setFullscreenOpen(false)}
//             className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
//             aria-label="Close"
//           >
//             ✕
//           </button>
//           {images.length > 1 && (
//             <>
//               <button
//                 onClick={(e) => { e.stopPropagation(); setActive((a) => (a - 1 + images.length) % images.length); }}
//                 className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
//               >
//                 ‹
//               </button>
//               <button
//                 onClick={(e) => { e.stopPropagation(); setActive((a) => (a + 1) % images.length); }}
//                 className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
//               >
//                 ›
//               </button>
//             </>
//           )}
//           <img
//             src={imgUrl(images[active])}
//             alt={product.title}
//             className="max-h-[90vh] max-w-[92vw] object-contain animate-[fadeScale_.2s_ease-out]"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}

//       {/* ============ keyframes (scoped, no external animation lib required) ============ */}
//       <style>{`
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes fadeScale { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
//         @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
//         @keyframes pulseGlow {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(21,23,28,0.0); }
//           50% { box-shadow: 0 0 0 4px rgba(21,23,28,0.12); }
//         }
//       `}</style>
//     </div>
//   );
// }




// frontend/src/pages/ProductDetail.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import http from "../api/http.js";
import { addToCart } from "../store/cartSlice.js";
import RecoRail from "../components/RecoRail.jsx";
import ReviewSummary from "../components/ReviewSummary.jsx";
import SizeAdvisor from "../components/SizeAdvisor.jsx";
import VirtualTryOn from "../components/VirtualTryOn.jsx";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";
const imgUrl = (src) => (src?.startsWith("/uploads") ? `${API_BASE}${src}` : (src || ""));

/* ============================================================
   Design tokens (kept consistent with the brand palette already
   in use elsewhere in the app — extended with a couple of
   derived tints for premium surfaces / gradients).
   ============================================================ */
const INK = "#15171c";
const SAND = "#F7F4EE";
const GOLD = "#AD8A4D";
const RUST = "#8C3A2E";
const GREEN = "#1f7a4d";

/* ---------- skeletons ---------- */

function GallerySkeleton() {
  return (
    <div className="grid grid-cols-[72px_1fr] gap-3">
      <div className="flex flex-col gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-[72px] h-[72px] rounded-md bg-[#15171c]/10 animate-pulse" />
        ))}
      </div>
      <div className="aspect-square rounded-xl bg-gradient-to-br from-[#15171c]/10 via-[#15171c]/5 to-[#15171c]/10 animate-pulse" />
    </div>
  );
}

function InfoSkeleton() {
  return (
    <div className="space-y-3">
      <div className="h-3 w-1/3 bg-[#15171c]/10 rounded animate-pulse" />
      <div className="h-7 w-2/3 bg-[#15171c]/10 rounded animate-pulse" />
      <div className="h-4 w-1/4 bg-[#15171c]/10 rounded animate-pulse" />
      <div className="h-8 w-1/3 bg-[#15171c]/10 rounded animate-pulse" />
      <div className="h-24 w-full bg-[#15171c]/10 rounded animate-pulse mt-6" />
    </div>
  );
}

/* ---------- icons ---------- */

const HeartIcon = ({ filled, ...props }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M12 20s-7-4.4-9.3-8.8C1.3 8 2.7 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.3 0 4.7 3 3.3 6.2C19 15.6 12 20 12 20Z" />
  </svg>
);

const StarIcon = ({ fill = 1, size = 14 }) => {
  const id = useRef(`star-${Math.random().toString(36).slice(2)}`).current;
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="#FFC23C" />
          <stop offset={`${fill * 100}%`} stopColor="#E4E1D8" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.5z"
      />
    </svg>
  );
};

function StarRow({ value = 0, size = 14 }) {
  return (
    <div className="flex items-center gap-[2px]" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return <StarIcon key={i} fill={fill} size={size} />;
      })}
    </div>
  );
}

const ChevronIcon = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SparkleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2zM19 14l.8 2.6L22.4 17.4 19.8 18.2 19 21l-.8-2.8-2.6-.8 2.6-.8L19 14z" />
  </svg>
);

/* ---------- collapsible section, used for mobile accordions ---------- */

function Collapsible({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#15171c]/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[14px] font-semibold text-[#15171c]">{title}</span>
        <span className="text-[#15171c]/50"><ChevronIcon open={open} /></span>
      </button>
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
        style={{ maxHeight: open ? 1000 : 0, opacity: open ? 1 : 0 }}
      >
        <div className="pb-4">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [showGuide, setShowGuide] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Bonus features — local UI state only, no backend contract assumed
  const [wished, setWished] = useState(false);
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState(null); // null | "checking" | "ok" | "fail"
  const [addLoading, setAddLoading] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [hoverColor, setHoverColor] = useState(null);
  const [reviewFilter, setReviewFilter] = useState("recent"); // recent | 5 | 4

  // Decide desktop vs mobile in JS rather than relying solely on Tailwind's
  // `lg:` breakpoint classes — guards against build/config issues (e.g. this
  // file not being picked up by the Tailwind content glob, or a stale dev
  // build) which otherwise cause the desktop buy-box to render squeezed
  // alongside the info column on narrow screens.
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError("");
        const { data } = await http.get(`/api/products/${id}`);
        if (!mounted) return;
        setProduct(data);
        const first = data?.variants?.[0];
        setSelectedColor(first?.color || "default");
        setSelectedSize(first?.size || (data?.variants?.length ? "" : "free"));
      } catch (e) {
        if (!mounted) return;
        setError("Product load failed");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  // Sticky CTA bar appears once the user scrolls past the main actions area
  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc closes the fullscreen viewer
  useEffect(() => {
    if (!fullscreenOpen) return;
    const onKey = (e) => e.key === "Escape" && setFullscreenOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fullscreenOpen]);

  const colors = useMemo(() => {
    const set = new Set((product?.variants || []).map((v) => v.color || "default"));
    return [...set];
  }, [product]);

  const sizes = useMemo(() => {
    const set = new Set((product?.variants || []).map((v) => v.size || "free"));
    return [...set];
  }, [product]);

  // Stock per individual size, for the chosen color — drives disabled pill state
  const stockForSize = (size) => {
    const v = product?.variants?.find(
      (v) => (v.color || "default") === (selectedColor || "default") && (v.size || "free") === (size || "free")
    );
    return Number(v?.stock ?? 0);
  };

  const chosen =
    product?.variants?.find(
      (v) =>
        (v.color || "default") === (selectedColor || "default") &&
        (v.size || "free") === (selectedSize || "free")
    ) || null;

  const stock = Number(chosen?.stock ?? 0);
  const sizeRequired =
    sizes.length > 0 && !["free", "one size", "onesize", "free size"].includes((sizes[0] || "").toLowerCase());
  const canBuy = (!sizeRequired || !!selectedSize) && stock > 0;

  const discountPct = product?.oldPrice
    ? Math.max(0, Math.round(100 - (product.price / product.oldPrice) * 100))
    : 0;

  const images = product?.images || [];

  const add = async () => {
    if (sizeRequired && !selectedSize) {
      setError("Please select a size");
      toast.error("Please select a size");
      return;
    }
    setError("");
    setAddLoading(true);
    try {
      dispatch(
        addToCart({
          ...product,
          sku: chosen?.sku || product?.variants?.[0]?.sku || "SKU",
          size: selectedSize || "free",
          color: selectedColor || "default",
          qty,
        })
      );
      toast.success("Added to cart 🛒");
    } finally {
      setAddLoading(false);
    }
  };

  const buy = async () => {
    if (sizeRequired && !selectedSize) {
      setError("Please select a size");
      toast.error("Please select a size");
      return;
    }
    if ((chosen?.stock ?? 0) <= 0) return;
    setBuyLoading(true);
    try {
      await add();
      nav("/checkout");
    } finally {
      setBuyLoading(false);
    }
  };

  const checkPincode = async () => {
    if (!/^\d{6}$/.test(pincode)) {
      setPincodeStatus("fail");
      return;
    }
    setPincodeStatus("checking");
    // Simulated delivery check — wire to a real serviceability endpoint
    // when available; this keeps the UI functional in the meantime.
    await new Promise((r) => setTimeout(r, 700));
    setPincodeStatus("ok");
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const deliveryDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 4);
    return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  }, [pincodeStatus]);

  if (error && !product && !loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-[#8C3A2E] font-medium">{error}</p>
        <button
          onClick={() => nav(-1)}
          className="mt-4 text-sm text-[#AD8A4D] font-semibold hover:text-[#8C3A2E] transition-colors"
        >
          ← Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 bg-[#F7F4EE] min-h-screen font-sans">
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-8">
          <GallerySkeleton />
          <InfoSkeleton />
        </div>
      ) : (
        <>
          <div
            className="grid gap-6 sm:gap-8"
            style={
              isDesktop
                ? { gridTemplateColumns: "520px 1fr 280px" }
                : { gridTemplateColumns: "1fr" }
            }
          >
            {/* ============ GALLERY ============ */}
            <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr] gap-2.5 sm:gap-3">
              <div className="flex flex-col gap-2 max-h-[520px] overflow-y-auto pr-0.5">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`group relative shrink-0 w-[72px] h-[72px] rounded-md overflow-hidden transition-all duration-200 ${
                      active === i
                        ? "ring-2 ring-offset-2 ring-offset-[#F7F4EE] ring-[#15171c]"
                        : "ring-1 ring-[#15171c]/10 hover:ring-[#AD8A4D]/60"
                    }`}
                  >
                    <img
                      src={imgUrl(src)}
                      alt={`${product.title} thumbnail ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              <div className="relative">
                <div
                  className="relative aspect-square rounded-xl border border-[#15171c]/10 bg-white overflow-hidden cursor-zoom-in shadow-[0_1px_2px_rgba(21,23,28,0.04)]"
                  onMouseEnter={() => setZoomActive(true)}
                  onMouseLeave={() => setZoomActive(false)}
                  onMouseMove={handleMouseMove}
                  onClick={() => setFullscreenOpen(true)}
                >
                  {images[active] ? (
                    <img
                      key={active}
                      src={imgUrl(images[active])}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-300 ease-out animate-[fadeScale_.35s_ease-out]"
                      style={
                        zoomActive
                          ? { transform: "scale(1.9)", transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
                          : undefined
                      }
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#15171c]/40 text-sm">
                      No Image
                    </div>
                  )}

                  {/* Wishlist heart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setWished((w) => !w);
                    }}
                    aria-label="Add to wishlist"
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 active:scale-90 ${
                      wished ? "bg-[#8C3A2E] text-white scale-105" : "bg-white text-[#15171c]/60 hover:text-[#8C3A2E]"
                    }`}
                  >
                    <HeartIcon filled={wished} className="w-[18px] h-[18px]" />
                  </button>

                  {discountPct > 0 && (
                    <span className="absolute top-3 left-3 bg-[#15171c] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm animate-[pulseGlow_2.4s_ease-in-out_infinite]">
                      {discountPct}% OFF
                    </span>
                  )}

                  {/* image position dots, mobile-friendly */}
                  {images.length > 1 && (
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                      {images.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-200 ${
                            i === active ? "w-4 bg-[#15171c]" : "w-1.5 bg-[#15171c]/25"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-center text-[11px] text-[#15171c]/40 mt-2 select-none">Tap image to view full screen</p>
              </div>
            </div>

            {/* ============ INFO ============ */}
            <div>
              <div className="flex items-center gap-2 text-[12px] font-semibold tracking-wide text-[#15171c]/50 uppercase">
                <span className="bg-[#15171c]/[0.05] px-2 py-0.5 rounded-full">{product.brand}</span>
                <span className="text-[#15171c]/30">•</span>
                <span>{(product.category || "").toUpperCase()}</span>
              </div>

              <h1 className="text-[28px] sm:text-[32px] font-bold text-[#15171c] tracking-tight leading-tight mt-2 mb-3">
                {product.title}
              </h1>

              <div className="flex items-center gap-2.5 mb-4">
                <StarRow value={product.ratingAvg || 0} />
                <span className="text-[13px] font-semibold text-[#15171c]">{(product.ratingAvg || 0).toFixed(1)}</span>
                <span className="text-[13px] text-[#15171c]/45">({product.ratingCount || 0} ratings)</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-[#15171c]/10">
                <span className="text-[34px] font-bold text-[#15171c] tracking-tight">₹{product.price}</span>
                {product.oldPrice && (
                  <span className="text-[16px] text-[#15171c]/40 line-through">₹{product.oldPrice}</span>
                )}
                {discountPct > 0 && (
                  <span className="text-[15px] font-bold text-[#1f7a4d]">{discountPct}% off</span>
                )}
              </div>

              {/* Color swatches */}
              {colors.length > 0 && (
                <div className="mb-6">
                  <div className="text-[13px] font-semibold text-[#15171c] mb-2.5">
                    Color {selectedColor && selectedColor !== "default" && (
                      <span className="text-[#15171c]/45 font-normal capitalize">— {selectedColor}</span>
                    )}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {colors.map((c) => (
                      <div key={c} className="relative">
                        <button
                          onClick={() => setSelectedColor(c)}
                          onMouseEnter={() => setHoverColor(c)}
                          onMouseLeave={() => setHoverColor(null)}
                          className={`w-10 h-10 rounded-full p-[3px] transition-all duration-200 ${
                            selectedColor === c
                              ? "ring-2 ring-[#15171c] ring-offset-2 ring-offset-[#F7F4EE] scale-105"
                              : "ring-1 ring-[#15171c]/15 hover:ring-[#AD8A4D] hover:scale-105"
                          }`}
                        >
                          <span
                            className="block w-full h-full rounded-full shadow-inner"
                            style={{
                              background: c === "default" ? "#f3f4f6" : c,
                              boxShadow: "inset 0 0 0 1px rgba(21,23,28,0.08), inset 0 -2px 4px rgba(255,255,255,0.4)",
                            }}
                          />
                        </button>
                        {hoverColor === c && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#15171c] text-white text-[11px] font-medium px-2 py-1 rounded-md whitespace-nowrap capitalize pointer-events-none animate-[fadeIn_.15s_ease-out]">
                            {c}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Size pills */}
              {sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="text-[13px] font-semibold text-[#15171c]">Size</div>
                    <button
                      onClick={() => setShowGuide(true)}
                      className="text-[12px] text-[#AD8A4D] hover:text-[#8C3A2E] font-medium transition-colors underline-offset-2 hover:underline"
                    >
                      Size Chart
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {sizes.map((s) => {
                      const oos = stockForSize(s) <= 0;
                      const isActive = selectedSize === s;
                      return (
                        <button
                          key={s}
                          disabled={oos}
                          onClick={() => setSelectedSize(s)}
                          className={`relative px-5 py-2.5 text-[13px] font-semibold rounded-full border transition-all duration-200 ${
                            oos
                              ? "bg-[#15171c]/[0.03] text-[#15171c]/30 border-[#15171c]/10 cursor-not-allowed line-through"
                              : isActive
                              ? "bg-[#15171c] text-white border-[#15171c] shadow-[0_0_0_3px_rgba(21,23,28,0.12)] scale-[1.04]"
                              : "bg-white text-[#15171c] border-[#15171c]/15 hover:border-[#AD8A4D] hover:scale-[1.02]"
                          }`}
                        >
                          {String(s).toUpperCase()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Smart features */}
              <div className="space-y-3 mb-2">
                <div className="rounded-xl border border-[#AD8A4D]/25 bg-gradient-to-br from-[#AD8A4D]/[0.06] to-transparent p-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#AD8A4D] uppercase tracking-wide mb-2">
                    <SparkleIcon className="w-3.5 h-3.5" />
                    AI Size Match
                  </div>
                  <SizeAdvisor product={product} selectedSize={selectedSize} onPick={(sz) => setSelectedSize(sz)} />
                </div>

                <div className="rounded-xl border border-[#15171c]/10 bg-white p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#15171c] uppercase tracking-wide">Virtual Try-On</span>
                    <span className="text-[10px] font-bold text-white bg-[#15171c] px-2 py-0.5 rounded-full">PREMIUM</span>
                  </div>
                  <VirtualTryOn product={product} />
                </div>
              </div>

              {/* Quantity + actions */}
              <div className="flex flex-wrap items-center gap-3 mt-6" id="pd-actions">
                <div className="inline-flex items-center border border-[#15171c]/15 rounded-full overflow-hidden bg-white">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-[#15171c] hover:bg-[#F7F4EE] active:scale-90 transition-all"
                  >
                    −
                  </button>
                  <input
                    inputMode="numeric"
                    value={qty}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setQty(Number.isFinite(val) && val > 0 ? Math.floor(val) : 1);
                    }}
                    className="w-12 text-center text-sm font-semibold text-[#15171c] outline-none bg-transparent"
                  />
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-[#15171c] hover:bg-[#F7F4EE] active:scale-90 transition-all"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={add}
                  disabled={!canBuy || addLoading}
                  className="relative overflow-hidden flex-1 sm:flex-none min-w-[150px] bg-[#15171c] text-white font-semibold text-sm rounded-full py-3 px-6
                    transition-all duration-200 hover:bg-[#2a2d36] active:scale-[0.97] hover:shadow-lg
                    disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {addLoading && <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />}
                  ADD TO CART
                </button>

                <button
                  onClick={buy}
                  disabled={!canBuy || buyLoading}
                  className="relative overflow-hidden flex-1 sm:flex-none min-w-[150px] text-white font-semibold text-sm rounded-full py-3 px-6
                    bg-gradient-to-r from-[#8C3A2E] to-[#b5503f]
                    transition-all duration-200 hover:shadow-lg hover:shadow-[#8C3A2E]/30 active:scale-[0.97]
                    disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {buyLoading && <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />}
                  BUY NOW
                </button>
              </div>

              <p className="text-[13px] text-[#15171c]/60 mt-3">
                {canBuy
                  ? stock <= 5
                    ? <span className="text-[#8C3A2E] font-semibold">⚡ Only {stock} left — order soon</span>
                    : `In stock: ${stock}`
                  : stock <= 0
                  ? <span className="text-[#8C3A2E] font-semibold">Out of stock</span>
                  : "Select size"}
              </p>

              {error && <p className="text-[#8C3A2E] text-sm mt-2">{error}</p>}

              {/* Delivery / pincode check */}
              <div className="mt-7 rounded-xl border border-[#15171c]/10 bg-white p-4">
                <div className="text-[13px] font-semibold text-[#15171c] mb-3">Check Delivery</div>
                <div className="flex gap-2 max-w-sm">
                  <div className="flex-1">
                    <input
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value.replace(/\D/g, "").slice(0, 6));
                        setPincodeStatus(null);
                      }}
                      placeholder="Enter pincode"
                      className="w-full px-1 py-2 text-sm bg-transparent border-b-2 border-[#15171c]/15
                        outline-none transition-colors duration-200 focus:border-[#AD8A4D]"
                    />
                  </div>
                  <button
                    onClick={checkPincode}
                    className="px-4 py-2 text-sm font-semibold rounded-md border border-[#15171c]/15 text-[#15171c]
                      hover:border-[#AD8A4D] hover:text-[#AD8A4D] transition-colors active:scale-95"
                  >
                    Check
                  </button>
                </div>
                {pincodeStatus === "checking" && (
                  <p className="text-[12px] text-[#15171c]/50 mt-2">Checking…</p>
                )}
                {pincodeStatus === "ok" && (
                  <div className="mt-3 flex items-start gap-2 bg-[#1f7a4d]/[0.07] border border-[#1f7a4d]/20 rounded-lg px-3 py-2.5 animate-[fadeIn_.25s_ease-out]">
                    <span className="text-[#1f7a4d] mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[12.5px] text-[#1f7a4d] font-semibold">Delivery available to {pincode}</p>
                      <p className="text-[12px] text-[#15171c]/55">Arriving by {deliveryDate}</p>
                    </div>
                  </div>
                )}
                {pincodeStatus === "fail" && (
                  <p className="text-[12px] text-[#8C3A2E] font-medium mt-2">Enter a valid 6-digit pincode</p>
                )}
              </div>

              {/* Offers */}
              <div className="mt-6">
                <div className="text-[13px] font-semibold text-[#15171c] mb-2">Offers</div>
                <ul className="space-y-1.5 text-sm text-[#15171c]/70">
                  <li className="flex items-center gap-2">
                    <span className="text-[#1f7a4d]">✓</span> Free returns within 7 days
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1f7a4d]">✓</span> Cash on Delivery available
                  </li>
                </ul>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[#15171c]/10">
                {[
                  { icon: "↺", label: "7-Day Returns" },
                  { icon: "🔒", label: "Secure Payment" },
                  { icon: "✓", label: "100% Authentic" },
                ].map((b) => (
                  <div key={b.label} className="flex flex-col items-center text-center gap-1.5">
                    <span className="text-lg">{b.icon}</span>
                    <span className="text-[11px] text-[#15171c]/60 font-medium">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ============ DESKTOP STICKY SIDE CTA PANEL ============ */}
            {isDesktop && (
              <div>
                <div className="sticky top-6 rounded-xl border border-[#15171c]/10 bg-white p-5 shadow-[0_8px_24px_rgba(21,23,28,0.05)]">
                <p className="text-[12px] text-[#15171c]/50 font-medium mb-1 truncate">{product.title}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[24px] font-bold text-[#15171c]">₹{product.price}</span>
                  {discountPct > 0 && <span className="text-[12px] font-bold text-[#1f7a4d]">{discountPct}% off</span>}
                </div>
                <button
                  onClick={buy}
                  disabled={!canBuy || buyLoading}
                  className="w-full text-white font-semibold text-sm rounded-full py-3 mb-2.5
                    bg-gradient-to-r from-[#8C3A2E] to-[#b5503f]
                    transition-all duration-200 hover:shadow-lg hover:shadow-[#8C3A2E]/30 active:scale-[0.97]
                    disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  BUY NOW
                </button>
                <button
                  onClick={add}
                  disabled={!canBuy || addLoading}
                  className="w-full bg-[#15171c] text-white font-semibold text-sm rounded-full py-3
                    transition-all duration-200 hover:bg-[#2a2d36] active:scale-[0.97]
                    disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ADD TO CART
                </button>
                <div className="mt-4 pt-4 border-t border-[#15171c]/10 space-y-2 text-[12px] text-[#15171c]/60">
                  <div className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> Free 7-day returns</div>
                  <div className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> Cash on Delivery</div>
                  <div className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> 100% Authentic</div>
                </div>
              </div>
            </div>
            )}
          </div>

          {/* ============ AI Review Summary ============ */}
          <div className="bg-white border border-[#15171c]/10 rounded-xl p-5 mt-10">
            <div className="flex items-center gap-1.5 mb-3">
              <SparkleIcon className="w-4 h-4 text-[#AD8A4D]" />
              <h3 className="text-[15px] font-semibold text-[#15171c]">AI Review Summary</h3>
            </div>
            <ReviewSummary id={product._id} />
          </div>

          {/* ============ Reviews filter bar ============ */}
          <div className="bg-white border border-[#15171c]/10 rounded-xl p-5 mt-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <h3 className="text-[15px] font-semibold text-[#15171c]">Customer Reviews</h3>
              <div className="flex gap-2">
                {[
                  { key: "recent", label: "Most Recent" },
                  { key: "5", label: "5★" },
                  { key: "4", label: "4★" },
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setReviewFilter(f.key)}
                    className={`px-3 py-1.5 text-[12px] font-semibold rounded-full border transition-all duration-150 ${
                      reviewFilter === f.key
                        ? "bg-[#15171c] text-white border-[#15171c]"
                        : "bg-white text-[#15171c]/70 border-[#15171c]/15 hover:border-[#AD8A4D]"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-[12.5px] text-[#15171c]/45">
              Filter applies to reviews rendered by the review list component — wire {`{reviewFilter}`} through once that endpoint supports it.
            </p>
          </div>

          {/* ============ Similar / Frequently bought ============ */}
          <div className="bg-white border border-[#15171c]/10 rounded-xl p-5 mt-6">
            <h3 className="text-[15px] font-semibold text-[#15171c] mb-3">Similar Products</h3>
            <RecoRail product={product} />
          </div>

          {/* ============ Mobile accordions ============ */}
          <div className="lg:hidden bg-white border border-[#15171c]/10 rounded-xl px-5 mt-6">
            <Collapsible title="Offers" defaultOpen>
              <ul className="space-y-1.5 text-sm text-[#15171c]/70">
                <li className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> Free returns within 7 days</li>
                <li className="flex items-center gap-2"><span className="text-[#1f7a4d]">✓</span> Cash on Delivery available</li>
              </ul>
            </Collapsible>
            <Collapsible title="Delivery & Returns">
              <p className="text-sm text-[#15171c]/70">Use the delivery check above to confirm an estimate for your pincode. Returns are accepted within 7 days, unused and with tags attached.</p>
            </Collapsible>
            <Collapsible title="Care Instructions">
              <p className="text-sm text-[#15171c]/70">Refer to the product label for fabric-specific washing and care guidance.</p>
            </Collapsible>
          </div>
        </>
      )}

      {/* ============ Sticky mobile CTA bar ============ */}
      {!loading && product && showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-[#15171c]/10 shadow-[0_-8px_24px_rgba(21,23,28,0.08)] lg:hidden animate-[slideUp_.25s_ease-out]">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-[#15171c] truncate">{product.title}</div>
              <div className="text-[14px] font-bold text-[#15171c]">₹{product.price}</div>
            </div>
            <button
              onClick={add}
              disabled={!canBuy}
              className="bg-[#15171c] text-white text-[12px] font-semibold rounded-full px-4 py-2.5 disabled:opacity-40 active:scale-95 transition-transform"
            >
              ADD TO CART
            </button>
            <button
              onClick={buy}
              disabled={!canBuy}
              className="bg-gradient-to-r from-[#8C3A2E] to-[#b5503f] text-white text-[12px] font-semibold rounded-full px-4 py-2.5 disabled:opacity-40 active:scale-95 transition-transform"
            >
              BUY NOW
            </button>
          </div>
        </div>
      )}

      {/* ============ Size guide modal ============ */}
      {showGuide && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 animate-[fadeIn_.15s_ease-out]"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="bg-white rounded-xl p-5 w-full max-w-[520px] animate-[fadeScale_.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-[16px] font-semibold text-[#15171c] mb-3">Size Guide</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[#15171c]/50 border-b border-[#15171c]/10">
                  <th className="py-2">Size</th>
                  <th className="py-2">Chest (in)</th>
                  <th className="py-2">Length (in)</th>
                </tr>
              </thead>
              <tbody className="text-[#15171c]">
                <tr className="border-b border-[#15171c]/5"><td className="py-2">S</td><td>36-38</td><td>26</td></tr>
                <tr className="border-b border-[#15171c]/5"><td className="py-2">M</td><td>38-40</td><td>27</td></tr>
                <tr className="border-b border-[#15171c]/5"><td className="py-2">L</td><td>40-42</td><td>28</td></tr>
                <tr><td className="py-2">XL</td><td>42-44</td><td>29</td></tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowGuide(false)}
                className="bg-[#15171c] text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-[#2a2d36] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============ Fullscreen image viewer ============ */}
      {fullscreenOpen && images[active] && (
        <div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 animate-[fadeIn_.15s_ease-out]"
          onClick={() => setFullscreenOpen(false)}
        >
          <button
            onClick={() => setFullscreenOpen(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setActive((a) => (a - 1 + images.length) % images.length); }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setActive((a) => (a + 1) % images.length); }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                ›
              </button>
            </>
          )}
          <img
            src={imgUrl(images[active])}
            alt={product.title}
            className="max-h-[90vh] max-w-[92vw] object-contain animate-[fadeScale_.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ============ keyframes (scoped, no external animation lib required) ============ */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeScale { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(21,23,28,0.0); }
          50% { box-shadow: 0 0 0 4px rgba(21,23,28,0.12); }
        }
      `}</style>
    </div>
  );
}