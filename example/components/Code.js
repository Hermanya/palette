import React from 'react';
import { exportTypes } from './consts';
export const Code = ({
  exportType,
  palette,
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
            exportType === type ? 'bg-light text-dark' : ''
          }`}
        >
          {type.toUpperCase()}
        </button>
      ))}
    </div>
    {'\n\n'}
    <code>
      {exportType === 'json'
        ? `{\n${Object.keys(palette)
            .map(color =>
              lightnesses
                .map((lightness) => `  "${color}_${lightness.name}": "${hsl(color, lightness.name)}"`)
                .join(',\n')
            )
            .join(',\n')}\n}`
        : exportType === 'sass'
          ? Object.keys(palette)
              .map(color => `$${color}: ${hsl(color, 'tone')};`)
              .join('\n')
          : `:root {\n${Object.keys(palette)
              .map(color =>
                lightnesses
                  .map(lightness => `  --${color}_${lightness.name}: ${hsl(color, lightness.name)};`)
                  .join('\n')
              )
              .join('\n')}\n}`}
    </code>
  </pre>
);
