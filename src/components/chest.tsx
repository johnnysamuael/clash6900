import Image from 'next/image';

export function Chest() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      <Image
        src="https://i.imgur.com/gB32r8Q.png"
        alt="Clash 6900 Coin Logo"
        width={256}
        height={256}
        className="object-contain"
        data-ai-hint="clash royale coin"
      />
    </div>
  );
}
