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
      initialState={{
        palette: {
          red: { hue: 348 },
          orange: { hue: 30 },
          yellow: { hue: 55 },
          green: { hue: 134 },
          cyan: { hue: 187 },
          blue: { hue: 237 },
          magenta: { hue: 295 }
        },
        lightnesses: [
          { name: "shade", value: 25 },
          { name: "tone", value: 50 },
          { name: "tint", value: 75 }
        ],
        saturation: 100,
        exportType: "css"
      }}
    />
  </React.Fragment>
);

export default Page;
