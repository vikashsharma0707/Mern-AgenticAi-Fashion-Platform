// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // import "./CategoryCircles.css";

// // // // /**
// // // //  * items: [{ title, img, to }]  // `to` is link (e.g. /shop?category=shirts)
// // // //  */
// // // // export default function CategoryCircles({ title = "CATEGORIES TO BAG", items = [] }) {
// // // //   return (
// // // //     <section className="catbag-sec">
// // // //       <div className="catbag-head">{title}</div>
// // // //       <div className="catbag-grid">
// // // //         {items.map((it, i) => (
// // // //           <Link to={it.to || "#"} className="catbag-card" key={i}>
// // // //             <div className="catbag-imgwrap" aria-hidden="true">
// // // //               <img src={it.img} alt={it.title} />
// // // //               <span className="catbag-ring" />
// // // //             </div>
// // // //             <div className="catbag-title">{it.title}</div>
// // // //           </Link>
// // // //         ))}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import "./CategoryCircles.css";

// // // /**
// // //  * items: [{ title, img, to }]  // `to` is link (e.g. /shop?category=shirts)
// // //  *
// // //  * `title` is optional now — pass it only if this component is rendered on
// // //  * its own. When it's nested inside a parent section that already has its
// // //  * own heading (e.g. CategorySection.jsx), pass title={null} or omit it
// // //  * entirely so you don't get two headings stacked on top of each other.
// // //  */
// // // export default function CategoryCircles({ title = null, items = [] }) {
// // //   return (
// // //     <section className="catbag-sec">
// // //       {title && <div className="catbag-head">{title}</div>}
// // //       <div className="catbag-grid">
// // //         {items.map((it, i) => (
// // //           <Link to={it.to || "#"} className="catbag-card" key={it.to || it.title || i}>
// // //             <div className="catbag-imgwrap" aria-hidden="true">
// // //               <img src={it.img} alt={it.title} loading="lazy" />
// // //               <span className="catbag-ring" />
// // //             </div>
// // //             <div className="catbag-title">{it.title}</div>
// // //           </Link>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }






// // import React from "react";
// // import { Link } from "react-router-dom";

// // /**
// //  * items: [{ title, img, to }]  // `to` is link (e.g. /shop?category=shirts)
// //  *
// //  * `title` is optional — pass it only if this component is rendered on its
// //  * own. When nested inside a parent section that already has its own
// //  * heading (e.g. CategorySection.jsx), omit it so you don't get two
// //  * headings stacked on top of each other.
// //  */
// // export default function CategoryCircles({ title = null, items = [] }) {
// //   return (
// //     <section className="w-full">
// //       {title && (
// //         <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-[#15171c] mb-5">
// //           {title}
// //         </div>
// //       )}

// //       <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5 sm:gap-5">
// //         {items.map((it, i) => (
// //           <Link
// //             to={it.to || "#"}
// //             key={it.to || it.title || i}
// //             className="group flex flex-col items-center text-center no-underline"
// //           >
// //             {/* Fixed square circle — image always cropped to fill it,
// //                 regardless of the source photo's own aspect ratio. This is
// //                 what keeps busy/tall photos (e.g. a multi-item flatlay)
// //                 from blowing the "circle" out into a pill shape. */}
// //             <div
// //               className="relative w-full max-w-[120px] sm:max-w-[168px] aspect-square rounded-full overflow-hidden bg-white
// //                 shadow-[0_6px_18px_rgba(21,23,28,0.08)]
// //                 transition-all duration-300 ease-out
// //                 group-hover:-translate-y-1 group-hover:shadow-[0_14px_30px_rgba(21,23,28,0.16)]"
// //             >
// //               <img
// //                 src={it.img}
// //                 alt={it.title}
// //                 loading="lazy"
// //                 className="absolute inset-0 w-full h-full object-cover object-top"
// //               />
// //               {/* Decorative brass ring, sits just inside the circle's edge */}
// //               <span
// //                 className="absolute inset-1.5 rounded-full border-[1.5px] border-[#AD8A4D]/55
// //                   transition-all duration-300 ease-out
// //                   group-hover:inset-1 group-hover:border-[#AD8A4D]"
// //               />
// //             </div>

// //             <div className="mt-3.5 text-[13px] sm:text-[15px] font-semibold text-[#15171c]">
// //               {it.title}
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }




// import React from "react";
// import { Link } from "react-router-dom";

