import { useEffect, useState } from 'react';
import { breakpoints } from 'styles/responsive';

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerWidth,
  });

  const isMobileSm = windowDimensions.windowWidth <= breakpoints.sm;
  const isMobile = windowDimensions.windowWidth <= breakpoints.md;
  const isMedium = windowDimensions.windowWidth <= breakpoints.lg;
  const isTablet = windowDimensions.windowWidth <= breakpoints.xl;
  const isSmallDesktop = windowDimensions.windowWidth <= breakpoints.xxl;
  const isTV = windowDimensions.windowWidth <= breakpoints.tv;

  useEffect(() => {
    const handleResize = () =>
      setWindowDimensions({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...windowDimensions,
    isMobileSm,
    isMobile,
    isMedium,
    isTablet,
    isSmallDesktop,
    isTV,
  };
}
