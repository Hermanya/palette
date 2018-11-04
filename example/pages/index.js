import React from "react";
import Head from "next/head";
import "../components/index.scss";
import App from "../components/App";

const Page = () => (
  <React.Fragment>
    <Head>
      <meta
        name="Description"
        content="Make a color palette in an intuitive way"
      />
      <title>Make a color palette</title>
    </Head>
    <App
      libraryName={"Basic"}
      libraryColor={"black"}
      initialState={{
        hues: [
          { name: "red", value: 348 },
          { name: "orange", value: 30 },
          { name: "yellow", value: 55 },
          { name: "green", value: 134 },
          { name: "cyan", value: 187 },
          { name: "blue", value: 237 },
          { name: "magenta", value: 295 }
        ],
        lightnesses: [
          { name: "shade", value: 25 },
          { name: "tone", value: 50 },
          { name: "tint", value: 75 }
        ],
        saturation: 100
      }}
      exportTypes={[
        {
          name: "CSS",
          toString: ({ hues, lightnesses, saturation, hsl }) =>
            `:root {\n${hues
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
              .join("\n")}\n}`
        },
        {
          name: "JSON",
          toString: ({ hues, lightnesses, saturation, hsl }) =>
            `{\n${hues
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
        }
      ]}
      columnClass={"col-lg-2 col-md-3 col-6"}
    />
  </React.Fragment>
);

export default Page;
