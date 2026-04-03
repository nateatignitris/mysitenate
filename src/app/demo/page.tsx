import { BlackWhiteSection } from "@/components/BlackWhiteSection";

export default function DemoPage() {
  return (
    <div>
      {/* Spacer so you scroll into the section */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "18px",
            color: "#999",
          }}
        >
          scroll down ↓
        </p>
      </div>

      <BlackWhiteSection />

      {/* Spacer after */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "18px",
            color: "#999",
          }}
        >
          end of section
        </p>
      </div>
    </div>
  );
}
