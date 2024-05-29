<template>
  <div>
    <h1>收藏的任务</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span>{{ task.taskVo.taskTitle }}</span>
        <span>{{task.taskVo.taskProfile}}</span>
        <span>预算: {{ task.taskVo.feesHigh }}-{{ task.taskVo.feesLow }}</span>
        <span>{{ formatDate(task.taskVo.createTime) }}</span>
        <div v-if="task.status===3">任务已完成</div>
        <div v-else=>任务未完成</div>
        <button @click="unfavoriteTask(task.id)">取消收藏</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {deleteStarTasks, starTasks} from "@/api/performer";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      tasks:[]
    };
  },
  mounted(){
    this.starTask();
  },
  inject:['reload'],
  methods: {
    starTask(){
      starTasks().then(res=>{
        let data = res.data.data;
        console.log(data)
        this.tasks =data;
      })
    },
    //取消收藏任务
    unfavoriteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      deleteStarTasks(taskId).then(res=>{
        if(res.data.code === 1){
          ElMessage.success(res.data.data);
        }
      })
      this.reload();
      console.log(`已取消收藏任务 ${taskId}`);
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      return date.toLocaleString('zh-CN', options).replace(/\//g, '-').replace(',','');
    },
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
