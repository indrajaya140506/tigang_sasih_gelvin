import type { ReactNode, RefObject } from "react";

interface RightPanelProps {
  children: ReactNode;
  rightPanelRef: RefObject<HTMLElement | null>;
  isOpened: boolean;
}

export default function RightPanel({
  children,
  rightPanelRef,
  isOpened,
}: RightPanelProps) {
  return (
    <section
      ref={rightPanelRef}
      id="invitation-scroll"
      className={`h-dvh min-h-0 w-full shrink-0 bg-[#493126] lg:w-[26vw] ${
        isOpened
          ? "overflow-x-hidden overflow-y-auto overscroll-contain"
          : "overflow-hidden"
      }`}
    >
      {children}
    </section>
  );
}
