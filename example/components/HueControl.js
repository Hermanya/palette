import React from "react";
import * as ColorSliders from "react-color-sliders";

export class HueControl extends React.PureComponent {
  render() {
    const {
      name = " ",
      hue,
      saturation,
      lightness,
      setHue,
      ...props
    } = this.props;
    let Slider =
      ColorSliders[`${name[0].toUpperCase()}${name.slice(1)}HueSlider`] ||
      ColorSliders.HueSlider;
    return (
      <div {...props}>
        <Slider
          hue={hue}
          saturation={saturation}
          lightness={lightness}
          onUpdate={this.setValue}
          name={name}
        />
      </div>
    );
  }
  setValue = value => this.props.setHue(this.props.name, value);
}
