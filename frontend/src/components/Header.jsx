




// frontend/src/components/Header.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userSlice.js";
import SmartSearchBar from "./SmartSearchBar.jsx";

/* ---------- Inline SVG icons ----------
   Real <svg> markup instead of unicode glyphs — renders identically
   across every OS/browser, unlike ⌕ ⚇ 🛍 which broke earlier. */

const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

const UserIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
  </svg>
);

const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20s-7-4.4-9.3-8.8C1.3 8 2.7 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.3 0 4.7 3 3.3 6.2C19 15.6 12 20 12 20Z" />
  </svg>
);

const BagIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 7h12l1 14H5L6 7Z" />
    <path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
);

const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export default function Header() {
  const { me } = useSelector((s) => s.user);
  const cartItems = useSelector((s) => s.cart?.items || []);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartTotal = useMemo(
    () => cartItems.reduce((s, i) => s + (Number(i.price) || 0) * (i.qty || 1), 0),
    [cartItems]
  );

  const doLogout = () => {
    dispatch(logout());
    nav("/profile");
  };

  const isAdmin = me?.role === "admin" || me?.role === "manager";
  const isLoggedIn = !!me?._id;

  const navLinkBase =
    "relative whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 py-2 " +
    "after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 after:bg-[#AD8A4D] " +
    "after:transition-all after:duration-300 hover:after:w-full";

  const navLinkClass = ({ isActive }) =>
    isActive
      ? `${navLinkBase} text-[#15171c] after:w-full`
      : `${navLinkBase} text-[#15171c]/70 hover:text-[#15171c]`;

  return (
    <header
      className={`sticky top-0 z-50 bg-[#F7F4EE] border-b border-[#15171c]/10 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(21,23,28,0.08)]" : ""
      }`}
    >
      {/* FIX: removed invalid `max-w-16xl` (not a real Tailwind class — it
          silently does nothing) and the stray `ml-34` / `ml-4` offsets that
          were pushing the whole bar left of center. A single centered
          `max-w-7xl mx-auto` container is what actually centers content. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">

          {/* ============ LEFT: hamburger (mobile) + nav links (desktop) ============ */}
          {/* shrink-0 + overflow-hidden so this never bleeds into the
              absolutely-centered logo, no matter how the viewport resizes */}
          <div className="flex items-center gap-5 lg:gap-6 shrink-0 overflow-hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-[#15171c] transition-transform duration-200 active:scale-90"
              aria-label="Toggle menu"
            >
              <MenuIcon className="w-5 h-5" />
            </button>

            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              <NavLink to="/" end className={navLinkClass}>Home</NavLink>
              <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
              <NavLink to="/visualsearch" className={navLinkClass}>Visual Search</NavLink>
              <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>
          </div>

          {/* ============ CENTER: Logo — absolutely centered on the header,
              completely independent of how wide the nav or icon cluster
              get. This is what actually prevents the overlap; a grid
              track-based center can get pushed/overlapped when a sibling
              column's content overflows its track, which is what happened
              before ("CONTACT" bleeding into "QuickKart"). ============ */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center leading-none group"
          >
            <span
              className="text-[20px] sm:text-[26px] lg:text-[28px] font-bold tracking-tight text-[#15171c] whitespace-nowrap transition-transform duration-300 group-hover:scale-[1.02]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              QuickKart
            </span>
            <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.35em] sm:tracking-[0.4em] text-[#AD8A4D] uppercase mt-0.5 whitespace-nowrap">
              Fashion
            </span>
          </Link>

          {/* ============ RIGHT: search + icons ============ */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-4 shrink-0">
            {/* Search — now the real functional SmartSearchBar instead of a
                static placeholder input. Handles both AI smart-search
                queries and plain category keywords (e.g. "mens shirt")
                through the same component. Desktop/tablet only (md:block),
                same breakpoint as before. */}
            <div className="hidden md:block w-full max-w-[200px] lg:max-w-[260px]">
              <SmartSearchBar compact />
            </div>

            {/* Search icon trigger — mobile only, opens a search row below header */}
            <button
              onClick={() => setMobileSearchOpen((v) => !v)}
              className="md:hidden p-2 text-[#15171c]/70 transition-all duration-200 hover:text-[#AD8A4D]"
              aria-label="Search"
            >
              <SearchIcon className="w-[19px] h-[19px]" />
            </button>

            {isLoggedIn ? (
              <>
                <NavLink
                  to="/profile"
                  className="hidden sm:flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium text-[#15171c]/75 hover:text-[#15171c] transition-colors duration-200"
                >
                  <UserIcon className="w-[18px] h-[18px]" />
                  <span className="hidden xl:inline">Profile</span>
                </NavLink>
                <button
                  onClick={doLogout}
                  className="hidden sm:inline whitespace-nowrap text-[13px] font-medium text-[#8C3A2E] hover:text-[#6e2e25] transition-colors duration-200"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="hidden sm:inline whitespace-nowrap text-[13px] font-medium text-[#15171c]/75 hover:text-[#15171c] transition-colors duration-200"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="hidden sm:inline whitespace-nowrap text-[13px] font-semibold bg-[#15171c] text-white px-5 py-2 rounded-full
                    transition-all duration-200 hover:bg-[#2a2d36] hover:scale-[1.03] active:scale-[0.97]"
                >
                  Register
                </NavLink>
              </>
            )}

            {/* Cart & Wishlist — ONLY for logged-in normal users (unchanged condition) */}
            {isLoggedIn && !isAdmin && (
              <>
                <NavLink
                  to="/wishlist"
                  className="p-1.5 sm:p-2 text-[#15171c]/70 transition-all duration-200 hover:text-[#8C3A2E] hover:scale-110"
                  aria-label="Wishlist"
                >
                  <HeartIcon className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px]" />
                </NavLink>
                <NavLink
                  to="/cart"
                  className="relative p-1.5 sm:p-2 text-[#15171c]/70 transition-all duration-200 hover:text-[#AD8A4D] hover:scale-110"
                  aria-label="Cart"
                >
                  <BagIcon className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px]" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 bg-[#8C3A2E] text-white text-[10px] font-semibold w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-[#F7F4EE]">
                      {cartItems.length}
                    </span>
                  )}
                </NavLink>
              </>
            )}

            {/* Admin Dashboard (unchanged condition) */}
            {isAdmin && (
              <NavLink
                to="/admin"
                className="whitespace-nowrap px-4 sm:px-5 py-2 bg-[#15171c] text-white text-[12px] sm:text-[13px] font-semibold rounded-full
                  transition-all duration-200 hover:bg-[#2a2d36] hover:scale-[1.03]"
              >
                Dashboard
              </NavLink>
            )}
          </div>
        </div>

        {/* Mobile search row — toggled by the search icon button above.
            Now the real functional SmartSearchBar (AI smart search +
            plain category keywords like "mens shirt") instead of a
            static placeholder input. */}
        {mobileSearchOpen && (
          <div className="md:hidden pb-3">
            <SmartSearchBar compact autoFocus />
          </div>
        )}
      </div>

      {/* ============ Mobile Menu (unchanged structure/links) ============ */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#15171c]/10 bg-[#F7F4EE] py-4">
          <div className="px-6 space-y-1">
            <NavLink to="/" className="block py-3 text-[15px] font-medium text-[#15171c] border-b border-[#15171c]/5">Home</NavLink>
            <NavLink to="/shop" className="block py-3 text-[15px] font-medium text-[#15171c] border-b border-[#15171c]/5">Shop</NavLink>
            <NavLink to="/visualsearch" className="block py-3 text-[15px] font-medium text-[#15171c] border-b border-[#15171c]/5">Visual Search</NavLink>
            <NavLink to="/blog" className="block py-3 text-[15px] font-medium text-[#15171c] border-b border-[#15171c]/5">Blog</NavLink>
            <NavLink to="/contact" className="block py-3 text-[15px] font-medium text-[#15171c] border-b border-[#15171c]/5">Contact</NavLink>

            {isLoggedIn && !isAdmin && (
              <>
                <NavLink to="/wishlist" className="flex items-center gap-2 py-3 text-[15px] font-medium text-[#15171c] border-b border-[#15171c]/5">
                  <HeartIcon className="w-4 h-4" /> Wishlist
                </NavLink>
                <NavLink to="/cart" className="flex items-center gap-2 py-3 text-[15px] font-medium text-[#15171c] border-b border-[#15171c]/5">
                  <BagIcon className="w-4 h-4" /> Cart ({cartItems.length})
                </NavLink>
              </>
            )}

            {isAdmin && (
              <NavLink to="/admin" className="block py-3 text-[15px] font-medium text-[#15171c] border-b border-[#15171c]/5">Dashboard</NavLink>
            )}

            {isLoggedIn ? (
              <button onClick={doLogout} className="w-full text-left py-3 text-[15px] font-medium text-[#8C3A2E]">
                Sign Out
              </button>
            ) : (
              <>
                <NavLink to="/login" className="block py-3 text-[15px] font-medium text-[#15171c] border-b border-[#15171c]/5">Login</NavLink>
                <NavLink to="/register" className="block py-3 text-[15px] font-medium text-[#15171c]">Register</NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}