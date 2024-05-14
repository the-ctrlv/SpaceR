export const breakpoints = {
  sm: 375,
  md: 700,
  lg: 992,
  xl: 1025,
  xxl: 1280,
  desktop: 1440,
  tv: 1600,
};
export const mqMin = (breakpoint: number) =>
  `screen and (min-width: ${breakpoint}px)`;
export const mqMax = (breakpoint: number) =>
  `screen and (max-width: ${breakpoint}px)`;

export const mqBetween = (breakpointMin: number, breakpointMax: number) =>
  `screen and (min-width: ${breakpointMin}px) and (max-width: ${breakpointMax}px)`;
