import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    n: "01",
    title: "Drop in the brief",
    body: "Paste a WhatsApp thread, forward an email, or upload a PDF. Kyvari extracts dates, budget, travellers and taste — no forms.",
  },
  {
    n: "02",
    title: "Kyvari gathers everything",
    body: "Flights from your GDS, stays from Booking.com, experiences from Viator and Places — matched, priced and routed into a day-by-day plan.",
  },
  {
    n: "03",
    title: "Send one beautiful link",
    body: "Your branding, their trip. Watch opens, dwell time and shares in real time, and follow up at exactly the right moment.",
  },
];

export function HowItWorks() {
  return (
    <Reveal as="section" className="px-5 py-24 sm:px-8 sm:py-32" stagger={0.12}>
      <div className="mx-auto max-w-6xl" id="how">
        <h2 data-reveal className="text-display-lg max-w-xl text-ink">
          From “can you plan it?” to “take my money.”
        </h2>

        <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {steps.map(({ n, title, body }) => (
            <li key={n} data-reveal className="border-t border-line-strong pt-6">
              <span className="text-sm text-ink-mute">{n}</span>
              <h3 className="text-display-sm mt-3 text-ink">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
