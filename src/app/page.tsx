import InvitationLayout from "@/components/layouts/InvitationLayout";
import Background from "@/components/Background";
import Hero from "@/components/sections/Hero";
import Kata from "@/components/sections/Kata";
import Pembuka from "@/components/sections/Pembuka";
import Gelvin from "@/components/sections/Gelvin";

export default function Page() {
  return (
    <InvitationLayout>
      <div className="relative">
        {/* Background Foto Gelvin */}
        <Background />

        {/* Semua Konten Undangan */}
        <div className="relative z-10">
          <Hero />
          <Kata />
          <Pembuka />
          <Gelvin />
        </div>
      </div>
    </InvitationLayout>
  );
}
