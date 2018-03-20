import Settings from './components/Settings.vue'
import Welcome from './components/Welcome.vue'
import Game from './components/Game.vue'
import Results from './components/Results.vue'

export const routes = [{
    path: '/',
    component: Welcome
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/game',
    component: Game
  },

  {
    path: '/results',
    component: Results
  },
];
