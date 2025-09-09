export function Chest() {
  return (
    <div className="relative w-full max-w-2xl aspect-video">
      <video
        src="/videos/clash2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full rounded-lg border-4 border-primary/30 shadow-2xl shadow-primary/20"
      />
    </div>
  );
}
