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
      <div className="relative w-full">
        {/* Google Maps Satellite */}
        <iframe
          title="Rumah Nyoman Darma"
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

        {/* Custom Location Label */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            {/* Location Pin */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#493126] shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F5EBDD"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path d="M12 21s8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 8 12 8 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>

            {/* Location Name */}
            <div className="mt-2 rounded-md border border-[#B49A65]/40 bg-[#241812]/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
              <p
                className="whitespace-nowrap text-[10px] tracking-wide text-[#F5EBDD]"
                style={{ fontFamily: "var(--font-poppins-custom)" }}
              >
                Rumah I Nyoman Darma
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
