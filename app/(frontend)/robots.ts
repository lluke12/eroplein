import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin", "/admin/*", "/schrijf-review", "/claim"],
      },
    ],
    sitemap: "https://www.eroplein.com/sitemap.xml",
  };
}
