"use client";

export default function BrownMap() {
  const address = "Br. Dinas Pendem, Desa Muncan, Selat, Karangasem, Bali";

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <iframe
        title="Lokasi Resepsi"
        src={mapUrl}
        width="100%"
        height="400"
        style={{
          border: 0,
          display: "block",
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
