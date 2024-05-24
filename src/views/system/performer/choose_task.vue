<template>
  <div>
    <h2>任务筛选</h2>
    <div>
      <TableSearch :query="query" :options="searchOpt" :search="handleSearch" />
      <input type="text" v-model="taskName" placeholder="任务名称">
      <select v-model="taskCategory">
        <option value="">所有类别</option>
        <option value="工作">工作</option>
        <option value="学习">学习</option>
        <option value="休闲">休闲</option>
      </select>
      <button @click="filterTasks">筛选</button>
    </div>

    <h2>任务列表</h2>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        {{ task.name }} - {{ task.category }}
      </li>
    </ul>
  </div>
</template>

<script>
import TableSearch from "@/components/table-search.vue";

export default {
  components: {TableSearch},
  data() {
    return {
      taskName: '',
      taskCategory: '',
      tasks: [
        { id: 1, name: '任务1', category: '工作' },
        { id: 2, name: '任务2', category: '学习' },
        { id: 3, name: '任务3', category: '休闲' },
        // 其他任务...
      ]
    };
  },
  computed: {
    filteredTasks() {
      let filtered = this.tasks;
      if (this.taskName.trim() !== '') {
        filtered = filtered.filter(task => task.name.toLowerCase().includes(this.taskName.trim().toLowerCase()));
      }
      if (this.taskCategory !== '') {
        filtered = filtered.filter(task => task.category === this.taskCategory);
      }
      return filtered;
    }
  },
  methods: {
    filterTasks() {
      // 进行任务筛选
    }
  }
};
</script>
