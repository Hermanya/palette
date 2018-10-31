import React from 'react';
import * as ColorSliders from 'react-color-sliders';
import { Code } from './Code';
import { lightnessLevels } from './consts';
function Label(props) {
  return (
    <label
      className="text-muted text-uppercase text-center d-block"
      {...props}
    />
  );
}

class Hue extends React.PureComponent {
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
        <Label>{color}</Label>
        <Slider
          hue={palette[color].hue}
          saturation={saturation}
          lightness={lightness}
          onChange={this.setValue}
        />
      </div>
    );
  }
  setValue = value => this.props.setPalette(this.props.color, { hue: value });
}

const columnClass = 'col-lg-2 col-md-3 col-sm-6';

class Lightness extends React.PureComponent {
  render() {
    const {
      palette,
      kind,
      saturation,
      lightness,
      setLightness,
      hsl,
      ...props
    } = this.props;
    let Slider =
      ColorSliders[`${kind[0].toUpperCase()}${kind.slice(1)}LightnessSlider`];
    return (
      <div {...props}>
        <div className={'mb-4'}>
          <Label>{kind}</Label>
          <Slider
            saturation={saturation}
            hue={0}
            lightness={lightness}
            onChange={this.setValue}
          />
        </div>

        {Object.keys(palette).map(color => (
          <div key={color + kind} className={`${''} mb-4`}>
            <div
              className={`rounded shadow-sm`}
              style={{
                height: 64,
                background: `linear-gradient(to bottom,
                ${hsl(color, kind)},
                ${hsl(color, kind)})`
              }}
            />
          </div>
        ))}
      </div>
    );
  }
  setValue = value =>
    this.props.setLightness(this.props.kind, { lightness: value });
}

export default class App extends React.PureComponent {
  state = {
    palette: {
      red: { hue: 348 },
      orange: { hue: 30 },
      yellow: { hue: 55 },
      green: { hue: 134 },
      cyan: { hue: 187 },
      blue: { hue: 237 },
      magenta: { hue: 295 }
    },
    saturation: 100,
    tint: { lightness: 75 },
    tone: { lightness: 50 },
    shade: { lightness: 25 },
    exportType: 'css'
  };
  hsl = (color, kind) => {
    return `hsl(${this.state.palette[color].hue}, ${this.state.saturation}%, ${
      this.state[kind].lightness
    }%)`;
  };
  setPalette = (color, value) => {
    this.setState({
      palette: {
        ...this.state.palette,
        [color]: value
      }
    });
  };
  setLightness = (kind, value) => {
    this.setState({
      [kind]: {
        ...this.state[kind],
        ...value
      }
    });
  };
  setSaturation = value => {
    this.setState({
      saturation: value
    });
  };
  setExportType = type => {
    this.setState({
      exportType: type
    });
  };
  render() {
    return (
      <div className="position-relative overflow-x-hidden ">
        <div className="py-5 container position-relative z-index-2">
          <h1 className="display-4 mb-4 text-center  ">
            <strong>Make a color palette</strong> in an intuitive way
          </h1>
          <section className="row mb-4">
            <div className={columnClass}>
              <section className={''}>
                <Label>Saturation</Label>
                <ColorSliders.SaturationSlider
                  hue={0}
                  saturation={this.state.saturation}
                  lightness={50}
                  onChange={this.setSaturation}
                />
              </section>

              {Object.keys(this.state.palette).map(color => {
                return (
                  <Hue
                    className={'mt-4'}
                    style={{ marginBottom: 42 }}
                    key={color}
                    palette={this.state.palette}
                    color={color}
                    lightness={this.state.tone.lightness}
                    saturation={this.state.saturation}
                    setPalette={this.setPalette}
                    hsl={this.hsl}
                  />
                );
              })}
            </div>
            {lightnessLevels.map(kind => (
              <Lightness
                kind={kind}
                key={kind}
                lightness={this.state[kind].lightness}
                saturation={this.state.saturation}
                setLightness={this.setLightness}
                palette={this.state.palette}
                hsl={this.hsl}
                className={columnClass}
              />
            ))}
            <section className="col-lg-4">
              <h2 className="lead">How this works:</h2>
              <ol>
                <li>You can set Hue per row</li>
                <li>Adjust Lightness per column</li>
                <li>Change saturation across all colors</li>
                <li>Export your colors in SASS, JSON or CSS</li>
              </ol>
              {/* <p className="fa-2x text-center">
                <i class="fab fa-js" /> <i class="fab fa-css3" />{' '}
                <i class="fab fa-sass" />
              </p> */}
              <p className="text-justify">
                This app is built using React. All sliders used in this are
                available on npm as <var>react-color-sliders</var>.
              </p>
              <div className="d-flex align-items-center mb-2">
                MIT ©
                <a href="https://hermanya.github.io" className="ml-1">
                  Herman Starikov
                </a>
                <img
                  style={{ width: 32, height: 32 }}
                  className="d-inline-block ml-2 rounded shadow-sm"
                  alt="Herman Starikov"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1589206/profile/profile-512.jpg"
                />
                <a href="https://twitter.com/hermanhasawish">
                  <i
                    className="fab fa-twitter ml-2"
                    style={{ color: 'rgb(75,	160,	235	)' }}
                  />
                </a>
              </div>
              <Code
                exportType={this.state.exportType}
                palette={this.state.palette}
                setExportType={this.setExportType}
                hsl={this.hsl}
              />
            </section>
          </section>
        </div>
        <i
          className="fas fa-palette position-absolute text-white z-index-1"
          style={{
            top: '-5vw',
            right: '-5vw',
            transform: 'rotate(-90deg)',
            fontSize: '25vw'
          }}
        />
        <i
          className="fas fa-swatchbook position-absolute text-white z-index-1"
          style={{
            transform: 'rotate(90deg)',
            top: '1vw',
            left: '1vw',
            fontSize: '25vw'
          }}
        />
      </div>
    );
  }
}
