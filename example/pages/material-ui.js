import React from "react";
import Head from "next/head";
import "../components/index.scss";
import App from "../components/App";
// const chroma = require("chroma-js");

const Page = () => (
  <React.Fragment>
    <Head>
      <meta name="Description" content="Non-material colors for Material UI" />
      <title>Non-material colors for Material UI</title>
    </Head>
    <App
      libraryName={"Material UI"}
      libraryColor={"#2196f3"}
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
          const value = Math.round(29 + (50 / all.length) * index);
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
            `
var colors = {\n${hues
              .map(hue => `  ${hue.name}: '${hsl(hue.name, "500")}'`)
              .join(",\n")}\n}

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
palette: {
    primary: {
    // light: will be calculated from palette.primary.main,
    main: colors.red,
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
        main: colors.blue,
    },
    // error: will use the default color
},
});`
        }
      ]}
      columnClass="col-lg-1 col-md-3 col-6 p-1"
    />
  </React.Fragment>
);

export default Page;
