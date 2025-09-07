
"use server";

import { summarizeClashContent } from "@/ai/flows/summarize-clash-content";
import { z } from "zod";

const SummarizeSchema = z.object({
  contentUrl: z.string().url("Please enter a valid URL."),
});

type FormState = {
  summary?: string;
  error?: string;
};

export async function getSummary(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SummarizeSchema.safeParse({
    contentUrl: formData.get("contentUrl"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.contentUrl?.[0],
    };
  }

  try {
    const result = await summarizeClashContent(validatedFields.data);
    if (result.summary) {
      return { summary: result.summary };
    } else {
      return { error: "Failed to generate summary. The content might be inaccessible or invalid." };
    }
  } catch (e) {
    console.error(e);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
