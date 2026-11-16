export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none sticky top-0 z-0 -mb-[100dvh] h-dvh w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/putu.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
