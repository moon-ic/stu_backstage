<template>
  <div>
    <h1>我的竞标任务</h1>
    <div class="bidding-list">
      <div v-for="(bid, index) in bids" :key="index" class="bid-item">
        <h2>{{ bid.taskName }}</h2>
        <p>竞标价格: ¥{{ bid.price }}</p>
        <p>交货时间: {{ bid.deliveryTime }}</p>
        <!-- 这里可以添加其他您需要的组件或元素，比如提交竞标按钮等 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bids: [
        {
          taskName: '构建一个html界面',
          price: 135.0,
          deliveryTime: '1小时',
          // 其他竞标相关的数据...
        },
        // 您可以根据需要添加更多竞标数据
      ],
    };
  },
};
</script>

<style scoped>
.bidding-list {
  /* 竞标列表的样式 */
  margin-top: 20px;
}

.bid-item {
  /* 单个竞标项的样式 */
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>