import { styleMap } from "treat";

// Base alert
const badge = styleMap((theme) => ({
  base: {
    display: "inline-block",
    minWidth: "1rem",
    padding: `4px 6px`,
    fontSize: theme.fontSize,
    fontWeight: "bold",
    lineHeight: 1,
    whiteSpace: "nowrap",
    borderRadius: theme.spaceMultiplied * 2,
    ":empty": {
      display: "none",
    },
  },
  default: {
    backgroundColor: theme.brandBackgroundColor,
    color: theme.brandColor,
  },
  "light-grey": {
    backgroundColor: "lightGrey",
    color: "darkGrey",
  },
  green: {
    backgroundColor: "lightGreen",
    color: "green",
  },
  orange: {
    backgroundColor: "gold",
    color: "orange",
  },
  red: {
    backgroundColor: "pink",
    color: "red",
  },
  blue: {
    backgroundColor: "lightBlue",
    color: "blue",
  },
  purple: {
    backgroundColor: "violet",
    color: "purple",
  },
}));

export default badge;
