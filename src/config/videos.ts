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
  /** Path to .mp4 in /public. Use null to show image only. */
  video: string | null;
  /** Path to optimized .webm in /public (smaller file size) */
  webm?: string | null;
};

export type ServiceVideos = {
  id: string;
  slots: VideoSlot[];
};

export const featuredWorkVideos: ServiceVideos[] = [
  {
    // 5 videos available
    id: "strategy",
    slots: [
      {
        label: "Talking head video sample 1",
        image: "/videos/posters/trial001.jpg",
        video: "/videos/talking-head/trial001.mp4",
        webm: "/videos/talking-head/trial001.webm",
      },
      {
        label: "Talking head video sample 2",
        image: "/videos/posters/s1.jpg",
        video: "/videos/talking-head/s1.mp4",
        webm: "/videos/talking-head/s1.webm",
      },
      {
        label: "Talking head video sample 3",
        image: "/videos/posters/t13-2.jpg",
        video: "/videos/talking-head/t13-2.mp4",
        webm: "/videos/talking-head/t13-2.webm",
      },
      {
        label: "Talking head video sample 4",
        image: "/videos/posters/t15.jpg",
        video: "/videos/talking-head/t15.mp4",
        webm: "/videos/talking-head/t15.webm",
      },
      {
        label: "Talking head video sample 5",
        image: "/videos/posters/t18-2.jpg",
        video: "/videos/talking-head/t18-2.mp4",
        webm: "/videos/talking-head/t18-2.webm",
      },
    ],
  },
  {
    // 3 videos available
    id: "social",
    slots: [
      {
        label: "Short form clip sample 1",
        image: "/videos/posters/t03.jpg",
        video: "/videos/clipping/t03.mp4",
        webm: "/videos/clipping/t03.webm",
      },
      {
        label: "Short form clip sample 2",
        image: "/videos/posters/m1.jpg",
        video: "/videos/clipping/m1.mp4",
        webm: "/videos/clipping/m1.webm",
      },
      {
        label: "Short form clip sample 3",
        image: "/videos/posters/craziest-customer.jpg",
        video: "/videos/clipping/craziest-customer.mp4",
        webm: "/videos/clipping/craziest-customer.webm",
      },
    ],
  },
  {
    // 2 videos available
    id: "faceless",
    slots: [
      {
        label: "Faceless video sample 1",
        image: "/videos/posters/motiongraphics.jpg",
        video: "/videos/faceless/motiongraphics.mp4",
        webm: "/videos/faceless/motiongraphics.webm",
      },
      {
        label: "Faceless video sample 2",
        image: "/videos/posters/t13.jpg",
        video: "/videos/faceless/t13.mp4",
        webm: "/videos/faceless/t13.webm",
      },
    ],
  },
  {
    // 1 video available
    id: "video",
    slots: [
      {
        label: "AI UGC video sample 1",
        image: "/videos/posters/pe09-3.jpg",
        video: "/videos/ai-ugc/pe09-3.mp4",
        webm: "/videos/ai-ugc/pe09-3.webm",
      },
    ],
  },
];

