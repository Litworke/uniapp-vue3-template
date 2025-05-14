<route lang="json5" >
  {
    "name": "Message",
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
    <scroll-view ref="scollRef" scroll-y style="height: 100%;" @touchstart="handleTouchStart"
      @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <view class="psycho-test-container" >
        <!-- 题目卡片 -->
        <view class="question-card" :key="currentIndex">
          <view class="space" :style="{
        'padding-top': `${statusBarHeight}px`,
        'height': `${customBarHeight - statusBarHeight}px`,
      }"></view>
          <view class="question-header">
            <text class="question-type">
              {{ 
                currentQuestion.questionType === 2 ? '多选题' :
                currentQuestion.questionType === 3 ? '判断题' : '单选题'
              }}
            </text>
            <text class="question-number">第 {{ currentIndex + 1 }} 题</text>
          </view>
          <text class="question-content">{{ currentQuestion.questionAsk }}</text>
        </view>

        <!-- 选项卡片 -->
        <view class="option-card">
          <!-- 单选模式 -->
          <view v-if="[1,3].includes(currentQuestion.questionType)" class="option-group">
            <view 
              v-for="(optVal, optKey) in currentQuestion.answerOption" 
              :key="optKey" 
              class="radio-option"
              :class="{ 'selected': currentQuestion.select[0] === optKey }"
              @click="handleRadioSelect(currentIndex, optKey)"
            >
              <text class="option-label">{{ optKey }}.</text>
              <text class="option-text">{{ optVal }}</text>
            </view>
          </view>

          <!-- 多选模式 -->
          <view v-if="currentQuestion.questionType === 2" class="option-group">
            <view 
              v-for="(optVal, optKey) in currentQuestion.answerOption" 
              :key="optKey" 
              class="checkbox-option"
              :class="{ 'selected': currentQuestion.select.includes(optKey) }"
              @click="handleCheckboxSelect(currentIndex, optKey)"
            >
              <text class="option-label">{{ optKey }}.</text>
              <text class="option-text">{{ optVal }}</text>
            </view>
          </view>
        </view>

        
      </view>
    </scroll-view>

  </uni-layout>
</template>

<script setup lang="ts">

const defaultName = ref<string>('default')
  const { menuButtonBounding, customBarHeight, statusBarHeight } = useAppStore()

const { handleTouchStart, handleTouchEnd, handleTouchMove,setCurrIndex,setLength } = (useTouchStore())
const {currentIndex} = storeToRefs(useTouchStore())

