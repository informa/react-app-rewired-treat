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
  const colorType = styles.colorMap[type];
  console.log(colorType, type);
  const isBoxed = type === "boxed";

  const classes = classnames(
    {
      // [styles.boxed]: isBoxed,
      [styles.label2.boxed]: isBoxed,
    },
    // styles.label,
    styles.label2.base,
    styles.sizes[size],
    // colorType[safeColor],
    styles.colorMap2[`${safeColor}${type}`],
    className
  );
  return (
    <span className={classes} {...restProps}>
      {children}
    </span>
  );
};

export default Label;
