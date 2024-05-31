<template>
  <div class="card">
    <!-- 竞标者管理标题 -->
    <h2>关于任务 "{{ taskName }}" 的竞标者</h2>

    <!-- 竞标者列表 -->
    <div v-if="bidders.length > 0">
      <ul>
        <li v-for="bidder in bidders" :key="bidder.id">
          <div>
            <a @click="goToPerformer( bidder.employee.id )">昵称：{{ bidder.employee.username  }}</a>
            <p>邮箱：{{ bidder.employee.email }}</p>
            <p>投标价格：{{ bidder.bidPrice }}</p>
            <p>预计完成时间：{{ bidder.deliveryDesc }}</p>
            <button @click="acceptBid(bidder.employee.id)">接受竞标</button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>暂无竞标者</p>
    </div>
  </div>
</template>

<script>
import{getTaskInfo,acceptBid} from '@/api/publisher'
import {ElMessage} from "element-plus";
import router from "@/router";
export default {
  data() {
    return {
      taskName: '', // 可以通过路由参数或其他方式获取任务名称
      bidders: []
    };
  },
  created() {
    this.getBidders();
  },
  methods: {
    //获取所有竞标者
    getBidders(){
      const taskId = this.$route.params.id;
      getTaskInfo(taskId).then(response => {
        console.log(response.data);
        let data = response.data.data
        let bids = data.bidVos
        this.taskName = data.taskTitle
        this.bidders = bids;
      })
    },
    acceptBid(bidderId){
      const taskId = this.$route.params.id;
      acceptBid(bidderId,taskId).then(res=>{
        if(res.data.code === 1){
          ElMessage.success('选择成功');
        }
        else{
          ElMessage.error(res.data.message);
        }
      })
      this.$router.back();
    },
    goToPerformer(publisherId) {
      router.push(`performer/${publisherId}`);
    },
  }
};
</script>

<style>
/* 基本样式 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

/* 卡片样式 */
.card {
  background-color: #fff; /* 白色背景 */
  border: 1px solid #ddd; /* 边框 */
  border-radius: 5px; /* 圆角 */
  padding: 20px; /* 内边距 */
  margin-bottom: 20px; /* 底部外边距，用于分隔卡片 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}

/* 列表样式 */
.card ul {
  list-style-type: none; /* 移除默认的列表样式 */
  padding: 0; /* 移除默认的内边距 */
}

/* 列表项样式 */
.card ul li {
  margin-bottom: 10px; /* 列表项之间的间距 */
}

/* 链接样式 */
.card a {
  color: #007BFF; /* 链接颜色 */
  text-decoration: none; /* 移除下划线 */
}

/* 按钮样式 */
.card button {
  margin-top: 10px; /* 按钮与文本之间的间距 */
  padding: 5px 10px; /* 内边距 */
  border: none; /* 移除边框 */
  border-radius: 3px; /* 圆角 */
  background-color: #007BFF; /* 背景色 */
  color: #fff; /* 文本颜色 */
  cursor: pointer; /* 鼠标悬停时变为手形图标 */
}

/* 突出显示被点击或活动的按钮 */
.card button:active {
  background-color: #0056b3; /* 活动状态时的背景色 */
}

/* 响应式布局（可选） */
@media (max-width: 600px) {
  .card {
    padding: 10px; /* 在小屏幕上减少内边距 */
  }
}
</style>
