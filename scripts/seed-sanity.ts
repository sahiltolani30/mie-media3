// @ts-nocheck
import { createClient } from "@sanity/client";
import { featuredWorkVideos } from "../src/config/videos";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_WRITE_TOKEN!,
  apiVersion: "2024-03-01",
  useCdn: false,
});

async function uploadFile(filePath: string | null | undefined, type: "image" | "file" = "file") {
  if (!filePath) return undefined;
  
  const fullPath = path.join(process.cwd(), "public", filePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    return undefined;
  }

  console.log(`Uploading ${filePath}...`);
  const basename = path.basename(filePath);
  
  const asset = await client.assets.upload(type, fs.createReadStream(fullPath), {
    filename: basename
  });
  
  return {
    _type: type,
    asset: {
      _type: "reference",
      _ref: asset._id
    }
  };
}

async function main() {
  console.log("Starting migration...");
  for (const service of featuredWorkVideos) {
    let order = 1;
    for (const slot of service.slots) {
      console.log(`\nMigrating: ${slot.label} (Category: ${service.id})`);

      const poster = await uploadFile(slot.image, "image");
      const cardVideoFile = await uploadFile(slot.cardVideo, "file");
      const cardWebmFile = await uploadFile(slot.cardWebm, "file");
      const fullVideoFile = await uploadFile(slot.video, "file");
      const fullWebmFile = await uploadFile(slot.webm, "file");

      const doc = {
        _type: "videoEntry",
        category: service.id,
        label: slot.label,
        order: order++,
        isVisible: true,
        poster,
        cardVideoFile,
        cardWebmFile,
        fullVideoFile,
        fullWebmFile
      };

      const created = await client.create(doc);
      console.log(`Created document: ${created._id}`);
    }
  }
  console.log("\nMigration complete!");
}

main().catch(console.error);
