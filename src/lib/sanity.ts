import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // ← your actual project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!, // ← your actual dataset name
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-06-01", // ← use a fixed date or the one from your .env file
  useCdn: true,
});
