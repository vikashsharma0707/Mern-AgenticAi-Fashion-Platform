// // // // import React, { useEffect } from 'react';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import { reviewSummary } from '../store/aiSlice.js';

// // // // export default function ReviewSummary({ productId }){
// // // //   const dispatch = useDispatch();
// // // //   const summary = useSelector(s=>s.ai.summary);
// // // //   useEffect(()=>{ dispatch(reviewSummary(productId)); }, [dispatch, productId]);
// // // //   return <p className="muted">{summary}</p>;
// // // // }


// // // import React, { useEffect } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { reviewSummary } from '../store/aiSlice.js';

// // // export default function ReviewSummary({ productId }) {
// // //   const dispatch = useDispatch();
// // //   const { summary, loadingSummary } = useSelector((s) => ({
// // //     summary: s.ai.summary,
// // //     loadingSummary: s.ai.loadingSummary,
// // //   }));

// // //   useEffect(() => {
// // //     if (productId) dispatch(reviewSummary(productId));
// // //   }, [productId, dispatch]);

// // //   return (
// // //     <div className="panel">
// // //       <h3>Ratings &amp; Reviews (AI Summary)</h3>
// // //       {loadingSummary ? (
// // //         <p>Loading summary…</p>
// // //       ) : (
// // //         <p style={{ whiteSpace: 'pre-wrap' }}>{summary || 'No reviews yet.'}</p>
// // //       )}
// // //     </div>
// // //   );
// // // }


// // import React, { useEffect, useMemo, useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import http from "../api/http.js";
// // import { API_BASE } from "../api/http.js";
// // import { reviewSummary as fetchReviewSummary } from "../store/aiSlice.js";

// // function Star({ filled, onClick }) {
// //   return (
// //     <span
// //       onClick={onClick}
// //       style={{ cursor: onClick ? "pointer" : "default", color: filled ? "#f59e0b" : "#d1d5db", fontSize: 18 }}
// //       title={filled ? "★" : "☆"}
// //     >
// //       {filled ? "★" : "☆"}
// //     </span>
// //   );
// // }

// // function Stars({ value = 0, onChange }) {
// //   return (
// //     <div style={{ display: "inline-flex", gap: 4 }}>
// //       {[1, 2, 3, 4, 5].map((n) => (
// //         <Star key={n} filled={n <= value} onClick={onChange ? () => onChange(n) : undefined} />
// //       ))}
// //     </div>
// //   );
// // }

// // export default function ReviewSummaryPage() {
// //   const { id } = useParams(); // productId
// //   const dispatch = useDispatch();
// //   const me = useSelector((s) => s.user.me);
// //   const ai = useSelector((s) => s.ai);

// //   const [loading, setLoading] = useState(true);
// //   const [product, setProduct] = useState(null);
// //   const [reviews, setReviews] = useState([]);
// //   const [eligible, setEligible] = useState(false);
// //   const [my, setMy] = useState({ rating: 0, comment: "" });
// //   const [saving, setSaving] = useState(false);
// //   const [err, setErr] = useState("");

// //   const cover = useMemo(() => {
// //     const src = product?.images?.[0];
// //     if (!src) return null;
// //     if (/^https?:\/\//i.test(src)) return src;
// //     if (src.startsWith("/uploads")) return `${API_BASE}${src}`;
// //     return `${API_BASE}/${src.replace(/^\/+/, "")}`;
// //   }, [product]);

// //   useEffect(() => {
// //     let gone = false;
// //     (async () => {
// //       try {
// //         setLoading(true);
// //         setErr("");
// //         const [{ data: p }, { data: revs }] = await Promise.all([
// //           http.get(`/api/products/${id}`),
// //           http.get(`/api/products/${id}/reviews`),
// //         ]);
// //         if (gone) return;
// //         setProduct(p);
// //         setReviews(revs || []);
// //       } catch (e) {
// //         console.error(e);
// //         if (!gone) setErr("Failed to load product or reviews.");
// //       } finally {
// //         if (!gone) setLoading(false);
// //       }
// //     })();
// //     return () => {
// //       gone = true;
// //     };
// //   }, [id]);

