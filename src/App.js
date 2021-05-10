import React from "react";
// import "./App.css";
// import { ExternalTreatButton, ThemeProvider, altTheme } from "lib-components";
import InternalTreatButton from "./components/InternalTreatButton";
import Badge from "./components/Badge";
import Label from "./components/Label";

function App() {
  return (
    <div className="App">
      <h1>Static classnames</h1>
      <h3>Config</h3>
      <p>localIdentName: "_[name]-[local]_"</p>
      <p>themeIdentName: "_[name]-[local]_"</p>
      <p>
        <strong>Example: _Badge-base_</strong>
      </p>
      <p>
        <strong>[name]: </strong>Badge
      </p>
      <p>
        <strong>[local]: </strong>base
      </p>
      <i>There can't be multiple classes with _Badge-base_</i>
      <hr />

      <h3>Button COMPONENT</h3>
      <InternalTreatButton>Button</InternalTreatButton>

      <div>
        <h3>Button HTML</h3>
        <button class="_InternalTreatButton-style_">Button</button>
        <p>class="_InternalTreatButton-style_"</p>
      </div>

      <div>
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
        <p>class="_Badge-base_ _Badge-default_"</p>
        <div class="_Badge-base_ _Badge-light-grey_ light-grey">12</div>
        <p>class="_Badge-base_ _Badge-light-grey_ light-grey"</p>

        <div class="_Badge-base_ _Badge-green_ green">12</div>
        <p>class="_Badge-base_ _Badge-green_ green"</p>

        <div class="_Badge-base_ _Badge-orange_ orange">12</div>
        <p>class="_Badge-base_ _Badge-orange_ orange"</p>

        <div class="_Badge-base_ _Badge-red_ red">12</div>
        <p>class="_Badge-base_ _Badge-red_ red"</p>

        <div class="_Badge-base_ _Badge-blue_ blue">12</div>
        <p>class="_Badge-base_ _Badge-blue_ blue"</p>

        <div class="_Badge-base_ _Badge-purple_ purple">12</div>
        <p>class="_Badge-base_ _Badge-purple_ purple"</p>
      </div>

      <div>
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
        <span class="_Label-base_ _Label-small_ _Label-reddefault_">Label</span>
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
        <span class="_Label-base_ _Label-large_ _Label-reddefault_">Label</span>
        <span class="_Label-base_ _Label-large_ _Label-bluedefault_">
          Label
        </span>
        <span class="_Label-base_ _Label-large_ _Label-purpledefault_">
          Label
        </span>
      </div>

      {/* <h3>Internal app button</h3>
      <InternalTreatButton>Button</InternalTreatButton>
      <h3>lib-components default theme button</h3>
      <ExternalTreatButton>Button</ExternalTreatButton>
      <h3>lib-components alt theme button</h3>
      <ThemeProvider theme={altTheme}>
        <ExternalTreatButton>Button</ExternalTreatButton>
      </ThemeProvider> */}
    </div>
  );
}

export default App;
