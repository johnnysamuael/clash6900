
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getSummary } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, LoaderCircle } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  summary: undefined,
  error: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Summarizing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Summarize
        </>
      )}
    </Button>
  );
}


export function ContentSummarizer() {
  const [state, formAction] = useFormState(getSummary, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <section id="summarizer" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                    AI Content Summarizer
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Got a long Clash Royale article or video? Paste the URL below and get a quick summary powered by AI.
                </p>
            </div>

            <div className="mx-auto max-w-2xl mt-8">
                <form action={formAction}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Enter Content URL</CardTitle>
                            <CardDescription>Paste a link to a Clash Royale article or video to summarize it.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <Input name="contentUrl" placeholder="https://example.com/clash-royale-guide" required />
                        </CardContent>
                        <CardFooter>
                            <SubmitButton />
                        </CardFooter>
                    </Card>
                </form>

                {state.summary && (
                    <Card className="mt-8 animate-in fade-in-50 duration-500">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Sparkles className="mr-2 h-5 w-5 text-primary" />
                                Summary
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/90">{state.summary}</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    </section>
  );
}
