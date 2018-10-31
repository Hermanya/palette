# react-color-sliders

> React components for picking a color on a scale

[![NPM](https://img.shields.io/npm/v/react-color-sliders.svg)](https://www.npmjs.com/package/react-color-sliders) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-color-sliders
```

## Usage

```tsx
import * as React from 'react'

import {
  HueSlider,
  SaturationSlider,
  LightnessSlider,
  RedHueSlider,
  ShadeLightnessSlider,
} from 'react-color-sliders'

class Example extends React.Component {
  render () {
    return (
      <React.Fragment>

        {/* Rainbow slider example */}
        {/* to control the slider provide onChange/onUpdate */}
        {/* more info on props: https://sghall.github.io/react-compound-slider/#/getting-started/tutorial */}
        <HueSlider hue={number} saturation={number} lightness={number}
          onChange={(hue: number) => {}} />

        {/* This has a smaller domain of redish colors */}
        {/* works for any other rainbow color */}
        <RedHueSlider hue={number} saturation={number} lightness={number}
          onChange={(hue: number) => {}} />


        <SaturationSlider hue={number} saturation={number} lightness={number}
          onChange={(saturation: number) => {}} />

        <LightnessSlider hue={number} saturation={number} lightness={number}
          onChange={(lightness: number) => {}} />

        {/* Smaller domain of lightness for colors on the darker side */}
        {/* works for tints and tones too */}
        <ShadeLightnessSlider hue={number} saturation={number} lightness={number}
          onChange={(lightness: number) => {}} />

      </React.Fragment>
    )
  }
}
```

## License

MIT © [Hermanya](https://github.com/Hermanya)
