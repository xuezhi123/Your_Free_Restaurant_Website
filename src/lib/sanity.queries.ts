export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  restaurantName
}`;

export const infoQuery = `*[_type == "info"][0]{
  logo{
    asset->{_id, url},
    alt
  },
  phone,
  email,
  address,
  googleMapsUrl,
  facebookUrl,
  instagramUrl,
  openingHours,
  contactTitle,
  contactNavTitle
}`;

export const paddingSettingsQuery = `*[_type == "paddingSettings"][0]{
  logoPadding,
  sectionPadding
}`;

export const menuTextQuery = `*[_type == "menuText"][0]{
  order,
  titleNl,
  navTitle,
  textNl
}`;

export const aboutQuery = `*[_type == "about"][0]{
  order,
  titleNl,
  navTitle,
  subtitleNl,
  textNl,
  imageLandscape{
    asset->{_id, url},
    alt
  },
  imagePortrait{
    asset->{_id, url},
    alt
  }
}`;

export const takeawayQuery = `*[_type == "takeaway"][0]{
  order,
  titleNl,
  navTitle,
  subtitleNl,
  textNl,
  image{
    asset->{_id, url},
    alt
  }
}`;

export const cateringQuery = `*[_type == "catering"][0]{
  order,
  titleNl,
  navTitle,
  subtitleNl,
  textNl,
  image{
    asset->{_id, url},
    alt
  }
}`;

export const giftCardQuery = `*[_type == "giftCard" && _id == "giftCard"][0]{
  order,
  titleNl,
  navTitle,
  subtitleNl,
  textNl,
  image{
    asset->{_id, url},
    alt
  }
}`;

export const galleryQuery = `*[_type == "gallery"][0]{
  order,
  title,
  navTitle,
  subtitleNl,
  images[]{
    asset->{_id, url},
    alt,
    caption
  }
}`;
