import InvitationLayout from "@/components/layouts/InvitationLayout";
import Hero from "@/components/sections/Hero";
import Kata from "@/components/sections/Kata";
import Pembuka from "@/components/sections/Pembuka";
import Gelvin from "@/components/sections/Gelvin";
import DetaulAcara from "@/components/sections/DetailAcara";
import DetailAcara from "@/components/sections/DetailAcara";
import Maps from "@/components/sections/Maps";

export default function Page() {
  return (
    <InvitationLayout>
      <div className="relative">
        <div className="relative z-10">
          <Hero />
          <Kata />
          <Pembuka />
          <Gelvin />
          <DetailAcara />
          <Maps />
        </div>
      </div>
    </InvitationLayout>
  );
}
