import { ImageResponse } from "next/og";
import { getCityBySlug } from "@/lib/data";
import { getPlaceholderBusinessesByCity } from "@/lib/placeholder-data";

export const runtime = "nodejs";
export const alt = "Eroplein — erotische diensten per stad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: { stad: string };
}) {
  const city = getCityBySlug(params.stad);
  const bizCount = city ? getPlaceholderBusinessesByCity(city.slug).length : 0;
  const cityName = city?.name || "Nederland";
  const province = city?.province || "";

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
          Eroplein · {province}
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            color: "white",
            letterSpacing: -3,
            marginTop: 32,
            marginBottom: 24,
            lineHeight: 1,
            display: "flex",
          }}
        >
          {cityName}
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#a1a1aa",
            marginBottom: 24,
            display: "flex",
          }}
        >
          Escorts, parenclubs & massage
        </div>
        {bizCount > 0 && (
          <div
            style={{
              fontSize: 28,
              color: "#f472b6",
              display: "flex",
            }}
          >
            {bizCount} bedrijven · reviews & info
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
