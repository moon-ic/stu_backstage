<template>
  <div>
    <!-- 发布任务标题 -->
    <h2>发布任务</h2>

    <div class="grid publish_task">
      <h3>
        <el-icon><DocumentAdd style="color: #007bff"/></el-icon>
        发布任务
      </h3>
      <!-- 任务表单 -->
      <form @submit.prevent="submitTask">
        <div class="taskName">
          <label>任务名称：</label>
          <input type="text" v-model="task.taskTitle" required>
        </div>
        <div class="taskCategory">
          <label>任务分类：</label>
          <select v-model="task.categoryId" required>
            <option value="">请选择分类</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.categoryName }}
            </option>
          </select>
        </div>
        <div class="taskPro">
          <label  style="position:relative;top: 10px">任务简介：</label>
          <textarea v-model="task.taskProfile" required></textarea>
        </div>
        <div class="min">
          <label>最低预算：</label>
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
      </form>
      <button type="submit" class="btn">提交任务</button>
    </div>
  </div>
</template>

<script lang="ts">
import {getTaskCategorys,  submitTask} from "@/api/publisher";
import {ElMessage} from "element-plus";
import router from "@/router";
import {DocumentAdd} from "@element-plus/icons-vue";

export default {
  components: {DocumentAdd},
  data() {
    return {
      task: {
        categoryId: '',
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
  },
  methods: {
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
      submitTask(this.skills,this.task).then(res=>{
        if(res.data.code === 1){
          ElMessage.success(res.data.data);
          this.resetForm();
        }
      })
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
    // // addSkill(){
    // //   addSkill(this.skill,this.).then(res=>{
    // //     console.log(res.data);
    // //     let skillId = res.data.data;
    // //     let skill={
    // //       skillName:this.task.skill,
    // //       skillId:skillId
    // //     };
    // //     this.skills.push(skill);
    // //     ElMessage("添加技能成功");
    // //     this.task.skill='';
    // //   })
    // // },
    // deleteSkill(skillId){
    //   deleteSkill(skillId).then(res=>{
    //     console.log(res.data);
    //     if(res.data.code === 1){
    //       this.skills = this.skills.filter(skill => skill.skillId !== skillId);
    //       ElMessage(res.data.data);
    //     }
    //   })
    // }
  }
};
</script>

<style>
.publish_task{
  h3{
    border-bottom: none;
  }
  width: 85%;
  height: 470px;
  margin: 50px auto;
  padding: 10px 20px;
  border-radius: 10px;
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
  .taskPro,
  .min,
  .max,
  .taskSkills,
  .taskDesc
  {
    display: block;
    width: 100%;
  }
  .taskPro{
    textarea{
      height: 40px;
      width: 92%;
    }
  }
  .min,
  .max{
    display:block;
    width: 20%;
    float: left;
    margin-right: 25px;
    input{
      width: 100%;
      height: 30px;
    }
  }
  .taskSkills{
    input{
      width: 47%;
      height: 30px;
    }
  }
  .taskDesc{
    width: 92%;
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
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc; /* 输入框边框 */
  border-radius: 4px;
  padding: 2px 10px;
}

.btn{
  margin-left:30px;
  margin-top: 40px;
  background-color: #2d8cf0;
  border: none;
  color:white;
  height: 40px;
  width: 80px;
  line-height: 30px;
}



</style>
