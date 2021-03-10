import HomePage from "@/pages/HomePage";
import TropaionPage from "@/pages/TropaionPage";
import EventsPage from "@/pages/EventsPage";
import ResultsPage from "@/pages/ResultsPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsPage
  },
  {
    path: '/results',
    name: 'results',
    component: ResultsPage
  },
  {
    path: '/tropaion',
    name: 'Tropaion',
    component: TropaionPage
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFoundPage,
    meta: {
      layout: 'system',
    }
  }
];

export default routes;
