// // // // import React from 'react';
// // // // import { NavLink, useNavigate } from 'react-router-dom';
// // // // import { useDispatch } from 'react-redux';
// // // // import { logout } from '../store/userSlice.js';

// // // // export default function AdminLayout({ children }) {
// // // //   const dispatch = useDispatch();
// // // //   const nav = useNavigate();
// // // //   const doLogout = () => { dispatch(logout()); nav('/profile'); };

// // // //   return (
// // // //     <div className="admin-wrap">
// // // //       <aside className="admin-side">
// // // //         <div className="admin-brand">🧭 Dashboard</div>
// // // //         <nav className="admin-nav">
// // // //           <NavLink to="/admin">Dashboard</NavLink>
// // // //           <NavLink to="/admin/products">Display</NavLink>
// // // //           <NavLink to="/admin/insert">Insert</NavLink>
// // // //           <NavLink to="/admin/search">Search</NavLink>
// // // //           <NavLink to="/admin/products">Update</NavLink>
// // // //           <NavLink to="/admin/orders">Order Display</NavLink>
// // // //         </nav>
// // // //         <button className="btn danger" onClick={doLogout} style={{marginTop:'auto'}}>Logout</button>
// // // //       </aside>
// // // //       <section className="admin-main">
// // // //         {children}
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }



// // // import React, { useState } from 'react';
// // // import { NavLink, useNavigate } from 'react-router-dom';
// // // import { useDispatch } from 'react-redux';
// // // import { logout } from '../store/userSlice.js';
// // // import './AdminLayout.css';

// // // export default function AdminLayout({ children }) {
// // //   const [open, setOpen] = useState(false);
// // //   const dispatch = useDispatch();
// // //   const nav = useNavigate();

// // //   const doLogout = () => { dispatch(logout()); nav('/profile'); };
// // //   const linkClass = ({ isActive }) => 's-link' + (isActive ? ' active' : '');

// // //   return (
// // //     <div className={`layout ${open ? 'open' : ''}`}>
// // //       {/* Topbar (mobile / small screens) */}
// // //       <header className="topbar">
// // //         <button className="icon" onClick={() => setOpen(v => !v)} aria-label="Menu" aria-expanded={open}>☰</button>
// // //         <div className="title">Dashboard</div>
// // //         <button className="icon" onClick={doLogout} aria-label="Logout">⎋</button>
// // //       </header>

// // //       {/* Sidebar */}
// // //       <aside className="sidebar" aria-label="Admin sidebar">
// // //         <div className="brand">🧭 Dashboard</div>
// // //         <nav className="nav" role="navigation">
// // //           <NavLink end to="/admin" className={linkClass}>Dashboard</NavLink>
// // //           <NavLink to="/admin/products" className={linkClass}>Display</NavLink>
// // //           <NavLink to="/admin/insert" className={linkClass}>Insert</NavLink>
// // //           <NavLink to="/admin/search" className={linkClass}>Search</NavLink>
// // //           <NavLink to="/admin/products" className={linkClass}>Update</NavLink>
// // //           <NavLink to="/admin/orders" className={linkClass}>Order Display</NavLink>
// // //           <NavLink to="/admin/agents" className={linkClass}>Agents</NavLink>
// // //           <NavLink to="/admin/history" className={linkClass}>Agents</NavLink>
// // //         </nav>
// // //         <button className="btn danger" onClick={doLogout}>Logout</button>
// // //       </aside>

// // //       {/* Click-away backdrop for mobile */}
// // //       <div className="backdrop" onClick={() => setOpen(false)} />

// // //       {/* Main */}
// // //       <main className="main" onClick={() => open && setOpen(false)}>
// // //         {children}
// // //       </main>
// // //     </div>
// // //   );
// // // }




// // import React, { useState } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import { logout } from "../store/userSlice.js";

// // import {
// //   LayoutDashboard,
// //   Package,
// //   PlusSquare,
// //   Search,
// //   ShoppingCart,
// //   Bot,
// //   History,
// //   Menu,
// //   LogOut,
// //   X,
// // } from "lucide-react";

// // export default function AdminLayout({ children }) {
// //   const [open, setOpen] = useState(false);

// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const doLogout = () => {
// //     dispatch(logout());
// //     navigate("/profile");
// //   };

