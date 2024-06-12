import * as Screens from './index';

interface Route {
  name: 'App1' | 'App2';
  component: () => JSX.Element;
}

const routes  = Object.entries(Screens).map(([name, component]) => ({
  name,
  component,
}));

export default routes as Route[];
