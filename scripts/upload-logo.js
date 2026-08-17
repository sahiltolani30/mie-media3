// @ts-nocheck
/**
 * UPLOAD LOGO TO VERCEL BLOB AND SANITY CMS
 */

const fs = require("fs");
const path = require("path");
const { put } = require("@vercel/blob");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: ".env.local" });

const logoPath = path.join(process.cwd(), "public", "miu-logo.png");
const logoBuffer = fs.readFileSync(logoPath);

async function uploadToVercelBlob() {
  console.log("▲ Uploading logo to Vercel Blob CDN...");
  try {
    const blob = await put("branding/miu-logo.png", logoBuffer, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
      addRandomSuffix: false,
    });
    console.log("✅ Vercel Blob Logo CDN URL:", blob.url);
    return blob.url;
  } catch (err) {
    console.error("❌ Vercel Blob upload failed:", err.message);
    return null;
  }
}

async function uploadToSanity() {
  console.log("☁️ Uploading logo to Sanity CMS Assets...");
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      token: process.env.SANITY_WRITE_TOKEN,
      apiVersion: "2024-03-01",
      useCdn: false,
    });

    const asset = await client.assets.upload("image", fs.createReadStream(logoPath), {
      filename: "miu-logo.png",
    });
    console.log("✅ Sanity Asset ID:", asset._id);
    console.log("✅ Sanity CDN URL:", asset.url);
    return asset.url;
  } catch (err) {
    console.error("❌ Sanity upload failed:", err.message);
    return null;
  }
}

async function main() {
  console.log("\n🚀 Starting Brand Logo Upload to Vercel & Sanity...\n");
  const vercelUrl = await uploadToVercelBlob();
  const sanityUrl = await uploadToSanity();
  console.log("\n🎉 Brand logo is live on both CDNs!\n");
}

main();
