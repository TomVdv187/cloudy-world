// ─── Brand ───────────────────────────────────────────────
export const brand = {
  name: "Cloudy World",
  tagline: "Where atmosphere meets attire",
  manifesto:
    "We believe fashion should feel like weather — inevitable, enveloping, and quietly powerful. Cloudy World is born from the space between sky and skin, crafting garments that move like mist and endure like stone.",
  manifestoExtended:
    "Every thread we weave carries the weight of intention and the lightness of air. We don't chase trends — we observe the world above and translate its language into cloth. Our collections are forecasts of feeling, designed for those who dress not to be seen, but to be felt.",
  founded: 2021,
  headquarters: "Copenhagen, Denmark",
};

// ─── Navigation ──────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Collections ─────────────────────────────────────────
export interface CollectionPiece {
  name: string;
  type: string;
  price: number;
}

export interface Collection {
  name: string;
  slug: string;
  season: string;
  year: number;
  tagline: string;
  description: string;
  longDescription: string;
  pieces: CollectionPiece[];
  gradient: string;
  accent: string;
}

export const collections: Collection[] = [
  {
    name: "Cirrus",
    slug: "cirrus",
    season: "Spring / Summer",
    year: 2026,
    tagline: "Wisp-light layers for the luminous",
    description:
      "Ethereal silhouettes inspired by the highest, most delicate cloud formations. Cirrus is clothing that barely touches — gossamer knits, translucent weaves, and cuts that float.",
    longDescription:
      "The Cirrus collection draws from the ice-crystal elegance of high-altitude clouds. Each piece is engineered for weightlessness — using micro-denier fabrics, laser-cut seams, and zero-gravity draping techniques developed in our Copenhagen atelier. The palette whispers: ivory, pale lavender, and silver-grey, punctuated by moments of arctic blue.",
    pieces: [
      { name: "Altocirrus Drape Coat", type: "Outerwear", price: 890 },
      { name: "Filament Knit Top", type: "Knitwear", price: 340 },
      { name: "Vapor Pleated Trousers", type: "Bottoms", price: 420 },
      { name: "Ice Crystal Sheer Blouse", type: "Tops", price: 280 },
      { name: "Wisp Silk Midi Skirt", type: "Bottoms", price: 380 },
      { name: "Halo Oversized Scarf", type: "Accessories", price: 190 },
    ],
    gradient: "from-slate-800 via-blue-950 to-indigo-950",
    accent: "#c4d4e8",
  },
  {
    name: "Cumulus",
    slug: "cumulus",
    season: "Autumn / Winter",
    year: 2025,
    tagline: "Sculptural volume, grounded comfort",
    description:
      "Bold, billowing forms that marry architectural structure with cloud-soft comfort. Cumulus is where drama meets the everyday — oversized coats, sculpted knits, and wrapped silhouettes.",
    longDescription:
      "Cumulus takes its cues from the towering, sculptural beauty of cumulonimbus formations. Volume is the vocabulary here: oversized cocoon coats, chunky cable knits with exaggerated proportions, and layered wrapping techniques inspired by storm-cloud stacking. Fabrics are substantial — boiled wool, double-faced cashmere, quilted organic cotton — yet every piece moves with surprising fluidity.",
    pieces: [
      { name: "Thunderhead Cocoon Coat", type: "Outerwear", price: 1240 },
      { name: "Anvil Cable Knit Sweater", type: "Knitwear", price: 520 },
      { name: "Billow Wide-Leg Pant", type: "Bottoms", price: 460 },
      { name: "Mammatus Quilted Vest", type: "Outerwear", price: 680 },
      { name: "Updraft Wrap Dress", type: "Dresses", price: 720 },
      { name: "Nimbostratus Layered Scarf", type: "Accessories", price: 240 },
    ],
    gradient: "from-slate-800 via-gray-900 to-zinc-900",
    accent: "#9fb3c8",
  },
  {
    name: "Nimbus",
    slug: "nimbus",
    season: "Resort",
    year: 2026,
    tagline: "Storm-born elegance, unapologetically bold",
    description:
      "The darkest clouds carry the most rain. Nimbus is our most daring collection — moody palettes, unconventional cuts, and fabrics that shift and shimmer like light through storm clouds.",
    longDescription:
      "Nimbus is the storm collection. Inspired by the raw power and beauty of rain-bearing clouds, every piece channels intensity — deep charcoal, midnight navy, and electric violet cut through with flashes of silver. Technical fabrics meet couture construction: iridescent coated linens, reflective thread embroidery, and water-resistant silks that transform in the rain. This is fashion that doesn't hide from the weather — it becomes it.",
    pieces: [
      { name: "Tempest Trench Coat", type: "Outerwear", price: 1480 },
      { name: "Lightning Seam Blazer", type: "Tailoring", price: 960 },
      { name: "Downpour Iridescent Pant", type: "Bottoms", price: 540 },
      { name: "Storm Cell Corset Top", type: "Tops", price: 420 },
      { name: "Rain Shadow Gown", type: "Dresses", price: 2200 },
      { name: "Cloudbreak Chain Necklace", type: "Accessories", price: 320 },
    ],
    gradient: "from-slate-900 via-purple-950 to-slate-800",
    accent: "#b8a9d4",
  },
];

