<template>
  <div>
    <!-- 发布任务标题 -->
    <h2>发布任务</h2>

    <!-- 任务表单 -->
    <form @submit.prevent="submitTask">
      <div>
        <label>任务名称：</label>
        <input type="text" v-model="task.name" required>
      </div>
      <div>
        <label>任务分类：</label>
        <select v-model="task.category" required>
          <option value="">请选择分类</option>
          <option v-for="category in categories" :key="category.id" :value="category.categoryName">
            {{ category.categoryName }}
          </option>
        </select>
      </div>
      <div>
        <label>任务简介：</label>
        <textarea v-model="task.summary" required></textarea>
      </div>
      <div>
        <label>最高预算：</label>
        <input type="number" v-model="task.maxBudget" required>
      </div>
      <div>
        <label>最低预算：</label>
        <input type="number" v-model="task.minBudget" required>
      </div>
      <div>
        <label>所需技能：</label>
        <input type="text" v-model="task.skill" required>
        <button @click="addSkill">新增技能</button>
        <div v-for="skill in skills" :key="skill.skillId">
          {{ skill.skillName }}
          <div @click="deleteSkill(skill.skillId)">删除</div>
        </div>
      </div>
      <div>
        <label>任务描述：</label>
        <textarea v-model="task.description" required></textarea>
      </div>
      <button type="submit">提交任务</button>
    </form>
  </div>
</template>

<script>
import {addSkill, deleteSkill, getTaskCategorys, getTaskInfo, submitTask, updateTask} from "@/api/publisher";
import {ElMessage} from "element-plus";
import router from "@/router";

export default {
  data() {
    return {
      task: {
        name: '',
        category: '',
        summary: '',
        skill:'',
        maxBudget: null,
        minBudget: null,
        description: '',
      },
      skills: [],
      categories:[],
    };
  },
  created() {
    // this.getTaskInfo()
    this.getTaskCategories();
  },
  methods: {
    //如果是更改信息就要先获取所有值
    getTaskInfo() {
      let taskId = this.$router.params.id
      if (taskId === null) {
        console.log("新发布任务")
      }
      else{
        getTaskInfo(taskId).then(res => {
          let data = res.data.data
          this.task.name = data.taskTitle;
          this.task.category = data.taskCategory.categoryName;
          this.task.summary = data.taskProfile;
          this.task.minBudget = data.feesLow;
          this.task.maxBudget = data.feesHigh;
          this.task.skills = data.skills.map(skill => skill.skillName)
          this.task.description = data.taskDesc;
        })
      }
    },
    //获取到所有任务分类
    getTaskCategories() {
      getTaskCategorys().then(res => {
        if (res.data && Array.isArray(res.data.data)) {
          this.categories = res.data.data;
        } else {
          console.error('Unexpected response structure:', res.data);
        }
      })
    },

    submitTask() {
      let taskId = this.$router.params.id
      // 在这里执行提交任务的操作，可以发送请求到服务器
      if(!taskId){
        submitTask(this.skills,this.task).then(res=>{
          if(res.data.code === 1){
            ElMessage.success(res.data.data);
          }
        })
      }else{
        updateTask(this.task).then(res=>{
          if(res.data.code===1){
            ElMessage.success(res.data.data);
          }
        })
      }
      console.log('提交任务：', this.task);
      // 提交后重置表单
      this.resetForm();
      router.replace('/dashboard1')
    },
    resetForm() {
      this.task = {
        name: '',
        category: '',
        summary: '',
        maxBudget: null,
        minBudget: null,
        description: '',
      };
      this.skills=[];
    },
    addSkill(){
      addSkill(this.task.skill).then(res=>{
        console.log(res.data);
        let skillId = res.data.data;
        let skill={
          skillName:this.task.skill,
          skillId:skillId
        };
        this.skills.push(skill);
        ElMessage("添加技能成功");
        this.task.skill='';
      })
    },
    deleteSkill(skillId){
      deleteSkill(skillId).then(res=>{
        console.log(res.data);
        if(res.data.code === 1){
          this.skills = this.skills.filter(skill => skill.skillId !== skillId);
          ElMessage(res.data.data);
        }
      })
    }
  }
};
</script>

<style>
/* 样式可以根据需求自行添加 */
</style>
