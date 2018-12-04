import React from "react";
import Head from "next/head";
import "../components/index.scss";
import App from "../components/App";
const chroma = require("chroma-js");

const Page = () => (
  <React.Fragment>
    <Head>
      <meta
        name="Description"
        content="Make a color palette in an intuitive way"
      />
      <title>Make a bootstrap color palette</title>
    </Head>
    <App
      libraryName={"Bootstrap"}
      libraryColor={"#563d7c"}
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
        saturation: 80
      }}
      exportTypes={[
        //         {
        //           name: "SASS",
        //           toString: ({ hues, lightnesses, saturation, hsl }) =>
        //             hues
        //               .map(hue => `$${hue.name}: ${hsl(hue.name, "500")};`)
        //               .join("\n") +
        //             `

        // $primary:       $blue;
        // $secondary:     $gray-600;
        // $success:       $green;
        // $info:          $cyan;
        // $warning:       $yellow;
        // $danger:        $red;
        //             `
        //         },
        {
          name: "CSS",
          toString: ({ hues, lightnesses, saturation, hsl }) =>
            `
:root {\n${hues
              .map(hue =>
                lightnesses
                  .map(
                    lightness =>
                      console.log(hue, lightness) ||
                      `  --${hue.name}_${lightness.name}: ${chroma(
                        hsl(hue.name, lightness.name)
                      )
                        .rgb()
                        .join(", ")}`
                  )
                  .concat([
                    `  --${hue.name}_50: ${chroma(
                      `hsl(${hue.value}, 100%, 95%)`
                    )
                      .rgb()
                      .join(", ")}`,
                    `  --${hue.name}_0: ${chroma(
                      `hsl(${hue.value}, 100%, 100%)`
                    )
                      .rgb()
                      .join(", ")}`
                  ])
              )
              .reduce((a, x) => [...a, ...x])
              .join(";\n")}\n}
          `
        }
      ]}
      columnClass="col"
    />
  </React.Fragment>
);

export default Page;
