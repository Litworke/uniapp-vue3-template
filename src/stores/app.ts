import { pinia } from '@/modules/pinia'
import storage from "./storage"

interface MenuButtonBoundingClientRect {
  width: number
  height: number
  top: number
  left: number
  right: number
  bottom: number
}

export const useAppStore = defineStore(
  'app',
  () => {
    const darkMode = ref(false)
    const statusBarHeight = ref(0)
    const menuButtonBounding = ref<MenuButtonBoundingClientRect>()
    const customBarHeight = computed(
      () => !menuButtonBounding.value
        ? 0
        : menuButtonBounding.value.bottom + menuButtonBounding.value.top - statusBarHeight.value)

    return {
      darkMode,
      statusBarHeight,
      customBarHeight,
      menuButtonBounding,
    }
  },{
    persist: {
        enabled: true, // 开启持久化
        strategies: [
            {
                key: "app", // 持久化的key
                storage // 持久化的方式，可以选择sessionStorage
            },
        ],
    }
})


export function useAppStoreWidthOut() {
  return useAppStore(pinia)
}
