// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import SmartSearchBar from "../components/SmartSearchBar.jsx";
// // // // // // // import VisualSearch from "../components/VisualSearch.jsx";
// // // // // // // import http from "../api/http.js";
// // // // // // // import { ENDPOINTS } from "../api/endpoints.js";
// // // // // // // import ProductCard from "../components/ProductCard.jsx";

// // // // // // // export default function Home() {
// // // // // // //   const [trending, setTrending] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [err, setErr] = useState("");

// // // // // // //   useEffect(() => {
// // // // // // //     (async () => {
// // // // // // //       try {
// // // // // // //         const { data } = await http.get(`${ENDPOINTS.products.base}?limit=8&sort=popular`);
// // // // // // //         setTrending(data?.items || []);
// // // // // // //       } catch (e) {
// // // // // // //         console.error(e);
// // // // // // //         setErr("Failed to load trending products");
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     })();
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <SmartSearchBar />

// // // // // // //       <h2>Our Trending Collections</h2>
// // // // // // //       {loading && <div className="muted">Loading…</div>}
// // // // // // //       {err && <div className="muted">{err}</div>}
// // // // // // //       <div className="grid">
// // // // // // //         {trending.map((p, i) => (
// // // // // // //           <ProductCard key={p._id || p.id || i} product={p} /> 
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       <h2>Visual Search</h2>
// // // // // // //       <VisualSearch category="men" /> {/* 'men'/'women'/'kids' best */}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import SmartSearchBar from "../components/SmartSearchBar.jsx";
// // // // // // import VisualSearch from "../components/VisualSearch.jsx";
// // // // // // import http from "../api/http.js";
// // // // // // import { ENDPOINTS } from "../api/endpoints.js";
// // // // // // import ProductCard from "../components/ProductCard.jsx";

// // // // // // export default function Home() {
// // // // // //   const [trending, setTrending] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     (async () => {
// // // // // //       try {
// // // // // //         const { data } = await http.get(`${ENDPOINTS.products.base}?limit=8&sort=popular`);
// // // // // //         setTrending(data?.items || []);
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     })();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="container home">
// // // // // //       <SmartSearchBar />

// // // // // //       <h2 className="section-title">Our Trending Collections</h2>
// // // // // //       {loading && <div className="muted">Loading…</div>}
// // // // // //       <div className="grid products-grid">
// // // // // //         {trending.map((p, i) => (
// // // // // //           <ProductCard key={p._id || p.id || i} product={p} />
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <h2 className="section-title">Visual Search</h2>
// // // // // //       <VisualSearch category="men" />
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // src/pages/Home.jsx
// // // // // import React, { useEffect, useState } from "react";
// // // // // import SmartSearchBar from "../components/SmartSearchBar.jsx";
// // // // // import VisualSearch from "../components/VisualSearch.jsx";
// // // // // import http from "../api/http.js";
// // // // // import { ENDPOINTS } from "../api/endpoints.js";
// // // // // import ProductCard from "../components/ProductCard.jsx";
// // // // // import BannerCarousel from "../components/BannerCarousel.jsx"; // ⬅️ add

// // // // // export default function Home() {
// // // // //   const [trending, setTrending] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     (async () => {
// // // // //       try {
// // // // //         const { data } = await http.get(
// // // // //           `${ENDPOINTS.products.base}?limit=8&sort=popular`
// // // // //         );
// // // // //         setTrending(data?.items || []);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     })();
// // // // //   }, []);

// // // // //   // 4 banners (images ko public/banners/ me rakho)
// // // // //   const banners = [
// // // // //     {
// // // // //       img: "/banners/gel-rocket-12.jpg",
// // // // //       title: "GEL ROCKET 12",
// // // // //       sub: "Gel cushioning • Game-ready grip",
// // // // //       cta: "SHOP NOW",
// // // // //       href: "/shop?category=shoes",
// // // // //       badge: "ASICS",
// // // // //     },
// // // // //     {
// // // // //       img: "/banners/men-summer.jpg",
// // // // //       title: "SUMMER ESSENTIALS",
// // // // //       sub: "Linen shirts & breezy chinos",
// // // // //       cta: "Explore",
// // // // //       href: "/shop?category=men",
// // // // //       badge: "NEW",
// // // // //     },
// // // // //     {
// // // // //       img: "/banners/women-festive.jpg",
// // // // //       title: "FESTIVE EDIT",
// // // // //       sub: "Vibrant kurtas & sets",
// // // // //       cta: "Shop Festive",
// // // // //       href: "/shop?category=women",
// // // // //     },
// // // // //     {
// // // // //       img: "/banners/accessories-sale.jpg",
// // // // //       title: "ACCESSORIES SALE",
// // // // //       sub: "Up to 40% off",
// // // // //       cta: "Grab Deals",
// // // // //       href: "/shop?category=accessories",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="container home"   style={{width:"100%"}}>
// // // // //       <SmartSearchBar />

