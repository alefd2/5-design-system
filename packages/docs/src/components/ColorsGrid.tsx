import { colors } from "@alef-ui/tokens";

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div style={{ backgroundColor: color, padding: "2rem" }} key={key}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: "#fff",
          }}
        >
          <strong>${key}:</strong>
          <span>{color}:</span>
        </div>
      </div>
    );
  });
}
