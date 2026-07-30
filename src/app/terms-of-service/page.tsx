import type { Metadata } from "next";
import TermsOfServiceContent from "./TermsOfServiceContent";

export const metadata: Metadata = {
  title: "Terms of Service | Miu Media",
  description:
    "Terms and conditions for Miu Media's digital marketing services. Covers service agreements, intellectual property, guarantees, and more.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