// // // // //       {/* 🔥 New: Banner Carousel with arrows + dots */}
// // // // //       <BannerCarousel banners={banners} auto interval={5500} />

// // // // //       <h2 className="section-title">Our Trending Collections</h2>
// // // // //       {loading && <div className="muted">Loading…</div>}
// // // // //       <div className="grid products-grid">
// // // // //         {trending.map((p, i) => (
// // // // //           <ProductCard key={p._id || p.id || i} product={p} />
// // // // //         ))}
// // // // //       </div>

// // // // //       <h2 className="section-title">Visual Search</h2>
// // // // //       <VisualSearch category="men" />
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // src/pages/Home.jsx
// // // import React, { useEffect, useState } from "react";
// // // import SmartSearchBar from "../components/SmartSearchBar.jsx";
// // // import VisualSearch from "../components/VisualSearch.jsx";
// // // import http from "../api/http.js";
// // // import { ENDPOINTS } from "../api/endpoints.js";
// // // import ProductCard from "../components/ProductCard.jsx";
// // // import BannerCarousel from "../components/BannerCarousel.jsx";
// // // import "./Home.css";
// // // // images
// // // import b1 from "../images/b1.jpg";
// // // import b2 from "../images/b2.jpg";
// // // import b3 from "../images/b3.jpg";
// // // import b4 from "../images/b4.jpg";

// // // import CategoryCircles from "../components/CategoryCircles.jsx";
// // // import c1 from "../images/b1.jpg";
// // // import c2 from "../images/b1.jpg";
// // // import c3 from "../images/b1.jpg";
// // // import c4 from "../images/b1.jpg";
// // // import c5 from "../images/b1.jpg";
// // // import c6 from "../images/b1.jpg";

// // // export default function Home() {
// // //   const [trending, setTrending] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     (async () => {
// // //       try {
// // //         const { data } = await http.get(
// // //           `${ENDPOINTS.products.base}?limit=8&sort=popular`
// // //         );
// // //         setTrending(data?.items || []);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     })();
// // //   }, []);

// // // // Banners
// // //   const banners = [
// // //     {
// // //       img: b1,
// // //       title: "GEL ROCKET 12",
// // //       sub: "Gel cushioning • Game-ready grip",
// // //       cta: "SHOP NOW",
// // //       href: "/shop?category=shoes",
// // //       badge: "ASICS",
// // //     },
// // //     {
// // //       img: b2,
// // //       title: "SUMMER ESSENTIALS",
// // //       sub: "Linen shirts & breezy chinos",
// // //       cta: "Explore",
// // //       href: "/shop?category=men",
// // //       badge: "NEW",
// // //     },
// // //     {
// // //       img: b3,
// // //       title: "FESTIVE EDIT",
// // //       sub: "Vibrant kurtas & sets",
// // //       cta: "Shop Festive",
// // //       href: "/shop?category=women",
// // //     },
// // //     {
// // //       img: b4,
// // //       title: "ACCESSORIES SALE",
// // //       sub: "Up to 40% off",
// // //       cta: "Grab Deals",
// // //       href: "/shop?category=accessories",
// // //     },
// // //   ];


// // //   return (
// // //     <div className="home-wrap">
// // //       <div className="home-container">
// // //         <SmartSearchBar />
// // //       </div>

// // //       {/* Hero Carousel */}
// // //       <BannerCarousel banners={banners} auto interval={5500} />

// // //       {/* Trending */}
// // //       <section className="home-section">
// // //         <div className="home-container">
// // //           <header className="sec-head">
// // //             <h2 className="sec-title">Our Trending Collections</h2>
// // //             <p className="sec-sub">Most-loved picks curated for you</p>
// // //           </header>

// // //           {loading ? (
// // //             <div className="grid products-grid">
// // //               {Array.from({ length: 8 }).map((_, i) => (
// // //                 <div className="pc skeleton" key={i}>
// // //                   <div className="pc-media sk-media" />
// // //                   <div className="pc-body sk-body">
// // //                     <div className="sk-line w40" />
// // //                     <div className="sk-line w80" />
// // //                     <div className="sk-line w60" />
// // //                     <div className="sk-btns">
// // //                       <div className="sk-btn" />
// // //                       <div className="sk-btn" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           ) : (
// // //             <div className="grid products-grid">
// // //               {trending.map((p, i) => (
// // //                 <ProductCard key={p._id || p.id || i} product={p} />
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* Visual Search */}
// // //       <section className="home-section">
// // //         <div className="home-container">
// // //           <header className="sec-head">
// // //             <h2 className="sec-title">Visual Search</h2>
// // //             <p className="sec-sub">Snap or upload to find similar styles</p>
// // //           </header>

