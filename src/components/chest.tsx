export function Chest() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      <video
        src="/videos/clash.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-contain w-full h-full rounded-lg border-4 border-primary/30 shadow-2xl shadow-primary/20"
      />
    </div>
  );
}
