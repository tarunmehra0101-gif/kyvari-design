import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";

export interface TrailCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  mapImageUrl?: string;
  title: string;
  location: string;
  difficulty: string;
  creators: string;
  distance: string;
  elevation: string;
  duration: string;
  onDirectionsClick?: () => void;
}

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{value}</span>
    <span className="text-xs text-slate-500">{label}</span>
  </div>
);

const TrailCard = React.forwardRef<HTMLDivElement, TrailCardProps>(
  (
    {
      className,
      imageUrl,
      mapImageUrl,
      title,
      location,
      difficulty,
      creators,
      distance,
      elevation,
      duration,
      onDirectionsClick,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-sm",
          className
        )}
        whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 40px rgba(20,24,58,0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...(props as any)}
      >
        <div className="relative h-60 w-full" style={{background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"}}>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-4 z-10">
            <div className="text-white">
              <h3 className="text-xl font-bold leading-tight drop-shadow-md" style={{fontFamily:"var(--font-fraunces), serif"}}>{title}</h3>
              <p className="text-sm text-white/90 drop-shadow-md mt-1">{location}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: 0 }}
              animate={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Button
                variant="secondary"
                onClick={(e) => { e.stopPropagation(); onDirectionsClick?.(); }}
                aria-label={`Open ${title}`}
                className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md h-9"
              >
                View
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{difficulty}</p>
              <p className="text-xs text-slate-500 mt-0.5">{creators}</p>
            </div>
            {mapImageUrl && (
              <img
                src={mapImageUrl}
                alt="Trail map"
                className="h-10 w-20 object-contain opacity-80"
              />
            )}
          </div>
          <div className="my-4 h-px w-full bg-slate-100 dark:bg-zinc-800" />
          <div className="flex justify-between">
            <StatItem label="Distance" value={distance} />
            <StatItem label="Elevation" value={elevation} />
            <StatItem label="Duration" value={duration} />
          </div>
        </div>
      </motion.div>
    );
  }
);

TrailCard.displayName = "TrailCard";

export { TrailCard };
