import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const backendClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for backend operations
  token: process.env.SANITY_API_TOKEN, // Ensure you have the SANITY_API_TOKEN set in your environment variables
});
