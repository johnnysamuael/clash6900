
"use client";

import * as React from "react";
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const media = [
  {
    src: "https://picsum.photos/1200/600?random=1",
    alt: "Clash Royale battle scene",
    hint: "clash royale",
  },
  {
    src: "https://picsum.photos/1200/600?random=2",
    alt: "Golden coins with a crown emblem",
    hint: "gold coin",
  },
  {
    src: "https://picsum.photos/1200/600?random=3",
    alt: "A triumphant king on his throne",
    hint: "king throne",
  },
  {
    src: "https://picsum.photos/1200/600?random=4",
    alt: "A blue elixir drop, glowing",
    hint: "blue elixir",
  },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {media.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="relative flex aspect-video items-center justify-center p-0">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={item.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4" />
          <CarouselNext className="absolute right-4" />
        </Carousel>
      </div>
    </section>
  );
}
