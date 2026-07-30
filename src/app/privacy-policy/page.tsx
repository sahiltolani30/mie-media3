import type { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Miu Media",
  description:
    "Learn how Miu Media collects, uses, and protects your personal data. GDPR, CCPA, and DPDP Act compliant.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