// //   // Check if current user already reviewed (pre-fill)
// //   useEffect(() => {
// //     if (!me?._id || !reviews?.length) return;
// //     const mine = reviews.find((r) => String(r.user?._id || r.user) === String(me._id));
// //     if (mine) setMy({ rating: Number(mine.rating) || 0, comment: mine.comment || "" });
// //   }, [me, reviews]);

// //   // Eligibility
// //   useEffect(() => {
// //     if (!me?._id) return setEligible(false);
// //     (async () => {
// //       try {
// //         const { data } = await http.get(`/api/products/${id}/reviews/eligible`);
// //         setEligible(!!data?.eligible);
// //       } catch {
// //         setEligible(false);
// //       }
// //     })();
// //   }, [id, me]);

// //   // AI summary
// //   useEffect(() => {
// //     if (id) dispatch(fetchReviewSummary(id));
// //   }, [id, dispatch]);

// //   const avgFromReviews = useMemo(() => {
// //     if (!reviews?.length) return 0;
// //     const sum = reviews.reduce((s, r) => s + (r.rating || 0), 0);
// //     return Math.round((sum / reviews.length) * 10) / 10;
// //   }, [reviews]);

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!me?._id) return alert("Please login to review.");
// //     if (!eligible) return alert("Only customers who bought this product can review.");
// //     if (!(my.rating >= 1 && my.rating <= 5)) return alert("Please select rating 1..5");

