te<route lang="json5">
    {
      "name": "Consult",
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
      <wd-badge custom-class="badge" modelValue="3" bg-color="pink">
    <wd-button size="small">回复</wd-button>
  </wd-badge>
  <wd-badge custom-class="badge" modelValue="1" type="primary">
    <wd-button size="small">评论</wd-button>
  </wd-badge>
  <wd-badge custom-class="badge" modelValue="2" type="warning">
    <wd-button size="small">回复</wd-button>
  </wd-badge>
  <wd-badge custom-class="badge" modelValue="1" type="success">
    <wd-button size="small">评论</wd-button>
  </wd-badge>
  <wd-badge custom-class="badge" modelValue="2" type="info">
    <wd-button size="small">回复</wd-button>
  </wd-badge>
    </view>
  </template>
  
  
  <script setup lang="ts">
  
  </script>
  
  