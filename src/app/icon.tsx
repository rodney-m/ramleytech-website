import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <div
          style={{
            color: "#3b82f6",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {">_"}
        </div>
      </div>
    ),
    { ...size }
  );
}
