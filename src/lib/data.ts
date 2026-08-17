export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type ProductCategory = "Pattern" | "Kit" | "Yarn" | "Finished Piece";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  compareAt?: number;
  difficulty: Difficulty;
  hours: string;
  materials: string[];
  sizes?: string;
  blurb: string;
  description: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  limited?: boolean;
  bestseller?: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "the-cloud-cardigan",
    name: "The Cloud Cardigan",
    category: "Pattern",
    price: 28,
    difficulty: "Intermediate",
    hours: "~18 hrs",
    materials: ["4 skeins DK-weight merino", "5mm circular needles", "6 buttons"],
    sizes: "XS–3XL, fully graded",
    blurb: "An oversized cocoon cardigan with a collar you can drown in.",
    description:
      "The pattern that started it all. An exaggerated shawl collar, dropped shoulders, and a drape built to be lived in — over slip dresses, under coats, alone with nothing else. Written in our signature clear, visual format with a full video walkthrough for every construction step.",
    image: "/images/product-cloud-cardigan.jpg",
    imageAlt:
      "Editorial photograph of a woman wearing an oversized ivory hand-knitted cardigan with a dramatic collar",
    tags: ["oversized", "cardigan", "neutral"],
    bestseller: true,
  },
  {
    id: "p2",
    slug: "the-harbor-sweater",
    name: "The Harbor Sweater",
    category: "Pattern",
    price: 26,
    difficulty: "Advanced",
    hours: "~24 hrs",
    materials: ["6 skeins Aran-weight wool", "4.5mm needles", "Cable needle"],
    sizes: "XS–3XL, fully graded",
    blurb: "Traditional guernsey cables, minus the traditional fit.",
    description:
      "We took the traditional guernsey cable and gave it new proportions: boxy body, cropped hem, a neckline that sits exactly where it should. This one takes patience. It rewards it — a piece you'll wear in rotation for a decade.",
    image: "/images/product-harbor-sweater.jpg",
    imageAlt:
      "Editorial photograph of a man wearing a charcoal chunky cable-knit sweater",
    tags: ["cables", "menswear", "charcoal"],
  },
  {
    id: "p3",
    slug: "the-sable-scarf",
    name: "The Sable Scarf",
    category: "Pattern",
    price: 16,
    difficulty: "Beginner",
    hours: "~5 hrs",
    materials: ["2 skeins bulky-weight wool", "8mm needles"],
    blurb: "One skein, one weekend, one very good scarf.",
    description:
      "Our most-gifted pattern. A single garter-and-rib panel that teaches you tension, edges, and blocking — and finishes into something you'll actually reach for every day of winter.",
    image: "/images/product-scarf-detail.jpg",
    imageAlt: "Close-up of a chunky terracotta knitted scarf worn wrapped around the neck",
    tags: ["beginner", "scarf", "quick-knit"],
    bestseller: true,
  },
  {
    id: "p4",
    slug: "the-field-vest",
    name: "The Field Vest",
    category: "Pattern",
    price: 22,
    difficulty: "Intermediate",
    hours: "~14 hrs",
    materials: ["3 skeins worsted-weight wool", "5mm needles"],
    sizes: "XS–3XL, fully graded",
    blurb: "A cropped vest built for layering over everything.",
    description:
      "The piece your outfit was missing. A slightly cropped, wide-armhole vest designed to sit over shirts, under blazers, or alone with nothing but denim. Deceptively simple — the whole thing is stockinette and one clean rib.",
    image: "/images/product-styling-detail.jpg",
    imageAlt: "Detail shot of a hand knitted vest with gold jewelry",
    tags: ["layering", "vest", "quick-knit"],
  },
  {
    id: "k1",
    slug: "weekend-sweater-kit",
    name: "The Weekend Sweater Kit",
    category: "Kit",
    price: 129,
    compareAt: 168,
    difficulty: "Beginner",
    hours: "~10 hrs",
    materials: [
      "5 skeins premium merino (dyed in small batch)",
      "Bamboo circular needles",
      "Printed pattern booklet + digital access",
      "Stitch markers & tapestry needle",
      "PURL box + care card",
    ],
    sizes: "XS–3XL",
    blurb: "Everything you need. Nothing you don't. One weekend to a wearable sweater.",
    description:
      "The easiest way into knitting a garment you'll actually wear. We source the yarn, grade the pattern, and package it so precisely that the only decision left is your color. Includes access to our full video course for this pattern.",
    image: "/images/product-kit-flatlay.jpg",
    imageAlt: "Flat lay of a premium knitting kit with yarn skeins, needles, and a pattern booklet",
    tags: ["kit", "beginner-friendly", "gift"],
    bestseller: true,
  },
  {
    id: "k2",
    slug: "first-stitch-kit",
    name: "The First Stitch Kit",
    category: "Kit",
    price: 59,
    difficulty: "Beginner",
    hours: "~6 hrs",
    materials: [
      "2 skeins bulky wool",
      "Beginner needles",
      "Illustrated learn-to-knit guide",
      "Access to our foundations video course",
    ],
    blurb: "Never held a needle? This is the twenty-minute-a-night entry point.",
    description:
      "Designed with a pattern tutor, not just a pattern. Cast on, knit, purl, bind off, block — five skills, one finished cowl, zero overwhelm. The single highest-rated product we make.",
    image: "/images/product-hands-knitting.jpg",
    imageAlt: "Close-up of hands knitting with wooden needles and cream chunky yarn",
    tags: ["kit", "beginner", "learn-to-knit"],
  },
  {
    id: "y1",
    slug: "merino-skein-set",
    name: "Merino Skein — Core Palette",
    category: "Yarn",
    price: 15,
    difficulty: "Beginner",
    hours: "Per skein",
    materials: ["100% mulesing-free merino", "100g / 200m", "Small-batch dyed"],
    blurb: "Our house yarn — the base weight for every PURL pattern.",
    description:
      "Milled in small batches and dyed in our nine-color core palette: warm white, oat, stone, charcoal, and five seasonal accents. Soft enough for next-to-skin wear, sturdy enough to hold a cable.",
    image: "/images/product-yarn-gradient.jpg",
    imageAlt: "Overhead photo of six skeins of yarn in a tonal gradient from cream to terracotta to charcoal",
    tags: ["yarn", "merino", "core-palette"],
  },
];

