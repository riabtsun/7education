import { isAuth } from './authorization.js';
import { store } from './store';

isAuth();
try {
  store();
} catch (e) {}
