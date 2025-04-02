import { createSSRApp } from "vue";
import App from "./App.vue";
import { setupRouter } from './router';
import 'uno.css'
import { setupPinia } from '@/modules/pinia'

export function createApp() {
  const app = createSSRApp(App);
  setupPinia(app)
  setupRouter(app)
  return {
    app,
  };
}
