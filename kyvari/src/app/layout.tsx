import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

/** UI / body face — quiet, highly legible. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Display face — high-contrast editorial serif for headlines. */
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
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
    <html lang="en" className={`${inter.variable} ${instrument.variable} h-full`}>
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
