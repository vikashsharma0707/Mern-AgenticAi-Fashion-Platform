

// // import React from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { updateQty, removeFromCart } from "../store/cartSlice.js";
// // import { Link } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import "../assets/css/cart.css";

// // /** Inline placeholder if image missing */
// // const PLACEHOLDER_SVG =
// //   'data:image/svg+xml;utf8,' +
// //   encodeURIComponent(
// //     `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
// //       <rect width="100%" height="100%" fill="#f3f4f6"/>
// //       <path d="M8 44h48M14 22h36" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
// //     </svg>`
// //   );

// // const TAX_RATE = 0.10; // demo (0 = off)

// // export default function Cart() {
// //   const items = useSelector((s) => s.cart.items || []);
// //   const dispatch = useDispatch();

// //   const keyOf = (it) => it.sku || it._id || it.id;
// //   const INR = (n) =>
// //     Number(n || 0).toLocaleString("en-IN", { style: "currency", currency: "INR" });

// //   const subtotal = items.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);
// //   const tax = Math.round(subtotal * TAX_RATE);
// //   const grand = subtotal + tax;

// //   const dec = (it) => {
// //     const next = (it.qty || 1) - 1;
// //     if (next <= 0) {
// //       dispatch(removeFromCart(keyOf(it)));
// //       toast.warn(`Removed ${it.title}`);
// //     } else {
// //       dispatch(updateQty({ sku: keyOf(it), qty: next }));
// //       toast.info(`Qty: ${next}`);
// //     }
// //   };
// //   const inc = (it) => {
// //     const next = (it.qty || 1) + 1;
// //     dispatch(updateQty({ sku: keyOf(it), qty: next }));
// //     toast.success(`Qty: ${next}`);
// //   };
// //   const remove = (it) => {
// //     dispatch(removeFromCart(keyOf(it)));
// //     toast.warn(`Removed ${it.title}`);
// //   };

// //   return (
// //     <div className="solo-cart">
// //       <h1 className="solo-title">
// //         Your Cart <span className="count">({items.length} items)</span>
// //       </h1>

// //       {!items.length && (
// //         <p className="empty">
// //           Cart empty. <Link to="/shop" className="link">Shop now</Link>
// //         </p>
// //       )}

// //       {!!items.length && (
// //         <div className="solo-grid">
// //           {/* LEFT: items table */}
// //           <div className="solo-table">
// //             <div className="solo-thead">
// //               <span>Item</span>
// //               <span>Price</span>
// //               <span>Quantity</span>
// //               <span>Total</span>
// //             </div>

// //             {items.map((it) => (
// //               <div key={keyOf(it)} className="solo-row">
// //                 {/* Remove cross */}
// //                 <button className="remove" onClick={() => remove(it)} aria-label="Remove">×</button>

// //                 {/* Item cell */}
// //                 <div className="item-cell">
// //                   <img
// //                     className="thumb"
// //                     src={it.images?.[0] || it.image || PLACEHOLDER_SVG}
// //                     alt={it.title}
// //                   />
// //                   <div className="meta">
// //                     {it.brand && <div className="brand">{it.brand}</div>}
// //                     <div className="title">{it.title}</div>

// //                     {/* orange sub-note like “(Estimated Ship Date: June 6th)” */}
// //                     {it.note && <div className="note">{it.note}</div>}

// //                     {/* tiny line like “Fuel Source: Wood Only” */}
// //                     {it.sub && <div className="sub">{it.sub}</div>}

// //                     {/* mini orange-outlined pill */}
// //                     {it.pill && <span className="badge">{it.pill}</span>}

// //                     {/* grey “Change” link under first item (optional) */}
// //                     {it.changeable && <button className="mini-link">Change</button>}
// //                   </div>
// //                 </div>

// //                 {/* price */}
// //                 <div className="price-cell">{INR(it.price || 0)}</div>

