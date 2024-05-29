<template>
  <div>
<!--    获取到发布者所有任务-->
    <h2>我的任务</h2>

    <div v-if="tasks.length > 0">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div>
            <!-- 任务名字-->
            <a @click="goToTask(task.id)">{{task.taskTitle}}</a>
            <!--审核失败-->
            <div v-if="task.taskStatus===-2||task.taskStatus===-1">
              <p v-if="task.taskStatus===-2">审核失败</p>
              <p v-else-if="task.taskStatus===-1">未审核</p>
              <p>发布时间：{{task.createTime}}</p>
              <el-button @click="editTask(task.id)">修改任务</el-button>
              <el-button  @click="deleteTask(task.id)">删除</el-button>
              <div>任务预算：￥{{task.feesLow}}-￥{{task.feesHigh}}</div>
            </div>
            <div v-if="task.taskStatus===0">
              <div v-if="task.bidVos.length > 0">
                <p>还没有人中标</p>
                <p>发布时间：{{task.createTime}}</p>
                <el-button @click="manageBidders(task.id)">管理竞标者</el-button>
                <el-button @click="editTask(task.id)">修改任务</el-button>
                <el-button @click="deleteTask(task.id)">删除</el-button>
                <div>任务预算：￥{{task.feesLow}}-￥{{task.feesHigh}}</div>
              </div>
              <div v-else>
                <p>还没有人中标</p>
                <p>发布时间：{{task.createTime}}</p>
                <el-button @click="editTask(task.id)">修改任务</el-button>
                <el-button @click="deleteTask(task.id)">删除</el-button>
                <div>任务预算：￥{{task.feesLow}}-￥{{task.feesHigh}}</div>
              </div>
            </div>
             <!-- 已经接受投标-->
            <div v-if="task.taskStatus===1">
              <p>已接受投标</p>
              <p>发布时间：{{task.createTime}}</p>
              <el-button @click="browseBidders(task.id)">浏览雇员信息</el-button>
              <div>成交价格：￥{{task.bidPrice}}</div>
            </div>
            <div v-if="task.taskStatus===2">
              <p>已接受投标</p>
              <p>发布时间：{{task.createTime}}</p>
              <el-button @click="browseBidders(task.id)">浏览雇员信息</el-button>
              <el-button @click="taskCheck(task.id)">确认完成任务</el-button>
              <div>成交价格：￥{{task.bidPrice}}</div>
            </div>
            <div v-if="task.taskStatus===3">
              <p>已完成</p>
              <p>完成时间：{{task.createTime}}</p>
              <el-button @click="browseBidders(task.id)">浏览雇员信息</el-button>
              <div>成交价格：￥{{task.bidPrice}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>您还没有发布过任务！！！</p>
    </div>
  </div>
</template>

<script>
import {deleteTask, getAllTasks, taskSuccess} from '@/api/publisher'
import {ElMessage} from "element-plus";
import router from "@/router";
export default {
  data() {
    return {
      tasks: []
    };
  },
  created() {
    this.getMyTasks();
  },
  methods: {
    //获得所有任务
    getMyTasks(){
      getAllTasks().then(res=>{
        console.log(res);
        this.tasks = res.data.data
      })
    },
    //跳转到任务界面
    goToTask(taskId){
      console.log('', taskId);
      router.replace(`/task/${taskId}`);
    },
    //管理竞标者 跳转到管理竞标者页面
    manageBidders(taskId) {
      console.log('', taskId);
      router.replace(`/manage_bidders/${taskId}`);
    },
    //修改任务信息， 跳转到任务信息界面
    editTask(taskId) {
      // 修改任务
      router.replace(`/publish_task/${taskId}`)
      console.log('', taskId);
    },

    //删除任务
    deleteTask(taskId) {
      deleteTask(taskId).then(res=>{
        if(res.data.code === 1){
          ElMessage.success('删除任务成功');
        }
      })
      console.log('删除任务Id', taskId);
    },

    //当已经成交的时候，发送这个请求//浏览雇员主页
    browseBidders(taskId){
      this.tasks.forEach(task => {
        if(task.id === taskId){
          let performerId = task.employee.id
          router.push(`/performer?id=${performerId}`)
        }
      });
    },
    //确认完成任务
    taskCheck(taskId){
      taskSuccess(taskId).then(res=>{
        console.log(res.data)
        if(res.data.code===1){
          ElMessage.success("操作成功");
        }else{
          ElMessage.error("操作失败");
        }
      })
    }
  }
};
</script>

<style>
/* ????????????????????? */
</style>



<!--任务状态-->