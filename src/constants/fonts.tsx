import { Dimensions, Platform, PixelRatio } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

const scale = SCREEN_WIDTH / 320;

export function actuatedNormalize(size: any) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const commonFontStyle = (fontSize: any, color: any) => {
  return {
    fontSize: actuatedNormalize(fontSize),
    color: color,
    includeFontPadding: false,
  };
};