// //                 {/* quantity pill (disabled look if locked) */}
// //                 <div className="qty-cell">
// //                   {it.locked ? (
// //                     <div className="qty-locked">
// //                       <span>1</span>
// //                       <span className="bar" />
// //                     </div>
// //                   ) : (
// //                     <div className="qty-pill">
// //                       <button className="qbtn" onClick={() => dec(it)}>−</button>
// //                       <span className="qval">{it.qty || 1}</span>
// //                       <button className="qbtn" onClick={() => inc(it)}>+</button>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* total */}
// //                 <div className="total-cell">{INR((it.price || 0) * (it.qty || 1))}</div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* RIGHT: summary block */}
// //           <aside className="solo-summary">
// //             <div className="sum-row"><span>Subtotal:</span><span>{INR(subtotal)}</span></div>
// //             <div className="sum-row"><span>Sales Tax:</span><span>{INR(tax)}</span></div>
// //             <div className="sum-row coupon">
// //               <span>Coupon Code:</span>
// //               <button className="link">Add Coupon</button>
// //             </div>
// //             <div className="grand">
// //               <span>Grand total:</span>
// //               <strong>{INR(grand)}</strong>
// //             </div>

// //             <Link to="/checkout" className="checkout-btn">Check out</Link>

// //             <div className="ship">
// //               <span>Congrats, you're eligible for <b>Free Shipping</b></span>
// //               <div className="bar"><div className="fill" /></div>
// //             </div>
// //           </aside>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }




// // frontend/src/pages/Cart.jsx
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateQty, removeFromCart } from "../store/cartSlice.js";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const PLACEHOLDER_SVG =
//   'data:image/svg+xml;utf8,' +
//   encodeURIComponent(
//     `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
//       <rect width="100%" height="100%" fill="#f3f4f6"/>
//       <path d="M8 44h48M14 22h36" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
//     </svg>`
//   );

// const TAX_RATE = 0.10; // demo

// export default function Cart() {
//   const items = useSelector((s) => s.cart.items || []);
//   const dispatch = useDispatch();

//   const keyOf = (it) => it.sku || it._id || it.id;
//   const INR = (n) =>
//     Number(n || 0).toLocaleString("en-IN", { style: "currency", currency: "INR" });

//   const subtotal = items.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);
//   const tax = Math.round(subtotal * TAX_RATE);
//   const grand = subtotal + tax;

//   const dec = (it) => {
//     const next = (it.qty || 1) - 1;
//     if (next <= 0) {
//       dispatch(removeFromCart(keyOf(it)));
//       toast.warn(`Removed ${it.title}`);
//     } else {
//       dispatch(updateQty({ sku: keyOf(it), qty: next }));
//       toast.info(`Qty: ${next}`);
//     }
//   };

//   const inc = (it) => {
//     const next = (it.qty || 1) + 1;
//     dispatch(updateQty({ sku: keyOf(it), qty: next }));
//     toast.success(`Qty: ${next}`);
//   };

//   const remove = (it) => {
//     dispatch(removeFromCart(keyOf(it)));
//     toast.warn(`Removed ${it.title}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
//             Your Cart{" "}
//             <span className="text-2xl font-normal text-gray-500">({items.length} items)</span>
//           </h1>
//         </div>

//         {!items.length ? (
//           <div className="text-center py-20">
//             <div className="text-7xl mb-6">🛒</div>
//             <p className="text-2xl font-medium text-gray-700 mb-3">Your cart is empty</p>
//             <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
//             <Link
//               to="/shop"
//               className="inline-block bg-black text-white px-10 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors"
//             >
//               Shop Now
//             </Link>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
//             {/* LEFT: Cart Items */}
//             <div className="lg:col-span-8">
//               <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
//                 {/* Table Header */}
//                 <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-5 bg-gray-50 border-b text-sm font-medium text-gray-500">
//                   <div className="col-span-6">ITEM</div>
//                   <div className="col-span-2 text-center">PRICE</div>
//                   <div className="col-span-2 text-center">QUANTITY</div>
//                   <div className="col-span-2 text-right">TOTAL</div>
//                 </div>

