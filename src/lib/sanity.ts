import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-03-01",
      useCdn: true,
    })
  : null;

const builder = client ? createImageUrlBuilder(client) : null;

export function urlFor(source: any) {
  if (!builder || !source) {
    return {
      width: () => ({ url: () => "" }),
      url: () => "",
    };
  }
  return builder.image(source);
}

