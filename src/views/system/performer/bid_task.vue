<template>
  <div>
    <h1>我的竞标任务</h1>
    <div class="bidding-list" v-if="bids.length>0">
      <div v-for="bid in bids" :key="bid.id" class="bid-item" >
        <h2>{{ bid.taskName }}</h2>
        <p>竞标价格: ¥{{ bid.price }}</p>
        <p>交货时间: {{ bid.deliveryTime }}</p>
        <!-- 这里可以添加其他您需要的组件或元素，比如提交竞标按钮等 -->
        <button @click="deleteBid(bid.id)">删除</button>
      </div>
    </div>
    <div v-else>您还没有竞标的任务！！</div>
  </div>
</template>

<script>
import {deleteBid, myBids} from "@/api/performer";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      bids: [],
    };
  },
  created(){
     this.getMyBids();
  },
  inject:['reload'],
  methods:{
    getMyBids(){
      myBids().then(res=>{
        let data = res.data.data;
        data.forEach(task=>{
          let bid={
            id:task.id,
            taskName:task.task.taskTitle,
            price:task.bidPrice,
            deliveryTime:task.deliveryDesc
          }
          this.bids.push(bid);
        })
      })
    },
    deleteBid(bidId){
      deleteBid(bidId).then(res=>{
        if(res.data.code===1){
          this.bids = this.bids.filter(bid => bid.id !== bidId);
          ElMessage.success(res.data.data);
          this.reload();
        }
      })
    }
  }
};
</script>

<style scoped>
.bidding-list {
  /* 竞标列表的样式 */
  margin-top: 20px;
}

.bid-item {
  /* 单个竞标项的样式 */
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>