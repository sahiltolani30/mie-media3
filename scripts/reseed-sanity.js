// @ts-nocheck
/**
 * RE-SEED SCRIPT
 * --------------
 * 1. Deletes ALL existing videoEntry documents from Sanity
 * 2. Re-uploads with correct sources:
 *    - Card videos  -> public/videos/card/<category>/
 *    - Full HQ vids -> public/videos_backup/<category>/   (top-level, NOT the /videos subfolder)
 *    - Posters      -> public/videos_backup/posters/
 */

const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2024-03-01",
  useCdn: false,
});

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
async function uploadFile(absPath, type = "file") {
  if (!absPath || !fs.existsSync(absPath)) {
    console.warn("  SKIP (not found):", absPath);
    return undefined;
  }
  const sizeKB = Math.round(fs.statSync(absPath).size / 1024);
  console.log(`  Uploading ${path.basename(absPath)} (${sizeKB} KB)...`);
  const asset = await client.assets.upload(type, fs.createReadStream(absPath), {
    filename: path.basename(absPath),
  });
  return { _type: type, asset: { _type: "reference", _ref: asset._id } };
}

// ---------------------------------------------------------------------------
// VIDEO MANIFEST
// Each entry maps:
//   category    -> Sanity category value
//   stem        -> filename without extension (used to find both card & HQ files)
//   label       -> human readable name
//   folder      -> subfolder name inside both card and HQ directories
//   poster      -> poster image filename (in videos_backup/posters/)
// ---------------------------------------------------------------------------
const CARD_BASE   = path.join(process.cwd(), "public", "videos", "card");
const HQ_BASE     = path.join(process.cwd(), "public", "videos_backup");
const POSTER_BASE = path.join(process.cwd(), "public", "videos_backup", "posters");

const MANIFEST = [
  // --- Talking Head (category: strategy) ---
  { category: "strategy", folder: "talking-head", stem: "trial001", label: "Talking Head - trial001", poster: "trial001.jpg" },
  { category: "strategy", folder: "talking-head", stem: "s1",       label: "Talking Head - s1",       poster: "s1.jpg"       },
  { category: "strategy", folder: "talking-head", stem: "t13-2",    label: "Talking Head - t13-2",    poster: "t13-2.jpg"    },
  { category: "strategy", folder: "talking-head", stem: "t15",      label: "Talking Head - t15",      poster: "t15.jpg"      },
  { category: "strategy", folder: "talking-head", stem: "t18-2",    label: "Talking Head - t18-2",    poster: "t18-2.jpg"    },

  // --- Short Form Clipping (category: social) ---
  { category: "social", folder: "clipping", stem: "t03",              label: "Short Form - t03",              poster: "t03.jpg"              },
  { category: "social", folder: "clipping", stem: "m1",               label: "Short Form - m1",               poster: "m1.jpg"               },
  { category: "social", folder: "clipping", stem: "craziest-customer", label: "Short Form - craziest-customer", poster: "craziest-customer.jpg" },

  // --- Faceless (category: faceless) ---
  { category: "faceless", folder: "faceless", stem: "motiongraphics", label: "Faceless - motiongraphics", poster: "motiongraphics.jpg" },
  { category: "faceless", folder: "faceless", stem: "t13",            label: "Faceless - t13",            poster: "t13.jpg"           },

  // --- AI UGC (category: video) ---
  { category: "video", folder: "ai-ugc", stem: "pe09-3", label: "AI UGC - pe09-3", poster: "pe09-3.jpg" },
];

// ---------------------------------------------------------------------------
// STEP 1: Delete all existing videoEntry documents
// ---------------------------------------------------------------------------
async function deleteAllVideoEntries() {
  console.log("\n--- Step 1: Deleting all existing videoEntry documents ---");
  const ids = await client.fetch('*[_type == "videoEntry"]._id');
  if (ids.length === 0) {
    console.log("  Nothing to delete.");
    return;
  }
  console.log(`  Found ${ids.length} documents. Deleting...`);
  // Delete in batches of 50
  for (let i = 0; i < ids.length; i += 50) {
    const batch = ids.slice(i, i + 50);
    const tx = client.transaction();
    batch.forEach((id) => tx.delete(id));
    await tx.commit();
  }
  console.log("  All deleted.");
}

// ---------------------------------------------------------------------------
// STEP 2: Re-seed
// ---------------------------------------------------------------------------
async function reseed() {
  console.log("\n--- Step 2: Uploading videos ---");
  let order = {};

  for (const entry of MANIFEST) {
    if (!order[entry.category]) order[entry.category] = 1;

    console.log(`\n[${entry.category}] ${entry.label}`);

    // Paths
    const cardMp4  = path.join(CARD_BASE, entry.folder, `${entry.stem}.mp4`);
    const cardWebm = path.join(CARD_BASE, entry.folder, `${entry.stem}.webm`);
    const hqMp4    = path.join(HQ_BASE,   entry.folder, `${entry.stem}.mp4`);
    const hqWebm   = path.join(HQ_BASE,   entry.folder, `${entry.stem}.webm`);
    const posterPath = path.join(POSTER_BASE, entry.poster);

    const [poster, cardVideoFile, cardWebmFile, fullVideoFile, fullWebmFile] = await Promise.all([
      uploadFile(posterPath, "image"),
      uploadFile(cardMp4,   "file"),
      uploadFile(cardWebm,  "file"),
      uploadFile(hqMp4,     "file"),
      uploadFile(hqWebm,    "file"),
    ]);

    const doc = {
      _type: "videoEntry",
      category: entry.category,
      label: entry.label,
      order: order[entry.category]++,
      isVisible: true,
      poster,
      cardVideoFile,
      cardWebmFile,
      fullVideoFile,
      fullWebmFile,
    };

    const created = await client.create(doc);
    console.log(`  Created: ${created._id}`);
  }
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------
async function main() {
  await deleteAllVideoEntries();
  await reseed();
  console.log("\nDone! All videos re-uploaded correctly.");
}

main().catch((e) => {
  console.error("Fatal error:", e.message);
  process.exit(1);
});
