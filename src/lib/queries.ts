import { client, urlFor } from "./sanity";
import { type ServiceVideos, fallbackServiceVideos } from "@/config/videos";

const VIDEO_QUERY = `
  *[_type == "videoEntry" && isVisible == true] | order(category asc, order asc) {
    _id,
    label,
    category,
    order,
    poster,
    "cardVideo": cardVideoFile.asset->url,
    "cardWebm": cardWebmFile.asset->url,
    "fullVideo": fullVideoFile.asset->url,
    "fullWebm": fullWebmFile.asset->url
  }
`;

type SanityVideoEntry = {
  _id: string;
  label: string;
  category: string;
  order: number;
  poster: any;
  cardVideo: string | null;
  cardWebm: string | null;
  fullVideo: string | null;
  fullWebm: string | null;
};

export async function getServiceVideos(): Promise<ServiceVideos[]> {
  if (!client) {
    return fallbackServiceVideos;
  }

  try {
    const entries: SanityVideoEntry[] = await client.fetch(VIDEO_QUERY);

    if (!entries || entries.length === 0) {
      return fallbackServiceVideos;
    }

    // Group by category (preserves the existing ServiceVideos[] shape)
    const grouped = new Map<string, SanityVideoEntry[]>();
    for (const entry of entries) {
      if (!grouped.has(entry.category)) grouped.set(entry.category, []);
      grouped.get(entry.category)!.push(entry);
    }

    return Array.from(grouped.entries()).map(([id, slots]) => ({
      id,
      slots: slots.map((e) => ({
        label: e.label,
        image: e.poster ? urlFor(e.poster).width(800).url() : undefined,
        video: e.fullVideo,
        webm: e.fullWebm,
        cardVideo: e.cardVideo,
        cardWebm: e.cardWebm,
      })),
    }));
  } catch (error) {
    console.warn("Failed to fetch Sanity videos, using fallback data:", error);
    return fallbackServiceVideos;
  }
}

