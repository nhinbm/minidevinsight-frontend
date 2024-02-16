import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  backgroundColors: {
    bgWildBlueYonder: "hsla(216, 33%, 68%, 1)",
    bgCarolinaBlue: "hsla(199, 89%, 49%, 1)",
    bgprussianBlue: "hsla(216, 33%, 20%, 1)",
    bgOxfordBlue: "hsla(222, 44%, 13%, 1)",
    bgOxfordBlue2: "hsla(222, 47%, 11%, 1)",
  },
  colors: {
    textWhite: "hsla(0, 0%, 100%, 1)",
    textAliceBlue: "hsla(216, 100%, 95%, 1)",
    textColumbiaBlue: "hsla(199, 69%, 84%, 1)",
    textWildBlueYonder: "hsla(216, 33%, 68%, 1)",
    textCarolinaBlue: "hsla(199, 89%, 49%, 1)",
    textShadowBlue: "hsla(217, 24%, 59%, 1)",
    textSlateGray: "hsla(217, 17%, 48%, 1)",
  },
  gradientColors: {
    gradient1: "linear-gradient(90deg, #0ea5ea, #0bd1d1 51%)",
    gradient2: "linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea)",
    gradient3: "linear-gradient(0deg, #000d1a, transparent)",
  },
  borderColors: {
    borderWildBlueYonder: "hsla(216, 33%, 68%, 1)",
    borderPrussianBlue: "hsla(216, 33%, 20%, 1)",
    borderWhite: "hsl(0, 0%, 100%)",
    borderWhiteAlpha15: "hsla(0, 0%, 100%, 0.15)",
  },
  boxShadow: {
    shadow1: "0 8px 20px 0 hsla(0, 0%, 0%, 0.05)",
    shadow2: "0px 3px 20px hsla(180, 90%, 43%, 0.2)",
  },
  borderRadius: {
    radius6: 6,
    radius8: 8,
    radius16: 16,
    radius48: 48,
    radiusCircle: "50%",
    radiusPill: 200,
  },
  transition: {
    transition1: "0.25s ease",
    transition2: "0.5s ease",
    cubicIn: "cubic-bezier(0.51, 0.03, 0.64, 0.28)",
    cubicOut: "cubic-bezier(0.05, 0.83, 0.52, 0.97)",
  },
  default: {
    white: "hsl(0, 0%, 100%, 1)",
    black: "hsl(0, 0%, 0%, 1)",
  },
};

const Theme: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
