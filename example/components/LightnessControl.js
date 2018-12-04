import React from "react";
import * as ColorSliders from "react-color-sliders";

export class LightnessControl extends React.PureComponent {
  render() {
    const {
      name = " ",
      value,
      saturation,
      domain,
      setLightness,
      ...props
    } = this.props;
    let Slider =
      ColorSliders[`${name[0].toUpperCase()}${name.slice(1)}LightnessSlider`] ||
      ColorSliders.LightnessSlider;
    return (
      <div {...props}>
        <Slider
          name={name}
          saturation={saturation}
          hue={0}
          lightness={value}
          onUpdate={this.setValue}
          domain={domain}
        />
      </div>
    );
  }
  setValue = value => this.props.setLightness(this.props.name, value);
}
