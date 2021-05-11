import React from "react";
// import "./App.css";
// import { ExternalTreatButton, ThemeProvider, altTheme } from "lib-components";
import { TreatProvider } from "react-treat";
import InternalTreatButton from "./components/InternalTreatButton";
import Badge from "./components/Badge";
import Label from "./components/Label";
import BadgeTheme from "./components/BadgeTheme";
import Button from "./components/Button";
import { theme1 } from "./theme.treat.js";
import { theme2 } from "./theme2.treat.js";

function App() {
  const styleExample = `export const colorMap = {
    default: styleMap({
      green: {
        color: "green",
      },
    }),
    boxed: styleMap({
      green: {
        backgroundColor: "lightGreen",
        color: "green",
      },
    }),
};`;
  return (
    <TreatProvider theme={theme1}>
      <div className="App">
        <h1>Static classnames</h1>
        <h3>Config</h3>
        <p>localIdentName: "_[name]-[local]_"</p>
        <p>themeIdentName: "_[name]-[local]_"</p>
        <h3>Style</h3>
        <p>
          <strong>Example class: _InternalTreatButton-style_</strong>
        </p>
        <p>
          <strong>[name]: </strong>InternalTreatButton
        </p>
        <p>
          <strong>[local]: </strong>style
        </p>
        <h3>StyleMap</h3>
        <p>
          <strong>Example class: _Badge-base_</strong>
        </p>
        <p>
          <strong>[name]: </strong>Badge
        </p>
        <p>
          <strong>[local]: </strong>base
        </p>
        <ul>
          <li>
            Style function can't be used as outputs the same class ie{" "}
            <strong>_InternalTreatButton-style_</strong>
          </li>
          <li>
            There can't be multiple keys that are the same, eg{" "}
            <strong>green</strong>
          </li>
          <li>{styleExample}</li>
        </ul>

        <hr style={{ marginBottom: "3em", marginTop: "3em" }} />

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <h3>Button COMPONENT</h3>
            <InternalTreatButton>Button</InternalTreatButton>
          </div>
          <div>
            <h3>Button HTML</h3>
            <button class="_InternalTreatButton-style_">Button</button>
          </div>
        </div>

        <p>
          Example class: <strong>_InternalTreatButton-style_</strong>
        </p>

        <hr style={{ marginBottom: "3em", marginTop: "3em" }} />

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <h3>Badge COMPONENT</h3>
            <Badge>12</Badge>
            <Badge color="light-grey">12</Badge>
            <Badge color="green">12</Badge>
            <Badge color="orange">12</Badge>
            <Badge color="red">12</Badge>
            <Badge color="blue">12</Badge>
            <Badge color="purple">12</Badge>
          </div>
          <div>
            <h3>Button HTML</h3>
            <div class="_Badge-base_ _Badge-default_">12</div>
            <div class="_Badge-base_ _Badge-light-grey_ light-grey">12</div>
            <div class="_Badge-base_ _Badge-green_ green">12</div>
            <div class="_Badge-base_ _Badge-orange_ orange">12</div>
            <div class="_Badge-base_ _Badge-red_ red">12</div>
            <div class="_Badge-base_ _Badge-blue_ blue">12</div>
            <div class="_Badge-base_ _Badge-purple_ purple">12</div>
          </div>
        </div>

        <p>
          Example class: <strong>_Badge-base_ _Badge-purple_ purple</strong>
        </p>

        <hr style={{ marginBottom: "3em", marginTop: "3em" }} />

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <h3>Label COMPONENT: boxed</h3>
            <Label size="small" type="boxed" color="default">
              Label
            </Label>
            <Label size="small" type="boxed" color="light-grey">
              Label
            </Label>
            <Label size="small" type="boxed" color="green">
              Label
            </Label>
            <Label size="small" type="boxed" color="orange">
              Label
            </Label>
            <Label size="small" type="boxed" color="red">
              Label
            </Label>
            <Label size="small" type="boxed" color="blue">
              Label
            </Label>
            <Label size="small" type="boxed" color="purple">
              Label
            </Label>
            <h3>Label COMPONENT: boxed</h3>
            <Label type="boxed" size="large" color="default">
              Label
            </Label>
            <Label type="boxed" size="large" color="light-grey">
              Label
            </Label>
            <Label type="boxed" size="large" color="green">
              Label
            </Label>
            <Label type="boxed" size="large" color="orange">
              Label
            </Label>
            <Label type="boxed" size="large" color="red">
              Label
            </Label>
            <Label type="boxed" size="large" color="blue">
              Label
            </Label>
            <Label type="boxed" size="large" color="purple">
              Label
            </Label>
            <h3>Label COMPONENT: default</h3>
            <Label size="small" color="default">
              Label
            </Label>
            <Label size="small" color="light-grey">
              Label
            </Label>
            <Label size="small" color="green">
              Label
            </Label>
            <Label size="small" color="orange">
              Label
            </Label>
            <Label size="small" color="red">
              Label
            </Label>
            <Label size="small" color="blue">
              Label
            </Label>
            <Label size="small" color="purple">
              Label
            </Label>
            <h3>Label COMPONENT: default</h3>
            <Label size="large" color="default">
              Label
            </Label>
            <Label size="large" color="light-grey">
              Label
            </Label>
            <Label size="large" color="green">
              Label
            </Label>
            <Label size="large" color="orange">
              Label
            </Label>
            <Label size="large" color="red">
              Label
            </Label>
            <Label size="large" color="blue">
              Label
            </Label>
            <Label size="large" color="purple">
              Label
            </Label>
          </div>

          <div>
            <h3>Label HTML: boxed</h3>
            <span class="_Label-boxed_ _Label-base_ _Label-small_ _Label-defaultboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-small_ _Label-defaultboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-small_ _Label-greenboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-small_ _Label-orangeboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-small_ _Label-redboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-small_ _Label-blueboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-small_ _Label-purpleboxed_">
              Label
            </span>
            <h3>Label HTML: boxed</h3>
            <span class="_Label-boxed_ _Label-base_ _Label-large_ _Label-defaultboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-large_ _Label-defaultboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-large_ _Label-greenboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-large_ _Label-orangeboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-large_ _Label-redboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-large_ _Label-blueboxed_">
              Label
            </span>
            <span class="_Label-boxed_ _Label-base_ _Label-large_ _Label-purpleboxed_">
              Label
            </span>
            <h3>Label HTML: default</h3>
            <span class="_Label-base_ _Label-small_ _Label-defaultdefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-small_ _Label-defaultdefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-small_ _Label-greendefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-small_ _Label-orangedefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-small_ _Label-reddefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-small_ _Label-bluedefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-small_ _Label-purpledefault_">
              Label
            </span>
            <h3>Label HTML: default</h3>
            <span class="_Label-base_ _Label-large_ _Label-defaultdefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-large_ _Label-defaultdefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-large_ _Label-greendefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-large_ _Label-orangedefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-large_ _Label-reddefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-large_ _Label-bluedefault_">
              Label
            </span>
            <span class="_Label-base_ _Label-large_ _Label-purpledefault_">
              Label
            </span>
          </div>
        </div>

        <p>
          Example class:{" "}
          <strong>
            _Label-boxed_ _Label-base_ _Label-large_ _Label-orangeboxed_
          </strong>
        </p>

        <hr style={{ marginBottom: "3em", marginTop: "3em" }} />

        {/* <h3>Internal app button</h3>
      <InternalTreatButton>Button</InternalTreatButton>
      <h3>lib-components default theme button</h3>
      <ExternalTreatButton>Button</ExternalTreatButton>
      <h3>lib-components alt theme button</h3>
      <ThemeProvider theme={altTheme}>
      <ExternalTreatButton>Button</ExternalTreatButton>
    </ThemeProvider> */}
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <h3>Button THEME COMPONENT</h3>
          <Button>Button</Button>
        </div>
        <div>
          <h3>Button THEME HTML</h3>
          <button class="_Button-style__theme-theme_">Button</button>
        </div>
      </div>

      <p>
        Example class: <strong>_Button-style__theme-theme_</strong>
      </p>

      <hr style={{ marginBottom: "3em", marginTop: "3em" }} />

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <h3>Badge THEME COMPONENT</h3>
          <BadgeTheme>12</BadgeTheme>
          <BadgeTheme color="light-grey">12</BadgeTheme>
          <BadgeTheme color="green">12</BadgeTheme>
          <BadgeTheme color="orange">12</BadgeTheme>
          <BadgeTheme color="red">12</BadgeTheme>
          <BadgeTheme color="blue">12</BadgeTheme>
          <BadgeTheme color="purple">12</BadgeTheme>
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3>Badge THEME HTML</h3>
          <div class="_BadgeTheme-base__theme-theme_ _BadgeTheme-default__theme-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme-theme_ _BadgeTheme-light-grey__theme-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme-theme_ _BadgeTheme-green__theme-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme-theme_ _BadgeTheme-orange__theme-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme-theme_ _BadgeTheme-red__theme-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme-theme_ _BadgeTheme-blue__theme-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme-theme_ _BadgeTheme-purple__theme-theme_">
            12
          </div>
        </div>
        <TreatProvider theme={theme2}>
          <div style={{ marginRight: "20px" }}>
            <h3>Badge THEME2 COMPONENT</h3>
            <BadgeTheme>12</BadgeTheme>
            <BadgeTheme color="light-grey">12</BadgeTheme>
            <BadgeTheme color="green">12</BadgeTheme>
            <BadgeTheme color="orange">12</BadgeTheme>
            <BadgeTheme color="red">12</BadgeTheme>
            <BadgeTheme color="blue">12</BadgeTheme>
            <BadgeTheme color="purple">12</BadgeTheme>
          </div>
        </TreatProvider>
        <div style={{ marginRight: "20px" }}>
          <h3>Badge THEME2 HTML</h3>
          <div class="_BadgeTheme-base__theme2-theme_ _BadgeTheme-default__theme2-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme2-theme_ _BadgeTheme-light-grey__theme2-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme2-theme_ _BadgeTheme-green__theme2-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme2-theme_ _BadgeTheme-orange__theme2-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme2-theme_ _BadgeTheme-red__theme2-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme2-theme_ _BadgeTheme-blue__theme2-theme_">
            12
          </div>
          <div class="_BadgeTheme-base__theme2-theme_ _BadgeTheme-purple__theme2-theme_">
            12
          </div>
        </div>
      </div>

      <p>
        Example class:{" "}
        <strong>
          _BadgeTheme-base__theme-theme_ _BadgeTheme-green__theme-theme_
        </strong>
      </p>

      <hr style={{ marginBottom: "3em", marginTop: "3em" }} />
    </TreatProvider>
  );
}

export default App;
