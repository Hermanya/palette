import * as React from 'react';
import { Slider, Rail, Handles } from 'react-compound-slider';
import { Handle, MyRail } from './components'; // example render components
interface HSLProps {
  hue: number;
  saturation: number;
  lightness: number;
  onChange(value: number): void;
  onUpdate(value: number): void;
  domain: number[];
}

class HslSlider extends React.Component<HSLProps> {
  onChange = ([value]: number[]) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };
  onUpdate = ([value]: number[]) => {
    if (this.props.onUpdate) {
      this.props.onUpdate(value);
    }
  };
  value = () => this.props.domain[0];
  background = () => 'black';
  public render() {
    const { domain, onChange, onUpdate, ...otherProps } = this.props;
    return (
      <Slider
        mode={1}
        step={1}
        domain={domain}
        rootStyle={{ position: 'relative' }}
        onChange={this.onChange}
        onUpdate={this.onUpdate}
        values={[this.value()]}
        {...otherProps}
      >
        <Rail>
          {({ getRailProps }) => (
            <MyRail background={this.background()} {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <React.Fragment>
              {handles.map(handle => (
                <Handle
                  divOrButton="button"
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                />
              ))}
            </React.Fragment>
          )}
        </Handles>
      </Slider>
    );
  }
}

export class HueSlider extends HslSlider {
  static defaultProps: any = {
    domain: [0, 360]
  };
  value = () => this.props.hue || this.props.domain[0];
  background = () => {
    let {
      saturation,
      lightness,
      domain: [min, max]
    } = this.props;

    return `linear-gradient(to right, ${new Array(10)
      .fill(1)
      .map(
        (_, i, a) =>
          `hsl(${min +
            ((max - min) / a.length) * i}, ${saturation}%, ${lightness}%)`
      )
      .join(', ')})`;
  };
}

export class RedHueSlider extends HueSlider {
  static defaultProps: any = {
    domain: [-30, 30]
  };
  value = () =>
    this.props.hue > this.props.domain[1]
      ? this.props.hue - 360
      : this.props.hue;
  onChange = ([value]: number[]) => {
    if (this.props.onChange) {
      this.props.onChange(value < 0 ? 360 + value : value);
    }
  };
  onUpdate = ([value]: number[]) => {
    if (this.props.onUpdate) {
      this.props.onUpdate(value < 0 ? 360 + value : value);
    }
  };
}

export class OrangeHueSlider extends HueSlider {
  static defaultProps: any = {
    domain: [15, 45]
  };
}

export class YellowHueSlider extends HueSlider {
  static defaultProps: any = {
    domain: [45, 75]
  };
}

export class GreenHueSlider extends HueSlider {
  static defaultProps: any = {
    domain: [70, 150]
  };
}

export class CyanHueSlider extends HueSlider {
  static defaultProps: any = {
    domain: [160, 200]
  };
}

export class BlueHueSlider extends HueSlider {
  static defaultProps: any = {
    domain: [200, 280]
  };
}
export class MagentaHueSlider extends HueSlider {
  static defaultProps: any = {
    domain: [260, 330]
  };
}

export class SaturationSlider extends HslSlider {
  static defaultProps: any = {
    domain: [0, 100]
  };
  value = () => this.props.saturation;
  background = () => {
    let { hue, lightness } = this.props;

    return `linear-gradient(to right, ${new Array(10)
      .fill(1)
      .map((_, i) => `hsl(${hue}, ${i * 10}%, ${lightness}%)`)
      .join(', ')})`;
  };
}
export class LightnessSlider extends HslSlider {
  static defaultProps: any = {
    domain: [0, 100]
  };
  value = () => this.props.lightness;
  background = () => {
    let {
      hue,
      domain: [min, max]
    } = this.props;
    return `linear-gradient(to right, ${new Array(10)
      .fill(1)
      .map(
        (_, i, a) => `hsl(${hue}, 0%, ${min + ((max - min) / a.length) * i}%)`
      )
      .join(', ')})`;
  };
}

export class TintLightnessSlider extends LightnessSlider {
  static defaultProps: any = {
    domain: [66, 100]
  };
}

export class ToneLightnessSlider extends LightnessSlider {
  static defaultProps: any = {
    domain: [33, 66]
  };
}

export class ShadeLightnessSlider extends LightnessSlider {
  static defaultProps: any = {
    domain: [0, 33]
  };
}
