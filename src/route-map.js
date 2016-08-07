import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';

export default {
  '/': {
    component: Home,
  },
  '/Home': {
    component: Home,
  },
  '/Contact': {
    component: Contact,
  },
  '/Project': {
    component: Project,
  },
};
