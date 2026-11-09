import type { RefObject } from "react";
import Container from "@/components/layouts/Container";

interface LeftPanelProps {
  rightPanelRef: RefObject<HTMLElement | null>;
  isOpened: boolean;
}

export default function LeftPanel({ rightPanelRef, isOpened }: LeftPanelProps) {
  return (
    <aside
      onWheel={(event) => {
        if (!isOpened) {
          event.preventDefault();
          return;
        }

        if (event.ctrlKey) return;

        event.preventDefault();

        const rightPanel = rightPanelRef.current;

        if (rightPanel) {
          rightPanel.scrollTop += event.deltaY;
        }
      }}
      className="relative hidden h-full min-w-0 flex-1 overflow-hidden bg-[#493126] lg:block"
    >
      {/* Background Image */}
      <img
        src="/images/tu.jpg"
        alt="Foto Gelvin"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 via-45% to-[#21150F]/10" />
      {/* Main Content */}
      <div className="absolute bottom-0 left-0 z-10 w-full pb-12">
        <Container>
          <div className="border-l border-[#C5A46D] pl-6 sm:pl-8">
            {/* Date */}
            <p className="mb-3 text-xs tracking-[0.2em] text-[#E9DDC9]/90">
              10.12.2026
            </p>

            {/* Title */}
            <h1
              style={{ fontFamily: "var(--font-cinzel-custom)" }}
              className="text-3xl font-medium tracking-[0.08em] text-[#E9DDC9] xl:text-4xl"
            >
              Tigang Sasih
            </h1>

            {/* Name */}
            <p
              style={{ fontFamily: "var(--font-great-vibes-custom)" }}
              className="mt-2 text-5xl font-normal leading-tight text-[#C5A46D] sm:text-6xl xl:text-7xl"
            >
              Putu Gelvin Albern Danisvara
            </p>

            {/* Description */}
            <p className="mt-3 max-w-lg text-sm leading-7 text-[#E9DDC9]/80">
              "Tigang Sasih penuh cinta, kebahagiaan, dan doa."
            </p>
          </div>
        </Container>
      </div>
    </aside>
  );
}
