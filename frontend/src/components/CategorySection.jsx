// // src/components/CategorySection.jsx
// import React from "react";
// import CategoryCircles from "./CategoryCircles.jsx";

// import c1 from "../images/c1.jpg";
// import c2 from "../images/c2.jpg";
// import c3 from "../images/c3.jpg";
// import c4 from "../images/c4.jpg";
// import c5 from "../images/c5.jpg";
// import c6 from "../images/c6.jpg";
// import c7 from "../images/c7.jpg";
// import c8 from "../images/c8.jpg";

// export default function CategorySection() {
//   return (
//     <section className="py-14 sm:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <header className="flex flex-col items-start text-left mb-10">
//           <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase">
//             Browse
//           </span>
//           <h2
//             className="text-3xl sm:text-4xl font-bold text-[#15171c] tracking-tight uppercase mt-2"
//             style={{ fontFamily: "Oswald, sans-serif" }}
//           >
//             Shop by Category
//           </h2>
//           <div className="h-[3px] w-14 bg-[#AD8A4D] mt-4" />
//         </header>

//         <CategoryCircles
//           items={[
//             { title: "Shirts", img: c1, to: "/shop?category=shirts" },
//             { title: "T-Shirts", img: c2, to: "/shop?category=tshirts" },
//             { title: "Jeans", img: c3, to: "/shop?category=jeans" },
//             {
//               title: "Shorts & Trousers",
//               img: c4,
//               to: "/shop?category=bottoms",
//             },
//             {
//               title: "Infant Essentials",
//               img: c6,
//               to: "/shop?category=infant",
//             },
//             // c5, c7, c8 are imported and available if you want to add more
//             // categories later, e.g.:
//             // { title: "Casual Shoes", img: c5, to: "/shop?category=shoes" },
//             // { title: "Kids Wear", img: c7, to: "/shop?category=kids" },
//             // { title: "Sports", img: c8, to: "/shop?category=sports" },
//           ]}
//         />
//       </div>
//     </section>
//   );
// }






// src/components/CategorySection.jsx
import React from "react";
import CategoryCircles from "./CategoryCircles.jsx";

import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";
import c5 from "../images/c5.jpg";
import c6 from "../images/c6.jpg";
import c7 from "../images/c7.jpg";
import c8 from "../images/c8.jpg";
// NOTE: only 8 distinct category images exist in this project. The
// reference layout needs 12 (2 rows x 6). Reusing the 4 banner images
// below as temporary placeholders for the remaining 4 cards — swap these
// for real category photos as soon as you have them.
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";

export default function CategorySection() {
  return (
    <section className="bg-[#F5F5F5] pt-[60px] pb-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-start text-left mb-10">
          <span className="text-[11px] font-semibold tracking-[0.35em] text-[#AD8A4D] uppercase">
            Browse
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#15171c] tracking-tight uppercase mt-2"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Shop by Category
          </h2>
          <div className="h-[3px] w-14 bg-[#AD8A4D] mt-4" />
        </header>

        <CategoryCircles
          items={[
            // Row 1
            { title: "Ethnic Wear", img: c1, to: "/shop?category=ethnic", discount: "50-80% OFF" },
            { title: "Casual Wear", img: c2, to: "/shop?category=casual", discount: "40-80% OFF" },
            { title: "Men's Activewear", img: c3, to: "/shop?category=mens-activewear", discount: "30-70% OFF" },
            { title: "Women's Activewear", img: c4, to: "/shop?category=womens-activewear", discount: "30-70% OFF" },
            { title: "Western Wear", img: c5, to: "/shop?category=western", discount: "40-80% OFF" },
            { title: "Sportswear", img: c6, to: "/shop?category=sportswear", discount: "30-80% OFF" },
            // Row 2 — placeholders (b1-b4 reused) for the 4 categories that
            // don't have a dedicated image yet
            { title: "Loungewear", img: c7, to: "/shop?category=loungewear", discount: "30-60% OFF" },
            { title: "Innerwear", img: c8, to: "/shop?category=innerwear", discount: "UP TO 70% OFF" },
            { title: "Lingerie", img: b1, to: "/shop?category=lingerie", discount: "UP TO 70% OFF" },
            { title: "Watches", img: b2, to: "/shop?category=watches", discount: "UP TO 80% OFF" },
            { title: "Grooming", img: b3, to: "/shop?category=grooming", discount: "UP TO 60% OFF" },
            { title: "Beauty & Makeup", img: b4, to: "/shop?category=beauty", discount: "UP TO 60% OFF" },
          ]}
        />
      </div>
    </section>
  );
}