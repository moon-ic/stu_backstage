<template>
  <div>
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
/* 样式可以根据需求自行添加 */
</style>
