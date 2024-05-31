<template>
  <div class="task-details">
    <div class="left_box">
      <!-- 任务名称和简介 -->
      <h1>{{ task.title }}</h1>
      <p>{{ task.summary }}</p>

      <!-- 发布者信息 -->
      <div class="publisher-info">
        <img src="../../assets/img/img.jpg" :alt="publisher.username">
        <div class="spans">
          <span>用户昵称：{{ publisher.username }}</span>
          <span>电话号码：{{ publisher.phone}}</span>
          <span>邮箱：{{ publisher.email}}</span>
        </div>
      </div>
      <!-- 任务描述 -->
      <div class="task-description">
        <p>任务描述：{{ task.description }}</p>
      </div>

      <!-- 所需技能 -->
      <div class="required-skills">
        <h3>所需技能</h3>
        <ul>
          <li v-for="skill in task.requiredSkills" :key="skill.id">{{ skill.skillName }}</li>
        </ul>
      </div>
    </div>

    <div class="right_box">
      <!-- 投标区域 -->
      <div class="bidding-area">
        <h3>投标</h3>
        <!-- 任务预算区间 -->
        <div class="budget-range">
          <span>最低预算: {{ task.minBudget }}</span>
          <span>最高预算: {{ task.maxBudget }}</span>
        </div>
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
  </div>
</template>

<script lang="ts">
import {getTaskInfo} from "@/api/publisher";
import {bid} from "@/api/performer";
import {ElMessage} from "element-plus";
import router from "@/router";

export default {
  data() {
    return {
      task: {
        id:'',
        title: '任务名称',
        summary: '任务简介',
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
        this.task.id = taskId;
        this.task.title = data.taskTitle;
        this.task.summary=data.taskProfile;
        this.task.minBudget = data.feesLow;
        this.task.maxBudget = data.feesHigh;
        this.task.description = data.taskDesc;
        this.task.requiredSkills = data.skills;
        this.publisher.username = data.employer.username;
        this.publisher.phone = data.employer.phone;
        this.publisher.email = data.employer.email;
      })
    },
    acceptBid() {
      bid(this.task.id,this.bids.bidPrice,this.bids.timeNumber,this.bids.timeType).then(res=>{
        console.log(res.data);
        if(res.data.code === 0){
          ElMessage.error(res.data.msg);
          setTimeout(() => {
            router.replace('/choose_task');
          }, 2000);
        }else{
          ElMessage.success("竞标成功");
          setTimeout(() => {
            router.replace('/choose_task');
          }, 2000);
        }
      })
    },
  },
};
</script>

<style scoped>

/* 基本的样式 */
.task-details {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  height: 300px;
}
.left_box{
  display: inline-block;
  width: 50%;
}
.right_box{
  width: 50%;
  float: right;
}

/* 任务名称和简介 */
h1 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}

/* 发布者信息 */
.publisher-info {
  margin-bottom: 20px;
  image{
    display: block;
    float: left;
  }
  .spans{
    display: inline-block;
    margin-left: 30px;
    span{
      display: block;
    }
  }
}

.publisher-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.publisher-info span {
  margin-right: 10px;
}
.budget-range{
  margin-top: 10px;
  margin-bottom: 10px;
}
/* 任务预算区间 */
.budget-range span {
  font-weight: 400;
  margin-right: 10px;
}

/* 任务描述 */
.task-description p {
  margin-top: 20px;
}

/* 所需技能 */
.required-skills h3 {
  margin-bottom: 10px;
}

.required-skills ul {
  list-style-type: none;
  padding-left: 0;
}

.required-skills li {
  margin-bottom: 5px;
}

/* 投标区域 */
.bidding-area {
  border-radius: 10px;
  width: 300px;
  height:230px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;

}

.bidding-area input,
.bidding-area select {
  margin-bottom: 10px;
  padding: 5px;
}

.bidding-area button {
  padding: 5px 10px;
  background-color: #007bff; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 100px;
  cursor: pointer;
  border-radius: 5px;
}

.bidding-area button:hover {
  background-color: #4390e3;
}

/* 修正select的默认样式 */
select {
  /* Reset default appearance */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  /* Add custom arrow */
  background-image:
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%);
  background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
  background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
  background-repeat: no-repeat;
}

/* 隐藏默认的下拉箭头 */
select::-ms-expand {
  display: none;
}
</style>