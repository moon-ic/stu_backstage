<template>
  <div>
    <h1>已完成的任务</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <router-link :to="`/task/${task.id}`">{{ task.name }}</router-link>
        <span>成交价格: {{ task.price }}</span>
        <span>交货时间: {{ task.deliveryDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, name: '任务一', price: '100元', deliveryDate: '2023-05-21' },
        { id: 2, name: '任务二', price: '200元', deliveryDate: '2023-05-22' },
        { id: 3, name: '任务三', price: '300元', deliveryDate: '2023-05-23' },
        // 你可以根据需要添加更多任务
      ]
    };
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
  margin-left: 10px;
}
</style>
