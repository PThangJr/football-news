import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
const routes = [
  {
    path: '/not-found',
    exact: true,
    main: () => <NotFoundPage />,
  },
  {
    path: '/',
    exact: false,
    main: () => <HomePage />,
  },

  // {
  //   path: '/news/premier-league',
  //   exact: true,
  //   main: () => <HomePage />,
  // },
  // {
  //   path: '/news/la-liga',
  //   exact: false,
  //   main: () => <HomePage />,
  // },
  // {
  //   path: '/news/serie-a',
  //   exact: false,
  //   main: () => <HomePage />,
  // },
  // {
  //   path: '/news/bundesliga',
  //   exact: false,
  //   main: () => <HomePage />,
  // },
  // {
  //   path: '/news/ligue-1',
  //   exact: false,
  //   main: () => <HomePage />,
  // },
  // {
  //   path: '/detail-page',
  //   exact: false,
  //   main: () => <HomePage />,
  // },
];

export default routes;
