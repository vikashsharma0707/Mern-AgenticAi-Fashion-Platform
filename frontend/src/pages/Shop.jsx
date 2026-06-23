



// // // // src/pages/Shop.jsx
// // // import React, { useEffect, useMemo, useState } from "react";
// // // import http from "../api/http";
// // // import { useDispatch } from "react-redux";
// // // import { addToCart } from "../store/cartSlice";
// // // import { Link } from "react-router-dom";
// // // import "../assets/css/shop.css"; // make sure this exists (from my previous message)

// // // const priceRanges = [
// // //   { label: "Any", value: "any" },
// // //   { label: "Under ₹500", value: "u500", min: 0, max: 499 },
// // //   { label: "₹500 – ₹1000", value: "500_1000", min: 500, max: 1000 },
// // //   { label: "₹1000 – ₹2000", value: "1000_2000", min: 1000, max: 2000 },
// // //   { label: "₹2000+", value: "2000p", min: 2000 },
// // // ];

// // // const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "free"];

// // // export default function Shop() {
// // //   const [loading, setLoading] = useState(true);
// // //   const [all, setAll] = useState([]);
// // //   const [q, setQ] = useState("");
// // //   const [brand, setBrand] = useState("");
// // //   const [category, setCategory] = useState("");
// // //   const [size, setSize] = useState("");
// // //   const [price, setPrice] = useState("any");
// // //   const [sort, setSort] = useState("featured");
// // //   const [perPage, setPerPage] = useState(40);
// // //   const [page, setPage] = useState(1);

// // //   const dispatch = useDispatch();

// // //   const fetchBase = async (params = {}) => {
// // //     setLoading(true);
// // //     try {
// // //       const query = new URLSearchParams({
// // //         limit: 200,
// // //         ...(params.q ? { q: params.q } : {}),
// // //         ...(params.brand ? { brand: params.brand } : {}),
// // //         ...(params.category ? { category: params.category } : {}),
// // //       }).toString();

// // //       const { data } = await http.get(`/api/products?${query}`);
// // //       const items = Array.isArray(data) ? data : data.items || [];
// // //       setAll(items);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchBase({ q, brand, category });
// // //   }, [q, brand, category]);

// // //   const brands = useMemo(() => {
// // //     const s = new Set();
// // //     all.forEach((p) => p.brand && s.add(p.brand));
// // //     return Array.from(s).sort();
// // //   }, [all]);

// // //   const categories = useMemo(() => {
// // //     const s = new Set();
// // //     all.forEach((p) => p.category && s.add(p.category));
// // //     return Array.from(s).sort();
// // //   }, [all]);

// // //   const filtered = useMemo(() => {
// // //     const pr = priceRanges.find((r) => r.value === price) || priceRanges[0];
// // //     let list = all.filter((p) => {
// // //       const passPrice =
// // //         pr.value === "any"
// // //           ? true
// // //           : typeof pr.min === "number" && typeof pr.max === "number"
// // //           ? p.price >= pr.min && p.price <= pr.max
// // //           : typeof pr.min === "number"
// // //           ? p.price >= pr.min
// // //           : true;

// // //       const passSize = !size
// // //         ? true
// // //         : Array.isArray(p.variants) &&
// // //           p.variants.some(
// // //             (v) => (v.size || "").toLowerCase() === size.toLowerCase()
// // //           );

// // //       const passName = q
// // //         ? (p.title || "").toLowerCase().includes(q.toLowerCase())
// // //         : true;

// // //       return passPrice && passSize && passName;
// // //     });

// // //     if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
// // //     else if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);
// // //     else if (sort === "newest")
// // //       list.sort(
// // //         (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
// // //       );
// // //     else
// // //       list.sort(
// // //         (a, b) =>
// // //           (b.ratingAvg || 0) - (a.ratingAvg || 0) ||
// // //           (b.ratingCount || 0) - (a.ratingCount || 0)
// // //       );

// // //     return list;
// // //   }, [all, price, size, sort, q]);

// // //   const pages = Math.max(1, Math.ceil(filtered.length / perPage));
// // //   const curPage = Math.min(page, pages);
// // //   const start = (curPage - 1) * perPage;
// // //   const visible = filtered.slice(start, start + perPage);

// // //   const clearAll = () => {
// // //     setQ("");
// // //     setBrand("");
// // //     setCategory("");
// // //     setSize("");
// // //     setPrice("any");
// // //     setSort("featured");
// // //     setPerPage(40);
// // //     setPage(1);
// // //   };

// // //   const add = (p) => dispatch(addToCart({ ...p, qty: 1 }));

// // //   const imgSrc = (p) => {
// // //     const url = p.images?.[0];
// // //     if (!url) return "";
// // //     if (url.startsWith("/uploads")) {
// // //       return (import.meta.env.VITE_API_BASE || "") + url;
// // //     }
// // //     return url;
// // //   };

// // //   return (
// // //     <div className="shop-wrap">
// // //       <h2>Featured Categories</h2>

// // //       {/* Top toolbar */}
// // //       <div className="row gap" style={{ justifyContent: "space-between", marginBottom: 12 }}>
// // //         <div className="row gap">
// // //           <input
// // //             type="search"
// // //             placeholder="Search by name…"
// // //             value={q}
// // //             onChange={(e) => {
// // //               setQ(e.target.value);
// // //               setPage(1);
// // //             }}
// // //           />
// // //         </div>

// // //         <div className="row gap">
// // //           <label>
// // //             Sort by:&nbsp;
// // //             <select value={sort} onChange={(e) => setSort(e.target.value)}>
// // //               <option value="featured">Featured Items</option>
// // //               <option value="priceAsc">Price: Low to High</option>
// // //               <option value="priceDesc">Price: High to Low</option>
// // //               <option value="newest">Newest</option>
// // //             </select>
// // //           </label>
// // //           <label>
// // //             Show:&nbsp;
// // //             <select
// // //               value={perPage}
// // //               onChange={(e) => {
// // //                 setPerPage(Number(e.target.value));
// // //                 setPage(1);
// // //               }}
// // //             >
// // //               <option value={12}>12 items</option>
// // //               <option value={24}>24 items</option>
// // //               <option value={40}>40 items</option>
// // //             </select>
// // //           </label>
// // //         </div>
// // //       </div>

