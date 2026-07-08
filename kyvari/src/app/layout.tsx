import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

/** UI / body face — quiet, highly legible. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Display face — editorial serif for headlines & itinerary titles. */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: {
    default: "Kyvari — The AI copilot for travel agents",
    template: "%s · Kyvari",
  },
  description:
    "Kyvari turns a client brief into a polished, branded itinerary in minutes — aggregating flights, stays and experiences from every source, then tracking how clients engage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full`}>
      <head>
        {/* Adds the `js` class that gates GSAP reveal styles, so content is
            never hidden for users without JavaScript. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
