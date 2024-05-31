<template>
  <div>
    <h1>我的竞标任务</h1>
    <div class="grid">
      <h3>
        <el-icon><List style="color: #007bff"/></el-icon>
        我的竞标
      </h3>
      <div v-if="bids.length>0">
        <div v-for="bid in bids" :key="bid.id" @click="goToTask(bid.taskId)" class="li-task">
          <div class="left">
            <p class="title">{{ bid.taskName }}</p>
            <p>竞标价格: ¥{{ bid.price }}</p>
            <p class="time">
              <el-icon><Clock /></el-icon>
              交货时间: {{ bid.deliveryTime }}
            </p>
          </div>
          <button @click="deleteBid(bid.id)" class="right">删除</button>
        </div>
      </div>
      <div v-else>您还没有竞标的任务！！</div>
    </div>
  </div>
</template>

<script>
import {deleteBid, myBids} from "@/api/performer";
import {ElMessage} from "element-plus";
import router from "@/router";
import {Clock, List} from "@element-plus/icons-vue";

export default {
  components: {Clock, List},
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
            taskId : task.task.id,
            taskName:task.task.taskTitle,
            price:task.bidPrice,
            deliveryTime:task.deliveryDesc
          }
          this.bids.push(bid);
        })
      })
    },
    //跳转到任务界面
    goToTask(taskId){
      console.log('', taskId);
      router.replace(`/task/${taskId}`);
    },
    deleteBid(bidId){
      deleteBid(bidId).then(res=>{
        console.log(res.data)
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
.grid{
  margin: 30px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h3{
    border-bottom: 1px solid #8c939d;
    line-height: 60px;
    padding-left: 10px;
    font-size: 22px;
  }
  .li-task{
    padding:10px 0 10px 20px;
    line-height: 30px;
    border-bottom: 1px solid #b8c0ca;
    .left{
      display: inline-block;
      p{
        display: inline-block;
        color: #6f7173;
      }
      .title{
        display: block;
        color: #252222;
        font-size: 18px;
      }
      .time{
        margin-left: 20px;
      }
    }
    .right{
      width:80px;
      height:40px;
      line-height: 40px;
      background-color: #007bff;
      color: white;
      float:right;
      border: none;
      border-radius: 10px;
      margin-top: 10px;
      margin-right: 40px;
    }
  }
  .li-task:last-child{
    border-bottom:none;
  }
}
</style>