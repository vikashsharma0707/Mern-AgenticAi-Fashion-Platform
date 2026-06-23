// // import React from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { removeWish } from "../store/wishlistSlice.js";
// // import { addToCart } from "../store/cartSlice.js";
// // import { useNavigate } from "react-router-dom";

// // const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";
// // const imgUrl = (src) => (src?.startsWith("/uploads") ? `${API_BASE}${src}` : (src || ""));

// // export default function Wishlist() {
// //   const { items } = useSelector(s => s.wishlist);
// //   const dispatch = useDispatch();
// //   const nav = useNavigate();

// //   return (
// //     <div className="container">
// //       <h2>My Wishlist</h2>
// //       {!items.length && <p>No items saved.</p>}

// //       <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px,1fr))", gap:12}}>
// //         {items.map(p => (
// //           <div key={p._id} className="pd-sim-card">
// //             <img src={imgUrl(p.images?.[0])} alt={p.title}/>
// //             <div className="title">{p.title}</div>
// //             <div className="price">₹{p.price}</div>
// //             <div className="row gap">
// //               <button className="btn sm" onClick={() => dispatch(addToCart({ ...p, qty:1 }))}>Add to Cart</button>
// //               <button className="btn sm outline" onClick={() => nav(`/product/${p._id}`)}>View</button>
// //               <button className="btn sm outline" onClick={() => dispatch(removeWish(p._id))}>Remove</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useMemo } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { removeWish } from "../store/wishlistSlice.js";
// // import { addToCart } from "../store/cartSlice.js";
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import "./Wishlist.css";

// // const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

// // function safeImage(src) {
// //   if (!src) return null;
// //   if (/^https?:\/\//i.test(src)) return src;
// //   if (src.startsWith("/uploads")) return `${API_BASE}${src}`;
// //   return `${API_BASE}/${src.replace(/^\/+/, "")}`;
// // }

// // function Placeholder() {
// //   return (
// //     <div className="wl-img ph" aria-label="No image">
// //       <svg viewBox="0 0 120 90" width="100%" height="100%" role="img" aria-hidden="true">
// //         <rect width="120" height="90" fill="#f3f4f6" />
// //         <circle cx="38" cy="36" r="12" fill="#e5e7eb" />
// //         <path d="M10 80 L48 46 L70 64 L92 50 L110 80 Z" fill="#e5e7eb" />
// //       </svg>
// //     </div>
// //   );
// // }

// // export default function Wishlist() {
// //   const { items } = useSelector((s) => s.wishlist);
// //   const dispatch = useDispatch();
// //   const nav = useNavigate();

// //   const total = useMemo(
// //     () => items.reduce((s, i) => s + (Number(i.price) || 0), 0),
// //     [items]
// //   );

// //   const onAdd = (p) => {
// //     dispatch(addToCart({ ...p, qty: 1 }));
// //     toast.success("Added to cart 🛒", { toastId: `wish-add-${p._id}` });
// //   };

// //   const onRemove = (id) => {
// //     dispatch(removeWish(id));
// //     toast.info("Removed from wishlist");
// //   };

// //   return (
// //     <div className="wl-wrap container">
// //       <header className="wl-head">
// //         <h2>My Wishlist</h2>
// //         <div className="wl-meta">
// //           <span className="chip">{items.length}</span>
// //           <span className="muted">item(s)</span>
// //           {!!items.length && (
// //             <span className="muted total">• Total MRP: <b>₹{total.toLocaleString("en-IN")}</b></span>
// //           )}
// //         </div>
// //       </header>

// //       {!items.length ? (
// //         <div className="wl-empty">
// //           <div className="wl-empty-box">
// //             ❤️ Your wishlist is empty. <button className="link-btn" onClick={() => nav("/shop")}>Browse products</button>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="wl-grid">
// //           {items.map((p) => {
// //             const url = safeImage(p?.images?.[0] || p?.image || p?.thumbnail);
// //             return (
// //               <article className="wl-card" key={p._id}>
// //                 <div className="wl-img">
// //                   {url ? <img src={url} alt={p.title || "Product"} loading="lazy" /> : <Placeholder />}
// //                 </div>
// //                 <div className="wl-body">
// //                   <div className="wl-title" title={p.title}>{p.title}</div>
// //                   <div className="wl-price">₹{Number(p.price || 0).toLocaleString("en-IN")}</div>
// //                   <div className="wl-actions">
// //                     <button className="btn btn-dark" onClick={() => onAdd(p)}>
// //                       🛒 Add to Cart
// //                     </button>
// //                     <button className="btn btn-light" onClick={() => nav(`/product/${p._id}`)}>
// //                       View
// //                     </button>
// //                     <button className="btn btn-danger" onClick={() => onRemove(p._id)}>
// //                       Remove
// //                     </button>
// //                   </div>
// //                 </div>
// //               </article>
// //             );
// //           })}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// // frontend/src/pages/Wishlist.jsx
// import React, { useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeWish } from "../store/wishlistSlice.js";
// import { addToCart } from "../store/cartSlice.js";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