// /**
//  * items: [{ title, img, to, discount? }]
//  *   - `to` is link (e.g. /shop?category=shirts) — unchanged, still drives navigation.
//  *   - `discount` is optional display copy (e.g. "50-80% OFF" / "UP TO 70% OFF").
//  *     If omitted, the discount line simply doesn't render — no functional
//  *     impact either way.
//  *
//  * `title` (the section heading prop) is optional — pass it only if this
//  * component is rendered on its own. When nested inside a parent section
//  * that already has its own heading (e.g. CategorySection.jsx), omit it.
//  */
// export default function CategoryCircles({ title = null, items = [] }) {
//   return (
//     <section className="w-full">
//       {title && (
//         <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-[#15171c] mb-5">
//           {title}
//         </div>
//       )}

//       <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(10px,1fr))] gap-3 sm:gap-4 max-w-[1000px]">
//         {items.map((it, i) => (
//           <Link
//             to={it.to || "#"}
//             key={it.to || it.title || i}
//             className="group block bg-white border border-[#F5D5B5] rounded-md overflow-hidden
//               transition-all duration-300 ease-out
//               hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_22px_rgba(0,0,0,0.10)]"
//           >
//             {/* Image — occupies the large majority of the card */}
//             <div className="relative aspect-square w-full overflow-hidden bg-[#F5F5F5]">
//               <img
//                 src={it.img}
//                 alt={it.title}
//                 loading="lazy"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             </div>

//             {/* Text block */}
//             <div className="px-2 py-2 text-center">
//               <div className="text-[11px] font-semibold text-[#15171c] truncate">
//                 {it.title}
//               </div>

//               {it.discount && (
//                 <div className="text-[12px] font-extrabold text-[#15171c] mt-0.5 leading-tight">
//                   {it.discount}
//                 </div>
//               )}

//               <div className="text-[10px] font-medium text-[#15171c]/70 mt-0.5">
//                 Shop Now
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }






import React, { useRef } from "react";
import { Link } from "react-router-dom";

/**
 * items: [{ title, img, to, discount? }]
 *   - `to` is link (e.g. /shop?category=shirts) — drives navigation, unchanged.
 *   - `discount` is optional display copy. Omit it and the line just won't render.
 *
 * `title` (section heading) is optional — pass it only if this is rendered
 * standalone. Omit when nested in a parent with its own heading.
 *
 * Now a single-row horizontal swiper (native CSS scroll-snap — no extra
 * library/install needed) instead of a multi-row grid. Swipes on touch
 * devices out of the box; desktop gets arrow buttons.
 */
export default function CategoryCircles({ title = null, items = [] }) {
  const scrollerRef = useRef(null);

  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.offsetWidth || 180;
    el.scrollBy({ left: dir * (cardWidth + 16) * 2, behavior: "smooth" });
  };

  return (
    <section className="w-full">
      {title && (
        <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-[#15171c] mb-5">
          {title}
        </div>
      )}

      <div className="relative group/swiper">
        {/* Left arrow — desktop only, hidden on touch/mobile where swipe is natural */}
        <button
          onClick={() => scrollByCards(-1)}
          aria-label="Scroll left"
          className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center
            rounded-full bg-white border border-[#15171c]/10 shadow-md text-[#15171c]
            opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-200
            hover:bg-[#15171c] hover:text-white"
        >
          ‹
        </button>

        {/* Scroll track */}
        <div
          ref={scrollerRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden"
        >
          {items.map((it, i) => (
            <Link
              to={it.to || "#"}
              key={it.to || it.title || i}
              className="group shrink-0 snap-start basis-[40%] sm:basis-[22%] lg:basis-[160px]
                block bg-white border border-[#F5D5B5] rounded-md overflow-hidden
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_22px_rgba(0,0,0,0.10)]"
            >
              {/* Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#F5F5F5]">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Text block */}
              <div className="px-2 py-2 text-center">
                <div className="text-[11px] font-semibold text-[#15171c] truncate">
                  {it.title}
                </div>

                {it.discount && (
                  <div className="text-[12px] font-extrabold text-[#15171c] mt-0.5 leading-tight">
                    {it.discount}
                  </div>
                )}

                <div className="text-[10px] font-medium text-[#15171c]/70 mt-0.5">
                  Shop Now
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scrollByCards(1)}
          aria-label="Scroll right"
          className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center
            rounded-full bg-white border border-[#15171c]/10 shadow-md text-[#15171c]
            opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-200
            hover:bg-[#15171c] hover:text-white"
        >
          ›
        </button>
      </div>
    </section>
  );
}