// // //           <VisualSearch category="men" />
// // //         </div>
// // //       </section>



// // //       <CategoryCircles
// // //   items={[
// // //     { title: "Shirts",            img: c1, to: "/shop?category=shirts" },
// // //     { title: "T-Shirts",          img: c2, to: "/shop?category=tshirts" },
// // //     { title: "Jeans",             img: c3, to: "/shop?category=jeans" },
// // //     { title: "Shorts & Trousers", img: c4, to: "/shop?category=bottoms" },
// // //     { title: "Casual Shoes",      img: c5, to: "/shop?category=shoes" },
// // //     { title: "Infant Essentials", img: c6, to: "/shop?category=infant" },
// // //   ]}
// // // />
// // //     </div>
// // //   );
// // // }





// // // src/pages/Home.jsx
// // import React, { useEffect, useState } from "react";
// // import SmartSearchBar from "../components/SmartSearchBar.jsx";
// // import VisualSearch from "../components/VisualSearch.jsx";
// // import http from "../api/http.js";
// // import { ENDPOINTS } from "../api/endpoints.js";
// // import ProductCard from "../components/ProductCard.jsx";
// // import BannerCarousel from "../components/BannerCarousel.jsx";
// // // images
// // import b1 from "../images/b1.jpg";
// // import b2 from "../images/b2.jpg";
// // import b3 from "../images/b3.jpg";
// // import b4 from "../images/b4.jpg";

// // import CategoryCircles from "../components/CategoryCircles.jsx";
// // import c1 from "../images/c1.jpg";
// // import c2 from "../images/c2.jpg";
// // import c3 from "../images/c3.jpg";
// // import c4 from "../images/c4.jpg";
// // import c5 from "../images/c5.jpg";
// // import c6 from "../images/c6.jpg";
// // import c7 from "../images/c7.jpg";
// // import c7 from "../images/c8.jpg";

// // export default function Home() {
// //   const [trending, setTrending] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     (async () => {
// //       try {
// //         const { data } = await http.get(
// //           `${ENDPOINTS.products.base}?limit=8&sort=popular`
// //         );
// //         setTrending(data?.items || []);
// //       } finally {
// //         setLoading(false);
// //       }
// //     })();
// //   }, []);

// //   // Banners
// //   const banners = [
// //     {
// //       img: b1,
// //       title: "GEL ROCKET 12",
// //       sub: "Gel cushioning • Game-ready grip",
// //       cta: "SHOP NOW",
// //       href: "/shop?category=shoes",
// //       badge: "ASICS",
// //     },
// //     {
// //       img: b2,
// //       title: "SUMMER ESSENTIALS",
// //       sub: "Linen shirts & breezy chinos",
// //       cta: "Explore",
// //       href: "/shop?category=men",
// //       badge: "NEW",
// //     },
// //     {
// //       img: b3,
// //       title: "FESTIVE EDIT",
// //       sub: "Vibrant kurtas & sets",
// //       cta: "Shop Festive",
// //       href: "/shop?category=women",
// //     },
// //     {
// //       img: b4,
// //       title: "ACCESSORIES SALE",
// //       sub: "Up to 40% off",
// //       cta: "Grab Deals",
// //       href: "/shop?category=accessories",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-neutral-50">
// //       {/* Sticky search bar */}
// //       <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
// //           <SmartSearchBar />
// //         </div>
// //       </div>

// //       {/* Hero Carousel */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
// //         <div className="rounded-2xl overflow-hidden shadow-md">
// //           <BannerCarousel banners={banners} auto interval={5500} />
// //         </div>
// //       </div>



// //       {/* Category Circles */}
// //       <section className="py-10 sm:py-14">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <header className="flex flex-col items-center text-center mb-8">
// //             <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
// //               Shop by Category
// //             </h2>
// //             <div className="h-1 w-16 bg-rose-600 rounded-full mt-4" />
// //           </header>

// //           <CategoryCircles
// //             items={[
// //               { title: "Shirts", img: c1, to: "/shop?category=shirts" },
// //               { title: "T-Shirts", img: c2, to: "/shop?category=tshirts" },
// //               { title: "Jeans", img: c3, to: "/shop?category=jeans" },
// //               {
// //                 title: "Shorts & Trousers",
// //                 img: c4,
// //                 to: "/shop?category=bottoms",
// //               },
// //               // { title: "Casual Shoes", img: c5, to: "/shop?category=shoes" },
// //               //  { title: "kids wear", img: c7, to: "/shop?category=kids" },
// //               //   { title: "sports", img: c8, to: "/shop?category=sports" },
// //               {
// //                 title: "Infant Essentials",
// //                 img: c6,
// //                 to: "/shop?category=infant",
// //               },


