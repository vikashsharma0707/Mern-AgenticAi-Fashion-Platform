// // import React from "react";
// // import "../assets/css/footer.css";

// // export default function Footer() {
// //   const year = new Date().getFullYear();

// //   const links = {
// //     about: [
// //       { label: "Our Story", href: "/about" },
// //       { label: "Affiliate Program", href: "/affiliates" },
// //       { label: "Wholesale Program", href: "/wholesale" },
// //       { label: "Press Inquiries", href: "/press" },
// //       { label: "Careers", href: "/careers" },
// //     ],
// //     support: [
// //       { label: "Returns & Exchanges", href: "/returns" },
// //       { label: "Shipping Information", href: "/shipping" },
// //       { label: "Track Your Order", href: "/orders/track" },
// //       { label: "Promo Code Lookup", href: "/promo-lookup" },
// //       { label: "Gift Card Lookup", href: "/giftcard-lookup" },
// //       { label: "Help Center", href: "/help" },
// //       { label: "Contact Us", href: "/contact" },
// //     ],
// //   };

// //   return (
// //     <footer className="site-footer">
// //       <div className="container">
// //         <div className="footer-top">
// //           {/* columns */}
// //           <div className="footer-columns">
// //             <div className="col">
// //               <h4>ABOUT US</h4>
// //               <ul className="footer-links">
// //                 {links.about.map((l) => (
// //                   <li key={l.label}>
// //                     <a href={l.href}>{l.label}</a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             <div className="col">
// //               <h4>CUSTOMER SUPPORT</h4>
// //               <ul className="footer-links">
// //                 {links.support.map((l) => (
// //                   <li key={l.label}>
// //                     <a href={l.href}>{l.label}</a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             <div className="col connect">
// //               <h4>CONNECT WITH US</h4>

// //               {/* Social icons (pure SVG, no extra lib) */}
// //               <div className="social">
// //                 <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer">
// //                   {/* facebook */}
// //                   <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3V12h2.2l-.35 3h-1.85v7A10 10 0 0 0 22 12"/></svg>
// //                 </a>
// //                 <a aria-label="X" href="https://twitter.com" target="_blank" rel="noreferrer">
// //                   {/* X / Twitter */}
// //                   <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M3 3h3.7l5.2 7.4L17.8 3H21l-7 9.9L21 21h-3.7l-5.6-8-5.9 8H3l7.6-10.3L3 3z"/></svg>
// //                 </a>
// //                 <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer">
// //                   <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2.1.6 9.4.6 9.4.6s7.3 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.8 15.5v-7l6.3 3.5-6.3 3.5Z"/></svg>
// //                 </a>
// //                 <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer">
// //                   <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 6v9H16V15.7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V23H8V8z"/></svg>
// //                 </a>
// //                 <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
// //                   <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M7 2C4 2 2 4 2 7v10c0 3 2 5 5 5h10c3 0 5-2 5-5V7c0-3-2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7z"/></svg>
// //                 </a>
// //                 <a aria-label="Pinterest" href="https://pinterest.com" target="_blank" rel="noreferrer">
// //                   <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.5 2 3 6 3 10.6c0 3.4 2 5.3 3.2 5.3.5 0 .8-1.4.8-1.8 0-.5-1.3-1.6-1.3-3.7 0-4.4 3.4-7.5 7.8-7.5 3.8 0 6.6 2.2 6.6 6 0 2.9-1.3 8.4-5.6 8.4-1.5 0-2.8-1.1-2.7-2.7.1-1.8 1.1-3.7 1.1-5.5 0-3.2-4.6-2.6-4.6 1.5 0 1.3.4 2.2.4 2.2l-1.6 6.7c-.5 2 .1 5 .1 5s.1.1.2.1c.1 0 1.9-2.6 2.5-4.9l1-3.6c.5 1 2 1.9 3.6 1.9 4.7 0 7.9-4.3 7.9-9.5C21 5.5 17.1 2 12 2z"/></svg>
// //                 </a>
// //                 <a aria-label="TikTok" href="https://tiktok.com" target="_blank" rel="noreferrer">
// //                   <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21 8.3a6.9 6.9 0 0 1-4.1-1.4v7.5a6.5 6.5 0 1 1-5.5-6.4v3.2a3.1 3.1 0 1 0 2.2 3V2h3a4.9 4.9 0 0 0 4.4 3v3.3z"/></svg>
// //                 </a>
// //               </div>

// //               <p className="nl-copy">
// //                 Want ₹200 Off? Sign up for our Newsletter.<br />
// //                 Sign up for SMS alerts and be the first to know!
// //               </p>

// //               <button className="cta">
// //                 <span className="mail">✉</span> Get in the loop!
// //               </button>
// //             </div>
// //           </div>

// //           {/* bottom bar */}
// //           <div className="footer-bottom">
// //             <div className="bbb">
// //               <div className="bbb-badge">ACCREDITED<br/>BUSINESS</div>
// //             </div>