const surveyData = ref([
  {
    "questionAsk": "过去两周内，我感到情绪低落或沮丧的频率是？",
    "questionType": 1,
    "answerOption": {
      "A": "几乎没有",
      "B": "少数几天",
      "C": "超过一半时间",
      "D": "几乎每天"
    },
    "select": []
  },
  {
    "questionAsk": "我容易因为小事而感到烦躁或生气。",
    "questionType": 1,
    "answerOption": {
      "A": "非常不符合",
      "B": "不太符合",
      "C": "比较符合",
      "D": "非常符合"
    },
    "select": []
  },
  {
    "questionAsk": "最近一个月，我的睡眠质量如何？",
    "questionType": 1,
    "answerOption": {
      "A": "总是睡得很好",
      "B": "偶尔失眠",
      "C": "经常失眠",
      "D": "几乎每天失眠"
    },
    "select": []
  },
  {
    "questionAsk": "在社交场合中，我常感到紧张或害怕被评价。",
    "questionType": 1,
    "answerOption": {
      "A": "完全不符合",
      "B": "偶尔如此",
      "C": "经常如此",
      "D": "总是如此"
    },
    "select": []
  },
  {
    "questionAsk": "我对未来感到悲观或无望的频率是？",
    "questionType": 1,
    "answerOption": {
      "A": "从未",
      "B": "有时",
      "C": "经常",
      "D": "几乎持续"
    },
    "select": []
  },
  {
    "questionAsk": "以下哪些情况在过去一个月内出现过？（可多选）",
    "questionType": 2,
    "answerOption": {
      "A": "心悸或呼吸急促",
      "B": "注意力难以集中",
      "C": "食欲显著变化",
      "D": "对爱好失去兴趣",
      "E": "完全没有"
    },
    "select": []
  },
  {
    "questionAsk": "我感到身体无缘无故疲乏无力的频率是？",
    "questionType": 1,
    "answerOption": {
      "A": "很少或没有",
      "B": "偶尔",
      "C": "经常",
      "D": "几乎每天"
    },
    "select": []
  },
  {
    "questionAsk": "当遇到压力时，我通常如何应对？（可多选）",
    "questionType": 2,
    "answerOption": {
      "A": "向亲友倾诉",
      "B": "运动或娱乐",
      "C": "压抑情绪",
      "D": "过度饮食/购物"
    },
    "select": []
  },
  {
    "questionAsk": "我对自己感到满意或自信的程度如何？",
    "questionType": 1,
    "answerOption": {
      "A": "非常自信",
      "B": "比较自信",
      "C": "不太自信",
      "D": "非常自卑"
    },
    "select": []
  },
  {
    "questionAsk": "判断：如果我表现出脆弱，别人会看不起我。",
    "questionType": 3,
    "answerOption": {
      "A": "正确",
      "B": "错误"
    },
    "select": []
  },
  {
    "questionAsk": "过去一个月，我出现以下躯体症状的频率？（可多选）",
    "questionType": 2,
    "answerOption": {
      "A": "头痛/头晕",
      "B": "胃痛/消化问题",
      "C": "手抖或出汗",
      "D": "胸闷/窒息感",
      "E": "完全没有"
    },
    "select": []
  },
  {
    "questionAsk": "我能感受到生活中的快乐和满足感。",
    "questionType": 1,
    "answerOption": {
      "A": "总是能",
      "B": "多数时候能",
      "C": "偶尔能",
      "D": "几乎不能"
    },
    "select": []
  },
  {
    "questionAsk": "当与他人冲突时，我更容易：",
    "questionType": 1,
    "answerOption": {
      "A": "主动沟通解决",
      "B": "冷战回避",
      "C": "情绪爆发",
      "D": "自责内疚"
    },
    "select": []
  },
  {
    "questionAsk": "判断：心理问题可以通过意志力完全克服，无需专业帮助。",
    "questionType": 3,
    "answerOption": {
      "A": "正确",
      "B": "错误"
    },
    "select": []
  },
  {
    "questionAsk": "我对日常活动的兴趣程度如何？",
    "questionType": 1,
    "answerOption": {
      "A": "和以前一样",
      "B": "稍有减退",
      "C": "明显减退",
      "D": "完全失去兴趣"
    },
    "select": []
  },
  {
    "questionAsk": "当遇到困难时，我倾向于认为：",
    "questionType": 1,
    "answerOption": {
      "A": "问题总有解决办法",
      "B": "需要他人帮助才能解决",
      "C": "自己无法应对",
      "D": "问题会持续恶化"
    },
    "select": []
  },
  {
    "questionAsk": "我是否出现过伤害自己或结束生命的念头？",
    "questionType": 1,
    "answerOption": {
      "A": "从未",
      "B": "偶尔想过",
      "C": "多次计划",
      "D": "曾尝试过"
    },
    "select": []
  },
  {
    "questionAsk": "以下哪些描述符合你的状态？（可多选）",
    "questionType": 2,
    "answerOption": {
      "A": "反复检查门窗是否关好",
      "B": "害怕在公共场所晕倒",
      "C": "总担心自己生病",
      "D": "必须按固定顺序做事"
    },
    "select": []
  },
  {
    "questionAsk": "我对自身价值的看法是：",
    "questionType": 1,
    "answerOption": {
      "A": "值得被爱和尊重",
      "B": "需要他人认可才有价值",
      "C": "觉得自己不如别人",
      "D": "觉得自己毫无价值"
    },
    "select": []
  },
  {
    "questionAsk": "当情绪糟糕时，我会如何缓解？（可多选）",
    "questionType": 2,
    "answerOption": {
      "A": "深呼吸/冥想",
      "B": "写日记记录感受",
      "C": "抽烟/喝酒",
      "D": "暴饮暴食"
    },
    "select": []
  }
])
setLength(surveyData.value.length)
setCurrIndex(0)
const currentQuestion = computed(() => surveyData.value[currentIndex.value])

watch(
  () => currentIndex.value,
  (index) => {
    setCurrIndex(index)
  },
)

// 提交处理
const handleSubmit = async () => {
}

const handleRadioSelect = (qIndex:number, value) => {
  surveyData.value[qIndex].select = [value]
}

const handleCheckboxSelect = (qIndex, value) => {
  const selected = surveyData.value[qIndex].select
  const index = selected.indexOf(value)
  index === -1 ? selected.push(value) : selected.splice(index, 1)
}




const props = defineProps(['content'])



const processedContent = `
### hello
`
</script>


<style lang="less">
@import url('./message.less');
</style>