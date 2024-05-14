import { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import getRoutes from 'routes/routes';

import { useCurrentRouteName } from './useCurrentRouteName';

function useRoutesConfig() {
  const { currentRouteName } = useCurrentRouteName();
  const routes = useMemo(getRoutes, []);
  const routesComponent = useRoutes(routes);

  return {
    routes,
    routesComponent,
    currentRouteName,
  };
}

export default useRoutesConfig;
