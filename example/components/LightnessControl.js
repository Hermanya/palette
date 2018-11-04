import React from "react";
import * as ColorSliders from "react-color-sliders";

export class LightnessControl extends React.PureComponent {
  render() {
    const { kind, saturation, lightness, setLightness, ...props } = this.props;
    let Slider =
      ColorSliders[`${kind[0].toUpperCase()}${kind.slice(1)}LightnessSlider`];
    return (
      <div {...props}>
        <Slider
          name={kind}
          saturation={saturation}
          hue={0}
          lightness={lightness}
          onUpdate={this.setValue}
        />
      </div>
    );
  }
  setValue = value => this.props.setLightness(this.props.kind, value);
}