// function safeImage(src) {
//   if (!src) return null;
//   if (/^https?:\/\//i.test(src)) return src;
//   if (src.startsWith("/uploads")) return `${API_BASE}${src}`;
//   return `${API_BASE}/${src.replace(/^\/+/, "")}`;
// }

// function Placeholder() {
//   return (
//     <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//       <svg viewBox="0 0 120 90" className="w-20 h-20 text-gray-300" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect width="120" height="90" fill="#f3f4f6" />
//         <circle cx="38" cy="36" r="12" fill="#e5e7eb" />
//         <path d="M10 80 L48 46 L70 64 L92 50 L110 80 Z" fill="#e5e7eb" />
//       </svg>
//     </div>
//   );
// }

// export default function Wishlist() {
//   const { items } = useSelector((s) => s.wishlist);
//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   const total = useMemo(
//     () => items.reduce((s, i) => s + (Number(i.price) || 0), 0),
//     [items]
//   );

//   const onAdd = (p) => {
//     dispatch(addToCart({ ...p, qty: 1 }));
//     toast.success("Added to cart 🛒", { toastId: `wish-add-${p._id}` });
//   };

//   const onRemove = (id) => {
//     dispatch(removeWish(id));
//     toast.info("Removed from wishlist");
//   };

//   return (
//     <div className="min-h-screen bg-[#F7F4EE] py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
//           <div>
//             <h1 className="text-4xl font-semibold tracking-tight text-gray-900">My Wishlist</h1>
//           </div>
//           <div className="flex items-center gap-4 mt-4 sm:mt-0">
//             <div className="px-5 py-2 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
//               <span className="text-2xl font-semibold text-gray-900">{items.length}</span>
//               <span className="text-gray-500">item(s)</span>
//             </div>
//             {!!items.length && (
//               <div className="text-gray-600">
//                 Total MRP: <span className="font-semibold text-gray-900">₹{total.toLocaleString("en-IN")}</span>
//               </div>
//             )}
//           </div>
//         </div>

