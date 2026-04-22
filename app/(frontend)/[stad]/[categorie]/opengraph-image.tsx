import { ImageResponse } from "next/og";
import { getCityBySlug, getCategoryBySlug } from "@/lib/data";
import { getPlaceholderBusinessByCityAndCategory } from "@/lib/placeholder-data";

export const runtime = "nodejs";
export const alt = "Eroplein — categorie per stad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: { stad: string; categorie: string };
}) {
  const city = getCityBySlug(params.stad);
  const category = getCategoryBySlug(params.categorie);
  const businesses =
    city && category
      ? getPlaceholderBusinessByCityAndCategory(city.slug, category.slug)
      : [];

  const singular = category?.singular || category?.name || "Erotische diensten";
  const cityName = city?.name || "Nederland";

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
          Eroplein · {cityName}
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "white",
            letterSpacing: -3,
            marginTop: 28,
            lineHeight: 1.05,
            display: "flex",
          }}
        >
          {singular}
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#d946ef",
            letterSpacing: -3,
            marginBottom: 24,
            lineHeight: 1.05,
            display: "flex",
          }}
        >
          in {cityName}
        </div>
        {businesses.length > 0 && (
          <div
            style={{
              fontSize: 30,
              color: "#a1a1aa",
              display: "flex",
            }}
          >
            {businesses.length} bedrijven · reviews & prijzen
          </div>
        )}
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
