import * as Screens from './index';

interface Route {
  name: string;
  component: () => JSX.Element
} 

const routes: Route[] = Object.entries(Screens).map(([name, component]) => ({
  name,
  component,
}));

export default routes;