// // //       <div className="row" style={{ alignItems: "flex-start", gap: 16 }}>
// // //         {/* Sidebar */}
// // //         <aside className="panel" style={{ width: 280 }}>
// // //           <h4>Filter by</h4>
// // //           <button className="link" onClick={clearAll} style={{ marginBottom: 10 }}>
// // //             Clear all
// // //           </button>

// // //           <div className="col gap">
// // //             <label>Price Range</label>
// // //             <select
// // //               value={price}
// // //               onChange={(e) => {
// // //                 setPrice(e.target.value);
// // //                 setPage(1);
// // //               }}
// // //             >
// // //               {priceRanges.map((r) => (
// // //                 <option key={r.value} value={r.value}>
// // //                   {r.label}
// // //                 </option>
// // //               ))}
// // //             </select>

// // //             <label>Size</label>
// // //             <select
// // //               value={size}
// // //               onChange={(e) => {
// // //                 setSize(e.target.value);
// // //                 setPage(1);
// // //               }}
// // //             >
// // //               <option value="">Select Size</option>
// // //               {SIZES.map((s) => (
// // //                 <option key={s} value={s}>
// // //                   {s}
// // //                 </option>
// // //               ))}
// // //             </select>

// // //             <label>Category</label>
// // //             <select
// // //               value={category}
// // //               onChange={(e) => {
// // //                 setCategory(e.target.value);
// // //                 setPage(1);
// // //               }}
// // //             >
// // //               <option value="">Select Category</option>
// // //               {categories.map((c) => (
// // //                 <option key={c} value={c}>
// // //                   {c}
// // //                 </option>
// // //               ))}
// // //             </select>

// // //             <label>Brand</label>
// // //             <select
// // //               value={brand}
// // //               onChange={(e) => {
// // //                 setBrand(e.target.value);
// // //                 setPage(1);
// // //               }}
// // //             >
// // //               <option value="">Select Brand</option>
// // //               {brands.map((b) => (
// // //                 <option key={b} value={b}>
// // //                   {b}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //           </div>
// // //         </aside>

// // //         {/* Grid */}
// // //         <section style={{ flex: 1 }}>
// // //           <div style={{ marginBottom: 8 }}>
// // //             <b>{filtered.length}</b> items found
// // //           </div>

// // //           {loading ? (
// // //             <p className="muted">Loading…</p>
// // //           ) : (
// // //             <div className="grid">
// // //               {visible.map((p) => (
// // //                 <article key={p._id} className="card">
// // //                   <Link to={`/product/${p._id}`}>
// // //                     {imgSrc(p) ? (
// // //                       <img src={imgSrc(p)} alt={p.title} />
// // //                     ) : (
// // //                       <div style={{ height: 220, background: "#f3f4f6" }} />
// // //                     )}
// // //                   </Link>
// // //                   <div className="card-body">
// // //                     <h4 className="truncate">{p.title}</h4>
// // //                     <div className="muted">Price: ₹{p.price}</div>
// // //                     <div className="row gap" style={{ marginTop: 8, flexWrap: "wrap" }}>
// // //                       <button className="btn" onClick={() => add(p)}>
// // //                         Add to Cart
// // //                       </button>
// // //                       <Link className="btn outline" to={`/product/${p._id}`}>
// // //                         View
// // //                       </Link>
// // //                     </div>
// // //                   </div>
// // //                 </article>
// // //               ))}
// // //             </div>
// // //           )}

// // //           {/* Pagination */}
// // //           {pages > 1 && (
// // //             <div className="row gap" style={{ marginTop: 12, flexWrap: "wrap" }}>
// // //               <button
// // //                 className="btn outline"
// // //                 disabled={curPage === 1}
// // //                 onClick={() => setPage((p) => Math.max(1, p - 1))}
// // //               >
// // //                 Prev
// // //               </button>

// // //               {Array.from({ length: pages }).map((_, i) => (
// // //                 <button
// // //                   key={i}
// // //                   className={`btn ${curPage === i + 1 ? "" : "outline"}`}
// // //                   onClick={() => setPage(i + 1)}
// // //                   aria-current={curPage === i + 1 ? "page" : undefined}
// // //                 >
// // //                   {i + 1}
// // //                 </button>
// // //               ))}

// // //               <button
// // //                 className="btn outline"
// // //                 disabled={curPage === pages}
// // //                 onClick={() => setPage((p) => Math.min(pages, p + 1))}
// // //               >
// // //                 Next
// // //               </button>
// // //             </div>
// // //           )}
// // //         </section>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // // src/pages/Shop.jsx
// // import React, { useEffect, useMemo, useState } from "react";
// // import http from "../api/http";
// // import { useDispatch } from "react-redux";
// // import { addToCart } from "../store/cartSlice";
// // import { Link } from "react-router-dom";
// // import "./Shop.css";

// // // 🔔 Toasts
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const priceRanges = [
// //   { label: "Any", value: "any" },
// //   { label: "Under ₹500", value: "u500", min: 0, max: 499 },
// //   { label: "₹500 – ₹1000", value: "500_1000", min: 500, max: 1000 },
// //   { label: "₹1000 – ₹2000", value: "1000_2000", min: 1000, max: 2000 },
// //   { label: "₹2000+", value: "2000p", min: 2000 },
// // ];

// // const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "free"];

// // export default function Shop() {
// //   const [loading, setLoading] = useState(true);
// //   const [all, setAll] = useState([]);
// //   const [q, setQ] = useState("");
// //   const [brand, setBrand] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [size, setSize] = useState("");
// //   const [price, setPrice] = useState("any");
// //   const [sort, setSort] = useState("featured");
// //   const [perPage, setPerPage] = useState(40);
// //   const [page, setPage] = useState(1);

// //   const dispatch = useDispatch();

// //   const fetchBase = async (params = {}) => {
// //     setLoading(true);
// //     try {
// //       const query = new URLSearchParams({
// //         limit: 200,
// //         ...(params.q ? { q: params.q } : {}),
// //         ...(params.brand ? { brand: params.brand } : {}),
// //         ...(params.category ? { category: params.category } : {}),
// //       }).toString();

// //       const { data } = await http.get(`/api/products?${query}`);
// //       const items = Array.isArray(data) ? data : data.items || [];
// //       setAll(items);
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Failed to load products");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBase({ q, brand, category });
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [q, brand, category]);