// //   const menuItems = [
// //     {
// //       name: "Dashboard",
// //       path: "/admin",
// //       icon: <LayoutDashboard size={18} />,
// //     },
// //     {
// //       name: "Products",
// //       path: "/admin/products",
// //       icon: <Package size={18} />,
// //     },
// //     {
// //       name: "Insert Product",
// //       path: "/admin/insert",
// //       icon: <PlusSquare size={18} />,
// //     },
// //     {
// //       name: "Search",
// //       path: "/admin/search",
// //       icon: <Search size={18} />,
// //     },
// //     {
// //       name: "Orders",
// //       path: "/admin/orders",
// //       icon: <ShoppingCart size={18} />,
// //     },
// //     {
// //       name: "AI Agents",
// //       path: "/admin/agents",
// //       icon: <Bot size={18} />,
// //     },
// //     {
// //       name: "History",
// //       path: "/admin/history",
// //       icon: <History size={18} />,
// //     },
// //   ];

// //   return (
// //     <div className="flex min-h-screen bg-gray-100">
// //       {/* Mobile Backdrop */}
// //       {open && (
// //         <div
// //           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
// //           onClick={() => setOpen(false)}
// //         />
// //       )}

// //       {/* Sidebar */}
// //       <aside
// //         className={`
// //           fixed lg:static top-0 left-0 z-50
// //           h-screen w-72
// //           bg-gradient-to-b from-slate-900 to-slate-800
// //           text-white
// //           transform transition-transform duration-300
// //           ${open ? "translate-x-0" : "-translate-x-full"}
// //           lg:translate-x-0
// //         `}
// //       >
// //         {/* Logo */}
// //         <div className="h-20 flex items-center justify-between px-6 border-b border-slate-700">
// //           <h2 className="text-2xl font-bold">
// //             🧭 Admin Panel
// //           </h2>

// //           <button
// //             className="lg:hidden"
// //             onClick={() => setOpen(false)}
// //           >
// //             <X size={24} />
// //           </button>
// //         </div>

// //         {/* Profile */}
// //         <div className="p-6 border-b border-slate-700">
// //           <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center text-xl font-bold">
// //             A
// //           </div>

// //           <h3 className="mt-3 font-semibold">
// //             Admin User
// //           </h3>

// //           <p className="text-sm text-gray-400">
// //             Administrator
// //           </p>
// //         </div>

// //         {/* Navigation */}
// //         <nav className="p-4 space-y-2">
// //           {menuItems.map((item) => (
// //             <NavLink
// //               key={item.path}
// //               end={item.path === "/admin"}
// //               to={item.path}
// //               className={({ isActive }) =>
// //                 `
// //                 flex items-center gap-3
// //                 px-4 py-3 rounded-xl
// //                 transition-all duration-200
// //                 ${
// //                   isActive
// //                     ? "bg-indigo-600 text-white shadow-lg"
// //                     : "hover:bg-slate-700"
// //                 }
// //               `
// //               }
// //             >
// //               {item.icon}
// //               {item.name}
// //             </NavLink>
// //           ))}
// //         </nav>

// //         {/* Logout */}
// //         <div className="absolute bottom-5 left-0 w-full px-4">
// //           <button
// //             onClick={doLogout}
// //             className="
// //               w-full
// //               flex items-center justify-center gap-2
// //               bg-red-500 hover:bg-red-600
// //               px-4 py-3
// //               rounded-xl
// //               font-medium
// //               transition
// //             "
// //           >
// //             <LogOut size={18} />
// //             Logout
// //           </button>
// //         </div>
// //       </aside>

// //       {/* Main Area */}
// //       <div className="flex-1 flex flex-col">
// //         {/* Topbar */}
// //         <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
// //           <div className="flex items-center gap-3">
// //             <button
// //               className="lg:hidden"
// //               onClick={() => setOpen(true)}
// //             >
// //               <Menu size={24} />
// //             </button>

// //             <h1 className="font-semibold text-xl">
// //               Admin Dashboard
// //             </h1>
// //           </div>

// //           <div className="flex items-center gap-4">
// //             <div className="hidden md:block text-sm text-gray-500">
// //               Welcome Back 👋
// //             </div>

// //             <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
// //               A
// //             </div>
// //           </div>
// //         </header>

// //         {/* Page Content */}
// //         <main className="flex-1 p-6 overflow-auto">
// //           {children}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logout } from "../store/userSlice.js";

// import {
//   LayoutDashboard,
//   Package,
//   PlusSquare,
//   Search,
//   ShoppingCart,
//   Bot,
//   History,
//   Menu,
//   LogOut,
//   X,
// } from "lucide-react";

// export default function AdminLayout({ children }) {
//   const [open, setOpen] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const doLogout = () => {
//     dispatch(logout());
//     navigate("/profile");
//   };

