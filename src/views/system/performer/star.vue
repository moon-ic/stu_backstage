<template>
  <div  class="grid">
    <h2 class="title-text">
      <el-icon ><SuitcaseLine style="color: #2d8cf0"/></el-icon> 收藏的任务
    </h2>
       <div>
         <ul>
           <li v-for="task in tasks" :key="task.id" class="li-task">
             <div class="left" @click="goToTask(task.id)">
               <span style="font-size: 18px">{{ task.taskVo.taskTitle }}</span>
               <span>{{task.taskVo.taskProfile}}</span>
               <span style="color: #929ba8; float: left;">
                 <el-icon><UserFilled /></el-icon>
                 {{task.taskVo.employer.username}}
               </span>
               <span style="color: #929ba8;margin-left: 60px">
                 <el-icon><Clock /></el-icon>
                 {{task.taskVo.beforeTime}}
               </span>
               <span>预算: ￥{{ task.taskVo.feesLow }} —￥{{ task.taskVo.feesHigh }}</span>
             </div>
             <div class="right">
               <div v-if="task.status===3" class="status">任务已完成</div>
               <div v-else class="status">任务未完成</div>
               <el-icon @click="unfavoriteTask(task.taskVo.id)" class="icon"><DeleteFilled color="#2d8cf0"/></el-icon>
             </div>
           </li>
         </ul>
       </div>
  </div>
</template>

<script>
import {deleteStarTasks, starTasks} from "@/api/performer";
import {ElMessage} from "element-plus";
import router from "@/router";
import {Clock, DeleteFilled, SuitcaseLine, UserFilled} from "@element-plus/icons-vue";

export default {
  components: {DeleteFilled, Clock, UserFilled, SuitcaseLine},
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
      deleteStarTasks(taskId).then(res=>{
        if(res.data.code === 1){
          ElMessage.success(res.data.data);
          this.starTask();
        }
      })
      console.log(`已取消收藏任务 ${taskId}`);
    },
    goToTask(taskId) {
      router.replace(`/task/${taskId}`);
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
.title-text{
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #8c939d;
}
/* 你可以根据需要添加样式 */
ul {
  list-style-type: none;
}

.grid{
  margin: 30px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.li-task{
  line-height: 30px;
  border-bottom: 1px solid #d7d9dd;
  padding: 15px;
}
.li-task:last-child {
  border-bottom: none; /* 移除最后一个li元素的下边框 */
}

span {
  display: block;
  margin-right: 10px;
}
.left{
  text-align: left;
  display: inline-block;
  width: 75%;
}
.right{
  line-height: 50px;
  display: block;
  margin-top: 10px;
  float: right;
  .status{
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    padding: 5px 10px;
    color: #007BFF;
    background-color: white;
    border: 1px solid #007BFF;
  };
  .icon{
    font-size: 30px;
    margin-left: 30px;
    margin-top: 20px;
  }
}
</style>