// //   const brands = useMemo(() => {
// //     const s = new Set();
// //     all.forEach((p) => p.brand && s.add(p.brand));
// //     return Array.from(s).sort();
// //   }, [all]);

// //   const categories = useMemo(() => {
// //     const s = new Set();
// //     all.forEach((p) => p.category && s.add(p.category));
// //     return Array.from(s).sort();
// //   }, [all]);

// //   const filtered = useMemo(() => {
// //     const pr = priceRanges.find((r) => r.value === price) || priceRanges[0];
// //     let list = all.filter((p) => {
// //       const passPrice =
// //         pr.value === "any"
// //           ? true
// //           : typeof pr.min === "number" && typeof pr.max === "number"
// //           ? p.price >= pr.min && p.price <= pr.max
// //           : typeof pr.min === "number"
// //           ? p.price >= pr.min
// //           : true;

// //       const passSize = !size
// //         ? true
// //         : Array.isArray(p.variants) &&
// //           p.variants.some(
// //             (v) => (v.size || "").toLowerCase() === size.toLowerCase()
// //           );

// //       const passName = q
// //         ? (p.title || "").toLowerCase().includes(q.toLowerCase())
// //         : true;

// //       return passPrice && passSize && passName;
// //     });

// //     if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
// //     else if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);
// //     else if (sort === "newest")
// //       list.sort(
// //         (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
// //       );
// //     else
// //       list.sort(
// //         (a, b) =>
// //           (b.ratingAvg || 0) - (a.ratingAvg || 0) ||
// //           (b.ratingCount || 0) - (a.ratingCount || 0)
// //       );

// //     return list;
// //   }, [all, price, size, sort, q]);

// //   const pages = Math.max(1, Math.ceil(filtered.length / perPage));
// //   const curPage = Math.min(page, pages);
// //   const start = (curPage - 1) * perPage;
// //   const visible = filtered.slice(start, start + perPage);

// //   const clearAll = () => {
// //     setQ("");
// //     setBrand("");
// //     setCategory("");
// //     setSize("");
// //     setPrice("any");
// //     setSort("featured");
// //     setPerPage(40);
// //     setPage(1);
// //     toast.info("Filters cleared");
// //   };

// //   const add = (p) => {
// //     dispatch(addToCart({ ...p, qty: 1 }));
// //     toast.success("Added to cart");
// //   };

// //   const imgSrc = (p) => {
// //     const url = p.images?.[0];
// //     if (!url) return "";
// //     if (url.startsWith("/uploads")) {
// //       return (import.meta.env.VITE_API_BASE || "") + url;
// //     }
// //     return url;
// //     };

// //   return (
// //     <div className="shop-wrap">
// //       {/* Toast container */}
// //       <ToastContainer
// //         position="top-center"
// //         autoClose={1400}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick
// //         pauseOnHover
// //         draggable
// //         theme="light"
// //       />

// //       <h2>Featured Categories</h2>

// //       {/* Top toolbar */}
// //       <div className="row gap" style={{ justifyContent: "space-between", marginBottom: 12 }}>
// //         <div className="row gap">
// //           <input
// //             type="search"
// //             placeholder="Search by name…"
// //             value={q}
// //             onChange={(e) => {
// //               setQ(e.target.value);
// //               setPage(1);
// //             }}
// //           />
// //         </div>

// //         <div className="row gap">
// //           <label>
// //             Sort by:&nbsp;
// //             <select value={sort} onChange={(e) => setSort(e.target.value)}>
// //               <option value="featured">Featured Items</option>
// //               <option value="priceAsc">Price: Low to High</option>
// //               <option value="priceDesc">Price: High to Low</option>
// //               <option value="newest">Newest</option>
// //             </select>
// //           </label>
// //           <label>
// //             Show:&nbsp;
// //             <select
// //               value={perPage}
// //               onChange={(e) => {
// //                 setPerPage(Number(e.target.value));
// //                 setPage(1);
// //               }}
// //             >
// //               <option value={12}>12 items</option>
// //               <option value={24}>24 items</option>
// //               <option value={40}>40 items</option>
// //             </select>
// //           </label>
// //         </div>
// //       </div>

// //       <div className="row" style={{ alignItems: "flex-start", gap: 16 }}>
// //         {/* Sidebar */}
// //         <aside className="panel" style={{ width: 280 }}>
// //           <h4>Filter by</h4>
// //           <button className="link" onClick={clearAll} style={{ marginBottom: 10 }}>
// //             Clear all
// //           </button>

// //           <div className="col gap">
// //             <label>Price Range</label>
// //             <select
// //               value={price}
// //               onChange={(e) => {
// //                 setPrice(e.target.value);
// //                 setPage(1);
// //               }}
// //             >
// //               {priceRanges.map((r) => (
// //                 <option key={r.value} value={r.value}>
// //                   {r.label}
// //                 </option>
// //               ))}
// //             </select>

// //             <label>Size</label>
// //             <select
// //               value={size}
// //               onChange={(e) => {
// //                 setSize(e.target.value);
// //                 setPage(1);
// //               }}
// //             >
// //               <option value="">Select Size</option>
// //               {SIZES.map((s) => (
// //                 <option key={s} value={s}>
// //                   {s}
// //                 </option>
// //               ))}
// //             </select>

// //             <label>Category</label>
// //             <select
// //               value={category}
// //               onChange={(e) => {
// //                 setCategory(e.target.value);
// //                 setPage(1);
// //               }}
// //             >
// //               <option value="">Select Category</option>
// //               {categories.map((c) => (
// //                 <option key={c} value={c}>
// //                   {c}
// //                 </option>
// //               ))}
// //             </select>