//   const menuItems = [
//     { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={18} /> },
//     { name: "Products", path: "/admin/products", icon: <Package size={18} /> },
//     { name: "Insert Product", path: "/admin/insert", icon: <PlusSquare size={18} /> },
//     { name: "Search", path: "/admin/search", icon: <Search size={18} /> },
//     { name: "Orders", path: "/admin/orders", icon: <ShoppingCart size={18} /> },
//     { name: "AI Agents", path: "/admin/agents", icon: <Bot size={18} /> },
//     { name: "History", path: "/admin/history", icon: <History size={18} /> },
//   ];

//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-100">
//       {/* Mobile Backdrop */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* Sidebar - Sticky on Desktop */}
//       <aside
//         className={`
//           fixed lg:sticky top-0 left-0 z-50
//           h-screen w-72 flex-shrink-0
//           bg-gradient-to-b from-slate-900 to-slate-800
//           text-white
//           overflow-y-auto
//           transition-transform duration-300
//           ${open ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0
//         `}
//       >
//         {/* Logo */}
//         <div className="h-20 flex items-center justify-between px-6 border-b border-slate-700">
//           <h2 className="text-2xl font-bold tracking-tight">🧭 Admin Panel</h2>
//           <button className="lg:hidden" onClick={() => setOpen(false)}>
//             <X size={24} />
//           </button>
//         </div>

//         {/* Profile */}
//         <div className="p-6 border-b border-slate-700">
//           <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-2xl font-bold shadow-inner">
//             A
//           </div>
//           <h3 className="mt-4 font-semibold text-lg">Admin User</h3>
//           <p className="text-sm text-slate-400">Administrator</p>
//         </div>

//         {/* Navigation */}
//         <nav className="p-4 space-y-1">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               end={item.path === "/admin"}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
//                   isActive
//                     ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
//                     : "hover:bg-slate-700 text-slate-300 hover:text-white"
//                 }`
//               }
//             >
//               {item.icon}
//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         {/* Logout Button */}
//         <div className="absolute bottom-6 left-4 right-4">
//           <button
//             onClick={doLogout}
//             className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 px-4 rounded-2xl font-medium transition-colors"
//           >
//             <LogOut size={18} />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
//         {/* Top Navbar */}
//         <header className="h-16 bg-white border-b flex items-center justify-between px-6 z-30 flex-shrink-0">
//           <div className="flex items-center gap-4">
//             <button
//               className="lg:hidden text-slate-700"
//               onClick={() => setOpen(true)}
//             >
//               <Menu size={26} />
//             </button>
//             <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
//           </div>

//           <div className="flex items-center gap-4">
//             <span className="hidden md:block text-sm text-gray-500">
//               Welcome Back 👋
//             </span>
//             <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow">
//               A
//             </div>
//           </div>
//         </header>

//         {/* Scrollable Page Content */}
//         <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }


// frontend/src/layouts/AdminLayout.jsx
// ═══════════════════════════════════════════════════════════════════════════
//  DARK FUTURISTIC ADMIN LAYOUT
//  Matches Dashboard's #020617 dark theme perfectly
// ═══════════════════════════════════════════════════════════════════════════
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice.js";
import { motion, AnimatePresence } from "framer-motion";

