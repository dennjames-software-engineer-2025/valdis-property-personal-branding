import NavbarMorph from "@/components/NavbarMorph";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavbarMorph brand="Valdis Property" />
      <main id="content">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white"
            aria-hidden="true"
          />
          <Container className="py-14 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <Reveal>
                <p className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                  Spesialis Pergudangan Surabaya • Margomulyo & Kalianak
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Agent Properti Surabaya untuk Kebutuhan Industrial & Umum
                </h1>

                <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                  Fokus utama: pergudangan (industrial). Tetap melayani rumah,
                  ruko, tanah, lahan, dan kebutuhan properti lainnya.
                </p>

                {/* CTA tunggal */}
                <div className="mt-7">
                  <Button href="/contact" variant="primary">
                    Hubungi Valdis
                  </Button>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  *Klik untuk memilih: Listing Property / Konsultasi / WhatsApp
                  langsung.
                </p>
              </Reveal>

              <Reveal delay={0.08} className="relative">
                {/* placeholder portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
                  <Image
                    src="/images/Dennis Michael.jpeg"
                    alt="Foto profil"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="flex h-full items-end p-6">
                    <div className="w-full rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
                      <p className="text-sm font-semibold text-slate-900">
                        Valdis
                      </p>
                      <p className="text-xs text-slate-600">
                        Agent Property Surabaya • Industrial Focus
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  *Foto portrait akan kita ganti setelah aset final tersedia.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* LAYANAN */}
        <section id="layanan" className="py-14 md:py-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Layanan
              </h2>
              <p className="mt-2 text-slate-600">
                Valdis Property melayani:
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {[
                  {
                    t: "Titip Listing",
                    d: "Isi detail properti, Valdis bantu pasarkan.",
                  },
                  {
                    t: "Konsultasi",
                    d: "Tanya kebutuhan, lokasi, budget, atau strategi jual.",
                  },
                  {
                    t: "Jual / Sewa",
                    d: "Rumah, ruko, gudang, tanah, lahan—Surabaya.",
                  },
                  {
                    t: "Industrial Focus",
                    d: "Pergudangan Margomulyo & Kalianak (utama).",
                  },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="font-semibold text-slate-900">{c.t}</p>
                    <p className="mt-2 text-sm text-slate-600">{c.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* AREA */}
        <section id="area" className="bg-slate-50 py-14 md:py-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Area Fokus
              </h2>
              <p className="mt-2 text-slate-600">
                Utama: pergudangan Surabaya (Margomulyo & Kalianak). Tetap
                melayani area Surabaya lainnya.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Margomulyo", "Kalianak", "Surabaya"].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* DOKUMENTASI */}
        <section id="dokumentasi" className="py-14 md:py-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Dokumentasi
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  "1.jpeg",
                  "2.jpeg",
                  "3.jpeg",
                  "4.jpeg",
                  "5.jpeg",
                  "6.jpeg",
                  "7.jpeg",
                  "8.jpeg",
                ].map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                  >
                    <Image
                      src={`/images/docs/${src}`}
                      alt="Dokumentasi"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* FAQ (tanpa Reveal supaya pasti terlihat) */}
        <section id="faq" className="bg-slate-50 py-14 md:py-20">
          <Container>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              FAQ
            </h2>
            <p className="mt-2 text-slate-600">Pertanyaan & Jawaban.</p>

            <div className="mt-6 space-y-3">
              {[
                {
                  q: "Bisa bantu jual/sewa selain gudang?",
                  a: "Bisa. Fokus utama pergudangan, tapi tetap melayani properti lain di Surabaya.",
                },
                {
                  q: "Cara mulai titip listing?",
                  a: "Klik “Hubungi Valdis”, pilih “Listing Property”, isi detail, lalu submit—pesan akan tersusun di WhatsApp.",
                },
                {
                  q: "Respons berapa lama?",
                  a: "Umumnya cepat. Jika di luar jam kerja, akan dibalas secepatnya.",
                },
              ].map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                    {f.q}
                    <span className="float-right text-slate-400 transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* KONTAK (CTA tunggal) */}
        <section id="kontak" className="py-14 md:py-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Kontak
              </h2>
              <p className="mt-2 text-slate-600">
                Data yang dikirim, akan otomatis terkirim ke Valdis Property.
              </p>

              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Hubungi Valdis
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>

        <footer className="border-t border-slate-200 py-10">
          <Container className="text-sm text-slate-600">
            © {new Date().getFullYear()} Valdis Property • Surabaya
          </Container>
        </footer>
      </main>

      <WhatsAppFloat />
    </>
  );
}
