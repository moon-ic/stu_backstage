<template>
  <div>
<!--    获取到发布者所有任务-->
    <h2>我的任务</h2>
    <div class="grid">
      <h3>
        <el-icon><Collection /></el-icon>
        我发布的任务
      </h3>
      <div v-if="tasks.length > 0">
        <ul>
          <li v-for="task in tasks" :key="task.id" class="li-task">
            <div>
              <!-- 任务名字-->
              <!--审核失败-->
              <div v-if="task.taskStatus===-2||task.taskStatus===-1">
                <h4 @click="goToTask(task.id)">{{task.taskTitle}}</h4>
                <p v-if="task.taskStatus===-2" class="status">审核失败</p>
                <p v-else-if="task.taskStatus===-1" class="status">未审核</p>
                <p>发布时间：{{formatDate(task.createTime)}}</p>
                <el-button @click="editTask(task.id)">修改任务</el-button>
                <el-button  @click="deleteTask(task.id)">删除</el-button>
                <div class="price">任务预算：￥{{task.feesLow}}-￥{{task.feesHigh}}</div>
              </div>
              <div v-if="task.taskStatus===0">
                <h4 @click="goToTask(task.id)">{{task.taskTitle}}</h4>
                <div v-if="task.bidVos.length > 0">
                  <p class="status">还没有人中标</p>
                  <p>发布时间：{{formatDate(task.createTime)}}</p>
                  <el-button @click="manageBidders(task.id)">管理竞标者</el-button>
                  <el-button @click="editTask(task.id)">修改任务</el-button>
                  <el-button @click="deleteTask(task.id)">删除</el-button>
                  <div class="price">任务预算：￥{{task.feesLow}}-￥{{task.feesHigh}}</div>
                </div>
                <div v-else>
                  <h4 @click="goToTask(task.id)">{{task.taskTitle}}</h4>
                  <p class="status">还没有人中标</p>
                  <p>发布时间：{{formatDate(task.createTime)}}</p>
                  <el-button @click="editTask(task.id)">修改任务</el-button>
                  <el-button @click="deleteTask(task.id)">删除</el-button>
                  <div class="price">任务预算：￥{{task.feesLow}}-￥{{task.feesHigh}}</div>
                </div>
              </div>
              <!-- 已经接受投标-->
              <div v-if="task.taskStatus===1">
                <h4 @click="goToTask(task.id)">{{task.taskTitle}}</h4>
                <p class="status">已接受投标</p>
                <p>发布时间：{{formatDate(task.createTime)}}</p>
                <el-button @click="browseBidders(task.employee.id)">浏览雇员信息</el-button>
                <div class="price">成交价格：￥{{task.taskPrice}}</div>
              </div >
              <div v-if="task.taskStatus===2">
                <h4 @click="goToTask(task.id)">{{task.taskTitle}}</h4>
                <p class="status">已接受投标</p>
                <p>发布时间：{{formatDate(task.createTime)}}</p>
                <el-button @click="browseBidders(task.employee.id)">浏览雇员信息</el-button>
                <el-button @click="taskCheck(task.id)">确认完成任务</el-button>
                <div class="price">成交价格：￥{{task.taskPrice}}</div>
              </div>
              <div v-if="task.taskStatus===3">
                <h4 @click="goToTask(task.id)">{{task.taskTitle}}</h4>
                <p class="status">已完成</p>
                <p>完成时间：{{formatDate(task.createTime)}}</p>
                <el-button @click="browseBidders(task.employee.id)">浏览雇员信息</el-button>
                <div class="price">成交价格：￥{{task.taskPrice}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>您还没有发布过任务！！！</p>
      </div>
    </div>
  </div>
</template>

<script>
import {deleteTask, getAllTasks, taskSuccess} from '@/api/publisher'
import {ElMessage} from "element-plus";
import router from "@/router";
import {Collection} from "@element-plus/icons-vue";
export default {
  components: {Collection},
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
      router.replace(`/change_task/${taskId}`)
      console.log('', taskId);
    },
    //删除任务
    deleteTask(taskId) {
      deleteTask(taskId).then(res=>{
        if(res.data.code === 1){
          ElMessage.success('删除任务成功');
          this.getMyTasks();
        }
      })
      console.log('删除任务Id', taskId);
    },

    browseBidders(performerId){
      console.log(performerId);
      router.replace(`/performer/${performerId}`);
    },
    //确认完成任务
    taskCheck(taskId){
      taskSuccess(taskId).then(res=>{
        console.log(res.data)
        if(res.data.code===1){
          ElMessage.success("操作成功");
          this.getMyTasks();
        }else{
          ElMessage.error("操作失败");
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

<style>
ul{
  list-style: none;
}

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
    padding:10px 0 10px 20px;
    border-bottom: 1px solid #b8c0ca;
  }
  .li-task:last-child{
    border-bottom:none;
  }
  .price{
    padding: 10px;
    float: right;
    margin-right: 30px;
    background-color: #ebedef;
    margin-top: -30px;
    border-radius: 10px;
  }
  h4{
    display: inline-block;
  }
  .status{
    display: inline-block;
    padding: 2px 6px;
    background-color: #fff;
    font-size: 12px;
    border: 1px solid #2d8cf0;
    color: #2d8cf0;
    margin-left: 10px;
  }
}

</style>
