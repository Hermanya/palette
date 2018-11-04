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
        lightnesses: [{ name: "tone", value: 50, domain: [25, 75] }],
        saturation: 80
      }}
      exportTypes={[
        {
          name: "SASS",
          toString: ({ hues, lightnesses, saturation, hsl }) =>
            hues
              .map(hue => `$${hue.name}: ${hsl(hue.name, "tone")};`)
              .join("\n") +
            `

$primary:       $blue;
$secondary:     $gray-600;
$success:       $green;
$info:          $cyan;
$warning:       $yellow;
$danger:        $red;
            `
        }
      ]}
      columnClass="col-lg-4 col-md-3 col-6"
    />
  </React.Fragment>
);

export default Page;
