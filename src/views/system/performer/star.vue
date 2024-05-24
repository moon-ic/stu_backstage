<template>
  <div>
    <h1>收藏的任务</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span>{{ task.title }}</span>
        <span>预算: {{ task.budget }}</span>
        <span>发布时间: {{ task.publishDate }}</span>
        <button @click="unfavoriteTask(task.id)">取消收藏</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, title: '任务一', budget: '150元', publishDate: '2023-05-01' },
        { id: 2, title: '任务二', budget: '200元', publishDate: '2023-05-02' },
        { id: 3, title: '任务三', budget: '250元', publishDate: '2023-05-03' },
        // 你可以根据需要添加更多任务
      ]
    };
  },
  methods: {
    unfavoriteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      // 你可以在这里添加更多逻辑，比如发送请求到服务器以取消收藏
      console.log(`已取消收藏任务 ${taskId}`);
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
