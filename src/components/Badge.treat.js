import { styleMap } from "treat";

// Base alert
const badge = styleMap({
  base: {
    display: "inline-block",
    minWidth: "1rem",
    padding: `4px 6px`,
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: 1,
    whiteSpace: "nowrap",
    borderRadius: "4px",
    ":empty": {
      display: "none",
    },
  },
  default: {
    backgroundColor: "grey",
    color: "darkGrey",
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
});

export default badge;
