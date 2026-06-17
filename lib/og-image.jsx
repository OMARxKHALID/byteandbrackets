import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export const renderOg = ({ eyebrow, title }) =>
  new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#d8d2c4",
          color: "#17160f",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#e2521c",
            marginBottom: 48,
          }}
        >
          {eyebrow}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <span style={{ fontSize: 180, fontWeight: 800, color: "#e2521c", lineHeight: 1 }}>[</span>
          <span
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: -2,
              textAlign: "center",
              maxWidth: 720,
            }}
          >
            {title}
          </span>
          <span style={{ fontSize: 180, fontWeight: 800, color: "#e2521c", lineHeight: 1 }}>]</span>
        </div>
      </div>
    ),
    size
  )
