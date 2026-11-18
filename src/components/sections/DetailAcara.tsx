"use client";

export default function DetailAcara() {
  return (
    <section
      id="detail-acara"
      className="w-full bg-white px-6 py-20 text-center"
    >
      <div className="mx-auto max-w-3xl">
        {/* Judul */}
        <p
          className="mb-2 text-xs tracking-[0.3em] text-[#B49A65]"
          style={{ fontFamily: "var(--font-poppins-custom)" }}
        >
          SAVE THE DATE
        </p>

        <h2
          className="mb-4 text-4xl text-[#493126] sm:text-5xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Detail Acara
        </h2>

        <p
          className="mb-10 text-sm leading-relaxed text-gray-600 sm:text-base"
          style={{ fontFamily: "var(--font-poppins-custom)" }}
        >
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
          hadir dalam upacara Tigang Sasih putra kami.
        </p>

        {/* Informasi Acara */}
        <div className="space-y-6 border-y border-[#B49A65]/40 py-8">
          <div>
            <p className="mb-1 text-xs tracking-widest text-[#B49A65]">
              HARI & TANGGAL
            </p>
            <p className="text-lg text-[#493126]">Kamis, 10 Desember 2026</p>
          </div>

          <div>
            <p className="mb-1 text-xs tracking-widest text-[#B49A65]">WAKTU</p>
            <p className="text-lg text-[#493126]">10.00 WITA - Selesai</p>
          </div>

          <div>
            <p className="mb-1 text-xs tracking-widest text-[#B49A65]">
              TEMPAT
            </p>
            <p className="text-lg text-[#493126]">Kediaman Keluarga</p>
            <p className="mt-1 text-sm text-gray-500">
              Alamat lengkap menyusul
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
