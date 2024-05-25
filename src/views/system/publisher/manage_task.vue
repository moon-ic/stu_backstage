<template>
  <div>
    <h2>我的任务</h2>

    <div v-if="tasks.length > 0">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div>
<!--         status===1 任务已完成  0 任务未完成-->
            <!-- 任务名字-->
            <h3>{{task.title }}</h3>
            <p>完成时间:{{ task.publishTime }}</p>
            <p>投标人数：{{ task.biddersCount }}</p>
            <p>平均竞标价格{{ task.averageBid }}</p>
            <p v-if="task.status ===0 ">任务预算：{{ task.budget }}</p>
            <p v-else>成交价格：{{task.bid}}</p>
          </div>
          <div v-if="task.status === 0">
            <button @click="manageBidders(task.id)">管理竞标者</button>
            <button @click="editTask(task.id)">更改任务</button>
            <button @click="deleteTask(task.id)">删除任务</button>
          </div>
          <div v-else>
            <button @click="browseBidders(task.id)">浏览执行者信息</button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>您还没有发布过任务！！！</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, title: '这是1', publishTime: '2024-05-21', biddersCount: 3, averageBid: '$1000', budget: '$1500' },
        { id: 2, title: '这是2', publishTime: '2024-05-20', biddersCount: 2, averageBid: '$1200', budget: '$2000' },
        { id: 3, title: '这首3', publishTime: '2024-05-19', biddersCount: 1, averageBid: '$900', budget: '$1800' }
      ]
    };
  },
  methods: {
    manageBidders(taskId) {
      // 管理竞标者
      console.log('?????????????ID??', taskId);
    },
    editTask(taskId) {
      // 修改任务
      console.log('???????????ID??', taskId);
    },
    deleteTask(taskId) {
      // 删除任务
      console.log('???????????ID??', taskId);
    },
    browseBidders(tsakId){
      //浏览雇员信息
      console.log("任务id",taskId)
    }
  }
};
</script>

<style>
/* ????????????????????? */
</style>
