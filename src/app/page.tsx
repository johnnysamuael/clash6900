
import { MediaGallery } from '@/components/media-gallery';
import fs from 'fs';
import path from 'path';
import { HomeClient } from '@/components/home-client';
import { CoinInfo } from '@/components/coin-info';

export default function Home() {
  const photoDir = path.join(process.cwd(), 'public', 'photos');
  let photoFiles: string[] = [];
  try {
    photoFiles = fs.readdirSync(photoDir)
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => `/photos/${file}`);
  } catch (error) {
    console.error("Could not read photos directory:", error);
    // If the directory doesn't exist or another error occurs, we'll just have an empty gallery.
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-mono">
      <main className="flex-1 flex flex-col items-center p-8 md:p-12">
        <HomeClient />
        <CoinInfo />
        {photoFiles.length > 0 && <MediaGallery photos={photoFiles} />}
      </main>
    </div>
  );
}
