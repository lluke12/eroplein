import { ImageResponse } from "next/og";
import { getGuideBySlug } from "@/lib/guides-data";

export const runtime = "nodejs";
export const alt = "Eroplein gids";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = getGuideBySlug(params.slug);
  const title = guide?.title || "Gids — Eroplein";
  const category = guide?.relatedCategoryLabel || "Gids";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #111114 0%, #2d0a2e 100%)",
          position: "relative",
          padding: 64,
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #a21caf, #d946ef)",
          }}
        />
        <div
          style={{
            fontSize: 24,
            color: "#d946ef",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Eroplein gids · {category}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            letterSpacing: -2,
            marginTop: 32,
            lineHeight: 1.1,
            maxWidth: 1080,
            display: "flex",
          }}
        >
          {title}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 64,
            fontSize: 28,
            color: "#a1a1aa",
            display: "flex",
          }}
        >
          {guide?.readingTime || "5"} minuten lezen
        </div>
        <div
          style={{
            position: "absolute",
            top: 64,
            right: 64,
            fontSize: 32,
            fontWeight: 800,
            color: "#d946ef",
            letterSpacing: -1,
            display: "flex",
          }}
        >
          eroplein.com
        </div>
      </div>
    ),
    { ...size }
  );
}
