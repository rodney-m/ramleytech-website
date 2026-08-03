import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            left: "-60px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                border: "2px solid #fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3b82f6",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              {">_"}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  color: "#fafafa",
                  fontSize: "28px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                Ramley
              </span>
              <span
                style={{
                  color: "#a1a1aa",
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                Technologies
              </span>
            </div>
          </div>
          <span
            style={{
              color: "#71717a",
              fontSize: "18px",
            }}
          >
            ramleytech.com
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            position: "relative",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              color: "#fafafa",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Software that holds
          </div>
          <div
            style={{
              color: "#60a5fa",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            when it matters.
          </div>
          <div
            style={{
              color: "#a1a1aa",
              fontSize: "24px",
              lineHeight: 1.4,
              marginTop: "8px",
              maxWidth: "720px",
            }}
          >
            Systems for banks, health platforms, and products that can't
            afford to fail.
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            display: "flex",
            height: "4px",
            width: "100%",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #60a5fa, #3b82f6, #1d4ed8)",
            position: "relative",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
