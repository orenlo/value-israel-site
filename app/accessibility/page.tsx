import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility statement for the Value Israel website.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage eyebrow="Accessibility" title="Accessibility Statement" updated="July 20, 2026">
      <h2>Our commitment</h2>
      <p>
        Value Israel is committed to making its website usable by as many people as reasonably possible, including people who use assistive technologies.
      </p>

      <h2>Accessibility features</h2>
      <p>
        The website has been designed with semantic headings, keyboard-accessible navigation, visible focus states, responsive layouts, alternative text for meaningful imagery and reduced-motion support where supported by the visitor&apos;s device settings.
      </p>

      <h2>Ongoing improvement</h2>
      <p>
        Accessibility is an ongoing process. Content, third-party assets and browser or assistive-technology combinations may affect the experience, and we continue to review the site as it evolves.
      </p>

      <h2>Need assistance?</h2>
      <p>
        If you encounter an accessibility barrier or need information in an alternative format, please contact us at <a href="mailto:rstern@valueisrael.com">rstern@valueisrael.com</a> or <a href="mailto:Olowte@valueisrael.com">Olowte@valueisrael.com</a>. Please describe the page and the issue you encountered so we can assist you.
      </p>
    </LegalPage>
  );
}
