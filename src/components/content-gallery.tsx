
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

interface ContentGalleryProps {
  photos: string[];
}

export function ContentGallery({ photos }: ContentGalleryProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="w-full max-w-4xl py-12">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary mb-8">
            Content
        </h2>
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{ loop: true }}
        >
            <CarouselContent>
            {photos.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                    <Card className="overflow-hidden">
                    <CardContent className="relative flex aspect-square items-center justify-center p-0">
                        {src.endsWith('.mp4') ? (
                          <video
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <Image
                            src={src}
                            alt={`Media image ${index + 1}`}
                            fill
                            className="object-contain"
                          />
                        )}
                    </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px]" />
            <CarouselNext className="absolute right-[-50px]" />
        </Carousel>
    </section>
  );
}
