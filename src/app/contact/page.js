"use client";

import { useMemo, useState } from "react";
import NavbarMorph from "@/components/NavbarMorph";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const PROPERTY_TYPES = [
  "Rumah",
  "Ruko",
  "Tanah",
  "Kavling",
  "Lahan",
  "Gudang",
  "Lainnya",
];
const FURNITURE = ["Non-Furnished", "Semi-Furnished", "Fully-Furnished"];

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-900">{label}</span>
      {hint ? (
        <span className="ml-2 text-xs text-slate-500">{hint}</span>
      ) : null}
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900",
        "placeholder:text-slate-400 shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
      ].join(" ")}
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className={[
        "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
      ].join(" ")}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={[
        "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900",
        "placeholder:text-slate-400 shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
      ].join(" ")}
    />
  );
}

export default function ContactPage() {
  // ✅ default aktif Listing
  const [mode, setMode] = useState("listing"); // "listing" | "konsultasi"

  const [listing, setListing] = useState({
    namaProperty: "",
    lokasiArea: "", // ✅ baru (wajib)
    hargaKisaran: "", // ✅ baru (opsional)
    tipeProperty: "Gudang",
    status: "Dijual",
    luasTanah: "",
    luasBangunan: "",
    kamarTidur: "",
    kamarMandi: "",
    deskripsi: "",
    furniture: "Non-Furnished",
  });

  const [konsultasi, setKonsultasi] = useState({
    nama: "",
    deskripsi: "",
    nomorWhatsapp: "",
  });

  const waDirect = useMemo(() => {
    return buildWhatsAppLink(
      "Halo Valdis, saya ingin tanya seputar properti di Surabaya.",
    );
  }, []);

  function goToForm(nextMode) {
    setMode(nextMode);
    // biar UX enak: fokus ke form
    requestAnimationFrame(() => {
      document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  function submitListing(e) {
    e.preventDefault();
    if (!listing.namaProperty.trim()) {
      alert("Nama Property wajib diisi.");
      return;
    }
    if (!listing.lokasiArea.trim()) {
      alert("Lokasi/Area wajib diisi.");
      return;
    }

    const msg = [
      "[LISTING PROPERTY]",
      `Nama Property: ${listing.namaProperty}`,
      `Lokasi/Area: ${listing.lokasiArea}`,
      listing.hargaKisaran ? `Harga/Kisaran: ${listing.hargaKisaran}` : null,
      `Tipe Property: ${listing.tipeProperty}`,
      `Status: ${listing.status}`,
      listing.luasTanah ? `Luas Tanah: ${listing.luasTanah}` : null,
      listing.luasBangunan ? `Luas Bangunan: ${listing.luasBangunan}` : null,
      listing.kamarTidur ? `Kamar Tidur: ${listing.kamarTidur}` : null,
      listing.kamarMandi ? `Kamar Mandi: ${listing.kamarMandi}` : null,
      `Furniture: ${listing.furniture}`,
      listing.deskripsi ? `Deskripsi: ${listing.deskripsi}` : null,
      "",
      "Dikirim via website Valdis Property.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(msg), "_blank", "noreferrer");
  }

  function submitKonsultasi(e) {
    e.preventDefault();
    if (!konsultasi.nama.trim() || !konsultasi.deskripsi.trim()) {
      alert("Nama dan Deskripsi wajib diisi.");
      return;
    }

    const msg = [
      "[KONSULTASI PROPERTY]",
      `Nama: ${konsultasi.nama}`,
      konsultasi.nomorWhatsapp
        ? `Nomor WhatsApp: ${konsultasi.nomorWhatsapp}`
        : null,
      `Pertanyaan: ${konsultasi.deskripsi}`,
      "",
      "Dikirim via website Valdis Property.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(msg), "_blank", "noreferrer");
  }

  return (
    <>
      <NavbarMorph brand="Valdis Property" />

      <main id="content">
        <section className="bg-slate-50 py-12 md:py-16">
          <Container>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Contact Valdis
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600">
              Pilih kebutuhan kamu. Klik salah satu tombol di bawah.
              <br />
              Setelah klik Submit, WhatsApp akan terbuka dengan pesan yang sudah
              rapi.
            </p>

            {/* ✅ Note selalu tampil */}
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              <b>Catatan:</b> Kamu bisa pilih salah satu dari 3 opsi:{" "}
              <b>Listing Property</b>, <b>Konsultasi Property</b>, atau{" "}
              <b>WhatsApp Langsung</b>.
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                variant={mode === "listing" ? "primary" : "secondary"}
                href="#form"
                onClick={(e) => {
                  e.preventDefault();
                  goToForm("listing");
                }}
              >
                Listing Property
              </Button>

              <Button
                variant={mode === "konsultasi" ? "primary" : "secondary"}
                href="#form"
                onClick={(e) => {
                  e.preventDefault();
                  goToForm("konsultasi");
                }}
              >
                Konsultasi Property
              </Button>

              <Button
                href={waDirect}
                external
                target="_blank"
                rel="noreferrer"
                variant="subtle"
              >
                WhatsApp Langsung
              </Button>
            </div>
          </Container>
        </section>

        <section id="form" className="py-12 md:py-16">
          <Container>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              {/* label mode aktif */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  Mode aktif:
                </span>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                  {mode === "listing"
                    ? "Listing Property"
                    : "Konsultasi Property"}
                </span>
              </div>

              {mode === "listing" ? (
                <form onSubmit={submitListing} className="grid gap-5">
                  <p className="text-sm font-semibold text-slate-900">
                    Form Listing Property
                  </p>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      label="Nama Property"
                      hint="contoh: Rumah Dijual di Dukuh Kupang"
                    >
                      <Input
                        value={listing.namaProperty}
                        onChange={(e) =>
                          setListing({
                            ...listing,
                            namaProperty: e.target.value,
                          })
                        }
                        placeholder="Rumah Dijual di Dukuh Kupang"
                        required
                      />
                    </Field>

                    <Field
                      label="Lokasi / Area"
                      hint="contoh: Margomulyo / Kalianak / Dukuh Kupang"
                    >
                      <Input
                        value={listing.lokasiArea}
                        onChange={(e) =>
                          setListing({ ...listing, lokasiArea: e.target.value })
                        }
                        placeholder="Margomulyo"
                        required
                      />
                    </Field>

                    <Field
                      label="Harga / Kisaran"
                      hint="opsional (mis. 2.5M / 1.2–1.5M / 65jt/bln)"
                    >
                      <Input
                        value={listing.hargaKisaran}
                        onChange={(e) =>
                          setListing({
                            ...listing,
                            hargaKisaran: e.target.value,
                          })
                        }
                        placeholder="mis. 2.5M"
                      />
                    </Field>

                    <Field label="Tipe Property">
                      <Select
                        value={listing.tipeProperty}
                        onChange={(e) =>
                          setListing({
                            ...listing,
                            tipeProperty: e.target.value,
                          })
                        }
                      >
                        {PROPERTY_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <Field label="Dijual / Disewa?">
                      <div className="flex flex-wrap gap-3">
                        {["Dijual", "Disewa"].map((x) => (
                          <button
                            key={x}
                            type="button"
                            onClick={() =>
                              setListing({ ...listing, status: x })
                            }
                            className={[
                              "rounded-full px-4 py-2 text-sm font-semibold transition border",
                              listing.status === x
                                ? "bg-slate-900 text-white border-slate-900"
                                : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
                            ].join(" ")}
                          >
                            {x}
                          </button>
                        ))}
                      </div>
                    </Field>

                    <Field label="Furniture">
                      <Select
                        value={listing.furniture}
                        onChange={(e) =>
                          setListing({ ...listing, furniture: e.target.value })
                        }
                      >
                        {FURNITURE.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <Field label="Luas Tanah">
                      <Input
                        value={listing.luasTanah}
                        onChange={(e) =>
                          setListing({ ...listing, luasTanah: e.target.value })
                        }
                        placeholder="mis. 300 m2"
                      />
                    </Field>

                    <Field label="Luas Bangunan">
                      <Input
                        value={listing.luasBangunan}
                        onChange={(e) =>
                          setListing({
                            ...listing,
                            luasBangunan: e.target.value,
                          })
                        }
                        placeholder="mis. 250 m2"
                      />
                    </Field>

                    <Field label="Jumlah Kamar Tidur">
                      <Input
                        value={listing.kamarTidur}
                        onChange={(e) =>
                          setListing({ ...listing, kamarTidur: e.target.value })
                        }
                        placeholder="mis. 3"
                      />
                    </Field>

                    <Field label="Jumlah Kamar Mandi">
                      <Input
                        value={listing.kamarMandi}
                        onChange={(e) =>
                          setListing({ ...listing, kamarMandi: e.target.value })
                        }
                        placeholder="mis. 2"
                      />
                    </Field>
                  </div>

                  <Field label="Deskripsi">
                    <Textarea
                      rows={5}
                      value={listing.deskripsi}
                      onChange={(e) =>
                        setListing({ ...listing, deskripsi: e.target.value })
                      }
                      placeholder="Tulis detail penting: lokasi, akses, kondisi, harga, dll."
                    />
                  </Field>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      Setelah klik submit, WhatsApp akan terbuka. Silakan tekan{" "}
                      <b>Send</b>.
                    </p>
                    <Button variant="primary">Submit Listing</Button>
                  </div>
                </form>
              ) : null}

              {mode === "konsultasi" ? (
                <form onSubmit={submitKonsultasi} className="grid gap-5">
                  <p className="text-sm font-semibold text-slate-900">
                    Form Konsultasi Property
                  </p>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Nama">
                      <Input
                        value={konsultasi.nama}
                        onChange={(e) =>
                          setKonsultasi({ ...konsultasi, nama: e.target.value })
                        }
                        placeholder="Nama Anda"
                        required
                      />
                    </Field>

                    <Field
                      label="Nomor WhatsApp"
                      hint="opsional (biar Valdis bisa kontak balik)"
                    >
                      <Input
                        value={konsultasi.nomorWhatsapp}
                        onChange={(e) =>
                          setKonsultasi({
                            ...konsultasi,
                            nomorWhatsapp: e.target.value,
                          })
                        }
                        placeholder="contoh: 08xxxx"
                      />
                    </Field>
                  </div>

                  <Field label="Deskripsi (yang ingin ditanyakan)">
                    <Textarea
                      rows={5}
                      value={konsultasi.deskripsi}
                      onChange={(e) =>
                        setKonsultasi({
                          ...konsultasi,
                          deskripsi: e.target.value,
                        })
                      }
                      placeholder="Tulis kebutuhan/pertanyaan Anda..."
                      required
                    />
                  </Field>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      Setelah klik submit, WhatsApp akan terbuka. Silakan tekan{" "}
                      <b>Send</b>.
                    </p>
                    <Button variant="primary">Submit Konsultasi</Button>
                  </div>
                </form>
              ) : null}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
