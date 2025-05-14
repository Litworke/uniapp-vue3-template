<route lang="json5">
    {
      "name": "Mine",
      "style": {
      "navigationStyle": "custom"
    },
      "meta": {
        "ignoreAuth": true
      }
    }
  </route>
  
  
  <template>
    <view class="wrap">
      <wd-watermark content="wot-design-uni" :width="130" :height="130"></wd-watermark>
      <wd-badge custom-class="badge" modelValue="3" bg-color="pink">
    <wd-button size="small">回复</wd-button>
  </wd-badge>
  <wd-progress :percentage="100" hide-text status="success" />
<wd-progress :percentage="70" hide-text status="danger" />
    </view>
  </template>