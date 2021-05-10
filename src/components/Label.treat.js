import { style, styleMap } from "treat";

// output _Label-style_ (export const label = style({)
export const label = style({
  display: "inline-block",
  lineHeight: 1,
  ":empty": {
    display: "none",
  },
});

// output _Label-style_ (export const boxed = style({)
export const boxed = style({
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "4px",
  paddingBottom: "4px",
  borderRadius: "4px",
});

export const label2 = styleMap({
  base: {
    display: "inline-block",
    lineHeight: 1,
    ":empty": {
      display: "none",
    },
  },
  boxed: {
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "4px",
    paddingBottom: "4px",
    borderRadius: "4px",
  },
});

export const sizes = styleMap({
  large: {
    fontSize: "16px",
  },
  small: {
    fontSize: "12px",
  },
});

export const colorMap = {
  default: styleMap({
    default: {
      color: "#666",
    },
    green: {
      color: "green",
    },
    orange: {
      color: "orange",
    },
    red: {
      color: "red",
    },
    blue: {
      color: "blue",
    },
    purple: {
      color: "purple",
    },
  }),
  boxed: styleMap({
    default: {
      backgroundColor: "lightGrey",
      color: "#222",
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
  }),
};

export const colorMap2 = styleMap({
  defaultdefault: {
    color: "#666",
  },
  greendefault: {
    color: "green",
  },
  orangedefault: {
    color: "orange",
  },
  reddefault: {
    color: "red",
  },
  bluedefault: {
    color: "blue",
  },
  purpledefault: {
    color: "purple",
  },
  defaultboxed: {
    backgroundColor: "lightGrey",
    color: "#222",
  },
  greenboxed: {
    backgroundColor: "lightGreen",
    color: "green",
  },
  orangeboxed: {
    backgroundColor: "gold",
    color: "orange",
  },
  redboxed: {
    backgroundColor: "pink",
    color: "red",
  },
  blueboxed: {
    backgroundColor: "lightBlue",
    color: "blue",
  },
  purpleboxed: {
    backgroundColor: "violet",
    color: "purple",
  },
});
