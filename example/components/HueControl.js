import React from 'react'
import * as ColorSliders from 'react-color-sliders';

export class HueControl extends React.PureComponent {
    render() {
      const {
        color,
        palette,
        saturation,
        lightness,
        setPalette,
        hsl,
        ...props
      } = this.props;
      let Slider =
        ColorSliders[`${color[0].toUpperCase()}${color.slice(1)}HueSlider`];
      return (
        <div {...props}>
          <Slider
            hue={palette[color].hue}
            saturation={saturation}
            lightness={lightness}
            onUpdate={this.setValue}
            name={color}
          />
        </div>
      );
    }
    setValue = value => this.props.setPalette(this.props.color, { hue: value });
  }