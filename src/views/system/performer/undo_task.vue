<template>
  <div>
    <h1>未完成任务</h1>
    <div class="bidding-list" >
      <div v-for="unDoTask in unDoTasks" :key="unDoTask.id" class="task-list-item"  v-if="status===1">
        <h2 @click="goToTask(unDoTask.id)">{{ unDoTask.taskName }}</h2>
        <p>我的出价: ¥{{ unDoTask.price }}</p>
        <p>完成时间: {{ unDoTask.deliveryTime }}</p>
        <button @click="completeTask(unDoTask.id)">完成任务</button>
      </div>
      <div v-else>您没有未完成的任务！！</div>
    </div>
  </div>
</template>

<script>
import {unCompletedTask, submitTask} from "@/api/performer";
import {ElMessage} from "element-plus";
import router from "@/router";

export default {
  data() {
    return {
      status:0,
      unDoTasks: [],
    };
  },
  created(){
    this.getUndoTask();
  },
  inject:['reload'],
  methods:{
    getUndoTask(){
      unCompletedTask().then(res=>{
        let data = res.data.data;
        if(data.length<=0){
          this.status = 0;
        }else{
          this.status = 1;
          data.forEach(task=>{
            //TODO
            let undo={
              id:task.id,
              taskName:task.taskVo.taskTitle,
              price:task.bidPrice,
              deliveryTime:task.deliveryDesc
            }
            this.unDoTasks.push(undo);
          })
        }

      })
    },
    //跳转到任务界面
    goToTask(taskId){
      console.log('', taskId);
      router.replace(`/task?id=${taskId}`);
    },
    completeTask(taskId){
      submitTask(taskId).then(res=>{
        if(res.data.code===1){
          this.doneTasks = this.doneTasks.filter(task => task.id !== taskId);
          ElMessage.success(res.data.data);
          this.reload();
        }
      })
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