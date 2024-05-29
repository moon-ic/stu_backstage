<template>
  <div class="task-details">
    <!-- 任务名称和简介 -->
    <h1>{{ task.title }}</h1>
    <p>{{ task.summary }}</p>
    <p>{{task.category}}</p>

    <!-- 发布者信息 -->
    <div class="publisher-info">
      <img :src="publisher.avatar" :alt="publisher.username">
      <span>{{ publisher.username }}</span>
      <span>{{ publisher.phone}}</span>
      <span>{{ publisher.email}}</span>
    </div>

    <!-- 任务预算区间 -->
    <div class="budget-range">
      <span>最低预算: {{ task.minBudget }}</span>
      <span>最高预算: {{ task.maxBudget }}</span>
    </div>
    =
    <!-- 任务描述 -->
    <div class="task-description">
      <p>{{ task.description }}</p>
    </div>

    <!-- 所需技能 -->
    <div class="required-skills">
      <h3>所需技能</h3>
      <ul>
        <li v-for="skill in task.requiredSkills" :key="skill.skillId">{{ skill.skillName }}</li>
      </ul>
    </div>

    <!-- 投标区域 -->
    <div class="bidding-area">
      <h3>投标</h3>
      <div>
        <input type="number" v-model="bids.bidPrice" required>
        <p>预计完成任务时间：</p>
        <input type="number" v-model="bids.timeNumber" required>
        <select v-model="bids.timeType" required>
          <option value="天">请选择分类</option>
          <option v-for="type in bids.timeType" :value="type">
            {{ type }}
          </option>
        </select>
        <button @click="acceptBid">我要竞标</button>
      </div>
    </div>
  </div>
</template>

<script>
import {getTaskInfo} from "@/api/publisher";
import {bid} from "@/api/performer";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      task: {
        id:'',
        title: '任务名称',
        summary: '任务简介',
        category:'任务分类',
        minBudget: 1000,
        maxBudget: 2000,
        description: '任务描述',
        requiredSkills: [],
        bidPrice:0
      },
      publisher: {
        username: '发布者昵称',
        avatar: 'avatar.png',
        phone: '电话号码',
        email:'邮箱'
      },
      bids:{
        bidPrice:0,
        timeNumber:0,
        timeType:['分','小时','天','周','月']
      },
      employeeId:'',
    };
  },
  created() {
    this.getTaskInfo();
  },
  methods: {
    getTaskInfo(){
      let taskId = this.$route.params.id
      getTaskInfo(taskId).then(res=>{
        console.log(res.data);
        let data = res.data.data;
        this.task.title = data.taskTitle;
        this.task.summary=data.taskProfile;
        this.task.category = data.taskCategory.categoryName;
        this.task.minBudget = data.feesLow;
        this.task.maxBudget = data.feesHigh;
        this.task.description = data.taskDesc;
        this.task.requiredSkills = data.skills.map(skill=>skill.skillName);
        this.publisher.username = data.employer.username;
        this.publisher.phone = data.employer.phone;
        this.publisher.email = data.employer.email;
      })
    },
    acceptBid() {
      bid(this.task.id,this.bids.bidPrice,this.bids.timeNumber,this.bids.timeType).then(res=>{
        if(res.data.code === 0){
          ElMessage.error(res.data.data);
        }else{
          ElMessage.success("竞标成功");
        }
      })
    },
  },
};
</script>

<style scoped>
.task-details {
  max-width: 800px;
  margin: 0 auto;
}

.publisher-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.budget-range span {
  margin-right: 20px;
}

.bidding-area button {
  margin-top: 10px;
}
</style>

<script setup lang="ts">
import {Select} from "@element-plus/icons-vue";
</script>