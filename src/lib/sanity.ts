import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // ← your actual project ID
  dataset: "production",
  apiVersion: "2023-06-01", // use a fixed date
  useCdn: true,
});