// //     try {
// //       setSaving(true);
// //       await http.post(`/api/products/${id}/reviews`, { rating: my.rating, comment: my.comment || "" });
// //       // refresh reviews + AI
// //       const { data } = await http.get(`/api/products/${id}/reviews`);
// //       setReviews(data || []);
// //       dispatch(fetchReviewSummary(id));
// //       alert("Review saved.");
// //     } catch (e2) {
// //       console.error(e2);
// //       alert("Failed to save review.");
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   return (
// //     <div className="container" style={{ paddingBottom: 24 }}>
// //       <div className="row gap" style={{ alignItems: "flex-start" }}>
// //         <div className="panel" style={{ minWidth: 340, maxWidth: 360 }}>
// //           {loading ? (
// //             <p>Loading…</p>
// //           ) : err ? (
// //             <p className="muted">{err}</p>
// //           ) : (
// //             <>
// //               {cover ? (
// //                 <img src={cover} alt={product?.title} style={{ width: "100%", borderRadius: 12 }} />
// //               ) : (
// //                 <div style={{ background: "#f3f4f6", height: 240, borderRadius: 12 }} />
// //               )}
// //               <h2 style={{ marginBottom: 6 }}>{product?.title}</h2>
// //               <div className="muted">{product?.brand} • {product?.category}</div>
// //               <div style={{ marginTop: 8 }}>
// //                 <Stars value={product?.ratingAvg || avgFromReviews} />
// //                 <span style={{ marginLeft: 8 }}>
// //                   {(product?.ratingAvg || avgFromReviews) || 0} ★ ({product?.ratingCount || reviews.length} reviews)
// //                 </span>
// //               </div>
// //               <div style={{ marginTop: 10 }}>
// //                 <Link to={`/product/${id}`} className="btn">View Product</Link>
// //               </div>
// //             </>
// //           )}
// //         </div>

// //         <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
// //           <div className="panel">
// //             <h3>AI Review Summary</h3>
// //             <p className="muted" style={{ whiteSpace: "pre-wrap" }}>
// //               {ai?.summary || "No reviews yet."}
// //             </p>
// //           </div>

// //           <div className="panel">
// //             <div className="pd-reviews-header">
// //               <h3>Ratings &amp; Reviews</h3>
// //               <div className="pd-stars">
// //                 <Stars value={avgFromReviews} /> <span style={{ marginLeft: 8 }}>{avgFromReviews} average</span>
// //               </div>
// //             </div>

// //             {me?._id ? (
// //               <form onSubmit={onSubmit} className="col gap" style={{ marginTop: 10 }}>
// //                 <div>
// //                   <div className="pd-label">Your Rating</div>
// //                   <Stars value={my.rating} onChange={(n) => setMy((s) => ({ ...s, rating: n }))} />
// //                 </div>
// //                 <div>
// //                   <div className="pd-label">Your Review</div>
// //                   <textarea
// //                     placeholder="Share your experience"
// //                     value={my.comment}
// //                     onChange={(e) => setMy((s) => ({ ...s, comment: e.target.value }))}
// //                     rows={3}
// //                     style={{ width: "100%", border: "1px solid #e5e7eb", borderRadius: 8, padding: 10 }}
// //                   />
// //                 </div>
// //                 {!eligible && (
// //                   <div className="muted" style={{ marginTop: -4 }}>
// //                     Note: Only customers who purchased this product can submit a review.
// //                   </div>
// //                 )}
// //                 <button className="btn" type="submit" disabled={!eligible || saving}>
// //                   {saving ? "Saving…" : "Submit Review"}
// //                 </button>
// //               </form>
// //             ) : (
// //               <p className="muted">Please <Link to="/profile">login</Link> to write a review.</p>
// //             )}
// //           </div>

// //           <div className="panel">
// //             <h3>All Reviews</h3>
// //             {!reviews?.length ? (
// //               <p className="muted">No reviews yet.</p>
// //             ) : (
// //               <div className="pd-revgrid">
// //                 {reviews.map((r, i) => (
// //                   <div key={i} className="pd-rev-block">
// //                     <div className="row gap" style={{ justifyContent: "space-between" }}>
// //                       <div>
// //                         <b>{r?.user?.name || "User"}</b>
// //                         <div className="muted" style={{ fontSize: 12 }}>
// //                           {new Date(r?.createdAt || Date.now()).toLocaleDateString()}
// //                         </div>
// //                       </div>
// //                       <div><Stars value={r?.rating || 0} /></div>
// //                     </div>
// //                     {r?.comment && <p style={{ marginTop: 8 }}>{r.comment}</p>}
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// // frontend/src/pages/ReviewSummaryPage.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import http from "../api/http.js";
// import { fetchReviewSummary } from "../store/aiSlice.js";

// function Star({ filled, onClick }) {
//   return (
//     <span
//       onClick={onClick}
//       className={`text-3xl transition-all duration-200 cursor-pointer ${
//         filled ? "text-yellow-500 scale-110" : "text-gray-300 hover:text-yellow-400"
//       }`}
//     >
//       {filled ? "★" : "☆"}
//     </span>
//   );
// }

// function Stars({ value = 0, onChange, size = "large" }) {
//   return (
//     <div className="flex gap-1">
//       {[1, 2, 3, 4, 5].map((n) => (
//         <Star
//           key={n}
//           filled={n <= value}
//           onClick={onChange ? () => onChange(n) : undefined}
//         />
//       ))}
//     </div>
//   );
// }

// export default function ReviewSummaryPage() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const me = useSelector((s) => s.user.me);
//   const ai = useSelector((s) => s.ai);

//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [eligible, setEligible] = useState(false);
//   const [myReview, setMyReview] = useState({ rating: 0, comment: "" });
//   const [saving, setSaving] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [summaryLoading, setSummaryLoading] = useState(false);

//   // Load Product & Reviews
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         const [{ data: p }, { data: revs }] = await Promise.all([
//           http.get(`/api/products/${id}`),
//           http.get(`/api/products/${id}/reviews`)
//         ]);
//         setProduct(p);
//         setReviews(revs || []);
//       } catch (e) {
//         console.error(e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, [id]);

//   // Check eligibility to review
//   useEffect(() => {
//     if (!me?._id) return;
//     http.get(`/api/products/${id}/reviews/eligible`)
//       .then(({ data }) => setEligible(!!data?.eligible))
//       .catch(() => setEligible(false));
//   }, [id, me]);

//   // Generate AI Summary (Button Trigger)
//   const generateAISummary = async () => {
//     setSummaryLoading(true);
//     try {
//       await dispatch(fetchReviewSummary(id));
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setSummaryLoading(false);
//     }
//   };

//   const avgRating = useMemo(() => {
//     if (!reviews?.length) return 0;
//     const sum = reviews.reduce((s, r) => s + (r.rating || 0), 0);
//     return Math.round((sum / reviews.length) * 10) / 10;
//   }, [reviews]);

//   const handleReviewSubmit = async (e) => {
//     e.preventDefault();
//     if (!me?._id) return alert("Please login to review");
//     if (!eligible) return alert("Only buyers can review this product");
//     if (myReview.rating < 1) return alert("Please give a rating");

//     setSaving(true);
//     try {
//       await http.post(`/api/products/${id}/reviews`, {
//         rating: myReview.rating,
//         comment: myReview.comment || ""
//       });
//       alert("Review submitted successfully!");
//       const { data } = await http.get(`/api/products/${id}/reviews`);
//       setReviews(data || []);
//     } catch (err) {
//       alert("Failed to submit review");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
//         {/* Product Sidebar */}
//         <div className="lg:col-span-4">
//           <div className="sticky top-8">
//             {product && (
//               <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//                 <img
//                   src={product.images?.[0] ? `${import.meta.env.VITE_API_BASE || "http://localhost:5000"}${product.images[0]}` : ""}
//                   alt={product.title}
//                   className="w-full h-80 object-cover"
//                 />
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold leading-tight">{product.title}</h2>
//                   <p className="text-gray-500 mt-1">{product.brand} • {product.category}</p>
//                   <div className="flex items-center gap-2 mt-4">
//                     <Stars value={avgRating} />
//                     <span className="text-sm text-gray-500">({reviews.length} reviews)</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="lg:col-span-8 space-y-10">
//           {/* AI Summary */}
//           <div className="bg-white rounded-3xl shadow p-8">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-2xl font-semibold flex items-center gap-3">
//                 🤖 AI Review Summary
//               </h3>
//               <button
//                 onClick={generateAISummary}
//                 disabled={summaryLoading}
//                 className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl font-medium transition disabled:opacity-70"
//               >
//                 {summaryLoading ? "Generating..." : "Generate AI Summary"}
//               </button>
//             </div>

//             <div className="prose text-gray-700 leading-relaxed">
//               {ai?.summary ? (
//                 <div className="whitespace-pre-wrap text-[15.5px]">{ai.summary}</div>
//               ) : (
//                 <p className="text-gray-400 italic text-center py-12">
//                   Click the button above to get intelligent AI insights from all customer reviews.
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Write Your Review */}
//           {me?._id && (
//             <div className="bg-white rounded-3xl shadow p-8">
//               <h3 className="text-xl font-semibold mb-6">Write a Review</h3>
//               <form onSubmit={handleReviewSubmit} className="space-y-6">
//                 <div>
//                   <p className="font-medium mb-3">Your Rating</p>
//                   <Stars value={myReview.rating} onChange={(rating) => setMyReview({ ...myReview, rating })} />
//                 </div>

//                 <div>
//                   <p className="font-medium mb-2">Your Review</p>
//                   <textarea
//                     placeholder="Share your honest experience with this product..."
//                     value={myReview.comment}
//                     onChange={(e) => setMyReview({ ...myReview, comment: e.target.value })}
//                     rows={5}
//                     className="w-full border border-gray-300 rounded-2xl p-5 focus:outline-none focus:border-violet-500 resize-y"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={saving || !eligible}
//                   className="w-full py-4 bg-black text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 transition disabled:opacity-50"
//                 >
//                   {saving ? "Submitting Review..." : "Submit Review"}
//                 </button>
//               </form>
//             </div>
//           )}

//           {/* All Reviews */}
//           <div className="bg-white rounded-3xl shadow p-8">
//             <h3 className="text-2xl font-semibold mb-6">All Reviews ({reviews.length})</h3>
//             {reviews.length === 0 ? (
//               <p className="text-gray-500 text-center py-12">No reviews yet. Be the first to review!</p>
//             ) : (
//               <div className="space-y-8">
//                 {reviews.map((r, i) => (
//                   <div key={i} className="border-b pb-8 last:border-b-0">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <b>{r.user?.name || "Anonymous User"}</b>
//                         <p className="text-xs text-gray-500 mt-1">
//                           {new Date(r.createdAt).toLocaleDateString('en-IN')}
//                         </p>
//                       </div>
//                       <Stars value={r.rating} />
//                     </div>
//                     {r.comment && <p className="mt-4 text-gray-700 leading-relaxed">{r.comment}</p>}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// frontend/src/pages/ReviewSummaryPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import http from "../api/http.js";
import { fetchReviewSummary } from "../store/aiSlice.js";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

/* ---------- stars, matched to the ProductDetail star treatment ---------- */

function StarIcon({ fill = 1, size = 16, interactive = false, onClick }) {
  const id = React.useRef(`rs-star-${Math.random().toString(36).slice(2)}`).current;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      onClick={onClick}
      className={interactive ? "cursor-pointer transition-transform duration-150 hover:scale-110" : ""}
    >
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
}

function Stars({ value = 0, onChange, size = 16 }) {
  if (onChange) {
    // Interactive: whole-star clicks for a rating input
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            fill={i < value ? 1 : 0}
            size={size}
            interactive
            onClick={() => onChange(i + 1)}
          />
        ))}
      </div>
    );
  }
  // Read-only: partial fill for averages
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} fill={Math.max(0, Math.min(1, value - i))} size={size} />
      ))}
    </div>
  );
}

