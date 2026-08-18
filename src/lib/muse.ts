import { products, type Product } from "@/lib/data";

// ---- deterministic "generation" — same input always yields the same result ----

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rng: () => number, arr: T[]): T {
  return arr[Math.floor(rng() * arr.length)];
}

function pickN<T>(rng: () => number, arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(rng() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

// ---- vibe vocabulary ----

interface VibeGroup {
  keywords: string[];
  adjectives: string[];
  productTags: string[];
  swatchNames: string[];
  phrase: string;
}

const VIBE_GROUPS: VibeGroup[] = [
  {
    keywords: ["cozy", "cosy", "warm", "soft", "hygge", "blanket", "comfort", "snug"],
    adjectives: ["cocooning", "soft-shouldered", "unhurried"],
    productTags: ["oversized", "gift", "beginner-friendly"],
    swatchNames: ["Warm White", "Oat"],
    phrase: "built to disappear into on a slow afternoon",
  },
  {
    keywords: ["moody", "dark", "night", "noir", "shadow", "villain", "black"],
    adjectives: ["low-lit", "severe", "quietly dramatic"],
    productTags: ["charcoal", "menswear", "cables"],
    swatchNames: ["Charcoal", "Ink Blue"],
    phrase: "with a silhouette that reads more shadow than sweater",
  },
  {
    keywords: ["golden", "sun", "summer", "beach", "warm light", "gold"],
    adjectives: ["sun-warmed", "loose-limbed", "unbothered"],
    productTags: ["quick-knit", "neutral"],
    swatchNames: ["Oat", "Clay"],
    phrase: "the kind of piece that photographs best at 6pm",
  },
  {
    keywords: ["rain", "fall", "autumn", "grey", "gray", "overcast", "copenhagen", "scandi", "scandinavian"],
    adjectives: ["weather-proof", "quietly structured", "practical"],
    productTags: ["cables", "charcoal", "layering"],
    swatchNames: ["Stone", "Ink Blue"],
    phrase: "made for walking somewhere with no real destination",
  },
  {
    keywords: ["minimal", "clean", "sharp", "structured", "classic", "tailored"],
    adjectives: ["clean-lined", "considered", "unfussy"],
    productTags: ["neutral", "layering", "menswear"],
    swatchNames: ["Warm White", "Stone"],
    phrase: "with none of the shape sacrificed for comfort",
  },
  {
    keywords: ["wild", "bold", "loud", "maximal", "texture", "chunky", "villain era", "main character"],
    adjectives: ["oversized-on-purpose", "unmissable", "textural"],
    productTags: ["oversized", "cables"],
    swatchNames: ["Clay", "Dusty Rose"],
    phrase: "loud enough that someone stops you to ask who made it",
  },
  {
    keywords: ["snow", "winter", "cold", "frost", "december", "holiday"],
    adjectives: ["insulating", "high-necked", "dense-stitched"],
    productTags: ["cables", "gift"],
    swatchNames: ["Charcoal", "Warm White"],
    phrase: "dense enough to actually earn its keep in January",
  },
  {
    keywords: ["quiet", "calm", "quiet luxury", "sunday", "slow", "gentle"],
    adjectives: ["understated", "unhurried", "soft-spoken"],
    productTags: ["neutral", "beginner-friendly"],
    swatchNames: ["Oat", "Stone"],
    phrase: "nothing about it is trying too hard",
  },
  {
    keywords: ["pink", "blush", "romantic", "rose", "soft pink"],
    adjectives: ["blush-toned", "soft-edged", "gentle"],
    productTags: ["neutral", "gift"],
    swatchNames: ["Dusty Rose", "Warm White"],
    phrase: "warmer than the usual neutral wardrobe allows",
  },
  {
    keywords: ["green", "sage", "forest", "countryside", "moss", "earthy"],
    adjectives: ["moss-toned", "grounded", "textural"],
    productTags: ["cables", "layering"],
    swatchNames: ["Sage", "Stone"],
    phrase: "closer to landscape than fashion color",
  },
];

const SWATCHES: { name: string; hex: string }[] = [
  { name: "Warm White", hex: "#F6F1E9" },
  { name: "Oat", hex: "#E8DFCD" },
  { name: "Stone", hex: "#C9C0B1" },
  { name: "Charcoal", hex: "#2A2622" },
  { name: "Clay", hex: "#B6572F" },
  { name: "Dusty Rose", hex: "#C98F82" },
  { name: "Sage", hex: "#8A9A7E" },
  { name: "Ink Blue", hex: "#3D4A5C" },
];

const NAME_ADJECTIVES = [
  "Quiet", "Slow", "Golden", "Blue", "Soft", "Wild", "Bare", "Warm",
  "Late", "First", "Low", "Long", "Still", "Faded", "Deep", "Pale",
];

const NAME_NOUNS = [
  "Hush", "Drift", "Fold", "Weight", "Ease", "Glow", "Static", "Bloom",
  "Haze", "Wake", "Hour", "Field", "Grain", "Tide", "Dusk", "Thread",
];

export const SUGGESTION_CHIPS = [
  "oversized & cozy",
  "moody minimalist",
  "golden hour walk",
  "first snow",
  "quiet Sunday",
  "structured & sharp",
];

export interface MuseResult {
  seed: number;
  name: string;
  note: string;
  palette: { name: string; hex: string }[];
  product: Product;
  matchedVibes: string[];
}

export function generateMuse(rawInput: string): MuseResult {
  const input = rawInput.trim().toLowerCase();
  const seed = hashString(input || "purl-default-muse");
  const rng = mulberry32(seed);

  const matched = VIBE_GROUPS.filter((g) =>
    g.keywords.some((k) => input.includes(k))
  );

  const activeGroups = matched.length > 0 ? matched : pickN(rng, VIBE_GROUPS, 2);

  // score products by tag overlap with active vibe groups
  const scored = products
    .filter((p) => p.category !== "Yarn")
    .map((p) => {
      const score = activeGroups.reduce((sum, g) => {
        const hits = (p.tags ?? []).filter((t) => g.productTags.includes(t)).length;
        return sum + hits;
      }, 0);
      return { product: p, score: score + rng() * 0.01 };
    })
    .sort((a, b) => b.score - a.score);

  const product = scored[0]?.product ?? products[0];

  // Draw adjectives and the phrase from a single primary group so the
  // description stays internally consistent (mixing across groups can
  // produce jarring pairs, e.g. "quietly dramatic" next to "loud enough").
  const primaryGroup = pick(rng, activeGroups);
  const [adj1, adj2] = pickN(rng, primaryGroup.adjectives, 2);
  const phrase = primaryGroup.phrase;

  const name = `The ${pick(rng, NAME_ADJECTIVES)} ${pick(rng, NAME_NOUNS)}`;

  // Every real product name already starts with "The" (The Cloud Cardigan,
  // The Harbor Sweater, ...), so don't prefix another article or it reads
  // "the The Harbor Sweater".
  const note = matched.length
    ? `Picture something ${adj1} and ${adj2} — ${phrase}. It's not in the shop yet, but ${product.name} is the closest thing we've made to it so far.`
    : `No vibe yet, so the Muse picked one for you: ${adj1}, ${adj2}, ${phrase}. ${product.name} is the closest match in the current collection.`;

  const swatchNameSet = new Set(activeGroups.flatMap((g) => g.swatchNames));
  const preferredSwatches = SWATCHES.filter((s) => swatchNameSet.has(s.name));
  const remaining = SWATCHES.filter((s) => !swatchNameSet.has(s.name));
  const palette = [
    ...preferredSwatches,
    ...pickN(rng, remaining, Math.max(0, 3 - preferredSwatches.length)),
  ].slice(0, 3);

  return {
    seed,
    name,
    note,
    palette,
    product,
    matchedVibes: activeGroups.map((g) => g.keywords[0]),
  };
}