// //             ]}
// //           />
// //         </div>
// //       </section>

// //       {/* Trending */}
// //       <section className="py-10 sm:py-14">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <header className="flex flex-col items-center text-center mb-8">
// //             <span className="text-xs font-semibold tracking-[0.2em] text-rose-600 uppercase mb-2">
// //               Curated For You
// //             </span>
// //             <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
// //               Our Trending Collections
// //             </h2>
// //             <p className="text-sm sm:text-base text-neutral-500 mt-1">
// //               Most-loved picks curated for you
// //             </p>
// //             <div className="h-1 w-16 bg-rose-600 rounded-full mt-4" />
// //           </header>

// //           {loading ? (
// //             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
// //               {Array.from({ length: 8 }).map((_, i) => (
// //                 <div
// //                   key={i}
// //                   className="rounded-xl bg-white border border-neutral-200 overflow-hidden animate-pulse"
// //                 >
// //                   <div className="aspect-[3/4] bg-neutral-200" />
// //                   <div className="p-3 space-y-2">
// //                     <div className="h-3 w-2/5 bg-neutral-200 rounded" />
// //                     <div className="h-3 w-4/5 bg-neutral-200 rounded" />
// //                     <div className="h-3 w-3/5 bg-neutral-200 rounded" />
// //                     <div className="flex gap-2 pt-2">
// //                       <div className="h-8 flex-1 bg-neutral-200 rounded-lg" />
// //                       <div className="h-8 flex-1 bg-neutral-200 rounded-lg" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
// //               {trending.map((p, i) => (
// //                 <div
// //                   key={p._id || p.id || i}
// //                   className="rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
// //                 >
// //                   <ProductCard product={p} />
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </section>

     

      
// //     </div>
// //   );
// // }






// // src/pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import SmartSearchBar from "../components/SmartSearchBar.jsx";
// import VisualSearch from "../components/VisualSearch.jsx";
// import http from "../api/http.js";
// import { ENDPOINTS } from "../api/endpoints.js";
// import ProductCard from "../components/ProductCard.jsx";
// import BannerCarousel from "../components/BannerCarousel.jsx";
// // images
// import b1 from "../images/b1.jpg";
// import b2 from "../images/b2.jpg";
// import b3 from "../images/b3.jpg";
// import b4 from "../images/b4.jpg";

// import CategoryCircles from "../components/CategoryCircles.jsx";
// import c1 from "../images/c1.jpg";
// import c2 from "../images/c2.jpg";
// import c3 from "../images/c3.jpg";
// import c4 from "../images/c4.jpg";
// import c5 from "../images/c5.jpg";
// import c6 from "../images/c6.jpg";
// import c7 from "../images/c7.jpg";
// import c8 from "../images/c8.jpg"; // FIX: was re-importing as `c7`, which is an
// // illegal duplicate `const c7` declaration and would crash the whole bundle
// // at build time (Vite/ESBuild throws "Identifier 'c7' has already been
// // declared"). Renamed to `c8` to match its actual file.

// export default function Home() {
//   const [trending, setTrending] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await http.get(
//           `${ENDPOINTS.products.base}?limit=8&sort=popular`
//         );
//         setTrending(data?.items || []);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   // Banners
//   const banners = [
//     {
//       img: b1,
//       title: "GEL ROCKET 12",
//       sub: "Gel cushioning • Game-ready grip",
//       cta: "SHOP NOW",
//       href: "/shop?category=shoes",
//       badge: "ASICS",
//     },
//     {
//       img: b2,
//       title: "SUMMER ESSENTIALS",
//       sub: "Linen shirts & breezy chinos",
//       cta: "Explore",
//       href: "/shop?category=men",
//       badge: "NEW",
//     },
//     {
//       img: b3,
//       title: "FESTIVE EDIT",
//       sub: "Vibrant kurtas & sets",
//       cta: "Shop Festive",
//       href: "/shop?category=women",
//     },
//     {
//       img: b4,
//       title: "ACCESSORIES SALE",
//       sub: "Up to 40% off",
//       cta: "Grab Deals",
//       href: "/shop?category=accessories",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#EDEAE1]">
//       {/* Sticky search bar */}
//       <div className="sticky top-0 z-30 bg-[#15171c]/95 backdrop-blur-sm border-b border-white/10 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//           <SmartSearchBar />
//         </div>
//       </div>

