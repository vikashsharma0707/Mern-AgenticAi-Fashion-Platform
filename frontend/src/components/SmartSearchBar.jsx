// // import React, { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { smartSearch } from '../store/aiSlice.js';
// // import { Link } from 'react-router-dom';

// // export default function SmartSearchBar(){
// //   const [term, setTerm] = useState('');
// //   const dispatch = useDispatch();
// //   const results = useSelector(s=>s.ai.search);
// //   const go = ()=> term.trim() && dispatch(smartSearch(term));
// //   return (
// //     <div className="smartsearch">
// //       <div className="row">
// //         <input value={term} onChange={e=>setTerm(e.target.value)} placeholder="Smart search..."/>
// //         <button onClick={go}>Search</button>
// //       </div>
// //       {results?.length>0 && <div className="result-grid">
// //         {results.map(r => <Link key={r.product._id} to={`/product/${r.product._id}`} className="pill">{r.product.title} <small>({r.score.toFixed(2)})</small></Link>)}
// //       </div>}
// //     </div>
// //   );
// // }
// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { smartSearch } from '../store/aiSlice.js';
// import ProductCard from './ProductCard.jsx';

// export default function SmartSearchBar() {
//   const [q, setQ] = useState('');
//   const [open, setOpen] = useState(false);
//   const dispatch = useDispatch();
//   const { search } = useSelector(s => s.ai);
//   const box = useRef();

//   useEffect(() => {
//     const h = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false); };
//     document.addEventListener('click', h);
//     return () => document.removeEventListener('click', h);
//   }, []);

//   const onChange = (e) => setQ(e.target.value);
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!q.trim()) return;
//     await dispatch(smartSearch(q));
//     setOpen(true);
//   };

//   return (
//     <div className="panel" ref={box}>
//       <form className="row" onSubmit={onSubmit} style={{ gap: 10 }}>
//         <input
//           value={q}
//           onChange={onChange}
//           placeholder="Search (e.g. red running shoes under 2k)"
//           style={{ flex: 1, border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 12px' }}
//         />
//         <button className="btn" type="submit">Search</button>
//       </form>

//       {open && (
//         <div style={{ marginTop: 12 }}>
//           <div className="grid products-grid">
//             {search.map((p, i) => <ProductCard key={p._id || i} product={p} />)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// frontend/src/components/SmartSearchBar.jsx
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { smartSearch } from "../store/aiSlice.js";

const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

/**
 * One search box, two jobs:
 *  1. AI smart search — "red running shoes under 2k" → smartSearch thunk
 *     (backend already does semantic/budget parsing).
 *  2. Plain category/keyword search — "mens shirt" → same thunk, same
 *     endpoint (backend already falls back to regex/category match).
 *
 * Results render as a compact LIST (thumbnail + title + price), not the
 * full ProductCard grid — ProductCard assumes a wide card (image, heart,
 * cart button, expand icon, price block) and breaks down into truncated
 * text and overlapping icons when squeezed into a ~150px dropdown column.
 * A list row is the right pattern for a search-suggestions panel anyway
 * (this is what Myntra/Amazon/Flipkart autocomplete actually looks like).
 */
export default function SmartSearchBar({ compact = false, autoFocus = false, onSubmitted }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useSelector((s) => s.ai);
  const box = useRef();

  useEffect(() => {
    const h = (e) => {
      if (box.current && !box.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, []);

  const onChange = (e) => setQ(e.target.value);

  const runSearch = async (term) => {
    if (!term.trim()) return;
    setLoading(true);
    try {
      await dispatch(smartSearch(term));
      setOpen(true);
      onSubmitted?.(term);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await runSearch(q);
  };

  const goToFullResults = () => {
    if (!q.trim()) return;
    setOpen(false);
    navigate(`/shop?search=${encodeURIComponent(q.trim())}`);
  };

  const formatPrice = (p) => `₹${Number(p || 0).toLocaleString("en-IN")}`;

  return (
    <div className="relative w-full" ref={box}>
      <form onSubmit={onSubmit} className="relative">
        <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#15171c]/45 pointer-events-none" />
        <input
          value={q}
          onChange={onChange}
          autoFocus={autoFocus}
          placeholder={compact ? "Search products, brands…" : "Search (e.g. mens shirt, red running shoes under 2k)"}
          className="w-full pl-9 pr-9 py-2.5 text-sm bg-white border border-[#15171c]/15 rounded-full
            placeholder:text-[#15171c]/40 text-[#15171c] shadow-sm
            transition-all duration-200
            focus:outline-none focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15"
        />
        {loading && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 border-2 border-[#15171c]/20 border-t-[#AD8A4D] rounded-full animate-spin" />
        )}
      </form>

      {open && (
        // FIX: bounded width + max-height + proper z-index stacking so this
        // sits cleanly below the input instead of overflowing the viewport.
        <div className="absolute left-0 right-0 sm:w-[360px] mt-2 bg-white border border-[#15171c]/10 rounded-xl shadow-[0_16px_40px_rgba(21,23,28,0.15)] z-[60] max-h-[420px] overflow-y-auto">
          {loading ? (
            <div className="p-4 text-sm text-[#15171c]/60">Searching…</div>
          ) : search?.length > 0 ? (
            <>
              <ul className="divide-y divide-[#15171c]/5">
                {search.slice(0, 6).map((p, i) => (
                  <li key={p._id || i}>
                    <Link
                      to={`/product/${p._id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#F7F4EE] transition-colors duration-150"
                    >
                      <div className="w-12 h-14 shrink-0 rounded-md overflow-hidden bg-[#F5F5F5]">
                        <img
                          src={p.images?.[0] || p.image}
                          alt={p.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-medium text-[#15171c] truncate">
                          {p.title}
                        </div>
                        {p.brand && (
                          <div className="text-[11px] text-[#15171c]/50 truncate">{p.brand}</div>
                        )}
                      </div>
                      <div className="text-[13px] font-semibold text-[#15171c] shrink-0">
                        {formatPrice(p.price)}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={goToFullResults}
                className="w-full text-center text-sm font-semibold text-[#AD8A4D] hover:text-[#8C3A2E] py-3 border-t border-[#15171c]/5 transition-colors"
              >
                View all {search.length} results →
              </button>
            </>
          ) : (
            <div className="p-4 text-sm text-[#15171c]/60">
              No products found for "{q}". Try a different keyword or category.
            </div>
          )}
        </div>
      )}
    </div>
  );
}