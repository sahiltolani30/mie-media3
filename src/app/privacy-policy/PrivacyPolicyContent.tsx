"use client";

import LegalPageLayout, {
  LegalSection,
  LegalSubSection,
  LegalCallout,
  LegalList,
} from "@/components/LegalPageLayout";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "legal-basis", label: "Legal Basis for Processing" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "sharing", label: "How We Share Your Information" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Privacy Rights" },
  { id: "data-security", label: "Data Security" },
  { id: "children", label: "Children's Privacy" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicyContent() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This policy explains what data we collect, how we use it, and the rights you have over your personal information."
      effectiveDate="July 30, 2025"
      lastUpdated="July 30, 2025"
      tocItems={tocItems}
      crossLink={{
        href: "/terms-of-service",
        label: "Terms of Service",
      }}
    >
      {/* 1. Introduction */}
      <LegalSection id="introduction" title="Introduction">
        <p>
          Miu Media (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a digital marketing and brand
          design agency specializing in helping architects and interior designers attract
          high-value clients through strategic content, social media management, copywriting,
          and video production.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard your
          personal information when you visit our website, engage our services, or interact
          with us through any channel. This policy applies regardless of where you are
          located and is designed to comply with the Indian Digital Personal Data Protection
          Act 2023 (DPDP Act), the European Union General Data Protection Regulation (GDPR),
          and the California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA).
        </p>
        <p>
          By using our website or engaging our services, you acknowledge that you have read
          and understood this Privacy Policy. If you do not agree with our practices,
          please discontinue use of our website and services.
        </p>
      </LegalSection>

      {/* 2. Information We Collect */}
      <LegalSection id="information-we-collect" title="Information We Collect">
        <LegalSubSection title="Information You Provide Directly">
          <LegalList
            items={[
              "Contact information: name, email address, phone number, and company name submitted through our contact form or strategy call booking.",
              "Client onboarding data: brand assets, social media account credentials, business information, project briefs, target audience details, and portfolio materials.",
              "Communication records: emails, WhatsApp messages, and notes from calls or meetings related to our services.",
              "Feedback and testimonials: reviews, case study approvals, and any feedback you voluntarily share.",
            ]}
          />
        </LegalSubSection>
        <LegalSubSection title="Information Collected Automatically">
          <LegalList
            items={[
              "Device and browser information: browser type, operating system, screen resolution, and device type.",
              "Usage data: pages visited, time spent on pages, click patterns, referral source, and navigation paths.",
              "Network information: IP address (anonymized where possible), approximate geographic location, and internet service provider.",
              "Cookies and similar technologies: session cookies, analytics cookies, and marketing pixels (detailed in our Cookies section below).",
            ]}
          />
        </LegalSubSection>
        <LegalSubSection title="Information from Third Parties">
          <LegalList
            items={[
              "Social media platform analytics: engagement metrics, audience demographics, and content performance data from Instagram, LinkedIn, and similar platforms (when managing client accounts).",
              "Advertising platform data: campaign performance metrics, audience insights, and conversion data from Meta Ads Manager and Google Ads.",
            ]}
          />
        </LegalSubSection>
      </LegalSection>

      {/* 3. How We Use Your Information */}
      <LegalSection id="how-we-use" title="How We Use Your Information">
        <p>We use your personal information for the following purposes:</p>
        <LegalList
          items={[
            "Responding to inquiries: to reply to your contact form submissions, emails, and strategy call requests.",
            "Delivering services: to execute contracted marketing services including social media management, content creation, copywriting, and video production.",
            "Managing campaigns: to run, optimize, and report on advertising campaigns on your behalf across Meta, Google, and other platforms.",
            "Improving our website: to analyze website traffic and user behavior so we can enhance the user experience.",
            "Service communications: to send project updates, deliverable notifications, reports, and other service-related messages.",
            "Business operations: to maintain records, process payments, and fulfill our contractual obligations.",
            "Legal compliance: to comply with applicable laws, regulations, and legal processes including Indian tax requirements.",
          ]}
        />
        <LegalCallout>
          We do not use your personal information for automated decision-making or profiling
          that produces legal effects or similarly significant effects on you.
        </LegalCallout>
      </LegalSection>

      {/* 4. Legal Basis for Processing (GDPR) */}
      <LegalSection id="legal-basis" title="Legal Basis for Processing">
        <p>
          If you are located in the European Economic Area (EEA) or the United Kingdom,
          we process your personal data under the following legal bases as required by the GDPR:
        </p>
        <LegalSubSection title="Consent">
          <p>
            When you submit a contact form, book a strategy call, or opt in to receive
            marketing communications, you provide consent for us to process your data for
            those specific purposes. You may withdraw consent at any time by contacting us.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Contractual Necessity">
          <p>
            When you engage our services, processing your data is necessary to fulfill our
            contractual obligations -- including managing your social media accounts,
            executing ad campaigns, and delivering content.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Legitimate Interest">
          <p>
            We process certain data based on our legitimate business interests, including
            website analytics, service improvement, and fraud prevention. We balance these
            interests against your rights and freedoms.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Legal Obligation">
          <p>
            We may process your data when required by law, such as maintaining financial
            records for tax compliance or responding to valid legal requests.
          </p>
        </LegalSubSection>
      </LegalSection>

      {/* 5. Cookies & Tracking Technologies */}
      <LegalSection id="cookies" title="Cookies & Tracking Technologies">
        <p>
          Our website uses cookies and similar tracking technologies to enhance your
          experience and analyze site usage. Here is what we use:
        </p>
        <LegalSubSection title="Essential Cookies">
          <p>
            Required for the website to function properly. These manage session state
            and basic functionality. They cannot be disabled without affecting site usability.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Analytics Cookies">
          <p>
            We use Google Analytics to understand how visitors interact with our website.
            IP addresses are anonymized. Data collected includes pages visited, time on
            site, referral sources, and general geographic location.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Marketing Cookies">
          <p>
            The Meta Pixel may be used on our website to measure the effectiveness of
            advertising campaigns and to build custom audiences for ad targeting on
            Meta platforms (Facebook, Instagram).
          </p>
        </LegalSubSection>
        <LegalSubSection title="Managing Cookies">
          <p>
            You can control cookies through your browser settings. Most browsers allow
            you to block or delete cookies. Please note that disabling certain cookies
            may limit website functionality.
          </p>
          <LegalList
            items={[
              "Google Analytics Opt-Out: Install the Google Analytics Opt-Out Browser Add-on.",
              "Meta Pixel Opt-Out: Adjust your ad preferences in your Facebook/Instagram account settings.",
              "Browser settings: Refer to your browser's help documentation for cookie management.",
            ]}
          />
        </LegalSubSection>
        <LegalCallout>
          We do not use cookies to sell your personal data to third parties. Cookies are
          used solely for analytics and advertising performance measurement.
        </LegalCallout>
      </LegalSection>

      {/* 6. How We Share Your Information */}
      <LegalSection id="sharing" title="How We Share Your Information">
        <p>
          We do not sell your personal information. We may share your data in the following
          limited circumstances:
        </p>
        <LegalSubSection title="Service Providers">
          <p>
            We work with trusted third-party service providers who assist in delivering
            our services:
          </p>
          <LegalList
            items={[
              "Google (Analytics, Ads) -- website analytics and advertising platform.",
              "Meta (Facebook, Instagram, Ads Manager) -- social media management and advertising.",
              "WhatsApp Business -- client communication and lead follow-up.",
              "Email service providers -- transactional and service-related email delivery.",
              "Payment processors -- secure processing of client payments.",
            ]}
          />
          <p>
            These providers are contractually obligated to protect your data and use it
            only for the purposes we specify.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Client Platform Access">
          <p>
            When managing your social media accounts or ad campaigns, we access
            platform-level analytics and audience data provided by those platforms
            (Instagram Insights, Meta Business Suite, etc.).
          </p>
        </LegalSubSection>
        <LegalSubSection title="Legal Requirements">
          <p>
            We may disclose your information if required by law, court order, or
            government request, or if we believe disclosure is necessary to protect our
            rights, property, or safety.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Business Transfers">
          <p>
            In the event of a merger, acquisition, or sale of assets, your personal
            information may be transferred to the acquiring entity. We will notify you
            of any such change.
          </p>
        </LegalSubSection>
      </LegalSection>

      {/* 7. International Data Transfers */}
      <LegalSection id="international-transfers" title="International Data Transfers">
        <p>
          Miu Media is based in India. If you are accessing our website or using our
          services from outside India, your personal data may be transferred to, stored,
          and processed in India.
        </p>
        <LegalSubSection title="For EU/EEA Residents">
          <p>
            When we transfer personal data outside the EEA, we ensure appropriate
            safeguards are in place, including Standard Contractual Clauses (SCCs) approved
            by the European Commission, or reliance on the recipient&apos;s participation in
            recognized data protection frameworks.
          </p>
        </LegalSubSection>
        <LegalSubSection title="For US Residents">
          <p>
            Your data is processed in accordance with applicable US privacy laws. We
            implement appropriate technical and organizational security measures to
            protect your information during transfer and processing.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Third-Party Processor Transfers">
          <p>
            Our third-party service providers (Google, Meta, etc.) have their own data
            transfer mechanisms and certifications. We encourage you to review their
            respective privacy policies for details on how they handle international
            data transfers.
          </p>
        </LegalSubSection>
      </LegalSection>

      {/* 8. Data Retention */}
      <LegalSection id="data-retention" title="Data Retention">
        <p>
          We retain your personal information only for as long as necessary to fulfill
          the purposes for which it was collected:
        </p>
        <LegalList
          items={[
            "Website analytics data: 26 months (Google Analytics default retention period).",
            "Contact form submissions: 2 years from the date of your last interaction with us.",
            "Client project data: For the duration of the engagement plus 3 years thereafter (for portfolio, reference, and potential dispute resolution), unless you request earlier deletion.",
            "Financial and billing records: As required by Indian tax law (minimum 8 years).",
            "Communication records: For the duration of the engagement plus 1 year.",
          ]}
        />
        <p>
          When data is no longer needed, we securely delete or anonymize it so that it
          can no longer be associated with you.
        </p>
      </LegalSection>

      {/* 9. Your Privacy Rights */}
      <LegalSection id="your-rights" title="Your Privacy Rights">
        <LegalSubSection title="Rights for All Users">
          <p>Regardless of your location, you have the right to:</p>
          <LegalList
            items={[
              "Access: Request a copy of the personal data we hold about you.",
              "Correction: Request that we correct inaccurate or incomplete data.",
              "Deletion: Request that we delete your personal data, subject to legal retention obligations.",
            ]}
          />
        </LegalSubSection>
        <LegalSubSection title="Additional Rights for EU/EEA Residents (GDPR)">
          <LegalList
            items={[
              "Data portability: Receive your data in a structured, commonly used, machine-readable format.",
              "Restriction of processing: Request that we limit how we use your data.",
              "Right to object: Object to processing based on legitimate interests or for direct marketing.",
              "Withdraw consent: Withdraw previously given consent at any time without affecting the lawfulness of prior processing.",
              "Lodge a complaint: File a complaint with your local data protection supervisory authority.",
            ]}
          />
        </LegalSubSection>
        <LegalSubSection title="Additional Rights for California Residents (CCPA/CPRA)">
          <LegalList
            items={[
              "Right to know: Request details about the categories and specific pieces of personal information we have collected.",
              "Right to delete: Request deletion of your personal information.",
              "Right to opt-out of sale: We do not sell your personal data. No opt-out action is required.",
              "Right to non-discrimination: We will not discriminate against you for exercising your privacy rights.",
              "Right to correct: Request correction of inaccurate personal information.",
            ]}
          />
        </LegalSubSection>
        <LegalSubSection title="Rights for Indian Residents (DPDP Act 2023)">
          <LegalList
            items={[
              "Right to access information about what personal data is being processed and for what purpose.",
              "Right to correction and erasure of personal data.",
              "Right to grievance redressal through our designated contact.",
              "Right to nominate another person to exercise your rights in case of death or incapacity.",
            ]}
          />
        </LegalSubSection>
        <LegalCallout>
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:make.it.up12business@gmail.com"
            className="text-[#FF8500] hover:text-[#FF9149] underline underline-offset-4 transition-colors"
          >
            make.it.up12business@gmail.com
          </a>
          . We will respond to your request within 30 days.
        </LegalCallout>
      </LegalSection>

      {/* 10. Data Security */}
      <LegalSection id="data-security" title="Data Security">
        <p>
          We implement industry-standard technical and organizational measures to protect
          your personal information from unauthorized access, alteration, disclosure, or
          destruction:
        </p>
        <LegalList
          items={[
            "Encryption: All data transmitted between your browser and our website is encrypted using HTTPS/TLS protocols.",
            "Access controls: Client account credentials and sensitive data are accessible only to authorized team members on a need-to-know basis.",
            "Secure storage: We use reputable, secure cloud infrastructure for data storage.",
            "Regular reviews: We periodically review our security practices and update them as needed.",
            "Incident response: In the unlikely event of a data breach, we will notify affected individuals and relevant authorities as required by applicable law.",
          ]}
        />
        <LegalCallout>
          While we take reasonable measures to protect your data, no method of transmission
          over the internet or electronic storage is 100% secure. We cannot guarantee
          absolute security but are committed to maintaining the highest practical standards.
        </LegalCallout>
      </LegalSection>

      {/* 11. Children's Privacy */}
      <LegalSection id="children" title="Children's Privacy">
        <p>
          Our services are designed for businesses and professionals. We do not knowingly
          collect personal information from individuals under 18 years of age. If we
          become aware that we have inadvertently collected data from a minor, we will
          promptly delete it. If you believe a minor has provided us with personal
          information, please contact us immediately.
        </p>
      </LegalSection>

      {/* 12. Third-Party Links */}
      <LegalSection id="third-party-links" title="Third-Party Links">
        <p>
          Our website may contain links to third-party websites, including social media
          platforms (Instagram, LinkedIn, Twitter/X), client portfolio sites, and
          advertising platforms. These links are provided for your convenience.
        </p>
        <p>
          We are not responsible for the privacy practices, content, or security of any
          third-party websites. We encourage you to review the privacy policies of any
          external sites you visit. Our Privacy Policy applies only to information
          collected through our own website and services.
        </p>
      </LegalSection>

      {/* 13. Changes to This Policy */}
      <LegalSection id="changes" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our
          practices, services, or applicable laws. When we make changes:
        </p>
        <LegalList
          items={[
            "The updated policy will be posted on this page with a revised \"Last Updated\" date.",
            "For material changes, we will notify active clients via email at least 30 days before the changes take effect.",
            "Your continued use of our website or services after any changes constitutes acceptance of the updated policy.",
          ]}
        />
        <p>
          We recommend reviewing this page periodically to stay informed about how we
          protect your information.
        </p>
      </LegalSection>

      {/* 14. Contact Us */}
      <LegalSection id="contact" title="Contact Us">
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy
          or your personal data, please contact us:
        </p>
        <div className="mt-4 rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
          <p className="font-semibold text-white mb-3">Miu Media</p>
          <p>
            Email:{" "}
            <a
              href="mailto:make.it.up12business@gmail.com"
              className="text-[#FF8500] hover:text-[#FF9149] underline underline-offset-4 transition-colors"
            >
              make.it.up12business@gmail.com
            </a>
          </p>
          <p className="mt-2">
            WhatsApp:{" "}
            <a
              href="https://wa.me/8429598149"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8500] hover:text-[#FF9149] underline underline-offset-4 transition-colors"
            >
              +91 8429598149
            </a>
          </p>
          <p className="mt-3 text-white/40">
            We will respond to privacy-related requests within 30 days. For EU/EEA
            residents, if you are not satisfied with our response, you have the right
            to lodge a complaint with your local data protection authority.
          </p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
