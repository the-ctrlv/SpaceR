import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/styles';
import { dark, light } from 'styles/theme';

import { themeSlice } from 'store/reducers/ThemeSlice';

import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';

import useRoutesConfig from 'hooks/custom/useRouterConfig';
import { useAppDispatch } from 'hooks/store';
import { useAppSelector } from 'hooks/store/useAppSelector';

import FadeInWrapper from 'components/FadeInWrapper';

function App() {
  const dispatch = useAppDispatch();
  const isLightTheme = useAppSelector((state) => state.theme.isLightTheme);
  const { routesComponent, routes, currentRouteName } = useRoutesConfig();
  const { toggleTheme } = themeSlice.actions;

  const { pathname } = window.location;

  const isPagePrivate = routes.find(
    (route) => route.name === currentRouteName
  )?.private;

  const isPageNoSideBar = routes.find(
    (route) => route.name === currentRouteName
  )?.noSideBar;

  useEffect(() => {
    if (localStorage.getItem('currentTheme') === 'dark') {
      dispatch(toggleTheme());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isPagePrivate && !isLightTheme) {
      dispatch(toggleTheme());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLightTheme, isPagePrivate]);

  return (
    <ThemeProvider theme={isLightTheme ? light : dark}>
      <GlobalStyles $isLightTheme={isLightTheme} />
      {isPagePrivate ? (
        <PrivateLayout noSideBar={isPageNoSideBar}>
          <FadeInWrapper animationKey={pathname}>
            {routesComponent}
          </FadeInWrapper>
        </PrivateLayout>
      ) : (
        <PublicLayout>{routesComponent}</PublicLayout>
      )}
    </ThemeProvider>
  );
}

export default App;
