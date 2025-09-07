
import { Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary"/>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built for the Clash community. All rights reserved &copy; {new Date().getFullYear()} Clash Coin Central.
            </p>
        </div>
      </div>
    </footer>
  );
}
