import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Value Israel website.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Use" updated="July 20, 2026">
      <h2>Informational purpose</h2>
      <p>
        This website is provided for general informational purposes only. Nothing on this website constitutes investment, legal, tax or other professional advice, or an offer, recommendation or solicitation to buy or sell any security or financial instrument.
      </p>

      <h2>No reliance</h2>
      <p>
        While we aim to present accurate and useful information, content may be incomplete, become outdated or contain errors. You should not make business or investment decisions solely in reliance on information presented on this website.
      </p>

      <h2>Third-party references</h2>
      <p>
        References and links to third-party organizations are provided for identification and convenience. They do not necessarily imply endorsement, sponsorship or affiliation beyond the relationships expressly described on the website.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise stated, the website design, text and original materials are owned by or used with permission by Value Israel. Third-party names, logos, trademarks and photography remain the property of their respective owners and are used subject to applicable rights and licenses.
      </p>

      <h2>Website availability</h2>
      <p>
        We may update, suspend or discontinue any part of the website without notice. To the maximum extent permitted by applicable law, the website is provided without warranties regarding uninterrupted availability or fitness for a particular purpose.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms may be sent to <a href="mailto:rstern@valueisrael.com">rstern@valueisrael.com</a>.
      </p>
    </LegalPage>
  );
}