// //             <label>Brand</label>
// //             <select
// //               value={brand}
// //               onChange={(e) => {
// //                 setBrand(e.target.value);
// //                 setPage(1);
// //               }}
// //             >
// //               <option value="">Select Brand</option>
// //               {brands.map((b) => (
// //                 <option key={b} value={b}>
// //                   {b}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         </aside>

// //         {/* Grid */}
// //         <section style={{ flex: 1 }}>
// //           <div style={{ marginBottom: 8 }}>
// //             <b>{filtered.length}</b> items found
// //           </div>

// //           {loading ? (
// //             <p className="muted">Loading…</p>
// //           ) : (
// //             <div className="grid">
// //               {visible.map((p) => (
// //                 <article key={p._id} className="card">
// //                   <Link to={`/product/${p._id}`}>
// //                     {imgSrc(p) ? (
// //                       <img src={imgSrc(p)} alt={p.title} />
// //                     ) : (
// //                       <div style={{ height: 220, background: "#f3f4f6" }} />
// //                     )}
// //                   </Link>
// //                   <div className="card-body">
// //                     <h4 className="truncate">{p.title}</h4>
// //                     <div className="muted">Price: ₹{p.price}</div>
// //                     <div className="row gap" style={{ marginTop: 8, flexWrap: "wrap" }}>
// //                       <button className="btn" onClick={() => add(p)}>
// //                         Add to Cart
// //                       </button>
// //                       <Link className="btn outline" to={`/product/${p._id}`}>
// //                         View
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </article>
// //               ))}
// //             </div>
// //           )}

// //           {/* Pagination */}
// //           {pages > 1 && (
// //             <div className="row gap" style={{ marginTop: 12, flexWrap: "wrap" }}>
// //               <button
// //                 className="btn outline"
// //                 disabled={curPage === 1}
// //                 onClick={() => setPage((p) => Math.max(1, p - 1))}
// //               >
// //                 Prev
// //               </button>

// //               {Array.from({ length: pages }).map((_, i) => (
// //                 <button
// //                   key={i}
// //                   className={`btn ${curPage === i + 1 ? "" : "outline"}`}
// //                   onClick={() => setPage(i + 1)}
// //                   aria-current={curPage === i + 1 ? "page" : undefined}
// //                 >
// //                   {i + 1}
// //                 </button>
// //               ))}

// //               <button
// //                 className="btn outline"
// //                 disabled={curPage === pages}
// //                 onClick={() => setPage((p) => Math.min(pages, p + 1))}
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           )}
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }








// // src/pages/Shop.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import http from "../api/http";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../store/cartSlice";
// import { Link } from "react-router-dom";

