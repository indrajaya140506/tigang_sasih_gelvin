"use client";

export default function BrownMap() {
  const latitude = -8.4130421;
  const longitude = 115.4506183;

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=18&t=k&output=embed`;

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