//                 {/* Items */}
//                 {items.map((it) => (
//                   <div
//                     key={keyOf(it)}
//                     className="grid grid-cols-12 gap-4 px-6 py-6 border-b last:border-none hover:bg-gray-50 transition-colors items-center"
//                   >
//                     {/* Remove Button */}
//                     <button
//                       onClick={() => remove(it)}
//                       className="absolute md:static text-2xl text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center"
//                       aria-label="Remove item"
//                     >
//                       ×
//                     </button>

//                     {/* Item Info */}
//                     <div className="col-span-12 md:col-span-6 flex gap-5">
//                       <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
//                         <img
//                           className="w-full h-full object-cover"
//                           src={it.images?.[0] || it.image || PLACEHOLDER_SVG}
//                           alt={it.title}
//                         />
//                       </div>

//                       <div className="flex-1 min-w-0">
//                         {it.brand && (
//                           <div className="text-sm text-gray-500 font-medium">{it.brand}</div>
//                         )}
//                         <div className="font-semibold text-gray-900 leading-tight mt-1 mb-1">
//                           {it.title}
//                         </div>

//                         {it.note && <div className="text-orange-600 text-sm">{it.note}</div>}
//                         {it.sub && <div className="text-gray-500 text-sm">{it.sub}</div>}

//                         {it.pill && (
//                           <span className="inline-block mt-2 px-3 py-1 text-xs border border-orange-400 text-orange-600 rounded-full">
//                             {it.pill}
//                           </span>
//                         )}

//                         {it.changeable && (
//                           <button className="text-blue-600 text-sm hover:underline mt-2 block">
//                             Change
//                           </button>
//                         )}
//                       </div>
//                     </div>

//                     {/* Price */}
//                     <div className="col-span-6 md:col-span-2 text-lg font-medium text-center md:text-left">
//                       {INR(it.price || 0)}
//                     </div>

//                     {/* Quantity */}
//                     <div className="col-span-6 md:col-span-2 flex justify-center">
//                       {it.locked ? (
//                         <div className="flex items-center gap-2 px-6 py-2 bg-gray-100 rounded-2xl">
//                           <span className="font-medium">1</span>
//                           <span className="text-gray-400 text-xs">Locked</span>
//                         </div>
//                       ) : (
//                         <div className="flex items-center border border-gray-200 rounded-2xl overflow-hidden">
//                           <button
//                             onClick={() => dec(it)}
//                             className="w-11 h-11 hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center text-xl font-light transition-colors"
//                           >
//                             −
//                           </button>
//                           <span className="w-12 text-center font-semibold text-lg">
//                             {it.qty || 1}
//                           </span>
//                           <button
//                             onClick={() => inc(it)}
//                             className="w-11 h-11 hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center text-xl font-light transition-colors"
//                           >
//                             +
//                           </button>
//                         </div>
//                       )}
//                     </div>

//                     {/* Total */}
//                     <div className="col-span-6 md:col-span-2 text-right font-semibold text-lg">
//                       {INR((it.price || 0) * (it.qty || 1))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT: Order Summary */}
//             <div className="lg:col-span-4">
//               <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-8">
//                 <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

//                 <div className="space-y-4">
//                   <div className="flex justify-between text-lg">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span>{INR(subtotal)}</span>
//                   </div>
//                   <div className="flex justify-between text-lg">
//                     <span className="text-gray-600">Sales Tax (10%)</span>
//                     <span>{INR(tax)}</span>
//                   </div>

//                   <div className="pt-4 border-t flex justify-between items-center">
//                     <span className="text-gray-600">Coupon Code</span>
//                     <button className="text-blue-600 hover:underline font-medium">
//                       Add Coupon
//                     </button>
//                   </div>

//                   <div className="pt-6 border-t flex justify-between text-2xl font-semibold">
//                     <span>Grand Total</span>
//                     <span>{INR(grand)}</span>
//                   </div>
//                 </div>

//                 <Link
//                   to="/checkout"
//                   className="mt-8 block w-full bg-black text-white py-4 rounded-2xl text-center font-semibold text-lg tracking-wide hover:bg-gray-800 transition-colors active:scale-[0.985]"
//                 >
//                   Proceed to Checkout
//                 </Link>

