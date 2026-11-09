export interface MediaAsset {
  id: string;
  src: string;
  thumbnail: string;
  type: "image" | "video" | "reel" | "campaign" | "BTS";
  category: "VIDEO" | "SOCIAL" | "PRODUCT" | "CAMPAIGN" | "BTS";
  project: string;
  title: string;
  year: string;
  alt: string;
}

export const mediaAssets: MediaAsset[] = [
  {
    id: "media-1",
    src: "/marketing/bento-camera.jpg",
    thumbnail: "/marketing/bento-camera.jpg",
    type: "BTS",
    category: "BTS",
    project: "Design Blast Studio",
    title: "Cinema Camera Rig & Lighting Setup",
    year: "2026",
    alt: "Professional cinema camera setup in production studio",
  },
  {
    id: "media-2",
    src: "/marketing/bento-filmcrew.jpg",
    thumbnail: "/marketing/bento-filmcrew.jpg",
    type: "campaign",
    category: "CAMPAIGN",
    project: "Brand Commercials",
    title: "High-End Commercial Campaign Shoot",
    year: "2026",
    alt: "Film production crew recording commercial video",
  },
  {
    id: "media-3",
    src: "/marketing/bento-editing.jpg",
    thumbnail: "/marketing/bento-editing.jpg",
    type: "video",
    category: "VIDEO",
    project: "Post Production",
    title: "Editorial Timeline Color & Sound Design",
    year: "2026",
    alt: "Video editing suite dual monitor timeline",
  },
  {
    id: "media-4",
    src: "/marketing/bento-product.jpg",
    thumbnail: "/marketing/bento-product.jpg",
    type: "image",
    category: "PRODUCT",
    project: "Luxury Beverages",
    title: "Commercial Studio Product Shoot",
    year: "2026",
    alt: "Commercial product photography of premium glass bottle",
  },
  {
    id: "media-5",
    src: "/marketing/bento-team.jpg",
    thumbnail: "/marketing/bento-team.jpg",
    type: "BTS",
    category: "BTS",
    project: "Creative Direction",
    title: "Agency Creative Directors & Tech Leaders",
    year: "2026",
    alt: "Creative team collaborating in agency office",
  },
  {
    id: "media-6",
    src: "/hero/hero-social.jpg",
    thumbnail: "/hero/hero-social.jpg",
    type: "reel",
    category: "SOCIAL",
    project: "Viral Creator Network",
    title: "10M+ Views Viral Creator Campaign",
    year: "2026",
    alt: "Smartphone displaying viral social media reel",
  },
  {
    id: "media-7",
    src: "/projects/sharma/desktop.jpg",
    thumbnail: "/projects/sharma/desktop.jpg",
    type: "campaign",
    category: "CAMPAIGN",
    project: "Sharma Packagings",
    title: "B2B Social Lead Generation Campaign",
    year: "2026",
    alt: "Industrial packaging social media reel showcase",
  },
  {
    id: "media-8",
    src: "/video/showreel-poster.jpg",
    thumbnail: "/video/showreel-poster.jpg",
    type: "video",
    category: "VIDEO",
    project: "Agency Showreel",
    title: "Design Blast Labs Annual Showreel",
    year: "2026",
    alt: "Creative director presenting work process in studio",
  },
];
