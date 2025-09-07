
import Image from 'next/image';
import { Header } from '@/components/header';
import { HeroCarousel } from '@/components/hero-carousel';
import { ContentSummarizer } from '@/components/content-summarizer';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Swords, Shield, Gem } from 'lucide-react';

const mediaContent = [
  {
    type: 'image',
    src: 'https://picsum.photos/600/400?random=5',
    title: 'Epic Tournament Win',
    description: 'Relive the final moments of the Clash Cup finals.',
    hint: 'trophy win',
  },
  {
    type: 'video',
    src: 'https://picsum.photos/600/400?random=6',
    title: 'Top 5 Deck Builds',
    description: 'A video guide to the meta-defining decks of this season.',
    hint: 'deck cards',
  },
  {
    type: 'article',
    src: 'https://picsum.photos/600/400?random=7',
    title: 'The Economics of Elixir',
    description: 'An in-depth analysis of resource management in high-level play.',
    hint: 'chart graph',
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">The Coin</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                    $CLASH6900: For The Arena
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    $CLASH6900 is the ultimate fan token for the Clash Royale universe. It's a community-driven project designed to reward players, support content creators, and build a new economy around the game we all love.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#">
                      Read Whitepaper
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="#">
                      Join The Community
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://picsum.photos/600/400?random=8"
                width="600"
                height="400"
                alt="Clash Coin"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                data-ai-hint="gold coin"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A New Era for Clashers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the power of $CLASH6900 and what it brings to the Clash Royale community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-4">
                  <Swords className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-headline">Reward Players</h3>
                <p className="text-muted-foreground">Earn tokens for tournament victories, ladder pushing, and community contributions.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-headline">Support Creators</h3>
                <p className="text-muted-foreground">Directly support your favorite YouTubers, streamers, and artists with $CLASH6900.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-4">
                   <Gem className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-headline">Exclusive Access</h3>
                <p className="text-muted-foreground">Unlock special content, private tournaments, and unique digital collectibles.</p>
              </div>
            </div>
          </div>
        </section>


        <section id="media" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Media Hub</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Latest Content</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out the latest news, guides, and highlights from the Clash community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {mediaContent.map((item, index) => (
                <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 shadow-lg">
                  <CardHeader className="p-0">
                     <Image
                      src={item.src}
                      width={600}
                      height={400}
                      alt={item.title}
                      className="aspect-video w-full object-cover"
                      data-ai-hint={item.hint}
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline">{item.title}</CardTitle>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                    <Button variant="link" className="px-0 mt-4 text-accent">
                      {item.type === 'video' ? 'Watch Now' : 'Read More'} &rarr;
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ContentSummarizer />
      </main>
      <Footer />
    </div>
  );
}
