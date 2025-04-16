/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const colors = {
  bg: "#1B1B1E",
  basePrimary: "#232326",
  baseSecondary: "#343437",

  baseTertiary: "#454549",
  contentQuaternary: "#6D6D76",
  contentTertiary: "#9E9EA2",

  contentSecondary: "#D1D1D5",
  contentPrimary: "#F1F1F5",
  primaryOverlay: "rgba(52, 52, 55 , 0.75)",

  primaryOverlayWhite: "rgba(241, 241, 245, 0.1)",
  backgroundOverlay: "rgba(0, 0, 0, 0.80)",
  positive: "#4AC99B",

  negative: "#DF5151",
  warning: "#FFCE21",
  link: "#6788FF",

  notification: "#E55C65",
  profile: "#7C7474",
  friend: "#669774",

  pets: "#648A83",
  messenger: "#5574B0",
  news: "#838A5C",

  group: "#608AA1",
  admin: "#30475F",
  media: "#E5925B",

  booking: "#D89342",
  market: "#E5635B",
  library: "#B28D75",

  maps: "#4D99DF",
  weather: "#BF79C6",
  verificationMark: "#FED05B",

  orange: "#FD8501",
  white: "#ffffff",
  black: "#000000",

  temp: "#BB1AE3",
  transparent: "transparent",
  about: "#F5F4F2",

  bannerGradient: ["rgba(35, 35, 38, 0.6)", "rgba(35, 35, 38, 0)"],

  // This color is only for native project.
  qRCode: "#364A33",
};