// //             <nav className="legal" aria-label="Legal">
// //               <a href="/privacy">Privacy Policy</a>
// //               <span> | </span>
// //               <a href="/terms">Terms &amp; Conditions</a>
// //               <span> | </span>
// //               <a href="/accessibility">Accessibility Statement</a>
// //             </nav>

// //             <div className="copy">
// //               © {year} Your Brand. All Rights Reserved.
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }




// frontend/src/components/Footer.jsx
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">Male Fashion</h2>
            <p className="text-gray-400 mt-3 text-[15px] leading-relaxed max-w-md">
              Premium fashion for the modern man. Redefining style with quality, 
              sustainability, and intelligent design.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Stay in the loop</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-zinc-900 border border-zinc-700 focus:border-white text-white px-5 py-3.5 rounded-l-2xl w-full outline-none text-sm"
                />
                <button className="bg-white text-black px-8 rounded-r-2xl font-semibold hover:bg-gray-200 transition">
                  Join
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Get early access to new drops, exclusive offers & style tips.
              </p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Shop</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/shop" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="/shop?category=shirts" className="hover:text-white transition">Shirts</a></li>
              <li><a href="/shop?category=kurtas" className="hover:text-white transition">Kurtas</a></li>
              <li><a href="/shop?category=trousers" className="hover:text-white transition">Trousers</a></li>
              <li><a href="/shop?category=ethnic" className="hover:text-white transition">Ethnic Wear</a></li>
              <li><a href="/shop?category=accessories" className="hover:text-white transition">Accessories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/track-order" className="hover:text-white transition">Track Order</a></li>
              <li><a href="/shipping" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="/returns" className="hover:text-white transition">Returns & Exchanges</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQs</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="/size-guide" className="hover:text-white transition">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="/sustainability" className="hover:text-white transition">Sustainability</a></li>
              <li><a href="/press" className="hover:text-white transition">Press</a></li>
              <li><a href="/affiliates" className="hover:text-white transition">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            © {year} Male Fashion. All Rights Reserved.
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/accessibility" className="hover:text-white transition">Accessibility</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition">𝕏</a>
            <a href="#" className="hover:text-white transition">📘</a>
            <a href="#" className="hover:text-white transition">📷</a>
            <a href="#" className="hover:text-white transition">▶️</a>
            <a href="#" className="hover:text-white transition">📌</a>
          </div>
        </div>
      </div>
    </footer>
  );
}




// // frontend/src/components/Footer.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Instagram, Twitter, Youtube, Facebook,
//   Mail, Phone, MapPin, ArrowUpRight,
//   Sparkles, ShieldCheck, Truck, RotateCcw,
// } from "lucide-react";

// // ─── DATA ─────────────────────────────────────────────────────────────────────
// const LINKS = {
//   Shop: [
//     { label: "New Arrivals",     to: "/shop?sort=newest"   },
//     { label: "Men's Fashion",    to: "/catalog?cat=mens"   },
//     { label: "Women's Fashion",  to: "/catalog?cat=womens" },
//     { label: "Kids",             to: "/catalog?cat=kids"   },
//     { label: "Sale",             to: "/shop?sale=true"     },
//   ],
//   Support: [
//     { label: "Track Order",      to: "/orders"   },
//     { label: "Returns",          to: "/contact"  },
//     { label: "Size Guide",       to: "/contact"  },
//     { label: "FAQ",              to: "/contact"  },
//     { label: "Contact Us",       to: "/contact"  },
//   ],
//   Company: [
//     { label: "About Us",         to: "/contact"  },
//     { label: "Blog",             to: "/blog"     },
//     { label: "Careers",          to: "/contact"  },
//     { label: "Press",            to: "/contact"  },
//     { label: "Sustainability",   to: "/contact"  },
//   ],
// };

// const SOCIALS = [
//   { Icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
//   { Icon: Twitter,   href: "#", label: "Twitter",   color: "#1DA1F2" },
//   { Icon: Youtube,   href: "#", label: "YouTube",   color: "#FF0000" },
//   { Icon: Facebook,  href: "#", label: "Facebook",  color: "#1877F2" },
// ];

// const TRUST = [
//   { Icon: Truck,       label: "Free Shipping",    sub: "On orders above ₹999"  },
//   { Icon: RotateCcw,   label: "Easy Returns",     sub: "15-day hassle-free"    },
//   { Icon: ShieldCheck, label: "Secure Payments",  sub: "256-bit SSL encrypted" },
//   { Icon: Sparkles,    label: "AI-Powered",       sub: "Smart recommendations" },
// ];

// // ─── COMPONENT ────────────────────────────────────────────────────────────────
// export default function Footer() {
//   return (
//     <footer style={{ background: "#09090F", borderTop: "1px solid rgba(255,255,255,0.06)", fontFamily: "'Inter',system-ui,sans-serif" }}>