//       {/* Editorial Hero Band */}
//       <div className="bg-[#15171c] pb-10 sm:pb-14">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7">
//           {/* Eyebrow + brass rule — frames the carousel like a magazine spread */}
//           <div className="flex items-center gap-4 mb-5">
//             <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase font-[Oswald,sans-serif]">
//               The Edit — AW'26
//             </span>
//             <div className="h-px flex-1 bg-gradient-to-r from-[#AD8A4D]/60 to-transparent" />
//           </div>

//           <div className="rounded-sm overflow-hidden ring-1 ring-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
//             <BannerCarousel banners={banners} auto interval={5500} />
//           </div>
//         </div>
//       </div>

//       {/* Category Circles */}
//       <section className="py-14 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <header className="flex flex-col items-start text-left mb-10">
//             <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase">
//               Browse
//             </span>
//             <h2
//               className="text-3xl sm:text-4xl font-bold text-[#15171c] tracking-tight uppercase mt-2"
//               style={{ fontFamily: "Oswald, sans-serif" }}
//             >
//               Shop by Category
//             </h2>
//             <div className="h-[3px] w-14 bg-[#AD8A4D] mt-4" />
//           </header>

//           <CategoryCircles
//             items={[
//               { title: "Shirts", img: c1, to: "/shop?category=shirts" },
//               { title: "T-Shirts", img: c2, to: "/shop?category=tshirts" },
//               { title: "Jeans", img: c3, to: "/shop?category=jeans" },
//               {
//                 title: "Shorts & Trousers",
//                 img: c4,
//                 to: "/shop?category=bottoms",
//               },
//               {
//                 title: "Infant Essentials",
//                 img: c6,
//                 to: "/shop?category=infant",
//               },
//             ]}
//           />
//         </div>
//       </section>

//       {/* Divider between sections — quiet structural device, not decoration */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="h-px bg-[#15171c]/10" />
//       </div>

//       {/* Trending */}
//       <section className="py-14 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
//             <div>
//               <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase">
//                 Curated For You
//               </span>
//               <h2
//                 className="text-3xl sm:text-4xl font-bold text-[#15171c] tracking-tight uppercase mt-2"
//                 style={{ fontFamily: "Oswald, sans-serif" }}
//               >
//                 Trending Now
//               </h2>
//               <div className="h-[3px] w-14 bg-[#AD8A4D] mt-4" />
//             </div>
//             <p className="text-sm text-[#15171c]/60 max-w-xs sm:text-right">
//               Most-loved picks, restocked weekly based on what's actually selling.
//             </p>
//           </header>

//           {loading ? (
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//               {Array.from({ length: 8 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="rounded-sm bg-white border border-[#15171c]/10 overflow-hidden animate-pulse"
//                 >
//                   <div className="aspect-[3/4] bg-[#15171c]/10" />
//                   <div className="p-3 space-y-2">
//                     <div className="h-3 w-2/5 bg-[#15171c]/10 rounded" />
//                     <div className="h-3 w-4/5 bg-[#15171c]/10 rounded" />
//                     <div className="h-3 w-3/5 bg-[#15171c]/10 rounded" />
//                     <div className="flex gap-2 pt-2">
//                       <div className="h-8 flex-1 bg-[#15171c]/10 rounded-sm" />
//                       <div className="h-8 flex-1 bg-[#15171c]/10 rounded-sm" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : trending.length === 0 ? (
//             <div className="rounded-sm border border-[#15171c]/10 bg-white py-16 text-center">
//               <p className="text-[#15171c]/60">
//                 Nothing trending yet — check back soon, or browse a category above.
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//               {trending.map((p, i) => (
//                 <div
//                   key={p._id || p.id || i}
//                   className="rounded-sm bg-white border border-[#15171c]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#AD8A4D]/50 transition-all duration-300"
//                 >
//                   <ProductCard product={p} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }


// // src/pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import SmartSearchBar from "../components/SmartSearchBar.jsx";
// import VisualSearch from "../components/VisualSearch.jsx";
// import http from "../api/http.js";
// import { ENDPOINTS } from "../api/endpoints.js";
// import ProductCard from "../components/ProductCard.jsx";
// import BannerCarousel from "../components/BannerCarousel.jsx";
// import CategorySection from "../components/CategorySection.jsx";
// // images
// import b1 from "../images/b1.jpg";
// import b2 from "../images/b2.jpg";
// import b3 from "../images/b3.jpg";
// import b4 from "../images/b4.jpg";

