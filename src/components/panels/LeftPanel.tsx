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
        src="/images/gelvin.jpg"
        alt="Foto Gelvin"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#21150F]/90 via-[#21150F]/20 to-[#21150F]/30" />

      {/* Main Content */}
      <div className="absolute bottom-0 left-0 z-10 w-full pb-12">
        <Container>
          <div className="mb-6 h-16 w-px bg-[#C5A46D]" />

          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#E9DDC9]/75">
            Perayaan Penuh Sukacita
          </p>

          <h1 className="font-serif text-5xl font-light text-[#E9DDC9] xl:text-7xl">
            Tigang Sasih
          </h1>

          <p className="mt-2 font-serif text-4xl italic text-[#C5A46D] xl:text-5xl">
            Gelvin
          </p>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#E9DDC9]/80">
            Sebuah momen istimewa yang penuh rasa syukur, kebahagiaan, dan doa
            bersama keluarga tercinta.
          </p>
        </Container>
      </div>
    </aside>
  );
}
