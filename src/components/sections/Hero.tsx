import { Flower2, Sparkles } from "lucide-react";
import Container from "@/components/layouts/Container";

export default function Hero() {
  return (
    <section
      id="undangan"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#E9DDC9] px-6 py-20 text-[#493126]"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#C5A46D]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#806044]/15 blur-3xl" />

      {/* Decorative Border */}
      <div className="pointer-events-none absolute inset-4 border border-[#806044]/30" />
      <div className="pointer-events-none absolute inset-6 border border-[#C5A46D]/40" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Top Label */}
        <div className="mb-7 flex items-center gap-3 text-[#806044]">
          <span className="h-px w-8 bg-[#C5A46D]" />
          <Sparkles size={15} strokeWidth={1.3} />
          <span className="text-[10px] uppercase tracking-[0.3em]">
            The Celebration of
          </span>
          <Sparkles size={15} strokeWidth={1.3} />
          <span className="h-px w-8 bg-[#C5A46D]" />
        </div>

        {/* Flower Ornament */}
        <Flower2 size={35} strokeWidth={1} className="mb-5 text-[#B18B54]" />

        {/* Title */}
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#806044]">
          Upacara Tiga Bulanan
        </p>

        <h1 className="font-serif text-5xl font-light leading-tight sm:text-6xl">
          Tigang Sasih
        </h1>

        <p className="mt-2 font-serif text-4xl italic text-[#A47D47] sm:text-5xl">
          Gelvin
        </p>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <span className="h-px w-12 bg-[#C5A46D]" />
          <Flower2 size={18} className="text-[#B18B54]" />
          <span className="h-px w-12 bg-[#C5A46D]" />
        </div>

        {/* Description */}
        <p className="max-w-sm text-sm leading-8 text-[#806044]">
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
          turut hadir dan memberikan doa restu dalam upacara Tigang Sasih putra
          kami.
        </p>

        {/* Photo */}
        <div className="relative my-9">
          <div className="absolute -inset-3 border border-[#C5A46D]/60" />

          <div className="relative h-64 w-52 overflow-hidden border-4 border-[#F5EBDD] shadow-xl sm:h-72 sm:w-60">
            <img
              src="/images/gelvin.jpg"
              alt="Foto Gelvin"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Closing Text */}
        <p className="font-serif text-xl italic text-[#806044]">
          A Little Blessing, A Lifetime of Love
        </p>

        <div className="mt-6 flex items-center gap-2 text-[#A47D47]">
          <span className="h-px w-8 bg-[#C5A46D]" />
          <span className="text-[10px] tracking-[0.3em]">OM SWASTYASTU</span>
          <span className="h-px w-8 bg-[#C5A46D]" />
        </div>
      </Container>
    </section>
  );
}
