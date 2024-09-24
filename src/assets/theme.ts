import type { ExtendTheme } from "@pigment-css/react/theme";
import { extendTheme } from "@pigment-css/react/utils";

declare module "@pigment-css/react/theme" {
  interface ThemeTokens {
    colors: {
      primary: string;
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
    primary: "#56abdb",
  },
});