export interface Testimonial {
  name: string;
  handle: string;
  quote: string;
  project: string;
  image: string;
  imageAlt: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marisol Cintron",
    handle: "@marisolknits",
    quote:
      "I told myself I'd never finish a sweater. Six weeks later I was wearing the Harbor out to dinner and someone asked which designer made it.",
    project: "The Harbor Sweater",
    image: "/images/community-1.jpg",
    imageAlt: "Woman wearing an oversized cream knit sweater walking down a city street",
  },
  {
    name: "Dev Achariya",
    handle: "@devknits",
    quote:
      "I'd bought and returned two other 'beginner' kits before this one — always got stuck at the armhole and gave up. The video for the Field Vest actually shows you the ugly part in real time. I finished it on a Tuesday and wore it that Friday.",
    project: "The Field Vest",
    image: "/images/community-2.jpg",
    imageAlt: "Man wearing a textured knit vest sitting at a café table",
  },
  {
    name: "Ingrid Solberg",
    handle: "@ingridmakes",
    quote:
      "This is the first knitting brand that's ever made me feel like I was buying fashion, not a craft kit. The Sable Scarf sold out before I finished mine.",
    project: "The Sable Scarf",
    image: "/images/community-3.jpg",
    imageAlt: "Woman wearing a chunky terracotta scarf wrapped around her neck on the street",
  },
];

