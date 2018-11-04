import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import '../components/index.scss';
import App from '../components/App';

export default () => <React.Fragment>
    <Head>
        <meta name="Description" content="Make a color palette in an intuitive way"/>
        <title>Make a color palette</title>
    </Head>
    <App initialState={{
    palette: {
      "blue":       { hue: 237 },
    "indigo":     { hue: 197 },
    "purple":     { hue: 295 },
    "pink":       { hue: 305 },
    "red":        { hue: 348 },
    "orange":     { hue: 30 },
    "yellow":     { hue: 55 },
    "green":      { hue: 134 },
    "teal":       { hue: 167 },
    "cyan":       { hue: 187 },
    },
    saturation: 100,
    tone: { lightness: 50 },
    exportType: 'css'
  }} />
 </React.Fragment>
