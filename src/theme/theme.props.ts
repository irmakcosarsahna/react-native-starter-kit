export interface themeProps {
  color: colorsProps;
  typography: typographyProps;
  spacing: spacingProps;
  timing: timingProps;
}

export type spacingProps = number[];

export interface timingProps {
  quick: number;
}

export interface colorsProps {
  primary: string;
  background: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  button: {
    background: string;
    border: string;
  };
  other: {
    primary: string;
  };
  shadow: {
    primary: string;
    secondary: string;
  };
  alert: {
    success: string;
    error: string;
  };
}

export interface typographyProps {
  primary: string | undefined;
  primaryBold: string | undefined;
  primarySemibold: string | undefined;
  primaryMedium: string | undefined;
  primaryThin: string | undefined;
  primaryLight: string | undefined;
  button: string | undefined;
  secondary: string | undefined;
  code: string | undefined;
}
