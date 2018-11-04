import React from "react";
import Head from "next/head";
import "../components/index.scss";
import App from "../components/App";

const Page = () => (
  <React.Fragment>
    <Head>
      <meta
        name="Description"
        content="Make a tailwind color palette in an intuitive way"
      />
      <title>Make a tailwind color palette</title>
    </Head>
    <App
      libraryName={"Tailwind"}
      libraryColor={"#42a6b2"}
      initialState={{
        hues: [
          { name: "red", value: 2 }, // hsl(2°, 76%, 54%)
          { name: "orange", value: 30 }, // hsl(30°, 91%, 61%)
          { name: "yellow", value: 54 }, // hsl(54°, 100%, 65%)
          { name: "green", value: 145 }, // hsl(145°, 55%, 49%)
          { name: "teal", value: 174 }, // hsl(174°, 48%, 53%)
          { name: "blue", value: 207 }, // hsl(207°, 71%, 53%)
          { name: "indigo", value: 231 }, // hsl(231°, 51%, 60%)
          { name: "purple", value: 264 }, // hsl(264°, 69%, 63%)
          { name: "pink", value: 340 } // hsl(340°, 88%, 70%)
        ],
        lightnesses: [
          "darkest",
          "darker",
          "dark",
          "base",
          "light",
          "lighter",
          "lightest"
        ].map((name, index, all) => {
          const value = Math.round(25 + (75 / all.length) * index);
          return {
            name,
            value,
            domain: [value - 17, value + 17]
          };
        }),
        saturation: 71
      }}
      exportTypes={[
        {
          name: "JS",
          toString: ({ hues, lightnesses, saturation, hsl }) =>
            `var colors = {\n${hues
              .map(hue =>
                lightnesses
                  .map(
                    lightness =>
                      `  '${hue.name}-${lightness.name}': '${hsl(
                        hue.name,
                        lightness.name
                      )}'`
                  )
                  .join(",\n")
              )
              .join(",\n")}\n}`
        }
      ]}
      columnClass="col-lg-1 col-md-3 col-6 p-1"
    />
  </React.Fragment>
);

export default Page;
