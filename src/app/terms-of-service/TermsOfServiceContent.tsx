"use client";

import LegalPageLayout, {
  LegalSection,
  LegalSubSection,
  LegalCallout,
  LegalList,
} from "@/components/LegalPageLayout";

const tocItems = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "definitions", label: "Definitions" },
  { id: "services", label: "Services We Provide" },
  { id: "engagement", label: "How We Work Together" },
  { id: "guarantee", label: "The 90-Day Guarantee" },
  { id: "client-responsibilities", label: "Client Responsibilities" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "payment", label: "Payment Terms" },
  { id: "content-approval", label: "Content Approval & Publishing" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "results-disclaimer", label: "Results Disclaimer" },
  { id: "third-party-platforms", label: "Third-Party Platforms" },
  { id: "termination", label: "Termination" },
  { id: "dispute-resolution", label: "Dispute Resolution" },
  { id: "force-majeure", label: "Force Majeure" },
  { id: "modifications", label: "Modifications to Terms" },
  { id: "general-provisions", label: "General Provisions" },
  { id: "contact", label: "Contact Information" },
];

export default function TermsOfServiceContent() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="These terms govern your use of the Miu Media website and your engagement of our digital marketing services. Please read them carefully."
      effectiveDate="July 30, 2025"
      lastUpdated="July 30, 2025"
      tocItems={tocItems}
      crossLink={{
        href: "/privacy-policy",
        label: "Privacy Policy",
      }}
    >
      {/* 1. Acceptance of Terms */}
      <LegalSection id="acceptance" title="Acceptance of Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement
          between you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and Miu Media (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;), a digital marketing and brand design agency.
        </p>
        <p>
          By accessing or using our website, booking a strategy call, or engaging our
          services in any capacity, you agree to be bound by these Terms. If you are
          entering into these Terms on behalf of a company or other legal entity, you
          represent that you have the authority to bind that entity.
        </p>
        <p>
          If you do not agree to these Terms, please do not use our website or engage
          our services.
        </p>
      </LegalSection>

      {/* 2. Definitions */}
      <LegalSection id="definitions" title="Definitions">
        <p>
          For clarity, the following terms have specific meanings throughout this document:
        </p>
        <LegalList
          items={[
            "\"Miu Media\" / \"we\" / \"us\" / \"our\" -- refers to Miu Media, the digital marketing and brand design agency.",
            "\"Client\" / \"you\" / \"your\" -- refers to the individual, business, or entity engaging our services or using our website.",
            "\"Services\" -- refers to social media management, copywriting, video production, ad campaign management, brand positioning, and content strategy as described in any service agreement.",
            "\"Deliverables\" -- refers to all content, videos, copy, designs, reports, and other materials produced by Miu Media for the Client.",
            "\"Platforms\" -- refers to third-party services including but not limited to Instagram, Facebook, LinkedIn, Meta Ads Manager, Google Ads, WhatsApp, and YouTube.",
            "\"Service Agreement\" -- refers to the specific proposal or contract signed between Miu Media and the Client detailing scope, timeline, and pricing.",
          ]}
        />
      </LegalSection>

      {/* 3. Services We Provide */}
      <LegalSection id="services" title="Services We Provide">
        <p>
          Miu Media specializes in helping architects and interior designers build their
          digital presence and attract high-value clients. Our services include:
        </p>
        <LegalSubSection title="Social Media Management">
          <p>
            End-to-end management of your social media presence including content strategy,
            content calendar planning, posting, community management, engagement optimization,
            and performance reporting across platforms such as Instagram and LinkedIn.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Copywriting">
          <p>
            Professional copywriting services including social media captions, ad copy,
            website copy, email sequences, video scripts, and brand messaging frameworks.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Video Production">
          <p>
            Video content creation including short-form editing, AI UGC (user-generated content),
            talking head videos, faceless content, Reels, and promotional videos optimized for
            social media platforms.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Ad Campaign Management">
          <p>
            Planning, launching, and optimizing paid advertising campaigns on Meta (Facebook,
            Instagram) and Google platforms, including audience targeting, creative development,
            and performance reporting.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Brand Positioning & Content Strategy">
          <p>
            Strategic consulting to position your brand as an authority in the architecture
            and interior design space, including content pillars, audience research, and
            competitive analysis.
          </p>
        </LegalSubSection>
        <LegalCallout>
          The specific scope, deliverables, and timeline for each engagement are defined
          in an individual Service Agreement. These Terms apply in addition to any
          Service Agreement.
        </LegalCallout>
      </LegalSection>

      {/* 4. How We Work Together */}
      <LegalSection id="engagement" title="How We Work Together">
        <p>
          Our engagement process is designed to be transparent and collaborative:
        </p>
        <LegalSubSection title="Step 1: Free Strategy Call">
          <p>
            An initial no-obligation call to understand your business, goals, and
            challenges. This helps us assess mutual fit and identify how we can best help.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Step 2: Custom Proposal">
          <p>
            Based on the strategy call, we prepare a detailed proposal outlining scope
            of work, deliverables, timeline, and pricing tailored to your specific needs.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Step 3: Service Agreement">
          <p>
            Once you approve the proposal, both parties sign a formal Service Agreement.
            No work begins until the agreement is signed and any required upfront payment
            is received.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Step 4: Onboarding">
          <p>
            You provide the necessary brand assets, social media account access, brand
            guidelines, and any other materials specified in the agreement. We set up
            our systems and begin the onboarding process.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Step 5: Execution & Reporting">
          <p>
            We execute the agreed-upon strategy with regular check-ins, progress reports,
            and performance reviews as outlined in the Service Agreement.
          </p>
        </LegalSubSection>
      </LegalSection>

      {/* 5. The 90-Day Guarantee */}
      <LegalSection id="guarantee" title="The 90-Day Guarantee">
        <p>
          Miu Media offers a guarantee of measurable improvement in client acquisition
          within 90 days of campaign launch. This guarantee is subject to the following
          terms:
        </p>
        <LegalSubSection title="What We Guarantee">
          <p>
            &quot;Measurable improvement&quot; is defined in each individual Service Agreement
            and may include metrics such as minimum lead count, engagement growth
            percentage, qualified inquiry increase, or other specific KPIs agreed upon
            before work begins.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Conditions for the Guarantee">
          <p>The guarantee applies only when all of the following conditions are met:</p>
          <LegalList
            items={[
              "The Client provides timely feedback on content and deliverables within 48 hours of review requests.",
              "The Client maintains the agreed-upon minimum advertising spend (if applicable to the engagement).",
              "The Client provides all necessary brand assets, account access, and materials within the agreed onboarding period.",
              "The Client does not make conflicting or unauthorized changes to managed accounts without prior coordination with Miu Media.",
              "The Client cooperates with the agreed-upon content strategy and does not request changes that fundamentally conflict with the recommended approach.",
              "The 90-day period is measured from the date the first campaign or content piece goes live, not from the date of agreement signing.",
            ]}
          />
        </LegalSubSection>
        <LegalSubSection title="Remedy">
          <p>
            If all guarantee conditions have been met and the agreed-upon targets are not
            achieved within the 90-day period, the Client is entitled to a full refund of
            service fees paid. This refund excludes any advertising spend paid directly to
            platforms (Meta, Google, etc.).
          </p>
        </LegalSubSection>
        <LegalSubSection title="Exclusions">
          <p>The guarantee does not cover:</p>
          <LegalList
            items={[
              "Force majeure events (see Force Majeure section).",
              "Platform algorithm changes, policy updates, or account restrictions imposed by third-party platforms.",
              "Market conditions, economic downturns, or industry-wide disruptions beyond Miu Media's control.",
              "Situations where the Client fails to meet any of the conditions listed above.",
            ]}
          />
        </LegalSubSection>
      </LegalSection>

      {/* 6. Client Responsibilities */}
      <LegalSection id="client-responsibilities" title="Client Responsibilities">
        <p>
          Successful marketing outcomes require collaboration. As our Client, you agree to:
        </p>
        <LegalList
          items={[
            "Provide accurate and complete business information, brand assets, and materials needed for content creation.",
            "Grant timely access to social media accounts, ad platforms, and any other tools required for service delivery.",
            "Respond to content approval requests and feedback inquiries within the agreed timeframe (typically 48 hours).",
            "Maintain the agreed minimum advertising budget where applicable and ensure timely funding of ad accounts.",
            "Notify Miu Media promptly of any changes to brand guidelines, business direction, or target audience.",
            "Ensure that all content, images, trademarks, and materials you provide do not infringe upon the intellectual property rights of any third party.",
            "Comply with all applicable advertising regulations, industry standards, and professional codes of conduct in your jurisdiction.",
            "Designate a primary point of contact for communication and decision-making related to the engagement.",
          ]}
        />
        <LegalCallout>
          Delays or failures in meeting these responsibilities may impact our ability to
          deliver results within agreed timelines and may affect the applicability of
          our 90-Day Guarantee.
        </LegalCallout>
      </LegalSection>

      {/* 7. Intellectual Property */}
      <LegalSection id="intellectual-property" title="Intellectual Property">
        <LegalSubSection title="Client's Intellectual Property">
          <p>
            You retain full ownership of your brand name, logo, trademarks, original
            photographs, architectural/design portfolio images, and any other materials
            you provide to us. By providing these materials, you grant Miu Media a limited,
            non-exclusive license to use them solely for the purpose of delivering the
            contracted services.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Miu Media's Intellectual Property">
          <p>
            Miu Media retains ownership of all proprietary methodologies, frameworks,
            templates, systems, tools, and processes used in the delivery of services.
            This includes our content strategy frameworks, campaign optimization systems,
            and any pre-existing creative assets.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Deliverables Ownership">
          <p>
            Upon full payment of all fees associated with a project or engagement,
            ownership of custom deliverables (including videos, copy, designs, and reports
            created specifically for you) transfers to you. Until full payment is received,
            Miu Media retains ownership of all deliverables.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Portfolio Rights">
          <p>
            Miu Media retains the right to showcase completed work in our portfolio,
            case studies, website, social media, and marketing materials for the purpose
            of demonstrating our capabilities. If you wish to opt out of portfolio usage,
            please notify us in writing, and we will honor your request within 14 days.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Third-Party Assets">
          <p>
            Deliverables may incorporate third-party assets such as stock media, licensed
            fonts, royalty-free music, or platform-provided templates. These assets remain
            subject to their original license terms. Miu Media will inform you of any
            relevant third-party licensing restrictions.
          </p>
        </LegalSubSection>
      </LegalSection>

      {/* 8. Payment Terms */}
      <LegalSection id="payment" title="Payment Terms">
        <LegalSubSection title="Pricing">
          <p>
            All pricing is specified in the individual Service Agreement. Pricing is
            in Indian Rupees (INR) for India-based clients or US Dollars (USD) for
            international clients, unless otherwise agreed upon in writing.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Payment Schedule">
          <p>
            Unless otherwise specified in the Service Agreement, the standard payment
            schedule is:
          </p>
          <LegalList
            items={[
              "50% of the total project fee due upon signing the Service Agreement (before work begins).",
              "50% due upon milestone completion or project delivery (as defined in the agreement).",
              "For ongoing retainer engagements, monthly payments are due at the start of each service month.",
            ]}
          />
        </LegalSubSection>
        <LegalSubSection title="Accepted Payment Methods">
          <LegalList
            items={[
              "Bank transfer (NEFT/RTGS/IMPS for Indian clients).",
              "UPI (for Indian clients).",
              "International wire transfer (for international clients).",
              "PayPal (for international clients).",
            ]}
          />
        </LegalSubSection>
        <LegalSubSection title="Late Payments">
          <p>
            Invoices are due within 7 days of issuance unless otherwise agreed. A 5-day
            grace period is provided after the due date. If payment is not received within
            the grace period, Miu Media reserves the right to pause all services until
            payment is made. Repeated late payments may result in termination of the
            engagement.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Refunds">
          <p>
            Refunds are provided in accordance with the 90-Day Guarantee clause (see above).
            Outside of the guarantee, fees for work already delivered are non-refundable.
            If the engagement is terminated before completion, the Client pays for all work
            completed up to the termination date.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Taxes">
          <p>
            Quoted prices are exclusive of applicable taxes. The Client is responsible for
            any sales tax, GST, VAT, withholding tax, or other taxes applicable in their
            jurisdiction. Indian clients will be charged GST as applicable under Indian law.
          </p>
        </LegalSubSection>
      </LegalSection>

      {/* 9. Content Approval & Publishing */}
      <LegalSection id="content-approval" title="Content Approval & Publishing">
        <p>
          We believe in collaborative content creation. Here is how our approval process works:
        </p>
        <LegalList
          items={[
            "All content (posts, videos, ad creatives, copy) is submitted to you for review and approval before publishing.",
            "You have 48 hours to review and approve content or request revisions, unless a different timeline is agreed upon in the Service Agreement.",
            "Each piece of content includes up to 2 rounds of revisions. Additional revision rounds may incur extra charges as specified in the Service Agreement.",
            "If content is not responded to within the agreed review window, we may publish the content as submitted to maintain campaign momentum and editorial calendar consistency.",
            "You are responsible for the factual accuracy of any business-specific information you provide for use in content (e.g., project details, pricing, service descriptions).",
            "Miu Media ensures all content complies with the relevant platform's community guidelines and advertising policies.",
          ]}
        />
        <LegalCallout>
          Once content is approved and published, Miu Media is not liable for any claims
          arising from the factual accuracy of client-provided information used in that content.
        </LegalCallout>
      </LegalSection>

      {/* 10. Confidentiality */}
      <LegalSection id="confidentiality" title="Confidentiality">
        <p>
          Both parties agree to keep confidential all non-public information shared
          during the engagement. Confidential information includes, but is not limited to:
        </p>
        <LegalList
          items={[
            "Business strategies, financial data, and revenue information.",
            "Campaign performance data, analytics, and conversion metrics.",
            "Client lists, customer data, and market research.",
            "Proprietary methodologies, tools, and processes.",
            "Unpublished content, creative concepts, and brand strategies.",
            "Social media account credentials and platform access details.",
          ]}
        />
        <LegalSubSection title="Exceptions">
          <p>Confidentiality obligations do not apply to information that:</p>
          <LegalList
            items={[
              "Is or becomes publicly available through no fault of the receiving party.",
              "Was known to the receiving party before disclosure.",
              "Is independently developed without reference to confidential information.",
              "Is required to be disclosed by law, regulation, or court order (with prompt notice to the disclosing party).",
            ]}
          />
        </LegalSubSection>
        <p>
          Confidentiality obligations survive the termination of the engagement for a
          period of 2 years.
        </p>
      </LegalSection>

      {/* 11. Limitation of Liability */}
      <LegalSection id="liability" title="Limitation of Liability">
        <LegalSubSection title="Cap on Liability">
          <p>
            To the maximum extent permitted by applicable law, Miu Media&apos;s total
            aggregate liability for any claims arising out of or related to these Terms
            or our services shall not exceed the total fees paid by the Client to Miu
            Media in the three (3) months immediately preceding the event giving rise
            to the claim.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Exclusion of Damages">
          <p>
            Miu Media shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to:
          </p>
          <LegalList
            items={[
              "Loss of profits, revenue, or business opportunities.",
              "Loss of data or corruption of data.",
              "Reputational damage or loss of goodwill.",
              "Platform downtime, account suspensions, or algorithm changes imposed by third-party platforms.",
              "Actions or inactions of third-party service providers.",
              "Any damages resulting from the Client's failure to meet their responsibilities under these Terms.",
            ]}
          />
        </LegalSubSection>
        <LegalCallout>
          Digital marketing involves inherent uncertainty. We commit to best-practice
          execution, strategic planning, and dedicated effort -- but we cannot and do
          not guarantee specific revenue outcomes, follower counts, or conversion rates
          beyond what is explicitly stated in the 90-Day Guarantee section.
        </LegalCallout>
      </LegalSection>

      {/* 12. Results Disclaimer */}
      <LegalSection id="results-disclaimer" title="Results Disclaimer">
        <p>
          Miu Media is proud of the results we have achieved for our clients, including
          those highlighted in our case studies and testimonials. However:
        </p>
        <LegalList
          items={[
            "Past performance does not guarantee future results. Each client's outcomes depend on their unique market, competition, cooperation, audience, and business circumstances.",
            "Case studies and testimonials represent the specific results achieved for specific clients under specific conditions. Your results may vary.",
            "Specific metrics referenced in our marketing materials (views, leads, engagement rates, ad spend efficiency) are actual results for those engagements and are not guarantees of what you will achieve.",
            "Marketing success depends on numerous factors including market conditions, competitive landscape, target audience behavior, content quality, platform algorithms, and the Client's responsiveness and cooperation.",
            "We provide our professional expertise and effort to maximize your results, but the digital marketing landscape is dynamic and outcomes are never fully predictable.",
          ]}
        />
      </LegalSection>

      {/* 13. Third-Party Platforms */}
      <LegalSection id="third-party-platforms" title="Third-Party Platforms">
        <p>
          Our services rely on third-party platforms and tools. You acknowledge and agree:
        </p>
        <LegalList
          items={[
            "Miu Media is not responsible for outages, service disruptions, or downtime on platforms such as Instagram, Facebook, LinkedIn, Google, or WhatsApp.",
            "Platforms may change their terms of service, advertising policies, algorithms, API access, or features at any time without notice. Such changes may materially affect campaign performance and service delivery.",
            "If platform changes significantly impact our ability to deliver agreed-upon services, both parties will collaborate in good faith to adapt the strategy and adjust expectations.",
            "Account suspensions, restrictions, or bans imposed by platforms due to factors outside Miu Media's control are not Miu Media's responsibility.",
            "The Client must comply with the terms of service of each platform on which we manage their presence. Miu Media will advise on platform compliance but is not liable for the Client's pre-existing violations.",
            "Data available through platform analytics may change without notice, potentially affecting reporting capabilities.",
          ]}
        />
      </LegalSection>

      {/* 14. Termination */}
      <LegalSection id="termination" title="Termination">
        <LegalSubSection title="Termination by Either Party">
          <p>
            Either party may terminate the engagement by providing 30 days written notice
            to the other party via email. The notice period begins on the date the
            termination notice is received.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Termination for Cause">
          <p>
            Either party may terminate immediately if the other party materially breaches
            these Terms and fails to cure the breach within 14 days of receiving written
            notice of the breach.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Upon Termination">
          <LegalList
            items={[
              "The Client must pay for all work completed and services rendered up to the termination date.",
              "Miu Media will deliver all completed deliverables to the Client within 14 days of the termination date.",
              "Miu Media will transfer full access and control of all managed accounts back to the Client.",
              "Miu Media will delete stored account credentials and sensitive Client data within 30 days of termination, unless retention is required by law.",
              "Any pre-paid fees for services not yet rendered will be refunded on a pro-rata basis.",
            ]}
          />
        </LegalSubSection>
        <LegalSubSection title="Surviving Provisions">
          <p>
            The following sections survive termination: Intellectual Property,
            Confidentiality, Limitation of Liability, Results Disclaimer, Dispute
            Resolution, and any payment obligations incurred prior to termination.
          </p>
        </LegalSubSection>
      </LegalSection>

      {/* 15. Dispute Resolution */}
      <LegalSection id="dispute-resolution" title="Dispute Resolution">
        <p>
          We believe in resolving disagreements amicably and efficiently:
        </p>
        <LegalSubSection title="Negotiation">
          <p>
            Both parties will first attempt to resolve any dispute through good-faith
            negotiation. Either party may initiate the negotiation process by sending
            written notice describing the dispute to the other party.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Mediation">
          <p>
            If the dispute is not resolved through negotiation within 30 days, either
            party may refer the matter to mediation. The mediator will be mutually agreed
            upon. Mediation costs will be shared equally.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Arbitration">
          <p>
            If mediation fails, any remaining dispute will be settled through binding
            arbitration under the Indian Arbitration and Conciliation Act, 1996. For
            international clients, arbitration will be conducted in English. The
            arbitration award shall be final and binding.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the laws of the
            Republic of India, unless a specific governing law is agreed upon in an
            individual Service Agreement. For international clients, any mandatory
            consumer protection laws of your jurisdiction that cannot be waived by
            contract will still apply.
          </p>
        </LegalSubSection>
      </LegalSection>

      {/* 16. Force Majeure */}
      <LegalSection id="force-majeure" title="Force Majeure">
        <p>
          Neither party shall be held liable for any delay or failure in performance
          resulting from events beyond their reasonable control, including but not
          limited to:
        </p>
        <LegalList
          items={[
            "Natural disasters (earthquakes, floods, hurricanes, pandemics).",
            "Government actions, sanctions, embargoes, or regulatory changes.",
            "War, terrorism, civil unrest, or political instability.",
            "Internet or telecommunications infrastructure failures.",
            "Major platform outages or shutdowns (Instagram, Meta, Google).",
            "Widespread cyberattacks or security incidents affecting critical infrastructure.",
          ]}
        />
        <p>
          The affected party must notify the other party within 7 days of becoming aware
          of the force majeure event and use reasonable efforts to mitigate its impact. If
          the force majeure event continues for more than 60 days, either party may
          terminate the engagement without penalty.
        </p>
      </LegalSection>

      {/* 17. Modifications to Terms */}
      <LegalSection id="modifications" title="Modifications to Terms">
        <p>
          Miu Media reserves the right to update or modify these Terms at any time.
          When we make changes:
        </p>
        <LegalList
          items={[
            "The updated Terms will be posted on this page with a revised \"Last Updated\" date.",
            "For material changes that affect active engagements, we will notify Clients via email at least 30 days before the changes take effect.",
            "Your continued use of our website or services after the effective date of any changes constitutes acceptance of the updated Terms.",
            "If you do not agree to the updated Terms, you may terminate the engagement in accordance with the Termination section.",
          ]}
        />
      </LegalSection>

      {/* 18. General Provisions */}
      <LegalSection id="general-provisions" title="General Provisions">
        <LegalSubSection title="Severability">
          <p>
            If any provision of these Terms is found to be invalid, illegal, or
            unenforceable by a court of competent jurisdiction, the remaining provisions
            shall continue in full force and effect. The invalid provision will be modified
            to the minimum extent necessary to make it valid and enforceable.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Entire Agreement">
          <p>
            These Terms, together with any applicable Service Agreement and our Privacy
            Policy, constitute the entire agreement between you and Miu Media regarding
            the subject matter herein. They supersede all prior and contemporaneous
            discussions, proposals, and agreements, whether oral or written.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Waiver">
          <p>
            The failure of either party to enforce any provision of these Terms shall not
            constitute a waiver of that provision or any other provision. Any waiver must
            be in writing and signed by the waiving party.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Assignment">
          <p>
            The Client may not assign or transfer their rights or obligations under these
            Terms without Miu Media&apos;s prior written consent. Miu Media may assign its
            rights and obligations to a successor in the event of a merger, acquisition,
            or sale of substantially all of its assets.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Independent Contractors">
          <p>
            The relationship between Miu Media and the Client is that of independent
            contractors. Nothing in these Terms creates a partnership, joint venture,
            employment, or agency relationship.
          </p>
        </LegalSubSection>
        <LegalSubSection title="Notices">
          <p>
            All formal notices under these Terms must be in writing and sent via email
            to the addresses specified in the Service Agreement. Notices are deemed
            received on the date of confirmed delivery.
          </p>
        </LegalSubSection>
      </LegalSection>

      {/* 19. Contact Information */}
      <LegalSection id="contact" title="Contact Information">
        <p>
          If you have any questions about these Terms of Service, please contact us:
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
          <p className="mt-3 text-white/40">
            We will respond to general inquiries within 7 business days and to formal
            requests within 30 days.
          </p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
