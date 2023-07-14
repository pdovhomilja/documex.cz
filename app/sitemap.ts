import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.documex.cz",
      lastModified: new Date(),
    },
    {
      url: "https://www.documex.cz/produkty",
      lastModified: new Date(),
    },
    {
      url: "https://www.documex.cz/reference",
      lastModified: new Date(),
    },
    {
      url: "https://www.documex.cz/contact",
      lastModified: new Date(),
    },
  ];
}
