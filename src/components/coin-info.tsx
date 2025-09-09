
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, DollarSign, Gem, Users, Clapperboard, ShieldCheck, Crown } from "lucide-react";

const infoPoints = [
    {
        icon: Layers,
        title: "The First Index",
        description: "The only Clash Royale index in existence, mixing culture, memes, and stock."
    },
    {
        icon: DollarSign,
        title: "Massive Revenue",
        description: "$4B in revenue, 662M+ downloads, and 81.7B+ social media views."
    },
    {
        icon: Gem,
        title: "Viral Sensation",
        description: "Super viral on TikTok, currently the most popular mobile game."
    },
    {
        icon: Users,
        title: "Huge Player Base",
        description: "105M monthly players with 18-25M active daily."
    },
    {
        icon: Clapperboard,
        title: "Endless Content",
        description: "Top streamers are jumping in, creating daily content and increasing mindshare."
    },
    {
        icon: ShieldCheck,
        title: "A Deflationary Hedge",
        description: "While the game is pay-to-win, this index is deflationary, hedging against Supercell."
    }
];

export function CoinInfo() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                        Why CLASH6900?
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        This is more than a coin. It's an index on a cultural phenomenon.
                    </p>
                    <p className="text-2xl mt-6 font-bold text-primary flex items-center justify-center gap-2">
                        <Crown className="h-7 w-7" />
                        Protect the bag, fight for the crown
                        <Crown className="h-7 w-7" />
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
                    {infoPoints.map((point) => (
                        <Card key={point.title} className="bg-card/80 border-primary/20 hover:border-primary/50 transition-colors">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10">
                                    <point.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{point.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{point.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
