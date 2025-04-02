import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from "pinia-plugin-persist-uni";

export const pinia = createPinia()
pinia.use(piniaPersist)
export const setupPinia = (app: App<Element>) => app.use(pinia)

