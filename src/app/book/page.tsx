import type { Metadata } from "next";
import BookContent from "./BookContent";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call | MiuMedia",
  description:
    "Book a free 30-minute strategy session with MiuMedia. We will audit your content, map a platform-specific strategy, and show you the exact ROI. No commitment required.",
};

export default function BookPage() {
  return <BookContent />;
}
