import React from "react";
import classnames from "classnames";
import * as styles from "./Label.treat";

export const validColors = [
  "default",
  "green",
  "orange",
  "red",
  "blue",
  "purple",
];

const Label = ({
  children,
  color,
  size,
  type = "default",
  className,
  ...restProps
}) => {
  const safeColor = validColors.includes(color) ? color : "default";
  console.log(`${safeColor}${type}`);
  const isBoxed = type === "boxed";

  const classes = classnames(
    {
      [styles.label.boxed]: isBoxed,
    },
    styles.label.base,
    styles.sizes[size],
    styles.colorMap[`${safeColor}${type}`],
    className
  );
  return (
    <span className={classes} {...restProps}>
      {children}
    </span>
  );
};

export default Label;