export interface JournalPost {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  body: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "how-to-style-an-oversized-knit",
    title: "How To Style An Oversized Knit, According To Us",
    dek: "Five ways to wear one sweater without ever repeating an outfit.",
    category: "Styling",
    readTime: "4 min read",
    image: "/images/editorial-1.jpg",
    imageAlt: "Woman in an oversized cream knit sweater dress standing in a concrete stairwell",
    body: [
      "The most common question we get isn't 'how do I knit this' — it's 'what do I wear it with.' Fair. An oversized piece is a bigger styling commitment than a fitted one, and it's worth getting right.",
      "Start by treating volume as a trade. If the top half is big, anchor the bottom: a slim trouser, a straight denim, a pencil skirt. The Cloud Cardigan over a slip dress works precisely because the dress does the shaping the cardigan won't.",
      "Layer it as outerwear, not just knitwear. Our favorite cold-weather look is a heavy cardigan over a tailored coat, half on, sleeves loose — it reads intentional, not accidental.",
      "Belt it. A simple leather belt cinched over an oversized sweater turns three yards of wool into a silhouette. It's the single highest-leverage styling trick in this entire article.",
      "Finally: let the hands and neck do the talking. Push sleeves up, add one good ring, leave the collar open. Oversized knitwear photographs best when it looks like you almost didn't try.",
    ],
  },
  {
    slug: "return-of-handmade-fashion",
    title: "The Quiet Return Of Handmade Fashion",
    dek: "Why the most interesting thing in your closet next year might be something you made yourself.",
    category: "Culture",
    readTime: "6 min read",
    image: "/images/editorial-texture.jpg",
    imageAlt: "Macro texture photograph of a cream cable knit stitch",
    body: [
      "Fast fashion made everything available and nothing interesting. When any silhouette can be copied in eleven days and sold for eleven dollars, the thing that becomes valuable isn't the garment — it's the making of it.",
      "We're watching a generation raised on drop culture and resale apps discover that the rarest flex isn't a limited sneaker, it's a sweater nobody else has, because nobody else made it.",
      "This isn't nostalgia for your grandmother's craft room. It's the same instinct that built the vinyl revival and the sourdough years: a hunger for something slower than a notification, that takes real hours and leaves real proof of them.",
      "Knitting fits this moment better than almost any other craft, because the output is wearable. You don't end up with a shelf object — you end up in a piece people stop you on the street to ask about. That's the whole thesis behind PURL.",
    ],
  },
  {
    slug: "five-patterns-worth-making",
    title: "5 Patterns Worth Clearing Your Weekend For",
    dek: "Our most-finished designs, ranked by how often they get worn on repeat.",
    category: "Patterns",
    readTime: "5 min read",
    image: "/images/product-cloud-cardigan.jpg",
    imageAlt: "Editorial photograph of a woman wearing an oversized ivory knitted cardigan",
    body: [
      "We track finishing rates on every pattern we publish — the percentage of buyers who actually complete the piece. It's the metric we care about most, because a pattern nobody finishes isn't a good pattern, however it photographs.",
      "The Cloud Cardigan tops the list, and it isn't close. Simple stockinette body, one dramatic collar, forgiving fit — it's the pattern most likely to make you believe you can knit a garment.",
      "The Sable Scarf is next, mostly because it's finished in a single weekend and teaches four foundational skills without feeling like homework.",
      "The Field Vest surprises people. No sleeves to set in, no shaping to fear — just two flat panels and a clean seam, worn constantly once it's done.",
      "The Weekend Sweater Kit rounds out the list for a simple reason: when the yarn is already chosen and the pattern is already graded to your size, the only thing left between you and a finished sweater is time.",
    ],
  },
  {
    slug: "knitwear-trends-this-season",
    title: "What's Actually Trending In Knitwear This Season",
    dek: "Reading the runways so you know exactly what to cast on next.",
    category: "Trends",
    readTime: "5 min read",
    image: "/images/editorial-2.jpg",
    imageAlt: "Woman in a dramatic terracotta oversized turtleneck sweater in a field at dusk",
    body: [
      "Runway knitwear this season swung hard toward proportion over pattern — exaggerated turtlenecks, dropped shoulders, hems that hit mid-thigh. Texture is doing the decorative work that used to belong to intarsia and color-blocking.",
      "Color moved earthward. Warm terracotta, oat, and deep charcoal replaced the cool pastels that dominated knitwear for the last few years — a palette that reads more 'considered wardrobe' than 'craft project.'",
      "Cropped silhouettes paired with high-waisted everything remain a constant, but the biggest shift is texture-on-texture: a cabled sweater over a ribbed base layer, two different stitch patterns doing the work one used to.",
      "Our take: buy fewer, more textural pieces in a tight neutral-plus-one-accent palette, and let proportion — not color — be where you take the risk.",
    ],
  },
];

export interface QuizQuestion {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "experience",
    question: "What's your experience level?",
    options: [
      { label: "Never knitted before", value: "beginner" },
      { label: "I know the basics", value: "intermediate" },
      { label: "I've finished garments before", value: "advanced" },
    ],
  },
  {
    id: "time",
    question: "How much time do you have?",
    options: [
      { label: "A weekend", value: "short" },
      { label: "A few weeks, on and off", value: "medium" },
      { label: "I'm not in a rush", value: "long" },
    ],
  },
  {
    id: "style",
    question: "What's your style?",
    options: [
      { label: "Oversized & neutral", value: "oversized" },
      { label: "Structured & classic", value: "structured" },
      { label: "Bold & textural", value: "bold" },
    ],
  },
  {
    id: "budget",
    question: "What's your budget?",
    options: [
      { label: "Under $30", value: "low" },
      { label: "$30–$100", value: "mid" },
      { label: "$100+, I want the full kit", value: "high" },
    ],
  },
];

export const quizResultProduct = products.find((p) => p.slug === "the-cloud-cardigan")!;
