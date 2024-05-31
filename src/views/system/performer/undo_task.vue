<template>
  <div>
    <h1>未完成任务</h1>
    <div class="grid">
      <h3>
        <el-icon><List style="color: #007bff"/></el-icon>
        未完成的任务
      </h3>
      <div v-if="status===1">
        <div v-for="unDoTask in unDoTasks" :key="unDoTask.id" class="li-task">
           <div v-if="unDoTask.taskStatus===1">
             <div class="left" @click="goToTask(unDoTask.id)">
               <p class="title">{{ unDoTask.taskTitle }}</p>
               <p>
                 <el-icon><UserFilled /></el-icon>
                 {{unDoTask.employer.username}}
               </p>
               <p style="margin-left: 20px">我的出价: ¥{{ unDoTask.taskPrice }}</p>
               <p class="time">
                 <el-icon><Clock /></el-icon>
                 竞标时间: {{ formatDate(unDoTask.bidTime) }}
               </p>
             </div>
             <button @click="completeTask(unDoTask.id)" class="right">完成任务</button>
           </div>
          <div v-else-if="unDoTask.taskStatus===2">
             <div class="left" @click="goToTask(unDoTask.id)">
               <p class="title">{{ unDoTask.taskTitle }}</p>
               <p>我的出价: ¥{{ unDoTask.taskPrice }}</p>
               <p class="time">
                 <el-icon><Clock /></el-icon>
                 完成时间: {{formatDate(unDoTask.closeTime)}}
               </p>
             </div>
            <button class="right">等待雇主确认</button>
          </div>
        </div>
      </div>
      <div v-else>你没有未完成的任务！！</div>
    </div>
  </div>
</template>

<script>
import {unCompletedTask, submitTask} from "@/api/performer";
import {ElMessage} from "element-plus";
import router from "@/router";
import {Clock, List, UserFilled} from "@element-plus/icons-vue";

export default {
  components: {UserFilled, Clock, List},
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
          this.unDoTasks = data;
        }
      })
    },
    //跳转到任务界面
    goToTask(taskId){
      console.log('', taskId);
      router.replace(`/task/${taskId}`);
    },
    completeTask(taskId){
      submitTask(taskId).then(res=>{
        console.log(res.data)
        if(res.data.code===1){
          ElMessage.success(res.data.data);
          this.getUndoTask()
        }
      })
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

<style scoped>
.grid{
  margin: 30px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3{
    border-bottom: 1px solid #8c939d;
    line-height: 60px;
    padding-left: 10px;
    font-size: 22px;
  }
  .li-task{
    line-height: 30px;
    padding:10px 0 10px 20px;
    border-bottom: 1px solid #b8c0ca;
    .left{
      display: inline-block;
      p{
        display: inline-block;
        color: #515355;
      }
      .title{
        display: block;
        color: #252222;
        font-size: 18px;
      }
      .time{
        display: block;
      }
    }
    .right{
      width:80px;
      height:40px;
      background-color: #007bff;
      display: block;
      border: none;
      color:white;
      float:right;
      line-height: 40px;
      text-align: center;
      margin-right: 40px;
      margin-top: 20px;
    }
  }
  .li-task:last-child{
    border-bottom:none;
  }
}
</style>