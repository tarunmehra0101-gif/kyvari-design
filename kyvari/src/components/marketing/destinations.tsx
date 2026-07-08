import { Reveal } from "@/components/motion/reveal";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/lib/photos";

const cards = [
  { photo: photos.santorini, tone: "sea", place: "Santorini", trips: "212 trips planned" },
  { photo: photos.bali, tone: "palm", place: "Bali", trips: "348 trips planned" },
  { photo: photos.kyoto, tone: "blossom", place: "Kyoto", trips: "164 trips planned" },
  { photo: photos.swiss, tone: "alpine", place: "Swiss Alps", trips: "141 trips planned" },
  { photo: photos.amalfi, tone: "citrus", place: "Amalfi Coast", trips: "197 trips planned" },
  { photo: photos.rajasthan, tone: "sand", place: "Rajasthan", trips: "126 trips planned" },
];

/** Photography strip — the product's raw material, front and center. */
export function Destinations() {
  return (
    <Reveal as="section" className="border-t border-line py-24 sm:py-32" stagger={0.07}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 data-reveal className="text-display-lg max-w-xl text-ink">
          Made for everywhere you send people.
        </h2>
      </div>
      <div className="mt-12 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex w-max gap-5 px-5 sm:px-8">
          {cards.map((c) => (
            <li key={c.place} data-reveal className="group w-60 shrink-0 sm:w-72">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Photo
                  src={c.photo}
                  alt={c.place}
                  tone={c.tone}
                  sizes="288px"
                  imgClassName="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </div>
              <p className="font-display mt-3.5 text-xl text-ink">{c.place}</p>
              <p className="mt-0.5 text-sm text-ink-mute">{c.trips}</p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
