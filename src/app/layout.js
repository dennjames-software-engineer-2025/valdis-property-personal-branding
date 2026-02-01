import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://valdis-property-website-personal-branding-fflos3y36.vercel.app/"), // nanti ganti ke domain vercel saat deploy
  title: "Valdis Property | Agent Properti Surabaya",
  description:
    "Agent properti Surabaya fokus pergudangan (Margomulyo & Kalianak). Melayani jual, sewa, dan titip listing rumah/ruko/gudang/tanah/lahan.",
  openGraph: {
    title: "Valdis Property | Agent Properti Surabaya",
    description:
      "Fokus pergudangan Surabaya (Margomulyo & Kalianak). Jual, sewa, titip listing.",
    url: "/",
    siteName: "Valdis Property",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Valdis Property" },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valdis Property | Agent Properti Surabaya",
    description:
      "Fokus pergudangan Surabaya (Margomulyo & Kalianak). Jual, sewa, titip listing.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
