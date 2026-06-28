





// frontend/src/components/Footer.jsx

import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";

const GOLD = "#AD8A4D";

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#15171c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Male <span style={{ color: GOLD }}>Fashion</span>
            </h2>

            <p className="text-white/45 mt-3 text-[15px] leading-relaxed max-w-md">
              Premium fashion for the modern man. Redefining style with
              quality, sustainability, and intelligent design.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p
                className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-3"
                style={{ color: GOLD }}
              >
                Stay in the loop
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-sm text-white/80 bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 max-w-md">
                  <HiOutlineMail size={16} style={{ color: GOLD }} />
                  You're on the list — welcome aboard.
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex max-w-md"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-white/5 border border-white/10 text-white px-5 py-3.5 rounded-l-2xl w-full outline-none text-sm placeholder:text-white/30 focus:border-[#AD8A4D]"
                  />

                  <button
                    type="submit"
                    className="flex items-center gap-2 text-black px-6 sm:px-8 rounded-r-2xl font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
                    style={{ background: GOLD }}
                  >
                    Join
                    <HiArrowRight size={16} />
                  </button>
                </form>
              )}

              <p className="text-xs text-white/35 mt-3">
                Get early access to new drops, exclusive offers & style tips.
              </p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Shop</h4>

            <ul className="space-y-3 text-[14px] text-white/45">
              <li>
                <a href="/shop" className="hover:text-white transition-colors">
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  href="/shop?category=shirts"
                  className="hover:text-white transition-colors"
                >
                  Shirts
                </a>
              </li>

              <li>
                <a
                  href="/shop?category=kurtas"
                  className="hover:text-white transition-colors"
                >
                  Kurtas
                </a>
              </li>

              <li>
                <a
                  href="/shop?category=trousers"
                  className="hover:text-white transition-colors"
                >
                  Trousers
                </a>
              </li>

              <li>
                <a
                  href="/shop?category=ethnic"
                  className="hover:text-white transition-colors"
                >
                  Ethnic Wear
                </a>
              </li>

              <li>
                <a
                  href="/shop?category=accessories"
                  className="hover:text-white transition-colors"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Support</h4>

            <ul className="space-y-3 text-[14px] text-white/45">
              <li>
                <a
                  href="/track-order"
                  className="hover:text-white transition-colors"
                >
                  Track Order
                </a>
              </li>

              <li>
                <a
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping Policy
                </a>
              </li>

              <li>
                <a
                  href="/returns"
                  className="hover:text-white transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>

              <li>
                <a href="/faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="/size-guide"
                  className="hover:text-white transition-colors"
                >
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Company</h4>

            <ul className="space-y-3 text-[14px] text-white/45">
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="/sustainability"
                  className="hover:text-white transition-colors"
                >
                  Sustainability
                </a>
              </li>

              <li>
                <a
                  href="/press"
                  className="hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>

              <li>
                <a
                  href="/affiliates"
                  className="hover:text-white transition-colors"
                >
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <div>© {year} Male Fashion. All Rights Reserved.</div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>

            <a
              href="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { Icon: FaTwitter, label: "Twitter" },
              { Icon: FaFacebookF, label: "Facebook" },
              { Icon: FaInstagram, label: "Instagram" },
              { Icon: FaYoutube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 hover:text-[#15171c]"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = GOLD)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

