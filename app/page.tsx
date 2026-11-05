export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#10170f] px-6 py-16">
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
      <h1 className="z-10 max-w-4xl text-center text-balance text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-5xl md:text-6xl">
        동백마을. 너만의 리듬에 맞춰봐
      </h1>
    </main>
  );
}
