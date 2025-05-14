<template>
  <view class="wrap bg-base color-base text-base text-lg font-light   ">
    
    <!-- 头部 -->
    <view class="wrap-box">
      <slot name="header">
      </slot>
      <!-- 身体 -->
      <view class="wrap-container">
        <scroll-view scroll-y style="height: 100%;">
          <slot></slot>
        </scroll-view>
      </view>
      <slot name="footer"></slot>
    </view>

  </view>
</template>


<style lang="less">
.wrap {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}


.wrap-box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0px;
  display: flex;
  flex-direction: column;

  .wrap-header {
    position: relative;
  }
}

.wrap-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>