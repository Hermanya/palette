import React from "react";
import { exportTypes } from "./consts";
export const Code = ({
  exportType,
  hues,
  setExportType,
  className,
  lightnesses,
  hsl,
  ...props
}) => (
  <pre
    className={`bg-dark text-white p-3 rounded shadow ${className}`}
    {...props}
  >
    <div className="btn-group" role="group" aria-label="Basic example">
      {exportTypes.map(type => (
        <button
          key={type}
          type="button"
          onClick={() => setExportType(type)}
          className={`btn btn-sm btn-outline-light ${
            exportType === type ? "bg-light text-dark" : ""
          }`}
        >
          {type.toUpperCase()}
        </button>
      ))}
    </div>
    {"\n\n"}
    <code>
      {exportType === "json"
        ? `{\n${hues
            .map(hue =>
              lightnesses
                .map(
                  lightness =>
                    `  "${hue.name}_${lightness.name}": "${hsl(
                      hue.name,
                      lightness.name
                    )}"`
                )
                .join(",\n")
            )
            .join(",\n")}\n}`
        : exportType === "sass"
          ? hues
              .map(hue => `$${hue.name}: ${hsl(hue.name, "tone")};`)
              .join("\n")
          : `:root {\n${hues
              .map(hue =>
                lightnesses
                  .map(
                    lightness =>
                      `  --${hue.name}_${lightness.name}: ${hsl(
                        hue.name,
                        lightness.name
                      )};`
                  )
                  .join("\n")
              )
              .join("\n")}\n}`}
    </code>
  </pre>
);