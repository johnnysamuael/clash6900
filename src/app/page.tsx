
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Chest } from '@/components/chest';
import { MediaGallery } from '@/components/media-gallery';
import fs from 'fs';
import path from 'path';

export default function Home() {
  const photosDirectory = path.join(process.cwd(), 'public/photos');
  let photoFiles: string[] = [];
  try {
    photoFiles = fs.readdirSync(photosDirectory).map(file => `/photos/${file}`);
  } catch (error) {
    console.error("Could not read photos directory:", error);
    // You might want to create the public/photos directory
  }


  return (
    <div className="flex min-h-screen flex-col bg-background font-mono">
      <main className="flex-1 flex flex-col items-center justify-between p-8 md:p-12">
        <div className="w-full flex justify-center text-center">
            <div className="flex flex-col items-center space-y-4">
                 <h1 className="text-5xl md:text-8xl font-bold tracking-widest text-white" style={{ textShadow: "4px 4px 0px hsl(var(--primary))" }}>
                    $CLASH6900
                </h1>
                <p className="text-white text-sm md:text-base">The Clash Royale Coin</p>
                <p className="text-accent-foreground/80 text-xs md:text-sm break-all bg-black/20 p-2 rounded-md">Fv73EXJBRfctJzLVC3P7uQP6er6JU8b4KtDr4LQFpump</p>
            </div>
        </div>

        <div className="my-8">
            <Chest />
        </div>

        {photoFiles.length > 0 && <MediaGallery photos={photoFiles} />}

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Button asChild variant="secondary" size="lg" className="bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-600 rounded-full px-8 py-3 text-lg font-bold">
                <Link href="#" target="_blank">DEXSCREENER</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-600 rounded-full px-8 py-3 text-lg font-bold">
                <Link href="#" target="_blank">BUY NOW</Link>
            </Button>
        </div>
      </main>
    </div>
  );
}
