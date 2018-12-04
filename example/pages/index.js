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
          { name: "blue", value: 211 }, // hsl(211°, 100%, 50%)
          { name: "indigo", value: 253 }, // hsl(263°, 90%, 51%)
          { name: "purple", value: 271 }, // hsl(261°, 51%, 51%)
          { name: "pink", value: 332 }, // hsl(332°, 79%, 58%)
          { name: "red", value: 354 }, // hsl(354°, 70%, 54%)
          { name: "orange", value: 27 }, // hsl(27°, 98%, 54%)
          { name: "yellow", value: 45 }, // hsl(45°, 100%, 51%)
          { name: "green", value: 134 }, // hsl(134°, 61%, 41%)
          { name: "teal", value: 162 }, // hsl(162°, 73%, 46%)
          { name: "cyan", value: 188 } // hsl(188°, 78%, 41%)
        ],
        lightnesses: [
          "900", // hsl(328°, 81%, 29%)
          "800",
          "700",
          "600",
          "500",
          "400",
          "300",
          "200",
          "100" // hsl(339°, 81%, 85%)
        ].map((name, index, all) => {
          const value = Math.round(10 + (90 / all.length) * index);
          return {
            name,
            value,
            domain: [value - 5, value + 5]
          };
        }),
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
      columnClass={"col"}
    />
  </React.Fragment>
);

export default Page;
