/* ------------------------------------------------------------------ */
/*  Sample data for the whole product.                                */
/*  Shapes here are the contract every screen renders from — replace  */
/*  this module with real API calls and the UI keeps working.         */
/* ------------------------------------------------------------------ */

export type StopType =
  | "flight"
  | "hotel"
  | "experience"
  | "meal"
  | "transfer";

export type SourceId =
  | "amadeus"
  | "booking"
  | "viator"
  | "whatsapp"
  | "pdf"
  | "places";

export interface Source {
  id: SourceId;
  name: string;
  kind: "GDS" | "Inventory" | "Chat" | "Document" | "Reviews";
  itemsFound: number;
  status: "synced" | "parsing" | "queued";
}

export interface Stop {
  id: string;
  time: string;
  type: StopType;
  title: string;
  subtitle: string;
  detail?: string;
  pricePerPerson?: number;
  rating?: number;
  source: SourceId | "agent";
  /** Travel leg from the previous stop */
  leg?: { distanceKm: number; minutes: number; mode: "drive" | "walk" | "ferry" };
}

export interface Day {
  label: string;
  title: string;
  summary: string;
  stops: Stop[];
}

export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  country: string;
  /** Maps to a scene-* gradient utility (stand-in for cover photography) */
  scene: "santorini" | "bali" | "rajasthan" | "kyoto" | "swiss" | "amalfi";
  theme: string;
  startDate: string;
  endDate: string;
  travelers: number;
  client: string;
  status: "draft" | "sent" | "viewed" | "booked";
  pricePerPerson: number;
  currency: string;
  views: number;
  avgDwellMin: number;
  days: Day[];
}

/* ---------------------------------------------------------------- */
/*  Agency (the Kyvari customer)                                     */
/* ---------------------------------------------------------------- */

export const agency = {
  name: "Saffron Trails",
  agent: "Meera Kapoor",
  initials: "MK",
  plan: "Pro",
  generationsUsed: 61,
  generationsQuota: 100,
};

/* ---------------------------------------------------------------- */
/*  Aggregation sources shown in the builder                         */
/* ---------------------------------------------------------------- */

export const sources: Source[] = [
  { id: "amadeus", name: "Amadeus GDS", kind: "GDS", itemsFound: 4, status: "synced" },
  { id: "booking", name: "Booking.com", kind: "Inventory", itemsFound: 6, status: "synced" },
  { id: "viator", name: "Viator", kind: "Inventory", itemsFound: 9, status: "synced" },
  { id: "whatsapp", name: "WhatsApp brief", kind: "Chat", itemsFound: 12, status: "synced" },
  { id: "pdf", name: "Hotel brochure.pdf", kind: "Document", itemsFound: 3, status: "parsing" },
  { id: "places", name: "Google Places", kind: "Reviews", itemsFound: 18, status: "synced" },
];

export const sourceMeta: Record<SourceId | "agent", { label: string; short: string }> = {
  amadeus: { label: "Amadeus GDS", short: "GDS" },
  booking: { label: "Booking.com", short: "BKG" },
  viator: { label: "Viator", short: "VTR" },
  whatsapp: { label: "WhatsApp brief", short: "WA" },
  pdf: { label: "PDF brochure", short: "PDF" },
  places: { label: "Google Places", short: "GP" },
  agent: { label: "Added by you", short: "You" },
};

/* ---------------------------------------------------------------- */
/*  Itineraries                                                      */
/* ---------------------------------------------------------------- */

