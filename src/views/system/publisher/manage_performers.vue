<template>
  <div>
    <!-- 竞标者管理标题 -->
    <h2>关于任务 "{{ taskName }}" 的竞标者</h2>

    <!-- 竞标者列表 -->
    <div v-if="bidders.length > 0">
      <ul>
        <li v-for="bidder in bidders" :key="bidder.id">
          <img :src="bidder.avatar" alt="竞标者头像">
          <div>
            <p>昵称：{{ bidder.nickname }}</p>
            <p>邮箱：{{ bidder.email }}</p>
            <p>投标价格：{{ bidder.bid }}</p>
            <p>预计完成时间：{{ bidder.deliveryTime }}</p>
            <button @click="acceptBid(bidder.id)">接受竞标</button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>暂无竞标者</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: '任务名称', // 可以通过路由参数或其他方式获取任务名称
      bidders: [
        { id: 1, avatar: 'avatar1.jpg', nickname: '竞标者1', email: 'bidder1@example.com', bid: '$800', deliveryTime: '3天', accepted: false },
        { id: 2, avatar: 'avatar2.jpg', nickname: '竞标者2', email: 'bidder2@example.com', bid: '$1200', deliveryTime: '5天', accepted: false },
        { id: 3, avatar: 'avatar3.jpg', nickname: '竞标者3', email: 'bidder3@example.com', bid: '$1000', deliveryTime: '4天', accepted: false }
      ]
    };
  },
  methods: {
    acceptBid(bidderId) {
      // 根据竞标者的id执行接受竞标的操作
      const bidder = this.bidders.find(bidder => bidder.id === bidderId);
      bidder.accepted = true;
      // 可以发送请求到服务器，更新数据库中的信息
    }
  }
};
</script>

<style>
/* 样式可以根据需求自行添加 */
</style>