//                 {/* Shipping Info */}
//                 <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-5 text-sm">
//                   <div className="flex items-start gap-3">
//                     <div className="text-emerald-600 mt-0.5">🚚</div>
//                     <div>
//                       <span className="font-medium text-emerald-700">
//                         Congratulations! You're eligible for <b>Free Shipping</b>
//                       </span>
//                       <div className="h-2 bg-emerald-200 rounded mt-3 overflow-hidden">
//                         <div className="h-2 bg-emerald-600 rounded w-[85%]"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }






// frontend/src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQty, removeFromCart } from "../store/cartSlice.js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PLACEHOLDER_SVG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <path d="M8 44h48M14 22h36" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  );

const TAX_RATE = 0.10; // demo

export default function Cart() {
  const items = useSelector((s) => s.cart.items || []);
  const dispatch = useDispatch();

  const keyOf = (it) => it.sku || it._id || it.id;
  const INR = (n) =>
    Number(n || 0).toLocaleString("en-IN", { style: "currency", currency: "INR" });

  const subtotal = items.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);
  const tax = Math.round(subtotal * TAX_RATE);
  const grand = subtotal + tax;

  const dec = (it) => {
    const next = (it.qty || 1) - 1;
    if (next <= 0) {
      dispatch(removeFromCart(keyOf(it)));
      toast.warn(`Removed ${it.title}`);
    } else {
      dispatch(updateQty({ sku: keyOf(it), qty: next }));
      toast.info(`Qty: ${next}`);
    }
  };

  const inc = (it) => {
    const next = (it.qty || 1) + 1;
    dispatch(updateQty({ sku: keyOf(it), qty: next }));
    toast.success(`Qty: ${next}`);
  };

  const remove = (it) => {
    dispatch(removeFromCart(keyOf(it)));
    toast.warn(`Removed ${it.title}`);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#15171c]">
            Your Cart{" "}
            <span className="text-xl font-medium text-[#15171c]/50">({items.length} items)</span>
          </h1>
        </div>

        {!items.length ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#15171c]/10">
            <div className="text-7xl mb-6">🛒</div>
            <p className="text-2xl font-semibold text-[#15171c] mb-3">Your cart is empty</p>
            <p className="text-[#15171c]/50 mb-8">Looks like you haven't added anything yet.</p>
            <Link
              to="/shop"
              className="inline-block bg-[#15171c] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#2a2d36] transition-colors"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT: Cart Items */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border border-[#15171c]/10 overflow-hidden">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 bg-[#F7F4EE] border-b border-[#15171c]/10 text-[12px] font-semibold tracking-wide text-[#15171c]/50 uppercase">
                  <div className="col-span-6">Item</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                {/* Items */}
                {items.map((it) => (
                  <div
                    key={keyOf(it)}
                    // FIX: this row needs `relative` since the remove button
                    // below switches to `absolute` on mobile — without a
                    // positioned ancestor, `absolute` falls back to the
                    // nearest positioned parent up the tree (often <body>),
                    // so the × button could end up floating anywhere on the
                    // page instead of pinned to its own card.
                    className="relative grid grid-cols-12 gap-4 px-6 py-6 border-b border-[#15171c]/5 last:border-none hover:bg-[#F7F4EE]/60 transition-colors items-center"
                  >
                    {/* Remove Button */}
                    <button
                      onClick={() => remove(it)}
                      className="absolute top-4 right-4 md:static md:col-span-0 text-xl text-[#15171c]/40 hover:text-[#8C3A2E] transition-colors w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#8C3A2E]/10"
                      aria-label="Remove item"
                    >
                      ×
                    </button>

                    {/* Item Info */}
                    <div className="col-span-12 md:col-span-6 flex gap-4 pr-8 md:pr-0">
                      <div className="w-20 h-20 flex-shrink-0 bg-[#F5F5F5] rounded-lg overflow-hidden border border-[#15171c]/5">
                        <img
                          className="w-full h-full object-cover"
                          src={it.images?.[0] || it.image || PLACEHOLDER_SVG}
                          alt={it.title}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        {it.brand && (
                          <div className="text-[12px] text-[#15171c]/50 font-medium uppercase tracking-wide">
                            {it.brand}
                          </div>
                        )}
                        <div className="font-medium text-[#15171c] leading-tight mt-1 mb-1">
                          {it.title}
                        </div>

                        {it.note && <div className="text-[#AD8A4D] text-[13px]">{it.note}</div>}
                        {it.sub && <div className="text-[#15171c]/45 text-[13px]">{it.sub}</div>}

                        {it.pill && (
                          <span className="inline-block mt-2 px-3 py-1 text-[11px] font-semibold border border-[#AD8A4D]/40 text-[#AD8A4D] rounded-full">
                            {it.pill}
                          </span>
                        )}

                        {it.changeable && (
                          <button className="text-[#15171c]/50 text-[13px] hover:text-[#15171c] underline mt-2 block transition-colors">
                            Change
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-6 md:col-span-2 text-[15px] font-medium text-[#15171c]/80 text-center md:text-left">
                      {INR(it.price || 0)}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-6 md:col-span-2 flex justify-center">
                      {it.locked ? (
                        <div className="flex items-center gap-2 px-5 py-2 bg-[#F5F5F5] rounded-full">
                          <span className="font-medium text-[#15171c]">1</span>
                          <span className="text-[#15171c]/40 text-[11px]">Locked</span>
                        </div>
                      ) : (
                        <div className="flex items-center border border-[#15171c]/15 rounded-full overflow-hidden">
                          <button
                            onClick={() => dec(it)}
                            className="w-9 h-9 hover:bg-[#F7F4EE] active:bg-[#F5F5F5] flex items-center justify-center text-[#15171c] transition-colors"
                          >
                            −
                          </button>
                          <span className="w-10 text-center font-semibold text-[#15171c]">
                            {it.qty || 1}
                          </span>
                          <button
                            onClick={() => inc(it)}
                            className="w-9 h-9 hover:bg-[#F7F4EE] active:bg-[#F5F5F5] flex items-center justify-center text-[#15171c] transition-colors"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Total */}
                    <div className="col-span-6 md:col-span-2 text-right font-semibold text-[15px] text-[#15171c]">
                      {INR((it.price || 0) * (it.qty || 1))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border border-[#15171c]/10 p-7 lg:sticky lg:top-24">
                <h2 className="text-lg font-semibold text-[#15171c] mb-5">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#15171c]/60">Subtotal</span>
                    <span className="text-[#15171c] font-medium">{INR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#15171c]/60">Sales Tax (10%)</span>
                    <span className="text-[#15171c] font-medium">{INR(tax)}</span>
                  </div>

                  <div className="pt-3 border-t border-[#15171c]/10 flex justify-between items-center text-sm">
                    <span className="text-[#15171c]/60">Coupon Code</span>
                    <button className="text-[#AD8A4D] hover:text-[#8C3A2E] font-semibold transition-colors">
                      Add Coupon
                    </button>
                  </div>

                  <div className="pt-4 border-t border-[#15171c]/10 flex justify-between items-baseline">
                    <span className="text-[15px] font-semibold text-[#15171c]">Grand Total</span>
                    <span className="text-2xl font-bold text-[#15171c]">{INR(grand)}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="mt-7 block w-full bg-[#15171c] text-white py-3.5 rounded-full text-center font-semibold tracking-wide hover:bg-[#2a2d36] transition-all active:scale-[0.98]"
                >
                  Proceed to Checkout
                </Link>

                {/* Shipping Info */}
                <div className="mt-6 bg-[#1f7a4d]/8 border border-[#1f7a4d]/20 rounded-xl p-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-[#1f7a4d] mt-0.5">🚚</div>
                    <div className="flex-1">
                      <span className="text-[#1f7a4d] font-medium">
                        Congratulations! You're eligible for <b>Free Shipping</b>
                      </span>
                      <div className="h-1.5 bg-[#1f7a4d]/20 rounded-full mt-2.5 overflow-hidden">
                        <div className="h-full bg-[#1f7a4d] rounded-full w-[85%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}