import { useMemo } from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';

import getRoutes from '../../routes/routes';
import { MatchedRoute } from '../../types';

export function useCurrentRouteName() {
  const routes = useMemo(getRoutes, []);
  const location = useLocation();

  const matchedRoutes = (matchRoutes(routes, location.pathname) ||
    []) as MatchedRoute[];
  const route = matchedRoutes[0]?.route;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentRouteName = (route as Record<string, any> | undefined)?.name;

  return {
    currentRouteName,
  };
}