// ─── DNA Pillars ─────────────────────────────────────────
export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export const dnaPillars: Pillar[] = [
  {
    title: "Innovation",
    description:
      "We push the boundaries of textile technology, developing fabrics that mimic the weightlessness of clouds while maintaining structural integrity.",
    icon: "Lightbulb",
  },
  {
    title: "Sustainability",
    description:
      "Every garment is a promise to the planet. From deadstock fabrics to zero-waste pattern cutting, our process is designed with the earth in mind.",
    icon: "Leaf",
  },
  {
    title: "Craftsmanship",
    description:
      "Each piece passes through the hands of master artisans in our Copenhagen atelier, where tradition meets the avant-garde.",
    icon: "Scissors",
  },
  {
    title: "Community",
    description:
      "Fashion is a conversation. We build with our community, listening to the people who wear our clothes and the artisans who make them.",
    icon: "Users",
  },
];

// ─── Sustainability Stats ────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  description: string;
}

export const sustainabilityStats: Stat[] = [
  {
    value: "87%",
    label: "Recycled Materials",
    description: "Of our fabrics come from recycled or deadstock sources",
  },
  {
    value: "62%",
    label: "Water Saved",
    description: "Reduction in water usage compared to industry standard",
  },
  {
    value: "2027",
    label: "Carbon Neutral",
    description: "Our target year for full carbon neutrality across operations",
  },
  {
    value: "Zero",
    label: "Waste to Landfill",
    description: "All production waste is recycled, composted, or upcycled",
  },
];

// ─── Marquee Words ───────────────────────────────────────
export const marqueeWords = [
  "Atmosphere",
  "Ethereal",
  "Sustainable",
  "Crafted",
  "Timeless",
  "Cloud-Born",
  "Avant-Garde",
  "Conscious",
  "Elevated",
  "Sculptural",
];