export const itineraries: Itinerary[] = [
  {
    id: "santorini-honeymoon",
    title: "Santorini, Slowly",
    destination: "Santorini",
    country: "Greece",
    scene: "santorini",
    theme: "Honeymoon · Caldera views",
    startDate: "2026-08-12",
    endDate: "2026-08-19",
    travelers: 2,
    client: "Rohan & Ananya Sharma",
    status: "viewed",
    pricePerPerson: 2640,
    currency: "USD",
    views: 14,
    avgDwellMin: 6.2,
    days: [
      {
        label: "Day 1",
        title: "Arrival & the first caldera sunset",
        summary:
          "Land in Thira, settle into a cave suite carved into the cliffs of Imerovigli, and ease into island time with a sunset dinner above the caldera.",
        stops: [
          {
            id: "s1-flight",
            time: "10:35",
            type: "flight",
            title: "Athens → Santorini · A3 356",
            subtitle: "Aegean Airlines · 45 min · Nonstop",
            detail: "Arrives Thira (JTR) 11:20 · Seats 4A, 4B held",
            source: "amadeus",
          },
          {
            id: "s1-hotel",
            time: "13:00",
            type: "hotel",
            title: "Aerino Cave Suites, Imerovigli",
            subtitle: "Plunge-pool suite · caldera view · 7 nights",
            pricePerPerson: 1240,
            rating: 4.8,
            source: "booking",
            leg: { distanceKm: 9.4, minutes: 18, mode: "drive" },
          },
          {
            id: "s1-dinner",
            time: "19:30",
            type: "meal",
            title: "Sunset dinner at Anogi",
            subtitle: "Modern Cycladic · table on the rim",
            rating: 4.7,
            source: "places",
            leg: { distanceKm: 0.6, minutes: 9, mode: "walk" },
          },
        ],
      },
      {
        label: "Day 2",
        title: "Oia by morning, wine by dusk",
        summary:
          "Beat the crowds to Oia's blue domes, then trace the island's volcanic vineyards with a private tasting as the light goes gold.",
        stops: [
          {
            id: "s2-oia",
            time: "08:30",
            type: "experience",
            title: "Oia old town & Ammoudi Bay walk",
            subtitle: "Private guide · 3 hrs · photography stops",
            pricePerPerson: 85,
            rating: 4.9,
            source: "viator",
          },
          {
            id: "s2-lunch",
            time: "13:00",
            type: "meal",
            title: "Seafood lunch at Ammoudi Fish Tavern",
            subtitle: "On the water · fresh catch",
            rating: 4.6,
            source: "places",
            leg: { distanceKm: 1.2, minutes: 16, mode: "walk" },
          },
          {
            id: "s2-wine",
            time: "17:00",
            type: "experience",
            title: "Santo Wines caldera tasting",
            subtitle: "6 volcanic varietals · sunset seating",
            pricePerPerson: 62,
            rating: 4.8,
            source: "viator",
            leg: { distanceKm: 14.8, minutes: 24, mode: "drive" },
          },
        ],
      },
      {
        label: "Day 3",
        title: "Volcano sail & hot springs",
        summary:
          "A catamaran day around the caldera — Nea Kameni's crater, warm springs, and a barbecue lunch on deck.",
        stops: [
          {
            id: "s3-sail",
            time: "10:00",
            type: "experience",
            title: "Caldera catamaran cruise",
            subtitle: "Semi-private · BBQ lunch & open bar · 6 hrs",
            pricePerPerson: 180,
            rating: 4.9,
            source: "viator",
          },
          {
            id: "s3-dinner",
            time: "20:00",
            type: "meal",
            title: "Dinner at Metaxi Mas, Exo Gonia",
            subtitle: "Local taverna the chefs go to",
            rating: 4.8,
            source: "whatsapp",
            leg: { distanceKm: 11.3, minutes: 21, mode: "drive" },
          },
        ],
      },
    ],
  },
  {
    id: "bali-family",
    title: "Bali, Barefoot",
    destination: "Ubud & Uluwatu",
    country: "Indonesia",
    scene: "bali",
    theme: "Family · Jungle + surf",
    startDate: "2026-07-21",
    endDate: "2026-07-28",
    travelers: 4,
    client: "The Fernandes family",
    status: "booked",
    pricePerPerson: 1180,
    currency: "USD",
    views: 22,
    avgDwellMin: 8.4,
    days: [
      {
        label: "Day 1",
        title: "Into the jungle",
        summary:
          "Arrive in Denpasar and wind up into the rice terraces of Ubud — pool villa, frangipani, and an easy first evening.",
        stops: [
          {
            id: "b1-flight",
            time: "09:10",
            type: "flight",
            title: "Singapore → Denpasar · SQ 942",
            subtitle: "Singapore Airlines · 2h 40m · Nonstop",
            source: "amadeus",
          },
          {
            id: "b1-hotel",
            time: "13:30",
            type: "hotel",
            title: "Alamanda Ridge Villas, Ubud",
            subtitle: "2-bed pool villa · rice-field view · 4 nights",
            pricePerPerson: 420,
            rating: 4.7,
            source: "booking",
            leg: { distanceKm: 36.2, minutes: 75, mode: "drive" },
          },
        ],
      },
      {
        label: "Day 2",
        title: "Swings, temples & waterfalls",
        summary:
          "A kid-approved loop: jungle swings, the Tirta Empul water temple, and a swim under Tibumana falls.",
        stops: [
          {
            id: "b2-swing",
            time: "09:00",
            type: "experience",
            title: "Jungle swing & terrace walk",
            subtitle: "Family session · all harnesses provided",
            pricePerPerson: 35,
            rating: 4.6,
            source: "viator",
          },
          {
            id: "b2-falls",
            time: "14:00",
            type: "experience",
            title: "Tibumana waterfall swim",
            subtitle: "Quiet falls · shallow entry for kids",
            rating: 4.8,
            source: "places",
            leg: { distanceKm: 17.6, minutes: 38, mode: "drive" },
          },
        ],
      },
    ],
  },
  {
    id: "rajasthan-heritage",
    title: "Forts & Thali Trails",
    destination: "Jaipur → Jodhpur → Udaipur",
    country: "India",
    scene: "rajasthan",
    theme: "Heritage circuit · 3 cities",
    startDate: "2026-10-03",
    endDate: "2026-10-11",
    travelers: 6,
    client: "Kapoor family reunion",
    status: "sent",
    pricePerPerson: 98000,
    currency: "INR",
    views: 6,
    avgDwellMin: 3.1,
    days: [
      {
        label: "Day 1",
        title: "The Pink City",
        summary:
          "Amber Fort by elephant-free jeep, mirror-work palaces, and a rooftop thali dinner under the Hawa Mahal.",
        stops: [
          {
            id: "r1-fort",
            time: "08:30",
            type: "experience",
            title: "Amber Fort & Sheesh Mahal",
            subtitle: "Private historian guide · jeep ascent",
            pricePerPerson: 2400,
            rating: 4.9,
            source: "viator",
          },
          {
            id: "r1-hotel",
            time: "15:00",
            type: "hotel",
            title: "Haveli Dharbhawati, Jaipur",
            subtitle: "Restored 1890s haveli · 2 nights",
            pricePerPerson: 18500,
            rating: 4.8,
            source: "pdf",
            leg: { distanceKm: 11.2, minutes: 28, mode: "drive" },
          },
        ],
      },
    ],
  },
  {
    id: "kyoto-autumn",
    title: "Kyoto in Momiji",
    destination: "Kyoto",
    country: "Japan",
    scene: "kyoto",
    theme: "Autumn leaves · Tea & temples",
    startDate: "2026-11-18",
    endDate: "2026-11-24",
    travelers: 2,
    client: "Priya Nair",
    status: "draft",
    pricePerPerson: 3150,
    currency: "USD",
    views: 0,
    avgDwellMin: 0,
    days: [
      {
        label: "Day 1",
        title: "Higashiyama at first light",
        summary:
          "Kiyomizu-dera before the crowds, tea in a machiya townhouse, and maple canopies along the Philosopher's Path.",
        stops: [
          {
            id: "k1-temple",
            time: "07:00",
            type: "experience",
            title: "Kiyomizu-dera sunrise visit",
            subtitle: "Early-access walking route",
            rating: 4.9,
            source: "places",
          },
        ],
      },
    ],
  },
  {
    id: "swiss-alps",
    title: "Alps on Rails",
    destination: "Lucerne & Zermatt",
    country: "Switzerland",
    scene: "swiss",
    theme: "Scenic rail · Mountain lodges",
    startDate: "2026-09-08",
    endDate: "2026-09-15",
    travelers: 3,
    client: "Arjun Mehta +2",
    status: "viewed",
    pricePerPerson: 4480,
    currency: "USD",
    views: 9,
    avgDwellMin: 5.6,
    days: [
      {
        label: "Day 1",
        title: "Lucerne, lake-first",
        summary:
          "Old-town wander across the Chapel Bridge, then a paddle-steamer across Lake Lucerne beneath Pilatus.",
        stops: [
          {
            id: "sw1-steamer",
            time: "14:00",
            type: "experience",
            title: "Lake Lucerne paddle steamer",
            subtitle: "First-class deck · 2 hr circuit",
            pricePerPerson: 58,
            rating: 4.7,
            source: "viator",
          },
        ],
      },
    ],
  },
];

