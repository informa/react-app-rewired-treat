// Button.js
import React from "react";
import { useStyles } from "react-treat";
import * as styleRefs from "./Button.treat";

const Button = (props) => {
  const styles = useStyles(styleRefs);

  return <button {...props} className={styles.button} />;
};

export default Button;