// export default function Home() {
//   const [trending, setTrending] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await http.get(
//           `${ENDPOINTS.products.base}?limit=8&sort=popular`
//         );
//         setTrending(data?.items || []);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   // Banners
//   const banners = [
//     {
//       img: b1,
//       title: "GEL ROCKET 12",
//       sub: "Gel cushioning • Game-ready grip",
//       cta: "SHOP NOW",
//       href: "/shop?category=shoes",
//       badge: "ASICS",
//     },
//     {
//       img: b2,
//       title: "SUMMER ESSENTIALS",
//       sub: "Linen shirts & breezy chinos",
//       cta: "Explore",
//       href: "/shop?category=men",
//       badge: "NEW",
//     },
//     {
//       img: b3,
//       title: "FESTIVE EDIT",
//       sub: "Vibrant kurtas & sets",
//       cta: "Shop Festive",
//       href: "/shop?category=women",
//     },
//     {
//       img: b4,
//       title: "ACCESSORIES SALE",
//       sub: "Up to 40% off",
//       cta: "Grab Deals",
//       href: "/shop?category=accessories",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#EDEAE1]">
//       {/* Sticky search bar */}
      

//       {/* Editorial Hero Band */}
//       <div className="bg-[#15171c] pb-10 sm:pb-14">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7">
//           {/* Eyebrow + brass rule — frames the carousel like a magazine spread */}
//           <div className="flex items-center gap-4 mb-5">
//             <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase font-[Oswald,sans-serif]">
//               The Edit — AW'26
//             </span>
//             <div className="h-px flex-1 bg-gradient-to-r from-[#AD8A4D]/60 to-transparent" />
//           </div>

//           <div className="rounded-sm overflow-hidden ring-1 ring-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
//             <BannerCarousel banners={banners} auto interval={5500} />
//           </div>
//         </div>
//       </div>

//       {/* Category Circles — now its own component, see src/components/CategorySection.jsx */}
//       <CategorySection />

//       {/* Divider between sections — quiet structural device, not decoration */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="h-px bg-[#15171c]/10" />
//       </div>

//       {/* Trending */}
//       <section className="py-14 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
//             <div>
//               <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase">
//                 Curated For You
//               </span>
//               <h2
//                 className="text-3xl sm:text-4xl font-bold text-[#15171c] tracking-tight uppercase mt-2"
//                 style={{ fontFamily: "Oswald, sans-serif" }}
//               >
//                 Trending Now
//               </h2>
//               <div className="h-[3px] w-14 bg-[#AD8A4D] mt-4" />
//             </div>
//             <p className="text-sm text-[#15171c]/60 max-w-xs sm:text-right">
//               Most-loved picks, restocked weekly based on what's actually selling.
//             </p>
//           </header>

//           {loading ? (
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//               {Array.from({ length: 8 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="rounded-sm bg-white border border-[#15171c]/10 overflow-hidden animate-pulse"
//                 >
//                   <div className="aspect-[3/4] bg-[#15171c]/10" />
//                   <div className="p-3 space-y-2">
//                     <div className="h-3 w-2/5 bg-[#15171c]/10 rounded" />
//                     <div className="h-3 w-4/5 bg-[#15171c]/10 rounded" />
//                     <div className="h-3 w-3/5 bg-[#15171c]/10 rounded" />
//                     <div className="flex gap-2 pt-2">
//                       <div className="h-8 flex-1 bg-[#15171c]/10 rounded-sm" />
//                       <div className="h-8 flex-1 bg-[#15171c]/10 rounded-sm" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : trending.length === 0 ? (
//             <div className="rounded-sm border border-[#15171c]/10 bg-white py-16 text-center">
//               <p className="text-[#15171c]/60">
//                 Nothing trending yet — check back soon, or browse a category above.
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//               {trending.map((p, i) => (
//                 <div
//                   key={p._id || p.id || i}
//                   className="rounded-sm bg-white border border-[#15171c]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#AD8A4D]/50 transition-all duration-300"
//                 >
//                   <ProductCard product={p} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }






// src/pages/Home.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmartSearchBar from "../components/SmartSearchBar.jsx";
import VisualSearch from "../components/VisualSearch.jsx";
import http from "../api/http.js";
import { ENDPOINTS } from "../api/endpoints.js";
import ProductCard from "../components/ProductCard.jsx";
import BannerCarousel from "../components/BannerCarousel.jsx";
import CategorySection from "../components/CategorySection.jsx";
// images
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";