// ─── About / Story ───────────────────────────────────────
export const story = {
  headline: "Born from the Sky",
  intro:
    "Cloudy World emerged from a simple observation: the most beautiful garments move like weather. Founded in 2021 by textile designer Elara Voss and architect Kai Lindström, the brand began in a converted greenhouse on the outskirts of Copenhagen.",
  body: [
    "What started as an experiment in translating atmospheric phenomena into fabric soon became a philosophy. Elara's background in biomimetic textiles and Kai's understanding of structural form created a design language unlike anything in contemporary fashion.",
    "Our first collection, 'Stratus', debuted at Copenhagen Fashion Week to critical acclaim. Since then, we've grown from a two-person studio to a team of 40, but the greenhouse spirit remains — every piece begins with observation, wonder, and a willingness to let the sky dictate the design.",
    "Today, Cloudy World operates from a solar-powered atelier in the Nordhavn district, producing two main collections and one resort collection annually. Our commitment to slow fashion means we produce in limited runs, ensuring quality over quantity.",
  ],
};

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    year: 2021,
    title: "The Greenhouse",
    description:
      "Elara Voss and Kai Lindström found Cloudy World in a converted greenhouse outside Copenhagen, producing their first experimental pieces.",
  },
  {
    year: 2022,
    title: "Stratus Debut",
    description:
      "First collection 'Stratus' premieres at Copenhagen Fashion Week. The show, set in a fog-filled warehouse, earns critical acclaim.",
  },
  {
    year: 2023,
    title: "Nordhavn Atelier",
    description:
      "The brand moves to a purpose-built, solar-powered atelier in Copenhagen's Nordhavn district. Team grows to 25.",
  },
  {
    year: 2024,
    title: "Global Stockists",
    description:
      "Cloudy World garments appear in 40+ select retailers worldwide. Partnership with Hyundai on a capsule collection merging fashion and mobility.",
  },
  {
    year: 2025,
    title: "Cumulus Collection",
    description:
      "Launch of the Cumulus AW25 line, featuring our proprietary CloudWeave™ fabric — 100% recycled, endlessly soft.",
  },
  {
    year: 2026,
    title: "Cirrus & Nimbus",
    description:
      "Two new collections push boundaries: Cirrus explores weightlessness, while Nimbus channels the power of storms.",
  },
];

export interface Value {
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    title: "Slow over Fast",
    description:
      "We produce in limited runs, refusing the pressure of constant newness. Our garments are designed to outlast trends.",
  },
  {
    title: "Transparency",
    description:
      "Every Cloudy World piece carries a full provenance tag — from the origin of its fiber to the hands that stitched it.",
  },
  {
    title: "Local First",
    description:
      "90% of our production happens within 200km of our atelier. We invest in local artisans and suppliers.",
  },
  {
    title: "Circular Design",
    description:
      "Our garments are designed for disassembly. When a piece reaches end-of-life, return it — we'll recycle or upcycle every component.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Elara Voss",
    role: "Co-Founder & Creative Director",
    bio: "Textile alchemist with a background in biomimetic materials. Elara sees fabric as a living system — responsive, adaptive, and deeply connected to the natural world.",
  },
  {
    name: "Kai Lindström",
    role: "Co-Founder & Design Director",
    bio: "Trained as an architect, Kai brings structural thinking to fashion. His approach treats each garment as a small building — engineered for beauty, comfort, and longevity.",
  },
  {
    name: "Maren Dahl",
    role: "Head of Sustainability",
    bio: "Environmental scientist turned fashion advocate. Maren ensures every decision — from fiber sourcing to shipping — aligns with our planetary commitments.",
  },
  {
    name: "Théo Roux",
    role: "Atelier Manager",
    bio: "Master tailor with 20 years of couture experience. Théo leads our team of artisans, bridging traditional craftsmanship with experimental techniques.",
  },
];

// ─── Contact / Locations ─────────────────────────────────
export interface Location {
  city: string;
  type: string;
  address: string;
  hours: string;
  email: string;
}

export const locations: Location[] = [
  {
    city: "Copenhagen",
    type: "Atelier & Flagship",
    address: "Århusgade 88, 2150 Nordhavn, Copenhagen, Denmark",
    hours: "Mon–Sat 10:00–18:00",
    email: "copenhagen@cloudyworld.com",
  },
  {
    city: "Stockholm",
    type: "Showroom",
    address: "Krukmakargatan 24, 118 51 Stockholm, Sweden",
    hours: "Tue–Fri 11:00–17:00",
    email: "stockholm@cloudyworld.com",
  },
  {
    city: "Tokyo",
    type: "Pop-Up Studio",
    address: "3-14-5 Minami-Aoyama, Minato-ku, Tokyo 107-0062",
    hours: "Wed–Sun 12:00–20:00",
    email: "tokyo@cloudyworld.com",
  },
];

// ─── Social Links ────────────────────────────────────────
export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
];

// ─── Footer Links ────────────────────────────────────────
export const footerLinks = {
  brand: [
    { label: "Our Story", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Sustainability", href: "/about#values" },
    { label: "Careers", href: "#" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Shipping & Returns", href: "#" },
    { label: "Size Guide", href: "#" },
    { label: "Care Instructions", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Preferences", href: "#" },
  ],
};
