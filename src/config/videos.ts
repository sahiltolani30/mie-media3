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
  /** Fallback image shown if video fails to load */
  image: string;
  /** Path to .mp4 in /public. Use null to show image only. */
  video: string | null;
  /** Accessible label */
  label: string;
};

export type ServiceVideos = {
  id: string;
  slots: VideoSlot[];
};

export const featuredWorkVideos: ServiceVideos[] = [
  {
    // 1 video available
    id: "video",
    slots: [
      {
        label: "AI UGC video sample 1",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        video: "/videos/ai-ugc/pe09-3.mp4",
      },
    ],
  },
  {
    // 5 videos available
    id: "strategy",
    slots: [
      {
        label: "Talking head video sample 1",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
        video: "/videos/talking-head/trial001.mp4",
      },
      {
        label: "Talking head video sample 2",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
        video: "/videos/talking-head/s1.mp4",
      },
      {
        label: "Talking head video sample 3",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
        video: "/videos/talking-head/t13-2.mp4",
      },
      {
        label: "Talking head video sample 4",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
        video: "/videos/talking-head/t15.mp4",
      },
      {
        label: "Talking head video sample 5",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
        video: "/videos/talking-head/t18-2.mp4",
      },
    ],
  },
  {
    // 3 videos available
    id: "social",
    slots: [
      {
        label: "Short form clip sample 1",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
        video: "/videos/clipping/t03.mp4",
      },
      {
        label: "Short form clip sample 2",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
        video: "/videos/clipping/m1.mp4",
      },
      {
        label: "Short form clip sample 3",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
        video: "/videos/clipping/craziest-customer.mp4",
      },
    ],
  },
  {
    // 2 videos available
    id: "faceless",
    slots: [
      {
        label: "Faceless video sample 1",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        video: "/videos/faceless/motiongraphics.mp4",
      },
      {
        label: "Faceless video sample 2",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
        video: "/videos/faceless/t13.mp4",
      },
    ],
  },
];

