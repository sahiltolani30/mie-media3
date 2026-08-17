// @ts-nocheck
/**
 * UPLOAD TO VERCEL BLOB CDN
 * -------------------------
 * This script:
 * 1. Reads all video and poster files in /public/videos/
 * 2. Uploads them directly to Vercel Blob storage (Vercel Edge CDN)
 * 3. Updates src/config/videos.ts with the exact public CDN URLs
 *
 * Requirements:
 * - BLOB_READ_WRITE_TOKEN in .env.local (obtained from Vercel Storage -> Blob)
 */

const fs = require("fs");
const path = require("path");
const { put } = require("@vercel/blob");
require("dotenv").config({ path: ".env.local" });

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_TOKEN) {
  console.error("\n❌ Error: BLOB_READ_WRITE_TOKEN is missing from .env.local.");
  console.log("\nTo get your token:");
  console.log("1. Go to https://vercel.com/dashboard -> Your Project -> Storage tab");
  console.log("2. Create a 'Blob' store (if not already created)");
  console.log("3. Copy BLOB_READ_WRITE_TOKEN and add it to your .env.local file (or run: npx vercel env pull)\n");
  process.exit(1);
}

const PUBLIC_DIR = path.join(process.cwd(), "public");
const VIDEOS_DIR = path.join(PUBLIC_DIR, "videos");
const CONFIG_FILE = path.join(process.cwd(), "src", "config", "videos.ts");

const VIDEO_MANIFEST = [
  {
    id: "strategy",
    slots: [
      {
        label: "Talking Head - trial001",
        poster: "posters/trial001.jpg",
        video: "talking-head/trial001.mp4",
        webm: "talking-head/trial001.webm",
        cardVideo: "card/talking-head/trial001.mp4",
        cardWebm: "card/talking-head/trial001.webm",
      },
      {
        label: "Talking Head - s1",
        poster: "posters/s1.jpg",
        video: "talking-head/s1.mp4",
        webm: "talking-head/s1.webm",
        cardVideo: "card/talking-head/s1.mp4",
        cardWebm: "card/talking-head/s1.webm",
      },
      {
        label: "Talking Head - t13-2",
        poster: "posters/t13-2.jpg",
        video: "talking-head/t13-2.mp4",
        webm: "talking-head/t13-2.webm",
        cardVideo: "card/talking-head/t13-2.mp4",
        cardWebm: "card/talking-head/t13-2.webm",
      },
      {
        label: "Talking Head - t15",
        poster: "posters/t15.jpg",
        video: "talking-head/t15.mp4",
        webm: "talking-head/t15.webm",
        cardVideo: "card/talking-head/t15.mp4",
        cardWebm: "card/talking-head/t15.webm",
      },
      {
        label: "Talking Head - t18-2",
        poster: "posters/t18-2.jpg",
        video: "talking-head/t18-2.mp4",
        webm: "talking-head/t18-2.webm",
        cardVideo: "card/talking-head/t18-2.mp4",
        cardWebm: "card/talking-head/t18-2.webm",
      },
    ],
  },
  {
    id: "social",
    slots: [
      {
        label: "Short Form - t03",
        poster: "posters/t03.jpg",
        video: "clipping/t03.mp4",
        webm: "clipping/t03.webm",
        cardVideo: "card/clipping/t03.mp4",
        cardWebm: "card/clipping/t03.webm",
      },
      {
        label: "Short Form - m1",
        poster: "posters/m1.jpg",
        video: "clipping/m1.mp4",
        webm: "clipping/m1.webm",
        cardVideo: "card/clipping/m1.mp4",
        cardWebm: "card/clipping/m1.webm",
      },
      {
        label: "Short Form - craziest-customer",
        poster: "posters/craziest-customer.jpg",
        video: "clipping/craziest-customer.mp4",
        webm: "clipping/craziest-customer.webm",
        cardVideo: "card/clipping/craziest-customer.mp4",
        cardWebm: "card/clipping/craziest-customer.webm",
      },
    ],
  },
  {
    id: "faceless",
    slots: [
      {
        label: "Faceless - motiongraphics",
        poster: "posters/motiongraphics.jpg",
        video: "faceless/motiongraphics.mp4",
        webm: "faceless/motiongraphics.webm",
        cardVideo: "card/faceless/motiongraphics.mp4",
        cardWebm: "card/faceless/motiongraphics.webm",
      },
      {
        label: "Faceless - t13",
        poster: "posters/t13.jpg",
        video: "faceless/t13.mp4",
        webm: "faceless/t13.webm",
        cardVideo: "card/faceless/t13.mp4",
        cardWebm: "card/faceless/t13.webm",
      },
    ],
  },
  {
    id: "video",
    slots: [
      {
        label: "AI UGC - pe09-3",
        poster: "posters/pe09-3.jpg",
        video: "ai-ugc/pe09-3.mp4",
        webm: "ai-ugc/pe09-3.webm",
        cardVideo: "card/ai-ugc/pe09-3.mp4",
        cardWebm: "card/ai-ugc/pe09-3.webm",
      },
    ],
  },
];

