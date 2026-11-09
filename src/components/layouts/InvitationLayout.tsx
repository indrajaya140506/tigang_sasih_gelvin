"use client";

import { useCallback, useRef, useState } from "react";
import type { ReactNode } from "react";
import LeftPanel from "@/components/panels/LeftPanel";
import RightPanel from "@/components/panels/RightPanel";
import Home from "@/components/sections/Home";
import GateIntro from "@/components/sections/GateIntro";

interface InvitationLayoutProps {
  children: ReactNode;
}

export default function InvitationLayout({ children }: InvitationLayoutProps) {
  const rightPanelRef = useRef<HTMLElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [gateFinished, setGateFinished] = useState(false);

  const handleGateComplete = useCallback(() => {
    setGateFinished(true);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);

    if (rightPanelRef.current) {
      rightPanelRef.current.scrollTop = 0;
    }
  };

  return (
    <main className="flex h-dvh min-h-0 w-full overflow-hidden bg-[#080706]">
      <LeftPanel rightPanelRef={rightPanelRef} isOpened={isOpened} />

      <RightPanel rightPanelRef={rightPanelRef} isOpened={isOpened}>
        <div className="relative min-h-full">
          {/* Halaman Undangan */}
          <div className="relative z-0">{children}</div>

          {/* Home sebagai lapisan pembuka */}
          {!isOpened && (
            <div className="absolute inset-0 z-10">
              <Home onOpenInvitation={handleOpenInvitation} />
            </div>
          )}
        </div>
      </RightPanel>

      {!gateFinished && <GateIntro onComplete={handleGateComplete} />}
    </main>
  );
}