const initials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("") || "?";

const avatarPalette = ["#15171c", "#8C3A2E", "#AD8A4D", "#1f7a4d", "#5b6471"];
const avatarColor = (name = "") => {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return avatarPalette[h % avatarPalette.length];
};

const SparkleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2zM19 14l.8 2.6L22.4 17.4 19.8 18.2 19 21l-.8-2.8-2.6-.8 2.6-.8L19 14z" />
  </svg>
);

export default function ReviewSummaryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const me = useSelector((s) => s.user.me);
  const ai = useSelector((s) => s.ai);

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [eligible, setEligible] = useState(false);
  const [myReview, setMyReview] = useState({ rating: 0, comment: "" });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [summaryLoading, setSummaryLoading] = useState(false);

  // Load Product & Reviews
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [{ data: p }, { data: revs }] = await Promise.all([
          http.get(`/api/products/${id}`),
          http.get(`/api/products/${id}/reviews`),
        ]);
        setProduct(p);
        setReviews(revs || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  // Check eligibility to review
  useEffect(() => {
    if (!me?._id) return;
    http
      .get(`/api/products/${id}/reviews/eligible`)
      .then(({ data }) => setEligible(!!data?.eligible))
      .catch(() => setEligible(false));
  }, [id, me]);

  // Generate AI Summary (Button Trigger)
  const generateAISummary = async () => {
    setSummaryLoading(true);
    try {
      await dispatch(fetchReviewSummary(id));
    } catch (e) {
      console.error(e);
    } finally {
      setSummaryLoading(false);
    }
  };

  const avgRating = useMemo(() => {
    if (!reviews?.length) return 0;
    const sum = reviews.reduce((s, r) => s + (r.rating || 0), 0);
    return Math.round((sum / reviews.length) * 10) / 10;
  }, [reviews]);

  // Rating distribution, for the bar breakdown next to the average
  const distribution = useMemo(() => {
    const counts = [0, 0, 0, 0, 0]; // index 0 = 1-star ... index 4 = 5-star
    reviews.forEach((r) => {
      const n = Math.round(r.rating || 0);
      if (n >= 1 && n <= 5) counts[n - 1] += 1;
    });
    const max = Math.max(1, ...counts);
    return counts.map((c) => ({ count: c, pct: (c / max) * 100 }));
  }, [reviews]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!me?._id) return alert("Please login to review");
    if (!eligible) return alert("Only buyers can review this product");
    if (myReview.rating < 1) return alert("Please give a rating");

    setSaving(true);
    try {
      await http.post(`/api/products/${id}/reviews`, {
        rating: myReview.rating,
        comment: myReview.comment || "",
      });
      alert("Review submitted successfully!");
      const { data } = await http.get(`/api/products/${id}/reviews`);
      setReviews(data || []);
      setMyReview({ rating: 0, comment: "" });
    } catch (err) {
      alert("Failed to submit review");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F4EE] flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#15171c]/60">
          <span className="w-5 h-5 border-2 border-[#15171c]/20 border-t-[#15171c] rounded-full animate-spin" />
          <span className="text-sm font-medium">Loading reviews…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ============ Product sidebar ============ */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              {product && (
                <div className="bg-white rounded-2xl border border-[#15171c]/10 overflow-hidden shadow-[0_8px_24px_rgba(21,23,28,0.05)]">
                  <div className="aspect-[4/5] bg-[#F7F4EE]">
                    <img
                      src={product.images?.[0] ? `${API_BASE}${product.images[0]}` : ""}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-semibold tracking-wide text-[#15171c]/45 uppercase mb-1">
                      {product.brand} • {product.category}
                    </div>
                    <h2 className="text-[19px] font-bold text-[#15171c] leading-snug">{product.title}</h2>

                    <div className="flex items-center gap-2 mt-4">
                      <Stars value={avgRating} size={15} />
                      <span className="text-[13px] font-bold text-[#15171c]">{avgRating.toFixed(1)}</span>
                      <span className="text-[12.5px] text-[#15171c]/45">({reviews.length} reviews)</span>
                    </div>

                    {/* Rating breakdown */}
                    <div className="mt-5 space-y-1.5">
                      {[5, 4, 3, 2, 1].map((n) => (
                        <div key={n} className="flex items-center gap-2">
                          <span className="text-[11px] font-medium text-[#15171c]/50 w-7">{n}★</span>
                          <div className="flex-1 h-1.5 rounded-full bg-[#15171c]/[0.06] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#AD8A4D] transition-all duration-500"
                              style={{ width: `${distribution[n - 1].pct}%` }}
                            />
                          </div>
                          <span className="text-[11px] text-[#15171c]/40 w-5 text-right">{distribution[n - 1].count}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/product/${id}`}
                      className="inline-flex items-center gap-1.5 mt-5 text-[12.5px] font-semibold text-[#AD8A4D] hover:text-[#8C3A2E] transition-colors"
                    >
                      ← Back to product
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ============ Main content ============ */}
          <div className="lg:col-span-8 space-y-6">
            {/* AI Summary */}
            <div className="bg-white rounded-2xl border border-[#15171c]/10 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
                <h3 className="text-[16px] font-bold text-[#15171c] flex items-center gap-2">
                  <SparkleIcon className="w-[18px] h-[18px] text-[#AD8A4D]" />
                  AI Review Summary
                </h3>
                <button
                  onClick={generateAISummary}
                  disabled={summaryLoading}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#15171c] text-white text-[13px] font-semibold rounded-full
                    transition-all duration-200 hover:bg-[#2a2d36] active:scale-[0.97] disabled:opacity-50"
                >
                  {summaryLoading && (
                    <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  )}
                  {summaryLoading ? "Generating…" : "Generate AI Summary"}
                </button>
              </div>

              {ai?.summary ? (
                <div className="rounded-xl bg-gradient-to-br from-[#AD8A4D]/[0.06] to-transparent border border-[#AD8A4D]/20 p-5">
                  <div className="whitespace-pre-wrap text-[14.5px] leading-relaxed text-[#15171c]/80">
                    {ai.summary}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 px-4 rounded-xl border border-dashed border-[#15171c]/15">
                  <p className="text-[13.5px] text-[#15171c]/45">
                    Generate intelligent AI insights from everything customers have said about this product.
                  </p>
                </div>
              )}
            </div>

            {/* Write Your Review */}
            {me?._id && (
              <div className="bg-white rounded-2xl border border-[#15171c]/10 p-6 sm:p-7">
                <h3 className="text-[16px] font-bold text-[#15171c] mb-5">Write a Review</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-5">
                  <div>
                    <p className="text-[13px] font-semibold text-[#15171c]/70 mb-2">Your Rating</p>
                    <Stars
                      value={myReview.rating}
                      size={26}
                      onChange={(rating) => setMyReview({ ...myReview, rating })}
                    />
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold text-[#15171c]/70 mb-2">Your Review</p>
                    <textarea
                      placeholder="Share your honest experience with this product…"
                      value={myReview.comment}
                      onChange={(e) => setMyReview({ ...myReview, comment: e.target.value })}
                      rows={4}
                      className="w-full text-sm text-[#15171c] border border-[#15171c]/15 rounded-xl p-4
                        outline-none transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15 resize-y"
                    />
                  </div>

                  {!eligible && (
                    <p className="text-[12.5px] text-[#8C3A2E] font-medium">
                      Only verified buyers can review this product.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={saving || !eligible}
                    className="w-full py-3.5 bg-gradient-to-r from-[#8C3A2E] to-[#b5503f] text-white rounded-full font-semibold text-[14px]
                      transition-all duration-200 hover:shadow-lg hover:shadow-[#8C3A2E]/30 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed
                      flex items-center justify-center gap-2"
                  >
                    {saving && <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />}
                    {saving ? "Submitting Review…" : "Submit Review"}
                  </button>
                </form>
              </div>
            )}

            {/* All Reviews */}
            <div className="bg-white rounded-2xl border border-[#15171c]/10 p-6 sm:p-7">
              <h3 className="text-[16px] font-bold text-[#15171c] mb-5">All Reviews ({reviews.length})</h3>

              {reviews.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-xl border border-dashed border-[#15171c]/15">
                  <p className="text-[13.5px] text-[#15171c]/45">No reviews yet. Be the first to review!</p>
                </div>
              ) : (
                <div className="divide-y divide-[#15171c]/8">
                  {reviews.map((r, i) => {
                    const name = r.user?.name || "Anonymous User";
                    return (
                      <div key={i} className="py-5 first:pt-0 last:pb-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                              style={{ background: avatarColor(name) }}
                            >
                              {initials(name)}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13.5px] font-semibold text-[#15171c]">{name}</span>
                                {r.verified !== false && (
                                  <span className="inline-flex items-center gap-0.5 text-[10.5px] font-bold text-[#1f7a4d] bg-[#1f7a4d]/[0.08] px-1.5 py-0.5 rounded-full">
                                    ✓ Verified
                                  </span>
                                )}
                              </div>
                              <p className="text-[11.5px] text-[#15171c]/40 mt-0.5">
                                {new Date(r.createdAt).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                          <Stars value={r.rating} size={14} />
                        </div>
                        {r.comment && (
                          <p className="mt-3 text-[13.5px] text-[#15171c]/70 leading-relaxed pl-12">{r.comment}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}