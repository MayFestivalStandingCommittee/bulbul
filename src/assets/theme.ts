import type { ExtendTheme } from "@pigment-css/react/theme";
import { extendTheme } from "@pigment-css/vite-plugin";
import { colors } from "./colors";

declare module "@pigment-css/react/theme" {
  interface ThemeTokens {
    colors: {
      primary: string;
      text: {
        primary: string;
        secondary: string;
        red: string;
      };
    };
  }

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: ThemeTokens;
    }>;
  }
}

export const theme = extendTheme({
  colors: {
    primary: colors.primary[500],
    text: {
      primary: colors.text.black,
      secondary: colors.text.white,
      red: colors.text.red,
    },
  },
});
