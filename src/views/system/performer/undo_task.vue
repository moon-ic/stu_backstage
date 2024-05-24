<template>
  <div>
    <h1>未完成的任务</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <router-link :to="`/task/${task.id}`">{{ task.name }}</router-link>
        <span>竞标价格: {{ task.bidPrice }}</span>
        <span>交货时间: {{ task.deliveryDate }}</span>
        <button @click="abandonBid(task.id)">放弃竞标</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, name: '任务一', bidPrice: '50元', deliveryDate: '2023-06-01' },
        { id: 2, name: '任务二', bidPrice: '75元', deliveryDate: '2023-06-05' },
        { id: 3, name: '任务三', bidPrice: '90元', deliveryDate: '2023-06-10' },
        // 你可以根据需要添加更多任务
      ]
    };
  },
  methods: {
    abandonBid(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      // 你可以在这里添加更多逻辑，比如发送请求到服务器以放弃竞标
      console.log(`已放弃任务 ${taskId} 的竞标`);
    }
  }
};
</script>

<style>
/* 你可以根据需要添加样式 */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

span {
  margin-right: 10px;
}

button {
  margin-left: 10px;
}
</style>
