import Dashboard from 'pages/Dashboard';
import Exercise from 'pages/Exercise';
import Habitat from 'pages/Habitat';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import ResetPassword from 'pages/ResetPassword';
import SOP from 'pages/SOP';
import Settings from 'pages/Settings';
import SignUp from 'pages/SignUp';
import Survey from 'pages/Survey';

export const routesNames = {
  dashboard: 'dashboard',
  habitat: 'habitat',
  profile: 'profile',
  settings: 'settings',
  sop: 'sop',
  activityIntake: 'activity-intake',
  survey: 'survey',
  login: 'login',
  resetPassword: 'reset-password',
  signUp: 'sign-up',
};

export type Route = {
  path: string;
  name: (typeof routesNames)[keyof typeof routesNames];
  exact: boolean;
  private: boolean;
  element: JSX.Element;
  noSideBar?: boolean;
  children?: Route[];
};

const getRoutes = (): Route[] => [
  {
    path: '/',
    name: routesNames.dashboard,
    exact: true,
    private: true,
    element: <Dashboard />,
  },
  {
    path: '/habitat',
    name: routesNames.habitat,
    exact: true,
    private: true,
    element: <Habitat />,
  },
  {
    path: '/profile',
    name: routesNames.profile,
    exact: true,
    private: true,
    element: <Profile />,
  },
  {
    path: '/settings',
    name: routesNames.settings,
    exact: true,
    private: true,
    element: <Settings />,
  },
  {
    path: '/sop',
    name: routesNames.sop,
    exact: true,
    private: true,
    element: <SOP />,
  },
  {
    path: '/survey/:id',
    name: routesNames.survey,
    exact: true,
    private: true,
    element: <Survey />,
    // noSideBar: true,
  },
  {
    path: '/exercise/:id',
    name: routesNames.survey,
    exact: true,
    private: true,
    element: <Exercise />,
    // noSideBar: true,
  },
  {
    path: '/login',
    name: routesNames.login,
    exact: true,
    private: false,
    element: <Login />,
  },
  {
    path: '/reset-password',
    name: routesNames.resetPassword,
    exact: true,
    private: false,
    element: <ResetPassword />,
  },
  {
    path: '/sign-up',
    name: routesNames.signUp,
    exact: true,
    private: false,
    element: <SignUp />,
  },
];

export default getRoutes;
