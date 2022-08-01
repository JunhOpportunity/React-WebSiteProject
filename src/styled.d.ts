import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // theme 작성
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
