/**
 * Curated photography (Unsplash). Centralised so swapping to your own
 * CDN or licensed library is a one-file change. Every consumer renders
 * these over a `tone-*` fallback so a failed load still looks designed.
 */

const u = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const photos = {
  /* destinations — covers */
  santorini: u("1613395877344-13d4a8e0d49e", 1600),
  santoriniWide: u("1533105079780-92b9be482077", 2000),
  bali: u("1537996194471-e657df975ab4", 1600),
  rajasthan: u("1524492412937-b28074a5d7da", 1600),
  kyoto: u("1493976040374-85c8e12f0c0e", 1600),
  swiss: u("1506905925346-21bda4d32df4", 1600),
  amalfi: u("1516483638261-f4dbaf036963", 1600),

  /* stops — thumbnails */
  planeWing: u("1436491865332-7a61a109cc05", 640),
  poolVilla: u("1571896349842-33c89424de2d", 640),
  resortPool: u("1520250497591-112f2f40a3f4", 640),
  dinnerTable: u("1414235077428-338989a2e8c0", 640),
  sailboat: u("1500514966906-fe245eea9344", 640),
  beach: u("1507525428034-b723cf961d3e", 640),
  oldTown: u("1523906834658-6e24ef2386f9", 640),
  vineyard: u("1506377247377-2a5b3b417ebb", 640),
  waterfall: u("1432405972618-c60b0225b8f9", 640),
  japanPagoda: u("1545569341-9eb8b30979d9", 640),
  mountain: u("1527668752968-14dc70a27c95", 640),
} as const;

export type PhotoKey = keyof typeof photos;
