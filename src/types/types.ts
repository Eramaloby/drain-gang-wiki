export interface Artist {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  birthYear: number;
  birthPlace: string;
  socials?: {
    instagram?: string;
    twitter?: string;
    soundcloud?: string;
    [key: string]: string | undefined;
  };
}