// // 🔔 Toasts
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const priceRanges = [
//   { label: "Any", value: "any" },
//   { label: "Under ₹500", value: "u500", min: 0, max: 499 },
//   { label: "₹500 – ₹1000", value: "500_1000", min: 500, max: 1000 },
//   { label: "₹1000 – ₹2000", value: "1000_2000", min: 1000, max: 2000 },
//   { label: "₹2000+", value: "2000p", min: 2000 },
// ];

// const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "free"];

// // Shared Tailwind classes for the sidebar's <select> elements — kept as
// // constants so every filter looks identical without repeating ~6 lines
// // of classes per field.
// const selectClass =
//   "w-full mt-1.5 px-3 py-2.5 text-sm border border-[#15171c]/15 rounded-md bg-white text-[#15171c] " +
//   "outline-none transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15";

// const labelClass = "block text-[13px] font-medium text-[#15171c]/70 mt-4";

// export default function Shop() {
//   const [loading, setLoading] = useState(true);
//   const [all, setAll] = useState([]);
//   const [q, setQ] = useState("");
//   const [brand, setBrand] = useState("");
//   const [category, setCategory] = useState("");
//   const [size, setSize] = useState("");
//   const [price, setPrice] = useState("any");
//   const [sort, setSort] = useState("featured");
//   const [perPage, setPerPage] = useState(40);
//   const [page, setPage] = useState(1);

//   const dispatch = useDispatch();

//   const fetchBase = async (params = {}) => {
//     setLoading(true);
//     try {
//       const query = new URLSearchParams({
//         limit: 200,
//         ...(params.q ? { q: params.q } : {}),
//         ...(params.brand ? { brand: params.brand } : {}),
//         ...(params.category ? { category: params.category } : {}),
//       }).toString();

//       const { data } = await http.get(`/api/products?${query}`);
//       const items = Array.isArray(data) ? data : data.items || [];
//       setAll(items);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBase({ q, brand, category });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [q, brand, category]);

//   const brands = useMemo(() => {
//     const s = new Set();
//     all.forEach((p) => p.brand && s.add(p.brand));
//     return Array.from(s).sort();
//   }, [all]);

//   const categories = useMemo(() => {
//     const s = new Set();
//     all.forEach((p) => p.category && s.add(p.category));
//     return Array.from(s).sort();
//   }, [all]);

//   const filtered = useMemo(() => {
//     const pr = priceRanges.find((r) => r.value === price) || priceRanges[0];
//     let list = all.filter((p) => {
//       const passPrice =
//         pr.value === "any"
//           ? true
//           : typeof pr.min === "number" && typeof pr.max === "number"
//           ? p.price >= pr.min && p.price <= pr.max
//           : typeof pr.min === "number"
//           ? p.price >= pr.min
//           : true;

//       const passSize = !size
//         ? true
//         : Array.isArray(p.variants) &&
//           p.variants.some(
//             (v) => (v.size || "").toLowerCase() === size.toLowerCase()
//           );

//       const passName = q
//         ? (p.title || "").toLowerCase().includes(q.toLowerCase())
//         : true;

//       return passPrice && passSize && passName;
//     });

//     if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
//     else if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);
//     else if (sort === "newest")
//       list.sort(
//         (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
//       );
//     else
//       list.sort(
//         (a, b) =>
//           (b.ratingAvg || 0) - (a.ratingAvg || 0) ||
//           (b.ratingCount || 0) - (a.ratingCount || 0)
//       );

//     return list;
//   }, [all, price, size, sort, q]);

//   const pages = Math.max(1, Math.ceil(filtered.length / perPage));
//   const curPage = Math.min(page, pages);
//   const start = (curPage - 1) * perPage;
//   const visible = filtered.slice(start, start + perPage);

//   const clearAll = () => {
//     setQ("");
//     setBrand("");
//     setCategory("");
//     setSize("");
//     setPrice("any");
//     setSort("featured");
//     setPerPage(40);
//     setPage(1);
//     toast.info("Filters cleared");
//   };

//   const add = (p) => {
//     dispatch(addToCart({ ...p, qty: 1 }));
//     toast.success("Added to cart");
//   };

//   const imgSrc = (p) => {
//     const url = p.images?.[0];
//     if (!url) return "";
//     if (url.startsWith("/uploads")) {
//       return (import.meta.env.VITE_API_BASE || "") + url;
//     }
//     return url;
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 bg-[#F7F4EE] min-h-screen">
//       <ToastContainer
//         position="top-center"
//         autoClose={1400}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         pauseOnHover
//         draggable
//         theme="light"
//       />

//       <span className="block text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase mb-2">
//         Browse
//       </span>
//       <h2
//         className="text-3xl sm:text-4xl font-bold text-[#15171c] tracking-tight uppercase mb-6"
//         style={{ fontFamily: "Oswald, sans-serif" }}
//       >
//         Featured Categories
//       </h2>

//       {/* Top toolbar */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
//         <div className="relative w-full sm:w-[260px]">
//           <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#15171c]/40 text-sm">⌕</span>
//           <input
//             type="search"
//             placeholder="Search by name…"
//             value={q}
//             onChange={(e) => {
//               setQ(e.target.value);
//               setPage(1);
//             }}
//             className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-[#15171c]/15 rounded-full
//               placeholder:text-[#15171c]/40 text-[#15171c] shadow-sm outline-none
//               transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15"
//           />
//         </div>

//         <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
//           <label className="flex items-center gap-2 text-sm text-[#15171c]/70">
//             Sort by:
//             <select
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               className="px-3 py-2 text-sm border border-[#15171c]/15 rounded-md bg-white text-[#15171c]
//                 outline-none transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15"
//             >
//               <option value="featured">Featured Items</option>
//               <option value="priceAsc">Price: Low to High</option>
//               <option value="priceDesc">Price: High to Low</option>
//               <option value="newest">Newest</option>
//             </select>
//           </label>
//           <label className="flex items-center gap-2 text-sm text-[#15171c]/70">
//             Show:
//             <select
//               value={perPage}
//               onChange={(e) => {
//                 setPerPage(Number(e.target.value));
//                 setPage(1);
//               }}
//               className="px-3 py-2 text-sm border border-[#15171c]/15 rounded-md bg-white text-[#15171c]
//                 outline-none transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15"
//             >
//               <option value={12}>12 items</option>
//               <option value={24}>24 items</option>
//               <option value={40}>40 items</option>
//             </select>
//           </label>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row items-start gap-6">
//         {/* Sidebar — sticky so it stays visible while scrolling the grid,
//             instead of scrolling away with the rest of the page. Only
//             sticky on lg+ (where it sits beside the grid); on mobile it's
//             stacked above the grid in normal flow, where sticky wouldn't
//             make sense. */}
//         <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-24 bg-white border border-[#15171c]/10 rounded-lg p-5">
//           <div className="flex items-center justify-between mb-1">
//             <h4 className="text-[15px] font-semibold text-[#15171c]">Filter by</h4>
//             <button
//               onClick={clearAll}
//               className="text-[12px] font-medium text-[#AD8A4D] hover:text-[#8C3A2E] transition-colors"
//             >
//               Clear all
//             </button>
//           </div>

//           <label className={labelClass}>Price Range</label>
//           <select
//             value={price}
//             onChange={(e) => {
//               setPrice(e.target.value);
//               setPage(1);
//             }}
//             className={selectClass}
//           >
//             {priceRanges.map((r) => (
//               <option key={r.value} value={r.value}>
//                 {r.label}
//               </option>
//             ))}
//           </select>

//           <label className={labelClass}>Size</label>
//           <select
//             value={size}
//             onChange={(e) => {
//               setSize(e.target.value);
//               setPage(1);
//             }}
//             className={selectClass}
//           >
//             <option value="">Select Size</option>
//             {SIZES.map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>

//           <label className={labelClass}>Category</label>
//           <select
//             value={category}
//             onChange={(e) => {
//               setCategory(e.target.value);
//               setPage(1);
//             }}
//             className={selectClass}
//           >
//             <option value="">Select Category</option>
//             {categories.map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>

//           <label className={labelClass}>Brand</label>
//           <select
//             value={brand}
//             onChange={(e) => {
//               setBrand(e.target.value);
//               setPage(1);
//             }}
//             className={selectClass}
//           >
//             <option value="">Select Brand</option>
//             {brands.map((b) => (
//               <option key={b} value={b}>
//                 {b}
//               </option>
//             ))}
//           </select>
//         </aside>

//         {/* Grid */}
//         <section className="flex-1 w-full">
//           <div className="mb-4 text-sm text-[#15171c]/70">
//             <span className="font-semibold text-[#15171c]">{filtered.length}</span> items found
//           </div>

//           {loading ? (
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//               {Array.from({ length: 8 }).map((_, i) => (
//                 <div key={i} className="rounded-lg bg-white border border-[#15171c]/10 overflow-hidden animate-pulse">
//                   <div className="aspect-[3/4] bg-[#15171c]/10" />
//                   <div className="p-3 space-y-2">
//                     <div className="h-3 w-3/5 bg-[#15171c]/10 rounded" />
//                     <div className="h-3 w-2/5 bg-[#15171c]/10 rounded" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : filtered.length === 0 ? (
//             <div className="rounded-lg border border-[#15171c]/10 bg-white py-16 text-center">
//               <p className="text-[#15171c]/60">No products match your filters. Try clearing them.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
//               {visible.map((p) => (
//                 <article
//                   key={p._id}
//                   className="bg-white border border-[#15171c]/10 rounded-lg overflow-hidden
//                     transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(21,23,28,0.10)] hover:border-[#AD8A4D]/40"
//                 >
//                   <Link to={`/product/${p._id}`} className="block">
//                     {imgSrc(p) ? (
//                       <img
//                         src={imgSrc(p)}
//                         alt={p.title}
//                         className="w-full aspect-[3/4] object-cover bg-[#F5F5F5]"
//                         loading="lazy"
//                       />
//                     ) : (
//                       <div className="w-full aspect-[3/4] bg-[#F5F5F5]" />
//                     )}
//                   </Link>
//                   <div className="p-3">
//                     <h4 className="text-[14px] font-medium text-[#15171c] truncate">{p.title}</h4>
//                     <div className="text-[13px] text-[#15171c]/60 mt-0.5">₹{p.price}</div>
//                     <div className="flex gap-2 mt-2.5">
//                       <button
//                         onClick={() => add(p)}
//                         className="flex-1 bg-[#15171c] text-white text-[12px] font-semibold rounded-full py-2
//                           transition-all duration-200 hover:bg-[#2a2d36] active:scale-[0.97]"
//                       >
//                         Add to Cart
//                       </button>
//                       <Link
//                         to={`/product/${p._id}`}
//                         className="flex-1 text-center border border-[#15171c]/15 text-[#15171c] text-[12px] font-semibold rounded-full py-2
//                           transition-all duration-200 hover:border-[#AD8A4D] hover:text-[#AD8A4D]"
//                       >
//                         View
//                       </Link>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {pages > 1 && (
//             <div className="flex flex-wrap items-center gap-2 mt-8">
//               <button
//                 disabled={curPage === 1}
//                 onClick={() => setPage((p) => Math.max(1, p - 1))}
//                 className="px-4 py-2 text-[13px] font-medium rounded-full border border-[#15171c]/15 text-[#15171c]
//                   transition-all duration-200 hover:border-[#AD8A4D] hover:text-[#AD8A4D]
//                   disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#15171c]/15 disabled:hover:text-[#15171c]"
//               >
//                 Prev
//               </button>

//               {Array.from({ length: pages }).map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setPage(i + 1)}
//                   aria-current={curPage === i + 1 ? "page" : undefined}
//                   className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${
//                     curPage === i + 1
//                       ? "bg-[#15171c] text-white"
//                       : "border border-[#15171c]/15 text-[#15171c] hover:border-[#AD8A4D] hover:text-[#AD8A4D]"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}

//               <button
//                 disabled={curPage === pages}
//                 onClick={() => setPage((p) => Math.min(pages, p + 1))}
//                 className="px-4 py-2 text-[13px] font-medium rounded-full border border-[#15171c]/15 text-[#15171c]
//                   transition-all duration-200 hover:border-[#AD8A4D] hover:text-[#AD8A4D]
//                   disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#15171c]/15 disabled:hover:text-[#15171c]"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// }








// src/pages/Shop.jsx
import React, { useEffect, useMemo, useState } from "react";
import http from "../api/http";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

// 🔔 Toasts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const priceRanges = [
  { label: "Any", value: "any" },
  { label: "Under ₹500", value: "u500", min: 0, max: 499 },
  { label: "₹500 – ₹1000", value: "500_1000", min: 500, max: 1000 },
  { label: "₹1000 – ₹2000", value: "1000_2000", min: 1000, max: 2000 },
  { label: "₹2000+", value: "2000p", min: 2000 },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "free"];

const labelClass = "block text-[11px] font-bold text-[#15171c]/45 uppercase tracking-wide mb-2.5 mt-6 first:mt-0";

/* ---------- small chip building blocks for the filter sidebar ---------- */

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function FilterGroup({ title, count, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#15171c]/8 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between"
      >
        <span className="text-[13px] font-bold text-[#15171c] flex items-center gap-2">
          {title}
          {count > 0 && (
            <span className="text-[10.5px] font-bold text-white bg-[#AD8A4D] rounded-full px-1.5 py-0.5 leading-none">
              {count}
            </span>
          )}
        </span>
        <span className="text-[#15171c]/40"><ChevronIcon open={open} /></span>
      </button>
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
        style={{ maxHeight: open ? 600 : 0, opacity: open ? 1 : 0 }}
      >
        <div className="pt-3">{children}</div>
      </div>
    </div>
  );
}

function PillButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 text-[12.5px] font-semibold rounded-full border transition-all duration-150 ${
        active
          ? "bg-[#15171c] text-white border-[#15171c]"
          : "bg-white text-[#15171c]/70 border-[#15171c]/15 hover:border-[#AD8A4D] hover:text-[#15171c]"
      }`}
    >
      {children}
    </button>
  );
}

function ListOption({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2.5 text-left px-2 py-1.5 rounded-md text-[13px] transition-colors duration-150 ${
        active ? "text-[#15171c] font-semibold" : "text-[#15171c]/65 hover:text-[#15171c]"
      }`}
    >
      <span
        className={`shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
          active ? "border-[#15171c] bg-[#15171c]" : "border-[#15171c]/25"
        }`}
      >
        {active && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
      </span>
      <span className="truncate">{children}</span>
    </button>
  );
}

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [all, setAll] = useState([]);
  const [q, setQ] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("any");
  const [sort, setSort] = useState("featured");
  const [perPage, setPerPage] = useState(40);
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const dispatch = useDispatch();

  const fetchBase = async (params = {}) => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        limit: 200,
        ...(params.q ? { q: params.q } : {}),
        ...(params.brand ? { brand: params.brand } : {}),
        ...(params.category ? { category: params.category } : {}),
      }).toString();

      const { data } = await http.get(`/api/products?${query}`);
      const items = Array.isArray(data) ? data : data.items || [];
      setAll(items);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBase({ q, brand, category });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, brand, category]);

  const brands = useMemo(() => {
    const s = new Set();
    all.forEach((p) => p.brand && s.add(p.brand));
    return Array.from(s).sort();
  }, [all]);

  const categories = useMemo(() => {
    const s = new Set();
    all.forEach((p) => p.category && s.add(p.category));
    return Array.from(s).sort();
  }, [all]);

  const filtered = useMemo(() => {
    const pr = priceRanges.find((r) => r.value === price) || priceRanges[0];
    let list = all.filter((p) => {
      const passPrice =
        pr.value === "any"
          ? true
          : typeof pr.min === "number" && typeof pr.max === "number"
          ? p.price >= pr.min && p.price <= pr.max
          : typeof pr.min === "number"
          ? p.price >= pr.min
          : true;

      const passSize = !size
        ? true
        : Array.isArray(p.variants) &&
          p.variants.some(
            (v) => (v.size || "").toLowerCase() === size.toLowerCase()
          );

      const passName = q
        ? (p.title || "").toLowerCase().includes(q.toLowerCase())
        : true;

      return passPrice && passSize && passName;
    });

    if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
    else if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);
    else if (sort === "newest")
      list.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      );
    else
      list.sort(
        (a, b) =>
          (b.ratingAvg || 0) - (a.ratingAvg || 0) ||
          (b.ratingCount || 0) - (a.ratingCount || 0)
      );

    return list;
  }, [all, price, size, sort, q]);

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const curPage = Math.min(page, pages);
  const start = (curPage - 1) * perPage;
  const visible = filtered.slice(start, start + perPage);

  const activeFilterCount = [
    price !== "any",
    !!size,
    !!category,
    !!brand,
  ].filter(Boolean).length;

  const clearAll = () => {
    setQ("");
    setBrand("");
    setCategory("");
    setSize("");
    setPrice("any");
    setSort("featured");
    setPerPage(40);
    setPage(1);
    toast.info("Filters cleared");
  };

  const add = (p) => {
    dispatch(addToCart({ ...p, qty: 1 }));
    toast.success("Added to cart");
  };

  const imgSrc = (p) => {
    const url = p.images?.[0];
    if (!url) return "";
    if (url.startsWith("/uploads")) {
      return (import.meta.env.VITE_API_BASE || "") + url;
    }
    return url;
  };

  // Shared filter sidebar content — rendered once and reused for both the
  // desktop sticky aside and the mobile slide-up sheet.
  const FilterSidebar = () => (
    <>
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-[15px] font-bold text-[#15171c]">Filter by</h4>
        {activeFilterCount > 0 && (
          <button
            onClick={clearAll}
            className="text-[12px] font-semibold text-[#AD8A4D] hover:text-[#8C3A2E] transition-colors"
          >
            Clear all ({activeFilterCount})
          </button>
        )}
      </div>

      <FilterGroup title="Price Range">
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((r) => (
            <PillButton
              key={r.value}
              active={price === r.value}
              onClick={() => {
                setPrice(r.value);
                setPage(1);
              }}
            >
              {r.label}
            </PillButton>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Size">
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <PillButton
              key={s}
              active={size.toLowerCase() === s.toLowerCase()}
              onClick={() => {
                setSize(size.toLowerCase() === s.toLowerCase() ? "" : s);
                setPage(1);
              }}
            >
              {s.toUpperCase()}
            </PillButton>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Category" defaultOpen={categories.length <= 8}>
        {categories.length === 0 ? (
          <p className="text-[12.5px] text-[#15171c]/40">No categories yet</p>
        ) : (
          <div className="space-y-0.5 max-h-[220px] overflow-y-auto pr-1">
            <ListOption active={!category} onClick={() => { setCategory(""); setPage(1); }}>
              All categories
            </ListOption>
            {categories.map((c) => (
              <ListOption
                key={c}
                active={category === c}
                onClick={() => {
                  setCategory(category === c ? "" : c);
                  setPage(1);
                }}
              >
                {c}
              </ListOption>
            ))}
          </div>
        )}
      </FilterGroup>

      <FilterGroup title="Brand" defaultOpen={brands.length <= 8}>
        {brands.length === 0 ? (
          <p className="text-[12.5px] text-[#15171c]/40">No brands yet</p>
        ) : (
          <div className="space-y-0.5 max-h-[220px] overflow-y-auto pr-1">
            <ListOption active={!brand} onClick={() => { setBrand(""); setPage(1); }}>
              All brands
            </ListOption>
            {brands.map((b) => (
              <ListOption
                key={b}
                active={brand === b}
                onClick={() => {
                  setBrand(brand === b ? "" : b);
                  setPage(1);
                }}
              >
                {b}
              </ListOption>
            ))}
          </div>
        )}
      </FilterGroup>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 bg-[#F7F4EE] min-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={1400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <span className="block text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase mb-2">
        Browse
      </span>
      <h2
        className="text-3xl sm:text-4xl font-bold text-[#15171c] tracking-tight uppercase mb-6"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        Featured Categories
      </h2>

      {/* Top toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div className="relative w-full sm:w-[260px]">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#15171c]/40 text-sm">⌕</span>
          <input
            type="search"
            placeholder="Search by name…"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-[#15171c]/15 rounded-full
              placeholder:text-[#15171c]/40 text-[#15171c] shadow-sm outline-none
              transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile-only filter trigger */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-full border border-[#15171c]/15 text-[#15171c] bg-white"
          >
            Filters
            {activeFilterCount > 0 && (
              <span className="text-[10.5px] font-bold text-white bg-[#15171c] rounded-full w-5 h-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <label className="flex items-center gap-2 text-sm text-[#15171c]/70">
              Sort by:
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 text-sm border border-[#15171c]/15 rounded-md bg-white text-[#15171c]
                  outline-none transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15"
              >
                <option value="featured">Featured Items</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </label>
            <label className="hidden sm:flex items-center gap-2 text-sm text-[#15171c]/70">
              Show:
              <select
                value={perPage}
                onChange={(e) => {
                  setPerPage(Number(e.target.value));
                  setPage(1);
                }}
                className="px-3 py-2 text-sm border border-[#15171c]/15 rounded-md bg-white text-[#15171c]
                  outline-none transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15"
              >
                <option value={12}>12 items</option>
                <option value={24}>24 items</option>
                <option value={40}>40 items</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* Active filter chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {price !== "any" && (
            <span className="inline-flex items-center gap-1.5 bg-white border border-[#AD8A4D]/30 text-[#15171c] text-[12px] font-medium pl-3 pr-1.5 py-1 rounded-full">
              {priceRanges.find((r) => r.value === price)?.label}
              <button onClick={() => setPrice("any")} className="w-5 h-5 rounded-full hover:bg-[#15171c]/5 flex items-center justify-center text-[#15171c]/50">✕</button>
            </span>
          )}
          {size && (
            <span className="inline-flex items-center gap-1.5 bg-white border border-[#AD8A4D]/30 text-[#15171c] text-[12px] font-medium pl-3 pr-1.5 py-1 rounded-full">
              Size: {size.toUpperCase()}
              <button onClick={() => setSize("")} className="w-5 h-5 rounded-full hover:bg-[#15171c]/5 flex items-center justify-center text-[#15171c]/50">✕</button>
            </span>
          )}
          {category && (
            <span className="inline-flex items-center gap-1.5 bg-white border border-[#AD8A4D]/30 text-[#15171c] text-[12px] font-medium pl-3 pr-1.5 py-1 rounded-full">
              {category}
              <button onClick={() => setCategory("")} className="w-5 h-5 rounded-full hover:bg-[#15171c]/5 flex items-center justify-center text-[#15171c]/50">✕</button>
            </span>
          )}
          {brand && (
            <span className="inline-flex items-center gap-1.5 bg-white border border-[#AD8A4D]/30 text-[#15171c] text-[12px] font-medium pl-3 pr-1.5 py-1 rounded-full">
              {brand}
              <button onClick={() => setBrand("")} className="w-5 h-5 rounded-full hover:bg-[#15171c]/5 flex items-center justify-center text-[#15171c]/50">✕</button>
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Sidebar — desktop only, sticky so it stays visible while
            scrolling the grid. Mobile uses the slide-up sheet below. */}
        <aside className="hidden lg:block w-[280px] shrink-0 lg:sticky lg:top-24 bg-white border border-[#15171c]/10 rounded-xl p-5 max-h-[calc(100vh-7rem)] overflow-y-auto">
          <FilterSidebar />
        </aside>

        {/* Grid */}
        <section className="flex-1 w-full">
          <div className="mb-4 text-sm text-[#15171c]/70">
            <span className="font-semibold text-[#15171c]">{filtered.length}</span> items found
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="rounded-lg bg-white border border-[#15171c]/10 overflow-hidden animate-pulse">
                  <div className="aspect-[3/4] bg-[#15171c]/10" />
                  <div className="p-3 space-y-2">
                    <div className="h-3 w-3/5 bg-[#15171c]/10 rounded" />
                    <div className="h-3 w-2/5 bg-[#15171c]/10 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-lg border border-[#15171c]/10 bg-white py-16 text-center">
              <p className="text-[#15171c]/60">No products match your filters. Try clearing them.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {visible.map((p) => (
                <article
                  key={p._id}
                  className="bg-white border border-[#15171c]/10 rounded-lg overflow-hidden
                    transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(21,23,28,0.10)] hover:border-[#AD8A4D]/40"
                >
                  <Link to={`/product/${p._id}`} className="block">
                    {imgSrc(p) ? (
                      <img
                        src={imgSrc(p)}
                        alt={p.title}
                        className="w-full aspect-[3/4] object-cover bg-[#F5F5F5]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-[3/4] bg-[#F5F5F5]" />
                    )}
                  </Link>
                  <div className="p-3">
                    <h4 className="text-[14px] font-medium text-[#15171c] truncate">{p.title}</h4>
                    <div className="text-[13px] text-[#15171c]/60 mt-0.5">₹{p.price}</div>
                    <div className="flex gap-2 mt-2.5">
                      <button
                        onClick={() => add(p)}
                        className="flex-1 bg-[#15171c] text-white text-[12px] font-semibold rounded-full py-2
                          transition-all duration-200 hover:bg-[#2a2d36] active:scale-[0.97]"
                      >
                        Add to Cart
                      </button>
                      <Link
                        to={`/product/${p._id}`}
                        className="flex-1 text-center border border-[#15171c]/15 text-[#15171c] text-[12px] font-semibold rounded-full py-2
                          transition-all duration-200 hover:border-[#AD8A4D] hover:text-[#AD8A4D]"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {pages > 1 && (
            <div className="flex flex-wrap items-center gap-2 mt-8">
              <button
                disabled={curPage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 text-[13px] font-medium rounded-full border border-[#15171c]/15 text-[#15171c]
                  transition-all duration-200 hover:border-[#AD8A4D] hover:text-[#AD8A4D]
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#15171c]/15 disabled:hover:text-[#15171c]"
              >
                Prev
              </button>

              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  aria-current={curPage === i + 1 ? "page" : undefined}
                  className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${
                    curPage === i + 1
                      ? "bg-[#15171c] text-white"
                      : "border border-[#15171c]/15 text-[#15171c] hover:border-[#AD8A4D] hover:text-[#AD8A4D]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={curPage === pages}
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
                className="px-4 py-2 text-[13px] font-medium rounded-full border border-[#15171c]/15 text-[#15171c]
                  transition-all duration-200 hover:border-[#AD8A4D] hover:text-[#AD8A4D]
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#15171c]/15 disabled:hover:text-[#15171c]"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Mobile filter sheet */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40 animate-[fadeIn_.15s_ease-out]" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-[#F7F4EE] rounded-t-2xl flex flex-col animate-[slideUp_.25s_ease-out]">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#15171c]/10 bg-white rounded-t-2xl">
              <h3 className="text-[16px] font-bold text-[#15171c]">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#15171c]/60 hover:bg-[#15171c]/5"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4 bg-white">
              <FilterSidebar />
            </div>
            <div className="p-4 border-t border-[#15171c]/10 bg-white">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-[#15171c] text-white font-semibold text-sm rounded-full py-3 active:scale-[0.98] transition-transform"
              >
                Show {filtered.length} results
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>
    </div>
  );
}