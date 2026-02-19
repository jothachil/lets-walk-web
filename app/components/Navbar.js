"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="relative z-10 border-b border-zinc-200/80"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/App Icon.svg"
              alt="Let's Walk"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-display text-lg font-bold tracking-tight text-zinc-900">
              StepUP
            </span>
          </Link>
        </motion.div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: "/manifesto", label: "Manifesto" },
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms-and-conditions", label: "Terms & Conditions" },
          ].map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block h-[2px] w-5 bg-zinc-700 rounded-full"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-[2px] w-5 bg-zinc-700 rounded-full"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-[2px] w-5 bg-zinc-700 rounded-full"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden overflow-hidden border-t border-zinc-200/80"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {[
                { href: "/manifesto", label: "Manifesto" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="block text-sm text-zinc-500 hover:text-zinc-900 transition-colors py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
