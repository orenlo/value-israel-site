import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Value Israel | Creating Needle-Moving Value",
    template: "%s | Value Israel",
  },
  description:
    "Value Israel provides global investors differentiated access to high-quality Israeli growth companies through trusted local relationships, rigorous filtering, and direct market intelligence.",
  applicationName: "Value Israel",
  keywords: [
    "Value Israel",
    "Israel technology",
    "investment advisory",
    "growth equity",
    "venture capital",
    "private equity",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Value Israel",
    title: "Value Israel | Creating Needle-Moving Value",
    description:
      "Creating needle-moving value for the world's best investors, in Israel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Israel | Creating Needle-Moving Value",
    description:
      "Creating needle-moving value for the world's best investors, in Israel.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101317",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
