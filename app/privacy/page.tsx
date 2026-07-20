import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Value Israel website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="July 20, 2026">
      <h2>Overview</h2>
      <p>
        Value Israel respects the privacy of visitors to this website. This policy explains, at a high level, what information may be processed when you use the site or contact us directly.
      </p>

      <h2>Information you provide</h2>
      <p>
        When you contact us by email, we may receive the information included in your message, such as your name, email address, company and any other information you choose to provide. We use this information to respond to your inquiry and maintain relevant business communications.
      </p>

      <h2>Technical information</h2>
      <p>
        Our hosting and security providers may automatically process standard technical information such as IP address, browser type, device information, timestamps and server logs for operation, reliability and security purposes.
      </p>

      <h2>Third-party services and links</h2>
      <p>
        The website may link to third-party websites and may load limited third-party assets such as company marks or photography. Those third parties may process information under their own privacy policies. Value Israel is not responsible for the privacy practices of external websites.
      </p>

      <h2>Data retention and security</h2>
      <p>
        We retain business correspondence and related information only for as long as reasonably necessary for the purposes for which it was collected, legal obligations and legitimate business needs. We take reasonable measures designed to protect information in our possession.
      </p>

      <h2>Your questions and requests</h2>
      <p>
        For privacy-related questions or requests concerning information you have provided to us, contact <a href="mailto:rstern@valueisrael.com">rstern@valueisrael.com</a> or <a href="mailto:Olowte@valueisrael.com">Olowte@valueisrael.com</a>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time to reflect changes to the website, our practices or applicable requirements. The date above indicates the latest revision.
      </p>
    </LegalPage>
  );
}
