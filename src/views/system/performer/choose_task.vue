<template>
  <div>
    <h2>任务筛选</h2>
    <div>
      <input type="text" v-model="key" placeholder="任务名称">
      <select v-model="taskCategory" required>
        <option value="">请选择分类</option>
        <option v-for="category in categories" :key="category.id" :value="category.categoryName">
          {{ category.categoryName }}
        </option>
      </select>
      <button @click="getList">筛选</button>
    </div>

    <h2>任务列表</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <a @click="goToTask(task.id)">{{ task.taskTitle }}</a>
        <p>{{ task.taskProfile }}</p>
        <span>￥{{ task.feesLow }}-{{ task.feesHigh }}</span>
        <button @click="star(task.id)">{{ star }}</button>
        <a @click="goToTask(task.id)">我要投标</a>
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
import {getTaskPageResult, star} from "@/api/performer";
import {ElMessage} from "element-plus";

export default {
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
      star:"收藏"
    };
  },
  mounted() {
    this.getTaskCategories();
    this.getList();
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
    star(taskId) {
      // 收藏任务逻辑
      star(taskId).then(res=>{
        console.log(res.data)
        if(res.data.code===1){
          ElMessage("操作成功");
          if(this.star === "取消收藏"){
            this.star = "收藏";
          }else if(this.star === "收藏"){
            this.star = "取消收藏";
          }
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
/* 在此处添加样式 */
</style>
