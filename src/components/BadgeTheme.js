import React from "react";
import { useStyles } from "react-treat";
import classnames from "classnames";
// import badge from "./Badge.treat";
import * as styleRefs from "./BadgeTheme.treat";

export const validBadgeColors = [
  "default",
  "light-grey",
  "green",
  "orange",
  "red",
  "blue",
  "purple",
];

const Badge = ({ color, className, children, ...restProps }) => {
  const styles = useStyles(styleRefs);

  console.log(styles)

  const safeColor = validBadgeColors.includes(color) ? color : "default";

  return (
    <div
      className={classnames(
        styles.default.base,
        styles.default[safeColor],
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Badge;
