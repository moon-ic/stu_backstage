<template>
  <div>
    <h1>已完成任务</h1>
    <div class="grid">
      <h3>
        <el-icon><List style="color: #007bff"/></el-icon>
        已完成任务
      </h3>
      <div v-if="doneTasks.length >0" >
        <div v-for="doneTask in doneTasks" :key="doneTask.id" @click="goToTask(doneTask.id)" class="li-task">
           <div class="left">
             <p class="title">{{ doneTask.taskTitle }}</p>
             <p >{{ doneTask.taskProfile }}</p>
             <p class="time">
               <el-icon><Clock /></el-icon>
               完成时间：{{formatDate(doneTask.closeTime)}}
             </p>
           </div>
          <div class="right">
            <p>成交价格: ¥{{ doneTask.taskPrice}}</p>
          </div>
        </div>
      </div>
      <div v-else>您还没有完成的任务！！</div>
    </div>
  </div>
</template>

<script>
import {completedTask} from "@/api/performer";
import {ElMessage} from "element-plus";
import router from "@/router";
import {Clock, List} from "@element-plus/icons-vue";

export default {
  components: {Clock, List},
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
        this.doneTasks = res.data.data;
      })
    },
    //跳转到任务界面
    goToTask(taskId){
      console.log('', taskId);
      router.replace(`/task/${taskId}`);
      // this.$router.go(0);
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
    line-height: 50px;
    padding-left: 10px;
    font-size: 22px;
  }
  .li-task{
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
        margin-left: 20px;
      }
    }
    .right{
      width:120px;
      height:50px;
      background-color: #ffffff;
      float:right;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      margin-right: 40px;
      border: 1px solid #2d8cf0;
      border-radius: 8px;
      p{
        color: #2d8cf0;
        font-size: 14px;
      }
    }
  }
  .li-task:last-child{
    border-bottom:none;
  }
}

</style>