"use client";

import { useEffect, useState } from "react";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  // Foto gallery (otomatis membaca folder)
  const images = [
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-1.jpg",
  ];

  const closeGallery = () => setActiveImage(null);

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === null ? null : (prev + 1) % images.length,
    );
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length,
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <>
      {/* Gallery Section */}
      <section
        id="gallery"
        className="relative w-full overflow-hidden bg-[#241812] px-3 pb-24 pt-14 sm:px-5 sm:pb-28 sm:pt-20"
      >
        {/* Heading */}
        <div className="mb-7 text-center sm:mb-10">
          <p
            style={{ fontFamily: "var(--font-great-vibes-custom)" }}
            className="mt-0 text-4xl font-normal leading-tight text-white sm:text-6xl"
          >
            Photo Gallery
          </p>
        </div>

        {/* Photo Grid */}
        <div className="mx-auto grid w-full max-w-[600px] grid-cols-2 gap-1.5 sm:gap-2.5">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              onClick={() => setActiveImage(index)}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-[7px] border border-white/70 bg-[#493126] focus:outline-none"
              aria-label={`Buka foto ${index + 1}`}
            >
              <img
                src={src}
                alt={`Photo Gallery ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Hover Black Overlay */}
              <span className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30 group-active:bg-black/40" />
            </button>
          ))}
        </div>
      </section>

      {/* Fullscreen Photo Viewer */}
      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-3"
          onClick={closeGallery}
        >
          {/* Top Navigation */}
          <div className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-5 py-4 text-white sm:px-8">
            <p className="text-sm font-medium tracking-wide">
              {activeImage + 1} / {images.length}
            </p>

            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="flex h-10 w-10 items-center justify-center text-3xl font-light text-white transition-opacity hover:opacity-60"
              aria-label="Tutup galeri"
            >
              ×
            </button>
          </div>

          {/* Main Image */}
          <div
            className="relative flex h-full max-h-[85vh] w-full max-w-4xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={activeImage}
              src={images[activeImage]}
              alt={`Photo Gallery ${activeImage + 1}`}
              className="max-h-[85vh] max-w-full object-contain"
            />

            {/* Previous */}
            <button
              onClick={prevImage}
              className="absolute left-0 flex h-12 w-10 items-center justify-center bg-black/30 text-3xl text-white transition-colors hover:bg-black/60 sm:left-3 sm:h-14 sm:w-12"
              aria-label="Foto sebelumnya"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-0 flex h-12 w-10 items-center justify-center bg-black/30 text-3xl text-white transition-colors hover:bg-black/60 sm:right-3 sm:h-14 sm:w-12"
              aria-label="Foto selanjutnya"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