async function uploadRelativeFile(relPath, cacheMap) {
  if (!relPath) return null;
  if (cacheMap[relPath]) return cacheMap[relPath];

  const fullPath = path.join(VIDEOS_DIR, relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  ⚠️ File not found: ${fullPath}`);
    return null;
  }

  const fileBuffer = fs.readFileSync(fullPath);
  const sizeKB = Math.round(fileBuffer.length / 1024);
  const blobPath = `videos/${relPath}`;

  console.log(`  Uploading ${blobPath} (${sizeKB} KB)...`);
  const blob = await put(blobPath, fileBuffer, {
    access: "public",
    token: BLOB_TOKEN,
    addRandomSuffix: false,
  });

  cacheMap[relPath] = blob.url;
  return blob.url;
}

async function run() {
  console.log("🚀 Starting Vercel Blob Video Upload...\n");

  const urlCache = {};
  const updatedManifest = [];

  for (const category of VIDEO_MANIFEST) {
    console.log(`\n📂 Processing Category: [${category.id}]`);
    const updatedSlots = [];

    for (const slot of category.slots) {
      console.log(`\n  ▶ ${slot.label}`);
      const imageUrl = await uploadRelativeFile(slot.poster, urlCache);
      const videoUrl = await uploadRelativeFile(slot.video, urlCache);
      const webmUrl = await uploadRelativeFile(slot.webm, urlCache);
      const cardVideoUrl = await uploadRelativeFile(slot.cardVideo, urlCache);
      const cardWebmUrl = await uploadRelativeFile(slot.cardWebm, urlCache);

      updatedSlots.push({
        label: slot.label,
        image: imageUrl || `/videos/${slot.poster}`,
        video: videoUrl,
        webm: webmUrl,
        cardVideo: cardVideoUrl,
        cardWebm: cardWebmUrl,
      });
    }

    updatedManifest.push({
      id: category.id,
      slots: updatedSlots,
    });
  }

  // Update src/config/videos.ts
  const newConfigContent = `export type VideoSlot = {
  /** Accessible label */
  label: string;
  /** Fallback image shown if video fails to load */
  image?: string;
  /** Path to original HQ .mp4 on Vercel CDN for fullscreen viewing. */
  video: string | null;
  /** Path to original HQ .webm on Vercel CDN for fullscreen viewing. */
  webm?: string | null;
  /** Path to heavily compressed .mp4 for the small card thumbnail. */
  cardVideo?: string | null;
  /** Path to heavily compressed .webm for the small card thumbnail. */
  cardWebm?: string | null;
};

export type ServiceVideos = {
  id: string;
  slots: VideoSlot[];
};

export const fallbackServiceVideos: ServiceVideos[] = ${JSON.stringify(updatedManifest, null, 2)};
`;

  fs.writeFileSync(CONFIG_FILE, newConfigContent, "utf8");
  console.log("\n✅ All videos uploaded to Vercel CDN successfully!");
  console.log("✅ Updated src/config/videos.ts with live Vercel Blob CDN URLs.\n");
}

run().catch((err) => {
  console.error("❌ Upload failed:", err);
  process.exit(1);
});