import {
  LayoutDashboard,
  Package,
  PlusSquare,
  Search,
  ShoppingCart,
  Bot,
  History,
  Menu,
  LogOut,
  X,
  Brain,
  Zap,
  Shield,
  Bell,
  Settings,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard",      path: "/admin",          icon: LayoutDashboard, color: "#8B5CF6" },
  { name: "Products",       path: "/admin/products", icon: Package,         color: "#06B6D4" },
  { name: "Insert Product", path: "/admin/insert",   icon: PlusSquare,      color: "#22C55E" },
  { name: "Search",         path: "/admin/search",   icon: Search,          color: "#F59E0B" },
  { name: "Orders",         path: "/admin/orders",   icon: ShoppingCart,    color: "#EC4899" },
  { name: "AI Agents",      path: "/admin/agents",   icon: Bot,             color: "#8B5CF6" },
  { name: "History",        path: "/admin/history",  icon: History,         color: "#94A3B8" },
];

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);
  const dispatch  = useDispatch();
  const navigate  = useNavigate();

  const doLogout = () => {
    dispatch(logout());
    navigate("/profile");
  };

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "#020617" }}
    >
      {/* ── MOBILE BACKDROP ──────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50
          h-screen w-64 flex-shrink-0 flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
        style={{
          background: "rgba(10,15,30,0.97)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Sidebar aurora glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-30%] left-[-30%] w-[300px] h-[300px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle,#8B5CF6,transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute bottom-[-20%] right-[-20%] w-[200px] h-[200px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle,#06B6D4,transparent 70%)", filter: "blur(50px)" }} />
        </div>

        {/* ── LOGO ─────────────────────────────────────────────────── */}
        <div className="relative flex items-center justify-between px-5 py-5 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
              style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.4),rgba(6,182,212,0.25))", border: "1px solid rgba(139,92,246,0.4)", boxShadow: "0 0 20px rgba(139,92,246,0.25)" }}>
              🧭
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-tight">Admin Panel</h2>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                  style={{ boxShadow: "0 0 5px #22C55E", animation: "alPulse 2s infinite" }} />
                <span className="text-[10px] text-slate-500">All systems online</span>
              </div>
            </div>
          </div>
          <button
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.05)" }}
            onClick={() => setOpen(false)}
          >
            <X size={16} />
          </button>
        </div>

        {/* ── PROFILE ──────────────────────────────────────────────── */}
        <div className="relative px-5 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold text-white"
                style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", boxShadow: "0 0 16px rgba(124,58,237,0.4)" }}>
                A
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2"
                style={{ borderColor: "#0a0f1e", boxShadow: "0 0 6px #22C55E" }} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-white truncate">Admin User</h3>
              <p className="text-[11px] text-slate-500">Administrator</p>
            </div>
            <Settings size={13} className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* ── NAVIGATION ───────────────────────────────────────────── */}
        <nav className="relative flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
          <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest px-3 mb-2">
            Navigation
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                end={item.path === "/admin"}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block"
              >
                {({ isActive }) => (
                  <div
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg,${item.color}20,${item.color}08)`
                        : "transparent",
                      border: isActive
                        ? `1px solid ${item.color}30`
                        : "1px solid transparent",
                    }}
                  >
                    {/* Active left bar */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full"
                        style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                    )}

                    {/* Icon */}
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={isActive
                        ? { background: `${item.color}22`, border: `1px solid ${item.color}40` }
                        : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }
                      }
                    >
                      <Icon size={14} style={{ color: isActive ? item.color : "#64748B" }} />
                    </div>

                    <span className="text-sm font-medium transition-colors duration-200"
                      style={{ color: isActive ? "#fff" : "#64748B" }}>
                      {item.name}
                    </span>

                    {isActive && (
                      <ChevronRight size={12} className="ml-auto" style={{ color: item.color }} />
                    )}

                    {/* Hover glow */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: "rgba(255,255,255,0.03)" }} />
                    )}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* ── AI STATUS PILL ───────────────────────────────────────── */}
        <div className="relative px-3 py-3 flex-shrink-0"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl mb-2"
            style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.15)" }}>
            <Brain size={13} className="text-violet-400 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-violet-300">AI Core Active</div>
              <div className="text-[10px] text-slate-600">5 agents running</div>
            </div>
            <Zap size={11} className="text-violet-400" />
          </div>

          {/* Logout */}
          <button
            onClick={doLogout}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "rgba(239,68,68,0.12)",
              border: "1px solid rgba(239,68,68,0.2)",
              color: "#F87171",
            }}
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA ────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* ── TOP HEADER ───────────────────────────────────────────── */}
        <header
          className="h-14 flex items-center justify-between px-5 flex-shrink-0 z-30"
          style={{
            background: "rgba(5,10,24,0.95)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Left: hamburger + title */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#94A3B8" }}
              onClick={() => setOpen(true)}
            >
              <Menu size={16} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400"
                style={{ boxShadow: "0 0 6px #8B5CF6" }} />
              <span className="text-sm font-semibold text-white">Admin Dashboard</span>
            </div>
          </div>

          {/* Right: status + avatar */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                style={{ boxShadow: "0 0 5px #22C55E", animation: "alPulse 2s infinite" }} />
              Welcome Back 👋
            </div>

            {/* Notification bell */}
            <button className="w-8 h-8 rounded-lg flex items-center justify-center relative"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Bell size={14} className="text-slate-400" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-violet-400"
                style={{ boxShadow: "0 0 4px #8B5CF6" }} />
            </button>

            {/* Avatar */}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", boxShadow: "0 0 12px rgba(124,58,237,0.35)" }}>
              A
            </div>
          </div>
        </header>

        {/* ── SCROLLABLE PAGE CONTENT ──────────────────────────────── */}
        <main
          className="flex-1 overflow-y-auto"
          style={{ background: "#020617" }}
        >
          {children}
        </main>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes alPulse { 0%,100%{opacity:1} 50%{opacity:.4} }
      `}</style>
    </div>
  );
}