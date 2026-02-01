"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const link = buildWhatsAppLink("Halo Valdis, saya ingin tanya seputar properti di Surabaya.");

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
      className={[
        "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full",
        "bg-slate-900 px-4 py-3 text-white shadow-lg hover:bg-slate-800",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
      ].join(" ")}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="text-sm font-medium">WhatsApp</span>
    </a>
  );
}
