import React from "react";
export const Code = ({
  hues,
  lightnesses,
  saturation,
  exportTypes,
  exportType,
  setExportType,
  className,
  style,
  hsl,
  ...props
}) => (
  <pre
    className={`bg-dark text-white p-3 rounded shadow small ${className}`}
    style={{ maxHeight: "50vh", ...style }}
    {...props}
  >
    <div className="btn-group" role="group" aria-label="Basic example">
      {exportTypes.map(type => (
        <button
          key={type.name}
          type="button"
          onClick={() => setExportType(type)}
          className={`btn btn-sm btn-outline-light ${
            exportType === type.name ? "bg-light text-dark" : ""
          }`}
        >
          {type.name.toUpperCase()}
        </button>
      ))}
    </div>
    {"\n\n"}
    <code>
      {(exportType || exportTypes[0]).toString({
        hues,
        lightnesses,
        saturation,
        hsl
      })}
    </code>
  </pre>
);
