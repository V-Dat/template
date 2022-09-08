import { Fragment } from "react";
import { NAVIGATION_PATH } from "src/config/path";

// Layouts
import DefaultLayout, {
  DefaultLayoutProps,
} from "src/layouts/DefaultLayout/DefaultLayout";

// Pages
import Counter from "src/pages/Counter/Counter";

// Public routes
const publicRoutes: PublicRoutes = [
  { path: NAVIGATION_PATH.HOME, component: Counter, layout: DefaultLayout },
  { path: NAVIGATION_PATH.ABOUT, component: Counter, layout: Fragment },
  { path: NAVIGATION_PATH.LOGIN, component: Counter, layout: Fragment },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };

type PublicRoutes = (
  | {
      path: string;
      component: () => JSX.Element;
      layout: (props: DefaultLayoutProps) => JSX.Element;
    }
  | {
      path: string;
      component: () => JSX.Element;
      layout: React.ExoticComponent<{
        children?: React.ReactNode;
      }>;
    }
)[];
