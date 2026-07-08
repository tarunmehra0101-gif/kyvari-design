import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Photography with a designed fallback: the tone-* backdrop shows while the
 * remote image loads (or if it can't), so nothing ever looks broken.
 * Parent must be `relative` with a fixed aspect/size.
 */
export function Photo({
  src,
  alt,
  tone = "sand",
  sizes = "100vw",
  priority,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  tone?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span className={cn("absolute inset-0 overflow-hidden", `tone-${tone}`, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </span>
  );
}
