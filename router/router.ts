import * as Screens from './index';

interface Route {
  name: string | 'App1.tsx' | 'App2.tsx';
  component: () => JSX.Element;
}

const routes: Route[] = Object.entries(Screens).map(([name, component]) => ({
  name,
  component,
}));

export default routes;
