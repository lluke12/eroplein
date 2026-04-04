import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eroplein - Reviews erotische diensten Nederland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #111114 0%, #1a1a2e 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #a21caf, #d946ef)",
          }}
        />
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "white",
            letterSpacing: -3,
            marginBottom: 16,
          }}
        >
          Eroplein
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            marginBottom: 12,
          }}
        >
          Eerlijke reviews en ervaringen
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#d946ef",
          }}
        >
          Escorts, clubs, massage en meer in 42+ steden
        </div>
      </div>
    ),
    { ...size }
  );
}
