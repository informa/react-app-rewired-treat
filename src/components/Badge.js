import React from "react";
import classnames from "classnames";
import badge from "./Badge.treat";

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
  const safeColor = validBadgeColors.includes(color) ? color : "default";

  return (
    <div
      className={classnames(
        badge.base,
        badge[safeColor],
        {
          [safeColor]: safeColor !== "default",
        },
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Badge;
