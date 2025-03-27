import { colors } from "@alef-ui/tokens";
import { getContrast } from "polished";
export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div style={{ backgroundColor: color, padding: "2rem" }} key={key}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: getContrast(color, "#fff") > 3.5 ? "#fff" : "#000",
          }}
        >
          <strong>${key}:</strong>
          <span>{color}:</span>
        </div>
      </div>
    );
  });
}
