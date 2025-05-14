<route lang="json5" type="home">
  {
    "name": "Index",
    "layout": false,
    "style": {
      "navigationStyle": "custom"
    },
    "meta": {
      "ignoreAuth": true
    }
  }
</route>

<template>
  <uni-layout :name="defaultName">
    <view class="wrap">
      <image class="topImg" src="../../static/images/topImg.png" mode="widthFix" />
      <view class="space" :style="{
        'padding-top': `${statusBarHeight}px`,
        'height': `${customBarHeight - statusBarHeight}px`,
      }"></view>
      <view class="wrap-container flex flex-col gap-1 p-5">
        <view class="swiper">
          <wd-swiper :list="swiperList" height="300rpx" autoplay v-model:current="current" @click="handleClick"
            @change="onChange"></wd-swiper>
        </view>
        <view class="tabs">
          <wd-grid bg-color="transparent">
            <wd-grid-item use-icon-slot use-text-slot v-for="(item, index) in tabsIndex" :key="index">
              <template #icon>
                <image class="slot-img w-[30px] h-[30px]" :src="`../../static` + item.icon" />
              </template>
              <template #text>
                <text>{{ item.text }}</text>
              </template>
            </wd-grid-item>
          </wd-grid>
        </view>

        <view class="top_image_item">
          <view catchtap="navTo" class="image_icon" v-for="(item, index) in desLink" :key="index">
            <image class="imageNav" :src="`../../static` + item.icon"></image>
            <view class="navTitle">{{ item.name }}</view>
            <view class="navDesc">{{ item.desc }}</view>
          </view>
        </view>

        <view class="answer">
          <view class="answer_name">咨询 <view class="answer_blank"></view>
          </view>
          <view class="answer_more">查看更多</view>
        </view>

        <scroll-view class="transition-height duration-300 overflow-scroll whitespace-nowrap " scroll-x
          scroll-with-animation :scroll-into-view="scrollTo" scroll-left="0">
          <view v-for="(item, index) in scrollList" :id="`action-${index + 1}`" :key="index"
            class="py-1 px-2 inline-block " @click="setCurrIndex(index)">
            <text class="tab-item" :class="{ 'tab-item--active': currentIndex === index }">
              {{ item.name }}
            </text>
          </view>
        </scroll-view>

      </view>
    </view>

  </uni-layout>
</template>

<script setup lang="ts">

const router = useRoute()
console.log(router);

const defaultName = ref<string>('default')

const { handleTouchStart, handleTouchEnd, handleTouchMove, setCurrIndex, setLength } = (useTouchStore())
const { currentIndex } = storeToRefs(useTouchStore())

const { menuButtonBounding, customBarHeight, statusBarHeight } = useAppStore()
console.log(menuButtonBounding, customBarHeight, statusBarHeight);

const current = ref<number>(0)

const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg'
])



const tabsIndex = ref<{
  icon: string
  text: string,
  path?: string
}[]>([
  {
    icon: '/images/qinzi@2x.png',
    text: '儿童青少年',
  }, {
    icon: '/images/zhengwu@2x.png',
    text: '情感婚姻',
  }, {
    icon: '/images/qiyehegeren@2x.png',
    text: '职业生涯',
  }, {
    icon: '/images/qinggan@2x.png',
    text: '焦虑抑郁',
  }, {
    icon: '/images/fans.png',
    text: '人际关系',
  }
])

const scrollTo = ref<string>('action-1')
const scrollList = [
  {
    name: '全部分类'
  }, {
    name: '情感婚姻'
  }, {
    name: '儿童青少年'
  }, {
    name: '焦虑抑郁'
  }, {
    name: '职业生涯'
  }, {
    name: '人际关系'
  },
  {
    name: '心理测评'
  }, {
    name: '心理咨询'
  }, {
    name: '心理课程'
  }
]
setCurrIndex(0)
setLength(scrollList.length)
watch(() => currentIndex.value, (index) => {
  scrollTo.value = `action-${index}`
})
const desLink = [{
  name: "心理咨询",
  desc: "专业有效",
  icon: "/images/xinlizixun.png",
  url: "/pages/consult/index"
}, {
  name: "心理测评",
  desc: "了解现状",
  icon: "/images/xinliceping.png",
  url: "/pages/consultList/index"
}, {
  name: "学习课程",
  desc: "守护健康",
  icon: "/images/xinlibaike.png",
  url: "/pages/class/index"
}, {
  name: "咨询指南",
  desc: "获得帮助",
  icon: "/images/liaojiejigou.png",
  url: "/pages/consultGuild/index"
}]
function handleClick(e:any) {
  console.log(e)
}
function onChange(e:any) {
  console.log(e)
}

</script>


<style lang="less">
@import url('./index.less');
</style>