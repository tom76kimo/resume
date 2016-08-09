import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';
import Skill from './components/Skill';

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
  '/Skill': {
    component: Skill,
  },
};
