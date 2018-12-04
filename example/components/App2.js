import React from "react";
import Link from "next/link";
import * as ColorSliders from "react-color-sliders";
import { Code } from "./Code";
import { LightnessControl } from "./LightnessControl";
import { HueControl } from "./HueControl";
import { Label } from "./Label";
import { Herman } from "./Herman";

export default class App2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props.initialState
    };
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
  setLightness = (name, value) => {
    this.setState({
      lightnesses: this.state.lightnesses.map(
        _ => (_.name === name ? { ..._, value } : _)
      )
    });
  };
  setSaturation = saturation => {
    this.setState({
      saturation
    });
  };
  setExportType = type => {
    this.setState({
      exportType: type
    });
  };
  render() {
    const { columnClass } = this.props;
    return (
      <div className="position-relative overflow-x-hidden ">
        <div className="py-5 container position-relative z-index-2">
          <h1 className="display-4 mb-4 text-center">
            <strong>
              Make a{" "}
              <span style={{ color: this.props.libraryColor }}>
                {this.props.libraryName}
              </span>{" "}
              color palette
            </strong>{" "}
            for your theme
          </h1>

          <section className="row mb-4">
            <section>
              <Label>Grays</Label>
              <ColorSliders.HueSlider />
              <div className="d-flex flex-row">
                {this.state.lightnesses.map(lightness => (
                  <div
                    key={lightness.name}
                    className={`rounded shadow-sm`}
                    style={{
                      height: "2em",
                      width: "2em",
                      background: `linear-gradient(to bottom,
                        ${this.hsl("red", lightness.name)},
                        ${this.hsl("red", lightness.name)})`
                    }}
                  />
                ))}
              </div>
            </section>
            {/* <div className={columnClass}>
              <section className={""}>
                <Label>Saturation</Label>
                <ColorSliders.SaturationSlider
                  hue={this.state.hues[0].value}
                  name={"saturation"}
                  saturation={this.state.saturation}
                  lightness={
                    this.state.lightnesses[
                      Math.floor(this.state.lightnesses.length / 2)
                    ].value
                  }
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
                      lightness={
                        this.state.lightnesses[
                          Math.floor(this.state.lightnesses.length / 2)
                        ].value
                      }
                      saturation={this.state.saturation}
                      setHue={this.setHue}
                    />
                  </div>
                );
              })}
            </div>
            {this.state.lightnesses.map(lightness => (
              <div className={columnClass} key={lightness.name}>
                <Label>{lightness.name}</Label>
                <LightnessControl
                  className={"mb-4"}
                  saturation={this.state.saturation}
                  setLightness={this.setLightness}
                  {...lightness}
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
            ))} */}
            <section className="col-lg-4 col-md-6 col">
              <section>light or dark?</section>
              overall lightness
              <ColorSliders.ToneLightnessSlider
                className={"mb-4"}
                saturation={this.state.saturation}
                setLightness={this.setLightness}
              />
              <h2 className="lead">How this works:</h2>
              <ol>
                <li>You adjust the base color per row</li>
                <li>Change lightness per column</li>
                <li>
                  Set color intensity across all colors using the saturation
                  slider
                </li>
                <li>
                  Export your colors in{" "}
                  {this.props.exportTypes.map(_ => _.name).join(", ")}
                </li>
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
              <p className="text-justify">
                In addition to {this.props.libraryName}, I also made similar
                color tools for{" "}
                {["Bootstrap", "Tailwind", "Material UI"]
                  .filter(_ => _ !== this.props.libraryName)
                  .map((lib, i, xs) => (
                    <span key={lib}>
                      <Link href={`/${lib.toLowerCase().replace(/\s/g, "-")}`}>
                        {lib}
                      </Link>
                      {i !== xs.length - 1 ? " and " : "."}
                    </span>
                  ))}
              </p>
              <Herman className="mb-4" />
              <Code
                lightnesses={this.state.lightnesses}
                hues={this.state.hues}
                saturation={this.state.saturation}
                exportTypes={this.props.exportTypes}
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
