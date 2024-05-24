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
          <option value="工作">工作</option>
          <option value="学习">学习</option>
          <option value="休闲">休闲</option>
          <!-- 其他分类 -->
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
        <input type="text" v-model="task.skills" required>
      </div>
      <div>
        <label>任务描述：</label>
        <textarea v-model="task.description" required></textarea>
      </div>
      <div>
        <label>上传附件：</label>
        <input type="file" @change="handleFileUpload">
      </div>
      <button type="submit">提交任务</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        name: '',
        category: '',
        summary: '',
        maxBudget: null,
        minBudget: null,
        skills: '',
        description: '',
        attachment: null
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      this.task.attachment = event.target.files[0];
    },
    submitTask() {
      // 在这里执行提交任务的操作，可以发送请求到服务器
      console.log('提交任务：', this.task);
      // 提交后重置表单
      this.resetForm();
    },
    resetForm() {
      this.task = {
        name: '',
        category: '',
        summary: '',
        maxBudget: null,
        minBudget: null,
        skills: '',
        description: '',
        attachment: null
      };
    }
  }
};
</script>

<style>
/* 样式可以根据需求自行添加 */
</style>