/* ---------------------------------------------------------------------- */
/* Shared motion presets — keeps the page's movement consistent and quiet */
/* ---------------------------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Reveal = ({ children, className = "", as: Tag = motion.div, ...rest }) => (
  <Tag
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    className={className}
    {...rest}
  >
    {children}
  </Tag>
);

/* ---------------------------------------------------------------------- */
/* AI Stylist Banner — futuristic gold-on-black "luxury assistant" panel  */
/* ---------------------------------------------------------------------- */
function AIStylistBanner({ onOpenChat }) {
  return (
    <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="relative overflow-hidden rounded-sm bg-[#15171c] ring-1 ring-[#AD8A4D]/25 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.7)]">
        {/* Ambient particle / glow layer */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#AD8A4D]/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 left-10 w-64 h-64 rounded-full bg-[#AD8A4D]/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#AD8A4D]/60"
              style={{ top: `${(i * 37) % 100}%`, left: `${(i * 53) % 100}%` }}
              animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -10, 0] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

        <div className="relative grid sm:grid-cols-2 gap-8 sm:gap-10 items-center px-6 sm:px-12 py-12 sm:py-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-[#AD8A4D] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AD8A4D] animate-pulse" />
              AI Stylist Assistant
            </span>
            <h2
              className="mt-4 text-3xl sm:text-[40px] leading-[1.1] font-bold text-white uppercase tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Find your perfect outfit,<br />
              <span className="text-[#AD8A4D]">styled by AI.</span>
            </h2>
            <p className="mt-4 text-white/60 text-[15px] max-w-md">
              Personalised outfit recommendations, sizing help and styling tips —
              in a conversation, not a search bar.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenChat}
                className="relative overflow-hidden bg-[#AD8A4D] text-[#15171c] font-semibold text-sm tracking-wide px-7 py-3.5 rounded-sm"
              >
                Chat with AI Stylist
              </motion.button>
              <motion.a
                href="#visual-search"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/25 text-white text-sm tracking-wide px-7 py-3.5 rounded-sm hover:border-[#AD8A4D]/60 hover:text-[#AD8A4D] transition-colors"
              >
                Try Visual Search
              </motion.a>
            </div>
          </div>

          {/* Decorative "assistant panel" mock */}
          <div className="hidden sm:block">
            <div className="rounded-sm border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 space-y-3">
              <div className="flex items-center gap-2 text-[11px] text-white/40 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#AD8A4D]" /> live recommendation
              </div>
              <div className="text-white/80 text-sm leading-relaxed">
                "Wedding ke liye outfit suggest karo" →
              </div>
              <div className="flex gap-2">
                {["Sherwani Set", "Bandhgala", "Indo-Western"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 rounded-full border border-[#AD8A4D]/40 text-[#AD8A4D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------------------------------------------------------------- */
/* Visual Search — drag & drop image upload with progress state          */
/* ---------------------------------------------------------------------- */
function VisualSearchSection() {
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | searching | done
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const handleFile = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setPreview(URL.createObjectURL(file));
    setStatus("searching");
    // Simulated AI search latency — replace with a real call to
    // POST /api/ai/visual-search once the endpoint is wired up.
    setTimeout(() => setStatus("done"), 1800);
  }, []);

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  return (
    <section id="visual-search" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-10 items-center">
        <Reveal>
          <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase">
            Snap. Upload. Discover.
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#15171c] tracking-tight uppercase mt-2"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Search similar outfits using AI
          </h2>
          <div className="h-[3px] w-14 bg-[#AD8A4D] mt-4 mb-5" />
          <p className="text-[#15171c]/60 text-[15px] max-w-md">
            Got a photo of a look you love? Drop it in and we'll find the closest
            matches from our catalogue — same vibe, real prices.
          </p>
        </Reveal>

        <Reveal>
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
            className={`relative rounded-sm border-2 border-dashed cursor-pointer transition-colors duration-200 aspect-[4/3] flex flex-col items-center justify-center text-center px-6 ${
              dragOver
                ? "border-[#AD8A4D] bg-[#AD8A4D]/5"
                : "border-[#15171c]/15 bg-[#EDEAE1]/40 hover:border-[#AD8A4D]/50"
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />

            <AnimatePresence mode="wait">
              {!preview && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-[#15171c]/10 flex items-center justify-center text-2xl shadow-sm">
                    📷
                  </div>
                  <p className="text-[#15171c] font-medium text-sm">
                    Drag & drop an image, or click to browse
                  </p>
                  <p className="text-[#15171c]/40 text-xs">JPG, PNG up to 10MB</p>
                </motion.div>
              )}

              {preview && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 rounded-sm overflow-hidden"
                >
                  <img src={preview} alt="Upload preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#15171c]/55 flex flex-col items-center justify-center gap-3">
                    {status === "searching" ? (
                      <>
                        <div className="w-8 h-8 rounded-full border-2 border-[#AD8A4D] border-t-transparent animate-spin" />
                        <p className="text-white text-sm font-medium">
                          Finding similar styles…
                        </p>
                        <div className="w-40 h-1 rounded-full bg-white/20 overflow-hidden">
                          <motion.div
                            className="h-full bg-[#AD8A4D]"
                            initial={{ width: "0%" }}
                            animate={{ width: "90%" }}
                            transition={{ duration: 1.7, ease: "easeOut" }}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="text-2xl">✨</span>
                        <p className="text-white text-sm font-medium">
                          Matches ready — scroll down to view
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreview(null);
                            setStatus("idle");
                          }}
                          className="text-[11px] tracking-widest uppercase text-[#AD8A4D] border border-[#AD8A4D]/50 px-4 py-1.5 rounded-full hover:bg-[#AD8A4D]/10"
                        >
                          Try another image
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* Home page                                                              */
/* ---------------------------------------------------------------------- */
export default function Home() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get(
          `${ENDPOINTS.products.base}?limit=8&sort=popular`
        );
        setTrending(data?.items || []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const openAiStylist = () => {
    // Hook this into your existing chat widget toggle (e.g. lift state up,
    // or dispatch a redux action). Placeholder event so this compiles
    // standalone — listen for it in FloatingChatButton if useful.
    window.dispatchEvent(new CustomEvent("open-ai-stylist"));
  };

  const banners = [
    {
      img: b1,
      title: "GEL ROCKET 12",
      sub: "Gel cushioning • Game-ready grip",
      cta: "SHOP NOW",
      href: "/shop?category=shoes",
      badge: "ASICS",
    },
    {
      img: b2,
      title: "SUMMER ESSENTIALS",
      sub: "Linen shirts & breezy chinos",
      cta: "Explore",
      href: "/shop?category=men",
      badge: "NEW",
    },
    {
      img: b3,
      title: "FESTIVE EDIT",
      sub: "Vibrant kurtas & sets",
      cta: "Shop Festive",
      href: "/shop?category=women",
    },
    {
      img: b4,
      title: "ACCESSORIES SALE",
      sub: "Up to 40% off",
      cta: "Grab Deals",
      href: "/shop?category=accessories",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EDEAE1]">
      {/* Editorial Hero Band */}
      <div className="bg-[#15171c] pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase font-[Oswald,sans-serif]">
              The Edit — AW'26
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#AD8A4D]/60 to-transparent" />
            {/* New Drop live badge */}
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#15171c] bg-[#AD8A4D] px-2.5 py-1 rounded-full whitespace-nowrap"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[#15171c]"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              New Drop
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-sm overflow-hidden ring-1 ring-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]"
          >
            <BannerCarousel banners={banners} auto interval={5500} />
          </motion.div>
        </div>
      </div>

      {/* Category Circles */}
      <CategorySection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-[#15171c]/10" />
      </div>

      {/* Trending */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as={motion.header} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase">
                Curated For You
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#15171c] tracking-tight uppercase mt-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Trending Now
              </h2>
              <div className="h-[3px] w-14 bg-[#AD8A4D] mt-4" />
            </div>
            <p className="text-sm text-[#15171c]/60 max-w-xs sm:text-right">
              Most-loved picks, restocked weekly based on what's actually selling.
            </p>
          </Reveal>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-sm bg-white border border-[#15171c]/10 overflow-hidden animate-pulse"
                >
                  <div className="aspect-[3/4] bg-[#15171c]/10" />
                  <div className="p-3 space-y-2">
                    <div className="h-3 w-2/5 bg-[#15171c]/10 rounded" />
                    <div className="h-3 w-4/5 bg-[#15171c]/10 rounded" />
                    <div className="h-3 w-3/5 bg-[#15171c]/10 rounded" />
                    <div className="flex gap-2 pt-2">
                      <div className="h-8 flex-1 bg-[#15171c]/10 rounded-sm" />
                      <div className="h-8 flex-1 bg-[#15171c]/10 rounded-sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : trending.length === 0 ? (
            <div className="rounded-sm border border-[#15171c]/10 bg-white py-16 text-center">
              <div className="text-4xl mb-3">🧺</div>
              <p className="text-[#15171c]/60">
                Nothing trending yet — check back soon, or browse a category above.
              </p>
            </div>
          ) : (
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {trending.map((p, i) => (
                <motion.div
                  key={p._id || p.id || i}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-sm bg-white border border-[#15171c]/10 shadow-sm hover:shadow-xl hover:border-[#AD8A4D]/50 transition-shadow duration-300"
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* AI Stylist — differentiator section */}
      <AIStylistBanner onOpenChat={openAiStylist} />

      {/* Visual Search */}
      <VisualSearchSection />
    </div>
  );
}