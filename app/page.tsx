export default function Home() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center overflow-hidden bg-black">
      <section
        className="relative isolate flex shrink-0 items-center justify-center overflow-hidden bg-[#10170f]"
        style={{
          width: "min(100vw, 56.25dvh)",
          height: "min(100dvh, 177.7778vw)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 scale-110 bg-[url('/dongbaek-garden.jpg')] bg-cover bg-center blur-xl brightness-50"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-[url('/dongbaek-garden.jpg')] bg-contain bg-center bg-no-repeat"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-gradient-to-b from-black/15 via-black/25 to-black/45"
        />
        <h1 className="z-10 max-w-[85%] text-center text-balance text-[clamp(1.75rem,8vw,3rem)] font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          내 리듬으로 만나고, 나의 동백을 간직하다
        </h1>
      </section>
    </main>
  );
}
