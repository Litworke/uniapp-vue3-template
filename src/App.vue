<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
const { darkMode, statusBarHeight, menuButtonBounding } = storeToRefs(
  useAppStore()
);

onLaunch(() => {
  console.log("App Launch");

  // #ifdef MP-WEIXIN || MP-QQ
  const systemInfo = uni.getSystemInfoSync();
  darkMode.value = systemInfo?.theme === "dark";
  statusBarHeight.value = systemInfo!.statusBarHeight || 44;
  menuButtonBounding.value = uni.getMenuButtonBoundingClientRect();
  uni.onThemeChange(
    (res: UniApp.OnThemeChangeCallbackResult) =>
      (darkMode.value = res.theme === "dark")
  );
  // #endif

});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
