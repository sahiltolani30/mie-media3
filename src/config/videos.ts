/**
 * VIDEO CONFIGURATION
 * ===================
 * To update a video:
 *   1. Add the new .mp4 file to the correct folder inside /public/videos/
 *   2. Update the "video" path below to match the new filename
 *   3. Redeploy the site (git push -> Vercel auto-deploys)
 *
 * Paths are relative to /public (Vercel serves /public at the site root).
 * Set video to null to show the fallback image instead.
 *
 * FOLDER LAYOUT:
 *   public/videos/ai-ugc/        <- AI UGC video files
 *   public/videos/talking-head/  <- Talking head video files
 *   public/videos/clipping/      <- Short form clipping files
 *   public/videos/faceless/      <- Faceless video files
 */

export type VideoSlot = {
  /** Accessible label */
  label: string;
  /** Fallback image shown if video fails to load */
  image?: string;
  /** Path to original HQ .mp4 in /public for fullscreen viewing. */
  video: string | null;
  /** Path to original HQ .webm in /public for fullscreen viewing. */
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