export const featuredItinerary = itineraries[0];

/* ---------------------------------------------------------------- */
/*  AI build feed (builder left rail)                                */
/* ---------------------------------------------------------------- */

export interface BuildStep {
  id: string;
  label: string;
  detail?: string;
  state: "done" | "active" | "todo";
}

export const buildSteps: BuildStep[] = [
  { id: "parse", label: "Parsed WhatsApp brief", detail: "12 preferences extracted — honeymoon, caldera view, no early mornings", state: "done" },
  { id: "flights", label: "Matched flights on Amadeus", detail: "A3 356 held · 2 fares locked for 24h", state: "done" },
  { id: "stays", label: "Shortlisted 6 stays from Booking.com", detail: "Filtered to plunge-pool suites under $190/night", state: "done" },
  { id: "experiences", label: "Curating experiences", detail: "Cross-checking Viator availability for 12–19 Aug", state: "active" },
  { id: "route", label: "Optimising daily routes", state: "todo" },
  { id: "price", label: "Pricing & margin check", state: "todo" },
];

/* ---------------------------------------------------------------- */
/*  Analytics                                                        */
/* ---------------------------------------------------------------- */

export const kpis = [
  { label: "Itineraries sent", value: "38", delta: "+9", deltaGood: true, caption: "vs. last 30 days" },
  { label: "Client view rate", value: "84%", delta: "+6 pts", deltaGood: true, caption: "opened within 48h" },
  { label: "Avg. time on itinerary", value: "5m 42s", delta: "+38s", deltaGood: true, caption: "per client session" },
  { label: "Booked from sent", value: "31%", delta: "+4 pts", deltaGood: true, caption: "12 of 38 confirmed" },
];

