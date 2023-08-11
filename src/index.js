import { Router } from './router.js';
import { route } from './background.js';
import * as el from './elemments.js';

const router = new Router();
router.add('/', '/pages/home.html');
router.add('/universe', '/pages/universe.html');
router.add('/exploration', '/pages/exploration.html');
router.add(404, '/pages/404.html');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

el.homeLink.addEventListener('click', () => route('home'));
el.universeLink.addEventListener('click', () => route('universe'));
el.explorationLink.addEventListener('click', () => route('exploration'));