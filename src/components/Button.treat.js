// Button.treat.js
// ** THIS CODE WON'T END UP IN YOUR BUNDLE EITHER! **
import { style } from "treat";

export const button = style((theme) => ({
  border: 0,
  fontWeight: "bold",
  fontSize: theme.fontSize,
  backgroundColor: theme.brandBackgroundColor,
  borderRadius: theme.spaceMultiplied * 3,
  paddingTop: theme.spaceMultiplied * 4,
  paddingBottom: theme.spaceMultiplied * 4,
  paddingLeft: theme.spaceMultiplied * 6,
  paddingRight: theme.spaceMultiplied * 6,
  color: theme.brandColor,
}));
