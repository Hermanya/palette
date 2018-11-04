import React from "react";
import * as ColorSliders from "react-color-sliders";
import { Code } from "./Code";
import { LightnessControl } from "./LightnessControl";
import { HueControl } from "./HueControl";
import { Label } from "./Label";

const columnClass = "col-lg-2 col-md-3 col-6";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = props.initialState;
  }
  hsl = (hue, lightness) => {
    return `hsl(${this.state.hues.find(_ => _.name === hue).value}, ${
      this.state.saturation
    }%, ${this.state.lightnesses.find(_ => _.name === lightness).value}%)`;
  };
  setHue = (name, value) => {
    this.setState({
      hues: this.state.hues.map(_ => (_.name === name ? { ..._, value } : _))
    });
  };
  setLightness = (level, value) => {
    this.setState({
      lightnesses: this.state.lightnesses.map(
        _ => (_.name === level ? { ..._, value } : _)
      )
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
              <section className={""}>
                <Label>Saturation</Label>
                <ColorSliders.SaturationSlider
                  hue={0}
                  name={"saturation"}
                  saturation={this.state.saturation}
                  lightness={50}
                  onUpdate={this.setSaturation}
                />
              </section>
              {this.state.hues.map(hue => {
                return (
                  <div key={hue.name} className={"mt-4"}>
                    <Label>{hue.name}</Label>
                    <HueControl
                      style={{ marginBottom: 42 }}
                      name={hue.name}
                      hue={hue.value}
                      lightness={this.state.lightnesses[1].value}
                      saturation={this.state.saturation}
                      setHue={this.setHue}
                      hsl={this.hsl}
                    />
                  </div>
                );
              })}
            </div>
            {this.state.lightnesses.map(lightness => (
              <div className={columnClass} key={lightness.name}>
                <Label>{lightness.name}</Label>
                <LightnessControl
                  kind={lightness.name}
                  className={"mb-4"}
                  lightness={lightness.value}
                  saturation={this.state.saturation}
                  setLightness={this.setLightness}
                />
                {this.state.hues.map(hue => (
                  <div key={hue.name + lightness.name} className={`${""} mb-4`}>
                    <div
                      className={`rounded shadow-sm`}
                      style={{
                        height: 64,
                        background: `linear-gradient(to bottom,
                        ${this.hsl(hue.name, lightness.name)},
                        ${this.hsl(hue.name, lightness.name)})`
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
            <section className="col-lg-4">
              <h2 className="lead">How this works:</h2>
              <ol>
                <li>You adjust the base color per row</li>
                <li>Change lightness per column</li>
                <li>
                  Set color intensity across all colors using the saturation
                  slider
                </li>
                <li>Export your colors in SASS, JSON or CSS</li>
              </ol>
              <p className="text-justify">
                This app is built using React. Source code is available on{" "}
                <a href="https://github.com/Hermanya/palette/tree/master/example">
                  GitHub
                </a>
                {". "}
                All sliders used on this page are published on npm as{" "}
                <var>react-color-sliders</var>,{" "}
                <a href="https://github.com/Hermanya/palette/blob/master/README.md">
                  see documentation
                </a>
                .
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
                    style={{ color: "rgb(75,	160,	235	)" }}
                  />
                  <span className="sr-only">
                    Link to Hermans twitter profile
                  </span>
                </a>
                <a href="https://github.com/hermanya">
                  <i
                    className="fab fa-github ml-2"
                    style={{ color: "black" }}
                  />
                  <span className="sr-only">
                    Link to Hermans github profile
                  </span>
                </a>
              </div>
              <Code
                lightnesses={this.state.lightnesses}
                hues={this.state.hues}
                exportType={this.state.exportType}
                setExportType={this.setExportType}
                hsl={this.hsl}
              />
            </section>
          </section>
        </div>
        <i
          className="fas fa-palette position-absolute text-light z-index-1"
          style={{
            top: "-5vw",
            right: "-5vw",
            transform: "rotate(-90deg)",
            fontSize: "25vw"
          }}
        />
        <i
          className="fas fa-swatchbook position-absolute text-light z-index-1"
          style={{
            transform: "rotate(90deg)",
            top: "1vw",
            left: "1vw",
            fontSize: "25vw"
          }}
        />
      </div>
    );
  }
}
