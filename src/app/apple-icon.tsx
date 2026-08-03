import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            width: "108px",
            height: "108px",
            borderRadius: "22px",
            border: "6px solid #fafafa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#3b82f6",
            fontSize: "48px",
            fontWeight: 700,
          }}
        >
          {">_"}
        </div>
      </div>
    ),
    { ...size }
  );
}
