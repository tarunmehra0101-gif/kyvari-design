import * as React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Plane, Building, Heart, Plus, Info, TreePine } from "lucide-react";
import { cn } from "../../lib/utils";

export interface LibraryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  location: string;
  type: string;
  client: string;
  dates: string;
  duration: string;
  status?: "Booked" | "Sent" | "Reviewing" | "Draft";
  onClick?: () => void;
}

export const LibraryCard = React.forwardRef<HTMLDivElement, LibraryCardProps>(
  (
    {
      className,
      imageUrl,
      title,
      location,
      type,
      client,
      dates,
      duration,
      status,
      onClick,
      ...props
    },
    ref
  ) => {
    const isHotel = duration.includes('Night') || type === 'Luxury' || type === 'Boutique' || type.includes('Hotel');
    const isFlight = type === 'Flight';
    const isActivity = !isHotel && !isFlight;
    
    // Icon for the subtitle based on type
    const TypeIcon = isHotel ? Building : (isFlight ? Plane : TreePine);
    const displayType = type || (isActivity ? 'Attraction' : 'Hotel');

    return (
      <motion.div
        ref={ref}
        onClick={onClick}
        className={cn(
          "group relative w-full cursor-pointer flex flex-col mb-4",
          className
        )}
        {...(props as any)}
      >
        {/* Top Image Section */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden mb-3">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
          />
          
          {/* Top Right Action Icons */}
          <div className="absolute top-4 right-4 flex items-center gap-3">
            <Heart className="w-7 h-7 text-white drop-shadow-md cursor-pointer hover:scale-110 transition-transform" fill="#ef4444" strokeWidth={2} />
            <div className="w-[26px] h-[26px] rounded-full bg-black/30 backdrop-blur-md border-[1.5px] border-white flex items-center justify-center shadow-md cursor-pointer hover:bg-black/50 transition-colors">
              <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Bottom Right Info Icon */}
          <div className="absolute bottom-4 right-4">
            <Info className="w-5 h-5 text-white/80 drop-shadow-md hover:text-white cursor-pointer" strokeWidth={1.5} />
          </div>

          {/* Pagination Dots (Mock) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/50 shadow-sm" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/50 shadow-sm" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/50 shadow-sm" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/50 shadow-sm" />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col px-0.5">
           {/* Title & Rating Row */}
           <div className="flex justify-between items-start">
             <h3 className="text-[17px] font-bold text-[#111827] leading-tight flex-1 pr-3" style={{fontFamily: "system-ui, -apple-system, sans-serif"}}>
               {title}
             </h3>
             <div className="flex items-center gap-1 shrink-0 pt-0.5">
               <Star className="w-3.5 h-3.5 text-[#111827]" fill="currentColor" strokeWidth={0} />
               <span className="text-[14px] font-bold text-[#111827]">{isFlight ? "4.7" : "4.5"}</span>
               <span className="text-[14px] text-[#6b7280]">({isHotel ? "13k" : "66k"})</span>
             </div>
           </div>
           
           {/* Subtitle Details */}
           <div className="mt-1 flex flex-col gap-0.5">
             <div className="flex items-center gap-1.5 text-[#6b7280] text-[15px]">
               <TypeIcon className="w-4 h-4" strokeWidth={1.5} />
               <span>{displayType}</span>
             </div>
             <div className="text-[#6b7280] text-[15px] truncate mt-0.5">
               {isFlight ? `TYO ➔ ${location.substring(0,3).toUpperCase()}` : location}
             </div>
           </div>
        </div>
      </motion.div>
    );
  }
);

LibraryCard.displayName = "LibraryCard";
