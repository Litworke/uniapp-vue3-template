

export default {
    getItem(key) {
        return uni.getStorageSync(key)
    },
    setItem(key, value) {
        uni.setStorageSync(key, value)
    },
    removeItem(key) {
        uni.removeStorageSync(key)
    },
    clear() {
        uni.clearStorageSync()
    }
} as Storage