import { MessageSquareText, Send, Wand2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    Icon: MessageSquareText,
    step: "01",
    title: "Drop in the brief",
    body: "Paste a WhatsApp thread, forward an email, or upload a PDF. Kyvari extracts dates, budget, travellers and taste — no forms to fill.",
  },
  {
    Icon: Wand2,
    step: "02",
    title: "Kyvari aggregates",
    body: "Flights from your GDS, stays from Booking.com, experiences from Viator and Places — matched, priced and routed into a day-by-day plan.",
  },
  {
    Icon: Send,
    step: "03",
    title: "Send it, watch it convert",
    body: "One link, your branding. See opens, dwell time and shares in real time — and follow up at exactly the right moment.",
  },
];

export function HowItWorks() {
  return (
    <Reveal as="section" className="px-4 py-24 sm:px-6" stagger={0.14}>
      <div className="mx-auto max-w-6xl" id="how">
        <div className="max-w-2xl">
          <p data-reveal className="text-eyebrow text-lagoon-600">
            How it works
          </p>
          <h2 data-reveal className="text-display-lg mt-3 text-ink">
            Three steps between “can you plan it?” and “take my money.”
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(({ Icon, step, title, body }) => (
            <li key={step} data-reveal className="card group relative p-7">
              <span className="font-display absolute right-6 top-5 text-4xl font-semibold text-parchment transition-colors group-hover:text-lagoon-100">
                {step}
              </span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lagoon-50 text-lagoon-600 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="text-display-sm mt-5 text-ink">{title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
