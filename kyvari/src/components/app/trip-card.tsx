import Link from "next/link";
import { StatusBadge } from "@/components/ui/badge";
import { Photo } from "@/components/ui/photo";
import { formatDateRange } from "@/lib/utils";
import type { Itinerary } from "@/lib/data";

/**
 * Photography-first trip card: image on top, editorial title beneath.
 * All chrome stays off the photo except the status chip.
 */
export function TripCard({ trip }: { trip: Itinerary }) {
  return (
    <Link href={`/app/itineraries/${trip.id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Photo
          src={trip.photo}
          alt={`${trip.destination}, ${trip.country}`}
          tone={trip.tone}
          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 92vw"
          imgClassName="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
        <StatusBadge
          status={trip.status}
          tone="onImage"
          className="absolute right-3 top-3"
        />
      </div>

      <div className="pt-3.5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display truncate text-[1.35rem] text-ink">
            {trip.title}
          </h3>
          <span className="shrink-0 text-xs tabular-nums text-ink-mute">
            {trip.views > 0 && `${trip.views} views`}
          </span>
        </div>
        <p className="mt-0.5 truncate text-sm text-ink-soft">
          {trip.destination}, {trip.country} ·{" "}
          {formatDateRange(trip.startDate, trip.endDate)} · {trip.travelers}{" "}
          travellers
        </p>
      </div>
    </Link>
  );
}
