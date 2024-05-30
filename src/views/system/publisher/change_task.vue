<template>
  <div>
    <!-- 发布任务标题 -->
    <h2>修改任务</h2>
    <div class="grid publish_task">
      <h3>
        <el-icon><DocumentAdd style="color: #007bff"/></el-icon>
        修改任务
      </h3>
    <!-- 任务表单 -->
    <form @submit.prevent="submitTask">
      <div class="taskName">
        <label>任务名称：</label>
        <input type="text" v-model="task.taskTitle" required>
      </div>
      <div class="taskCategory">
        <label>任务分类：</label>
        <select v-model="task.categoryId" :value="task.categoryName" required>
          <option value="">请选择分类</option>
          <option v-for="category in categories" :key="category.id" :value="category.categoryId">
            {{ category.categoryName }}
          </option>
        </select>
      </div>
      <div class="taskPro">
        <label style="position:relative;top: 10px">任务简介：</label>
        <textarea v-model="task.taskProfile" required></textarea>
      </div>
      <div class="min">
        <label >最低预算：</label>
        <input type="number" v-model="task.feesLow" required>
      </div>
      <div class="max">
        <label>最高预算：</label>
        <input type="number" v-model="task.feesHigh" required>
      </div>
      <div class="taskSkills">
        <label>所需技能：</label>
        <input type="text" v-model="skills" required>
      </div>
      <div class="taskDesc">
        <label>任务描述：</label>
        <textarea v-model="task.taskDesc" required></textarea>
      </div>
      <button type="submit" class="btn">提交任务</button>
    </form>
    </div>
  </div>
</template>

<script>
import {addSkill, deleteSkill, getTaskCategorys, getTaskInfo, submitTask, updateTask} from "@/api/publisher";
import {ElMessage} from "element-plus";
import router from "@/router";
import {DocumentAdd} from "@element-plus/icons-vue";

export default {
  components: {DocumentAdd},
  data() {
    return {
      task: {
        categoryId: '',
        categoryName: '',
        taskTitle: '',
        taskProfile: '',
        taskDesc: '',
        feesLow: null,
        feesHigh: null,
      },
      skills: '',
      categories:[],
    };
  },
  created() {
      this.getTaskCategories();
      this.getTaskInfo();
  },
  methods: {
    //如果是更改信息就要先获取所有值
    getTaskInfo() {
        const taskId = this.$route.params.id;
        console.log(taskId)
        getTaskInfo(taskId).then(res => {
          console.log(res.data);
          let data = res.data.data
          this.task.taskTitle = data.taskTitle;
          this.task.categoryId = data.taskCategory.id;
          this.task.categoryName = data.taskCategory.categoryName;
          this.task.taskProfile = data.taskProfile;
          this.task.feesLow = data.feesLow;
          this.task.feesHigh = data.feesHigh;
          let skillsArray = data.skills
          this.skills = skillsArray.map(skill => skill.skillName).join(',');
          this.task.taskDesc = data.taskDesc;
        });
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
        updateTask(this.task).then(res=>{
          if(res.data.code===1){
            ElMessage.success(res.data.data);
          }
        })
      console.log('提交任务：', this.task);
      // 提交后重置表单
      router.replace('/dashboard1')
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
.publish_task{
  h3{
    border-bottom: none;
    margin-bottom: 15px;
  }
  width: 85%;
  height: 490px;
  margin: 50px auto;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .taskName,
  .taskCategory
  {
    width: 50%;
    height: 70px;
    float: left;
    label{
      display: block;
    }
    select{
      height: 45px;
    }
    input{
      height: 40px;
    }
    input,select{
      width: 90%;
      display: block;
    }
  }
  .taskPro{
    margin-top: 10px;
  }
  .taskPro,
  .min,
  .max,
  .taskSkills,
  .taskDesc
  {
    display: block;
    width: 100%;
    label{
      display: block;
    }
  }
  .taskPro{
    textarea{
      height: 40px;
      width: 95%;
    }
  }
  .min,
  .max{
    display:block;
    width: 20%;
    float: left;
    margin-right: 20px;
    label{
      display: block;
    }
    input{
      width: 100%;
      height: 30px;
      font-size: 16px;
    }
  }
  .taskSkills{
    input{
      width: 51%;
      height: 30px;
    }
  }
  .taskDesc{
    width: 96%;
    height: 100px;
    textarea{
      height:100px;
      width: 100%;
    }
  }
}
input,
textarea,
select
{
  border: 1px solid #d7d8da;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 2px 8px;
}

.btn{
  margin-left:30px;
  margin-top: 45px;
  background-color: #2d8cf0;
  border-radius: 10px;
  border: none;
  color:white;
  height: 40px;
  width: 80px;
  line-height: 30px;
}
</style>
