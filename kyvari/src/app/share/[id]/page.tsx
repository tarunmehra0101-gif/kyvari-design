import { notFound } from "next/navigation";
import { ShareView } from "@/components/share/share-view";
import { itineraries } from "@/lib/data";

export function generateStaticParams() {
  return itineraries.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trip = itineraries.find((t) => t.id === id);
  return {
    title: trip ? `${trip.title} — your itinerary` : "Itinerary",
    description: trip
      ? `A ${trip.theme.toLowerCase()} in ${trip.destination}, prepared for ${trip.client}.`
      : undefined,
  };
}

/** Public client-share page — what the kyvari.link URL opens. */
export default async function SharePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trip = itineraries.find((t) => t.id === id);
  if (!trip) notFound();
  return <ShareView trip={trip} />;
}
