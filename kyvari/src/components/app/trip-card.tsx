import Link from "next/link";
import { Eye, MapPin, Users } from "lucide-react";
import { StatusBadge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/utils";
import type { Itinerary } from "@/lib/data";

/** Cover-art trip card used on the app home and the itineraries index. */
export function TripCard({ trip }: { trip: Itinerary }) {
  return (
    <Link
      href={`/app/itineraries/${trip.id}`}
      className="card group block overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className={`scene-${trip.scene} grain relative h-40 p-4`}>
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {trip.theme}
          </span>
          <StatusBadge status={trip.status} className="bg-white/85" />
        </div>
        <p className="font-display absolute bottom-4 left-4 right-4 text-xl font-semibold leading-tight text-white [text-shadow:0_1px_12px_rgb(0_0_0/0.25)]">
          {trip.title}
        </p>
      </div>

      <div className="p-4">
        <p className="flex items-center gap-1.5 text-sm font-medium text-ink">
          <MapPin className="h-3.5 w-3.5 text-lagoon-600" />
          {trip.destination}, {trip.country}
        </p>
        <div className="mt-2 flex items-center justify-between text-xs text-ink-mute">
          <span>{formatDateRange(trip.startDate, trip.endDate)}</span>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {trip.travelers}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" /> {trip.views}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
