"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Layanan", href: "/#layanan" },
  { label: "Area", href: "/#area" },
  { label: "Dokumentasi", href: "/#dokumentasi" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontak", href: "/#kontak" },
];

export default function NavbarMorph({
  brand = "Valdis Property",
  logoSrc = "/images/logo-remax.png",
}) {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active hash (untuk highlight sederhana)
  useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash || "");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // ESC close + lock scroll when menu open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const navWrapClass =
    "hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 backdrop-blur";

  return (
    <header className="sticky top-0 z-50">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <Container className="py-3">
        <motion.nav
          aria-label="Main navigation"
          initial={false}
          animate={{ y: 0 }}
          className={[
            "rounded-2xl border border-slate-200/70 backdrop-blur",
            "px-3 py-3 md:px-4",
            elevated ? "bg-white/95 shadow-md" : "bg-white/85 shadow-sm",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Brand + Logo */}
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                {!logoError ? (
                  <Image
                    src={logoSrc}
                    alt="Logo Valdis Property"
                    fill
                    className="object-contain p-1"
                    sizes="36px"
                    priority
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-sky-500 to-emerald-500"
                  />
                )}
              </div>

              <div className="min-w-0 leading-tight">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {brand}
                </p>
                <p className="truncate text-xs text-slate-600">
                  Surabaya • Industrial & Property
                </p>
              </div>
            </Link>

            {/* Desktop nav pills */}
            <div className={navWrapClass} aria-label="Section navigation">
              {navItems.map((item) => {
                const isActive = activeHash === item.href.replace("/#", "#");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={[
                      "relative rounded-full px-3 py-2 text-sm font-medium transition",
                      "text-slate-700 hover:text-slate-900",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
                    ].join(" ")}
                  >
                    {/* active pill background */}
                    <span
                      className={[
                        "absolute inset-0 -z-10 rounded-full transition",
                        isActive
                          ? "bg-slate-900/5"
                          : "bg-transparent hover:bg-slate-900/5",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                    {/* underline micro */}
                    <span className="relative">
                      {item.label}
                      <span
                        className={[
                          "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full transition",
                          "bg-slate-900/30",
                          "group-hover:scale-x-100",
                        ].join(" ")}
                      />
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex">
                <Button href="/contact" variant="primary" size="sm">
                  Hubungi
                </Button>
              </div>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className={[
                  "md:hidden inline-flex items-center justify-center rounded-full",
                  "border border-slate-200 bg-white p-2 text-slate-900",
                  "hover:bg-slate-50 transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
                ].join(" ")}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.nav>
      </Container>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[60] h-full w-[86%] max-w-sm border-l border-slate-200 bg-white p-4 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <Image
                      src={logoSrc}
                      alt="Logo Valdis Property"
                      fill
                      className="object-contain p-1"
                      sizes="36px"
                      priority
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-sky-500 to-emerald-500"
                    />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-slate-900">
                      {brand}
                    </p>
                    <p className="text-xs text-slate-600">
                      Surabaya • Industrial & Property
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-slate-200 bg-white p-2 hover:bg-slate-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-4 grid gap-2">
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Hubungi Valdis
                </Button>
              </div>

              <div className="mt-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeHash === item.href.replace("/#", "#");
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "block rounded-2xl px-4 py-3 text-sm font-medium transition",
                        isActive
                          ? "bg-slate-900/5 text-slate-900"
                          : "text-slate-900 hover:bg-slate-50",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <p className="mt-6 text-xs text-slate-500">
                Tip: tekan ESC untuk menutup menu.
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
