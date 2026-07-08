import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Link2, Send } from "lucide-react";
import { ShareView } from "@/components/share/share-view";
import { itineraries } from "@/lib/data";

export function generateStaticParams() {
  return itineraries.map((t) => ({ id: t.id }));
}

export const metadata = { title: "Client preview" };

/**
 * Agent-side preview: the exact ShareView the client will receive,
 * framed by a slim "you are previewing" toolbar.
 */
export default async function PreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trip = itineraries.find((t) => t.id === id);
  if (!trip) notFound();

  return (
    <div>
      <div className="sticky top-14 z-30 flex items-center justify-between gap-3 border-b border-line bg-ink px-4 py-2.5 text-white sm:px-6 lg:top-0">
        <Link
          href={`/app/itineraries/${trip.id}`}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-paper/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to editor
        </Link>
        <p className="hidden text-xs text-paper/60 sm:block">
          Previewing as <span className="font-semibold text-white">{trip.client}</span> —
          exactly what kyvari.link/{trip.id} will show
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/25 px-3 text-xs font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Link2 className="h-3.5 w-3.5" />
            Copy link
          </button>
          <button
            type="button"
            className="inline-flex h-8 items-center gap-1.5 rounded-full bg-white px-3.5 text-xs font-semibold text-ink transition-transform hover:-translate-y-px"
          >
            <Send className="h-3.5 w-3.5" />
            Send to client
          </button>
        </div>
      </div>
      <ShareView trip={trip} />
    </div>
  );
}
