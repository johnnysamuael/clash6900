
"use client";

import { Button } from '@/components/ui/button';
import { Chest } from '@/components/chest';
import { useToast } from "@/hooks/use-toast";

export function HomeClient() {
  const { toast } = useToast();

  const handleComingSoon = () => {
    toast({
      title: "Coming Soon!",
      description: "This feature is under development.",
    });
  };

  return (
    <>
      <div className="w-full flex justify-center text-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-5xl md:text-8xl font-bold tracking-widest text-white" style={{ textShadow: "4px 4px 0px hsl(var(--primary))" }}>
            $CLASH
          </h1>
          <p className="text-white text-sm md:text-base">The Clash Royale Coin</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button onClick={handleComingSoon} variant="secondary" size="lg" className="bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-600 rounded-full px-8 py-3 text-lg font-bold">
              DEXSCREENER
            </Button>
            <Button onClick={handleComingSoon} variant="secondary" size="lg" className="bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-600 rounded-full px-8 py-3 text-lg font-bold">
              BUY NOW
            </Button>
          </div>
        </div>
      </div>

      <div className="my-8">
        <Chest />
      </div>
    </>
  );
}
