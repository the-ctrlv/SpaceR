export type MatchedRoute = {
  params: Record<string, string>;
  pathname: string;
  pathnameBase: string;
  // For it's impossible to tell react-router-dom what route is
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: Record<string, any>;
};
export type User = {
  avatar: string;
  bgImage: string;
  username: string;
  email: string;
  phone: string;
  weight: string;
  height: string;
  age: string;
  country: string;
};

export type INotes = {
  id: string;
  image?: string;
  time: string;
  title: string;
  body: string;
};
