<template>
  <div class="grid">
     <div class="filter">
       <h2>
         <el-icon><Filter /></el-icon>
         任务筛选
       </h2>
       <div>
         <input type="text" v-model="key" placeholder="任务名称" class="input-name">
         <select v-model="taskCategory" class="input-select" required>
           <option value="">请选择分类</option>
           <option v-for="category in categories" :key="category.id" :value="category.categoryName">
             {{ category.categoryName }}
           </option>
         </select>
         <button @click="getList">筛选</button>
       </div>
     </div>

    <h2 style="margin-left: 20px">
      <el-icon><SuitcaseLine /></el-icon>
      任务列表
    </h2>
    <ul>
      <li v-for="task in tasks" :key="task.id" class="list-task">
        <div class="content" @click="goToTask(task.id)" >
          <h3>{{ task.taskTitle }}</h3>
          <p>{{ task.taskProfile }}</p>
          <span>
            <el-icon><UserFilled /></el-icon>
            {{task.employer.username}}
          </span>
          <span style="margin-left: 15px">
            <el-icon><Clock /></el-icon>
            {{task.beforeTime}}
          </span>
          <p>￥{{ task.feesLow }}—￥{{ task.feesHigh }}</p>
        </div>

        <div class="func">
          <div v-if="starTaskId.includes(task.id)" style="color: #e4e447; font-size: 40px">
            <el-icon><StarFilled @click="star(task.id)"/></el-icon>
          </div>
          <div v-else style="font-size: 40px">
            <el-icon><Star @click="star(task.id)" /></el-icon>
          </div>
          <button @click="goToTask(task.id)">我要投标</button>
        </div>
      </li>
    </ul>

    <!-- 分页控件 -->
    <div v-if="totalPage > 1">
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <span>第 {{ currentPage }} 页，共 {{ totalPage }} 页</span>
      <button @click="nextPage" :disabled="currentPage === totalPage">下一页</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import {getTaskCategorys} from "@/api/publisher";
import {getTaskPageResult, star, starTasks} from "@/api/performer";
import {ElMessage} from "element-plus";
import {Clock, Filter, List, StarFilled, SuitcaseLine, UserFilled} from "@element-plus/icons-vue";

export default {
  components: {UserFilled, Clock, SuitcaseLine, List, Filter, StarFilled},
  data() {
    return {
      tasks: [],
      categoryId: 0,
      key: '',
      categories: [],
      taskCategory: '',
      currentPage: 1,
      tasksPerPage: 10, // 每页任务数
      totalPage:0,
      taskLength:0,
      starTaskId:[]
    };
  },
  mounted() {
    this.getTaskCategories();
    this.getList();
    this.starTask();
  },
  methods: {
    // 获取所有任务分类
    getTaskCategories() {
      getTaskCategorys().then(res => {
        if (res.data && Array.isArray(res.data.data)) {
          this.categories = res.data.data;
        } else {
          console.error('Unexpected response structure:', res.data);
        }
      })
    },
    getList() {
      getTaskPageResult(this.categoryId, this.key, this.currentPage).then(res => {
        console.log(res.data);
        if (res.data.data.list && Array.isArray(res.data.data.list)) {
          this.tasks = res.data.data.list;
        } else {
          console.error('Unexpected response structure:', res.data);
        }
        this.currentPage = res.data.data.page;
        this.totalPage = res.data.data.totalPage;
        this.taskLength = res.data.data.total;
      })
    },
    goToTask(taskId) {
      router.replace(`/task/${taskId}`);
    },
    starTask(){
      starTasks().then(res=>{
        let data = res.data.data;
        console.log(data)
        this.starTaskId =data.map(task => task.taskVo.id);
      })
    },
    star(taskId) {
      star(taskId).then(res=>{
        console.log(res.data)
        if(res.data.code===1){
          ElMessage("操作成功");
          this.getList();
        }
      })
      console.log(`Task ${taskId} starred.`);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getList(); // 加载新页面数据
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getList(); // 加载新页面数据
      }
    }
  }
};
</script>

<style scoped>
.grid{
  margin: 30px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
ul {
  list-style-type: none;
}
.filter{
  padding: 15px;
  border-bottom: 1px solid #8c939d;
  h2{
    margin-bottom: 10px;
  }
  button{
    border-radius: 6px;
    margin-left: 20px;
    border:none;
    width: 50px;
    height: 30px;
    color: white;
    background: #007bff;
  }
}

.list-task{
  border-bottom: 1px solid #d7d9dd;
  padding: 0 30px 0 30px;
  .content{
    display: inline-block;
    h3{
      margin-bottom: 10px;
    }
    span{
      color:#8c939d;
      display: inline-block;
      margin: 10px 0 10px 0;
    }
  }
  .func{
     display: block;
     float: right;
     margin-top:20px;
    button{
      margin-top: 20px;
      margin-left: -10px;
      border: none;
      border-radius: 10px;
      background-color:#007bff;
      width: 70px;
      height:30px;
      color: white;
    }
  }
}

.list-task:last-child{
  border-bottom: none;
}

.input-name,
.input-select
{
  border-radius: 8px;
  padding: 5px;
  border: 1px solid #8c939d;
  width: 200px;
  height:20px;
}
.input-select{
  margin-left:20px;
  height:30px;
}
</style>