/** Engagement, last 6 weeks — two series: itinerary views & client sessions. */
export const engagementByWeek = [
  { week: "27 May", views: 42, sessions: 26 },
  { week: "3 Jun", views: 51, sessions: 31 },
  { week: "10 Jun", views: 47, sessions: 33 },
  { week: "17 Jun", views: 66, sessions: 41 },
  { week: "24 Jun", views: 74, sessions: 52 },
  { week: "1 Jul", views: 89, sessions: 63 },
];

/** Conversion funnel — ordered stages, rendered with the ordinal teal ramp. */
export const funnel = [
  { stage: "Sent", count: 38 },
  { stage: "Opened", count: 32 },
  { stage: "Engaged 3+ min", count: 21 },
  { stage: "Booked", count: 12 },
];

/** Revenue by destination, this quarter (single-measure bar). */
export const revenueByDestination = [
  { destination: "Santorini", revenue: 26400 },
  { destination: "Bali", revenue: 21200 },
  { destination: "Rajasthan", revenue: 14800 },
  { destination: "Swiss Alps", revenue: 13400 },
  { destination: "Kyoto", revenue: 9450 },
];

/** Live client activity feed. */
export const clientActivity = [
  { id: "a1", client: "Rohan & Ananya Sharma", action: "viewed Santorini, Slowly for 9 min", when: "12 min ago", signal: "hot" as const },
  { id: "a2", client: "Arjun Mehta", action: "shared Alps on Rails with 2 people", when: "1 h ago", signal: "hot" as const },
  { id: "a3", client: "The Fernandes family", action: "confirmed booking · $4,720 total", when: "3 h ago", signal: "booked" as const },
  { id: "a4", client: "Kapoor family reunion", action: "opened Forts & Thali Trails", when: "Yesterday", signal: "normal" as const },
  { id: "a5", client: "Priya Nair", action: "requested dates in late November", when: "Yesterday", signal: "normal" as const },
];

/** Top itineraries table. */
export const topItineraries = [
  { title: "Santorini, Slowly", client: "R. & A. Sharma", views: 14, dwell: "6m 12s", status: "viewed" as const },
  { title: "Bali, Barefoot", client: "Fernandes family", views: 22, dwell: "8m 24s", status: "booked" as const },
  { title: "Alps on Rails", client: "Arjun Mehta +2", views: 9, dwell: "5m 36s", status: "viewed" as const },
  { title: "Forts & Thali Trails", client: "Kapoor reunion", views: 6, dwell: "3m 06s", status: "sent" as const },
];
