'use server';

/**
 * @fileOverview Summarizes Clash Royale-related content using generative AI.
 *
 * - summarizeClashContent - A function that summarizes Clash Royale content.
 * - SummarizeClashContentInput - The input type for the summarizeClashContent function.
 * - SummarizeClashContentOutput - The return type for the summarizeClashContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeClashContentInputSchema = z.object({
  contentUrl: z.string().describe('URL of the Clash Royale content to summarize (article or video).'),
});
export type SummarizeClashContentInput = z.infer<typeof SummarizeClashContentInputSchema>;

const SummarizeClashContentOutputSchema = z.object({
  summary: z.string().describe('Concise summary of the Clash Royale content.'),
});
export type SummarizeClashContentOutput = z.infer<typeof SummarizeClashContentOutputSchema>;

export async function summarizeClashContent(input: SummarizeClashContentInput): Promise<SummarizeClashContentOutput> {
  return summarizeClashContentFlow(input);
}

const summarizeClashContentPrompt = ai.definePrompt({
  name: 'summarizeClashContentPrompt',
  input: {schema: SummarizeClashContentInputSchema},
  output: {schema: SummarizeClashContentOutputSchema},
  prompt: `Summarize the Clash Royale content from the following URL:\n\n{{{contentUrl}}}`,
});

const summarizeClashContentFlow = ai.defineFlow(
  {
    name: 'summarizeClashContentFlow',
    inputSchema: SummarizeClashContentInputSchema,
    outputSchema: SummarizeClashContentOutputSchema,
  },
  async input => {
    const {output} = await summarizeClashContentPrompt(input);
    return output!;
  }
);
