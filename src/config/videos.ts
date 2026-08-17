export type VideoSlot = {
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

export const fallbackServiceVideos: ServiceVideos[] = [
  {
    "id": "strategy",
    "slots": [
      {
        "label": "Talking Head - trial001",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/trial001.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/trial001.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/trial001.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/trial001.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/trial001.webm"
      },
      {
        "label": "Talking Head - s1",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/s1.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/s1.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/s1.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/s1.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/s1.webm"
      },
      {
        "label": "Talking Head - t13-2",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/t13-2.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/t13-2.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/t13-2.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/t13-2.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/t13-2.webm"
      },
      {
        "label": "Talking Head - t15",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/t15.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/t15.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/t15.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/t15.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/t15.webm"
      },
      {
        "label": "Talking Head - t18-2",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/t18-2.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/t18-2.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/talking-head/t18-2.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/t18-2.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/talking-head/t18-2.webm"
      }
    ]
  },
  {
    "id": "social",
    "slots": [
      {
        "label": "Short Form - t03",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/t03.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/clipping/t03.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/clipping/t03.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/clipping/t03.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/clipping/t03.webm"
      },
      {
        "label": "Short Form - m1",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/m1.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/clipping/m1.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/clipping/m1.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/clipping/m1.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/clipping/m1.webm"
      },
      {
        "label": "Short Form - craziest-customer",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/craziest-customer.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/clipping/craziest-customer.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/clipping/craziest-customer.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/clipping/craziest-customer.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/clipping/craziest-customer.webm"
      }
    ]
  },
  {
    "id": "faceless",
    "slots": [
      {
        "label": "Faceless - motiongraphics",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/motiongraphics.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/faceless/motiongraphics.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/faceless/motiongraphics.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/faceless/motiongraphics.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/faceless/motiongraphics.webm"
      },
      {
        "label": "Faceless - t13",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/t13.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/faceless/t13.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/faceless/t13.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/faceless/t13.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/faceless/t13.webm"
      }
    ]
  },
  {
    "id": "video",
    "slots": [
      {
        "label": "AI UGC - pe09-3",
        "image": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/posters/pe09-3.jpg",
        "video": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/ai-ugc/pe09-3.mp4",
        "webm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/ai-ugc/pe09-3.webm",
        "cardVideo": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/ai-ugc/pe09-3.mp4",
        "cardWebm": "https://hguchdzbbwokhasv.public.blob.vercel-storage.com/videos/card/ai-ugc/pe09-3.webm"
      }
    ]
  }
];
