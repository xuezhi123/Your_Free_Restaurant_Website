export interface SanityImage {
  asset?: { _id: string; url: string };
  alt?: string;
}

export interface PaddingSettings {
  logoPadding?: number;
  sectionPadding?: number;
}

export interface SiteSettings {
  restaurantName: string;
}

export interface InfoData {
  logo?: SanityImage;
  phone?: string;
  email?: string;
  address?: string;
  googleMapsUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  openingHours?: string;
  contactTitle?: string;
  contactNavTitle?: string;
}

export interface MenuTextData {
  order?: number;
  titleNl?: string;
  navTitle?: string;
  textNl?: string;
}

export interface AboutData {
  order?: number;
  titleNl?: string;
  navTitle?: string;
  subtitleNl?: string;
  textNl?: string;
  imageLandscape?: SanityImage;
  imagePortrait?: SanityImage;
}

export interface TakeawayData {
  order?: number;
  titleNl?: string;
  navTitle?: string;
  subtitleNl?: string;
  textNl?: string;
  image?: SanityImage;
}

export interface CateringData {
  order?: number;
  titleNl?: string;
  navTitle?: string;
  subtitleNl?: string;
  textNl?: string;
  image?: SanityImage;
}

export interface GiftCardData {
  order?: number;
  titleNl?: string;
  navTitle?: string;
  subtitleNl?: string;
  textNl?: string;
  image?: SanityImage;
}

export interface GalleryData {
  order?: number;
  title: string;
  navTitle?: string;
  subtitleNl?: string;
  images?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
    caption?: string;
  }[];
}
