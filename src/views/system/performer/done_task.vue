<template>
  <div>
    <h1>已完成任务</h1>
    <div class="bidding-list" v-if="doneTasks.length >0">
      <a v-for="doneTask in doneTasks" :key="doneTask.id" class="task-list-item" @click="goToTask(doneTask.id)">
        <h2>{{ doneTask.taskName }}</h2>
        <p>竞标价格: ¥{{ doneTask.price }}</p>
        <p>竞标时间：{{doneTask.bidTime}}</p>
      </a>
    </div>
    <div v-else>您还没有完成的任务！！</div>
  </div>
</template>

<script>
import {completedTask, submitTask} from "@/api/performer";
import {ElMessage} from "element-plus";
import router from "@/router";

export default {
  data() {
    return {
      doneTasks: [],
    };
  },
  created(){
    this.getDoneTask();
  },
  inject:['reload'],
  methods:{
    getDoneTask(){
      completedTask().then(res=>{
        let data = res.data.data;
        data.forEach(task=>{
          //TODO
          let bid={
            id:task.id,
            taskName:task.taskVo.taskTitle,
            price:task.taskPrice,
            bidTime:task.bidTime
          }
          this.doneTasks.push(bid);
        })
      })
    },
    //跳转到任务界面
    goToTask(taskId){
      console.log('', taskId);
      router.replace(`/task?id=${taskId}`);
    }
  }
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