//         {!items.length ? (
//           <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-gray-100">
//             <div className="text-7xl mb-6">❤️</div>
//             <h3 className="text-2xl font-medium text-gray-800 mb-3">Your wishlist is empty</h3>
//             <p className="text-gray-500 mb-8 text-center max-w-md">
//               Save your favorite items here for later
//             </p>
//             <button
//               onClick={() => nav("/shop")}
//               className="bg-black text-white px-10 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors"
//             >
//               Browse Products
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {items.map((p) => {
//               const url = safeImage(p?.images?.[0] || p?.image || p?.thumbnail);
//               return (
//                 <div
//                   key={p._id}
//                   className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
//                 >
//                   {/* Image */}
//                   <div className="aspect-square relative bg-gray-50 overflow-hidden">
//                     {url ? (
//                       <img
//                         src={url}
//                         alt={p.title || "Product"}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         loading="lazy"
//                       />
//                     ) : (
//                       <Placeholder />
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="font-medium text-lg leading-tight line-clamp-2 mb-3 min-h-[3.2em]">
//                       {p.title}
//                     </div>

//                     <div className="text-2xl font-semibold text-gray-900 mb-6">
//                       ₹{Number(p.price || 0).toLocaleString("en-IN")}
//                     </div>

//                     {/* Actions */}
//                     <div className="flex flex-col gap-3">
//                       <button
//                         onClick={() => onAdd(p)}
//                         className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-800 active:scale-[0.985] transition-all flex items-center justify-center gap-2"
//                       >
//                         🛒 Add to Cart
//                       </button>

//                       <div className="grid grid-cols-2 gap-3">
//                         <button
//                           onClick={() => nav(`/product/${p._id}`)}
//                           className="py-3.5 border border-gray-300 hover:border-gray-400 rounded-2xl font-medium transition-colors"
//                         >
//                           View Details
//                         </button>
//                         <button
//                           onClick={() => onRemove(p._id)}
//                           className="py-3.5 border border-red-200 text-red-600 hover:bg-red-50 rounded-2xl font-medium transition-colors"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }







// frontend/src/pages/Wishlist.jsx
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWish } from "../store/wishlistSlice.js";
import { addToCart } from "../store/cartSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

function safeImage(src) {
  if (!src) return null;
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("/uploads")) return `${API_BASE}${src}`;
  return `${API_BASE}/${src.replace(/^\/+/, "")}`;
}

function Placeholder() {
  return (
    <div className="w-full h-full bg-[#F5F5F5] flex items-center justify-center">
      <svg viewBox="0 0 120 90" className="w-20 h-20 text-[#15171c]/15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="90" fill="#f3f4f6" />
        <circle cx="38" cy="36" r="12" fill="#e5e7eb" />
        <path d="M10 80 L48 46 L70 64 L92 50 L110 80 Z" fill="#e5e7eb" />
      </svg>
    </div>
  );
}

export default function Wishlist() {
  const { items } = useSelector((s) => s.wishlist);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const total = useMemo(
    () => items.reduce((s, i) => s + (Number(i.price) || 0), 0),
    [items]
  );

  const onAdd = (p) => {
    dispatch(addToCart({ ...p, qty: 1 }));
    toast.success("Added to cart 🛒", { toastId: `wish-add-${p._id}` });
  };

  const onRemove = (id) => {
    dispatch(removeWish(id));
    toast.info("Removed from wishlist");
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#15171c]">My Wishlist</h1>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white rounded-full border border-[#15171c]/10 flex items-center gap-2">
              <span className="text-lg font-bold text-[#15171c]">{items.length}</span>
              <span className="text-[#15171c]/50 text-sm">item(s)</span>
            </div>
            {!!items.length && (
              <div className="text-sm text-[#15171c]/60">
                Total MRP:{" "}
                <span className="font-semibold text-[#15171c]">₹{total.toLocaleString("en-IN")}</span>
              </div>
            )}
          </div>
        </div>

        {!items.length ? (
          <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-[#15171c]/10">
            <div className="text-7xl mb-6">♡</div>
            <h3 className="text-2xl font-semibold text-[#15171c] mb-3">Your wishlist is empty</h3>
            <p className="text-[#15171c]/50 mb-8 text-center max-w-md">
              Save your favorite items here for later
            </p>
            <button
              onClick={() => nav("/shop")}
              className="bg-[#15171c] text-white px-10 py-3.5 rounded-full font-semibold hover:bg-[#2a2d36] transition-colors"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((p) => {
              const url = safeImage(p?.images?.[0] || p?.image || p?.thumbnail);
              return (
                <div
                  key={p._id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#15171c]/10 transition-all duration-300 group
                    hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(21,23,28,0.10)] hover:border-[#AD8A4D]/40"
                >
                  {/* Image */}
                  <div className="aspect-square relative bg-[#F5F5F5] overflow-hidden">
                    {url ? (
                      <img
                        src={url}
                        alt={p.title || "Product"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <Placeholder />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="font-medium text-[#15171c] leading-snug line-clamp-2 mb-2 min-h-[2.6em]">
                      {p.title}
                    </div>

                    <div className="text-xl font-bold text-[#15171c] mb-4">
                      ₹{Number(p.price || 0).toLocaleString("en-IN")}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2.5">
                      <button
                        onClick={() => onAdd(p)}
                        className="w-full bg-[#15171c] text-white py-3 rounded-full font-semibold text-sm
                          hover:bg-[#2a2d36] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                      >
                        🛒 Add to Cart
                      </button>

                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          onClick={() => nav(`/product/${p._id}`)}
                          className="py-2.5 border border-[#15171c]/15 hover:border-[#AD8A4D] hover:text-[#AD8A4D] rounded-full font-medium text-sm transition-colors"
                        >
                          View
                        </button>
                        <button
                          onClick={() => onRemove(p._id)}
                          className="py-2.5 border border-[#8C3A2E]/30 text-[#8C3A2E] hover:bg-[#8C3A2E]/10 rounded-full font-medium text-sm transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}