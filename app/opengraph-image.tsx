import { ImageResponse } from "next/og";

/*
 * V11 — a descriptive, branded Open Graph image generated at build time.
 * `alt` gives the asset machine-readable text; Next wires og:image + dimensions
 * automatically from this file convention.
 */
export const alt = "Vela — Workflow Automation Platform for Modern Teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #ffffff 0%, #f3f0ff 45%, #e8f7ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #8b5cf6, #38bdf8)",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 700, color: "#0a0a0f" }}>
            Vela
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#0a0a0f",
              lineHeight: 1.05,
              maxWidth: 920,
            }}
          >
            Automate the busywork. Ship the real work.
          </div>
          <div style={{ fontSize: 30, color: "#565d68", maxWidth: 840 }}>
            Workflow automation platform for modern teams.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#565d68" }}>
          vela.com
        </div>
      </div>
    ),
    { ...size },
  );
}