//       {/* ── TRUST STRIP ─────────────────────────────────────────────────── */}
//       <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
//             style={{ borderColor: "rgba(255,255,255,0.05)" }}>
//             {TRUST.map(({ Icon, label, sub }) => (
//               <div key={label} className="flex items-center gap-3 px-6 py-5">
//                 <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
//                   style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}>
//                   <Icon size={18} className="text-violet-400" />
//                 </div>
//                 <div>
//                   <div className="text-sm font-semibold text-white">{label}</div>
//                   <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
//         <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

//           {/* ── BRAND COLUMN ──────────────────────────────────────────── */}
//           <div className="space-y-6">
//             {/* Logo */}
//             <div>
//               <div className="flex items-baseline gap-1">
//                 <span className="text-2xl font-black tracking-tighter text-white">QuickKart</span>
//                 <span className="text-xs font-semibold tracking-[0.2em] uppercase"
//                   style={{ color: "#8B5CF6", marginLeft: "4px" }}>Fashion</span>
//               </div>
//               <div className="mt-1 w-10 h-0.5 rounded-full"
//                 style={{ background: "linear-gradient(90deg,#8B5CF6,#06B6D4)" }} />
//             </div>

//             <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
//               Premium fashion for the modern era. Curated styles, AI-powered discovery, and next-day delivery across India.
//             </p>

//             {/* Contact */}
//             <div className="space-y-2.5">
//               {[
//                 { Icon: Mail,    text: "support@quickkart.in"  },
//                 { Icon: Phone,   text: "+91 98765 43210"       },
//                 { Icon: MapPin,  text: "Mumbai, Maharashtra, India" },
//               ].map(({ Icon, text }) => (
//                 <div key={text} className="flex items-center gap-2.5 text-sm text-slate-500">
//                   <Icon size={13} className="text-violet-500 shrink-0" />
//                   <span>{text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Socials */}
//             <div className="flex items-center gap-2">
//               {SOCIALS.map(({ Icon, href, label, color }) => (
//                 <a key={label} href={href} aria-label={label}
//                   className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 group"
//                   style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
//                   onMouseEnter={e => {
//                     e.currentTarget.style.background = `${color}18`;
//                     e.currentTarget.style.borderColor = `${color}40`;
//                   }}
//                   onMouseLeave={e => {
//                     e.currentTarget.style.background = "rgba(255,255,255,0.04)";
//                     e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
//                   }}>
//                   <Icon size={15} style={{ color: "#64748B", transition: "color 0.2s" }}
//                     onMouseEnter={e => e.currentTarget.style.color = color}
//                     onMouseLeave={e => e.currentTarget.style.color = "#64748B"} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* ── LINK COLUMNS ──────────────────────────────────────────── */}
//           {Object.entries(LINKS).map(([heading, items]) => (
//             <div key={heading}>
//               <h4 className="text-xs font-bold uppercase tracking-widest mb-5"
//                 style={{ color: "#8B5CF6" }}>
//                 {heading}
//               </h4>
//               <ul className="space-y-3">
//                 {items.map(({ label, to }) => (
//                   <li key={label}>
//                     <Link to={to}
//                       className="group flex items-center gap-1 text-sm text-slate-500 transition-colors duration-150 hover:text-white">
//                       <span>{label}</span>
//                       <ArrowUpRight size={11}
//                         className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-violet-400" />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* ── NEWSLETTER ──────────────────────────────────────────────── */}
//         <div className="mt-14 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
//           style={{ background: "rgba(139,92,246,0.07)", border: "1px solid rgba(139,92,246,0.15)" }}>
//           <div className="flex-1 min-w-0">
//             <div className="flex items-center gap-2 mb-1">
//               <Sparkles size={14} className="text-violet-400" />
//               <span className="text-xs font-bold uppercase tracking-widest text-violet-400">Newsletter</span>
//             </div>
//             <h3 className="text-base font-bold text-white">Get style updates & exclusive drops</h3>
//             <p className="text-sm text-slate-500 mt-0.5">No spam. Unsubscribe anytime.</p>
//           </div>
//           <div className="flex w-full sm:w-auto gap-2 sm:min-w-[320px]">
//             <input
//               type="email"
//               placeholder="you@email.com"
//               className="flex-1 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all focus:ring-1 focus:ring-violet-500 placeholder-slate-700"
//               style={{ background: "rgba(2,6,23,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}
//             />
//             <button
//               className="px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all hover:scale-105"
//               style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", color: "#fff", boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}>
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ── BOTTOM BAR ──────────────────────────────────────────────────── */}
//       <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="text-xs text-slate-600">
//             © {new Date().getFullYear()} QuickKart Fashion. All rights reserved.
//           </p>
//           <div className="flex items-center gap-5">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
//               <Link key={item} to="/contact"
//                 className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
//                 {item}
//               </Link>
//             ))}
//           </div>
//           <div className="flex items-center gap-1.5 text-xs text-slate-700">
//             <span>Made with</span>
//             <span className="text-red-500">♥</span>
//             <span>in India</span>
//             <span className="ml-1">🇮🇳</span>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// }