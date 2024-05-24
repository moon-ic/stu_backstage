<template>
  <div>
    <!-- 头像 -->
    <img :src="userInfo.avatar" alt="用户头像" style="width: 100px; height: 100px; border-radius: 50%;">
    <!-- 用户信息 -->
    <div>
      <p>用户名：{{ userInfo.username }}</p>
      <p>手机号：{{ userInfo.phoneNumber }}</p>
      <p>邮箱：{{ userInfo.email }}</p>
      <!-- 提交按钮 -->
      <button @click="updateUserInfo">保存更新</button>
      <!-- 其他信息，根据需要添加 -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'; // 假设您已经通过npm安装了axios
import {getPublisherInfo,savePublisherInfo} from '@/api/publisher/index'

export default {
  data() {
    return {
      userInfo: {
        avatar: '', // 头像图片链接
        username: '', // 用户名
        phoneNumber: '', // 手机号码
        email: '' // 邮箱地址
        // 其他信息，根据需要添加
      }
    };
  },
  created() {
    this.fetchUserInfo(); // 在组件创建时获取用户信息
  },
  methods: {
    fetchUserInfo() {
      // 发送GET请求获取用户信息（示例URL，您需要替换为真实的API）
      getPublisherInfo()
          .then(response => {
            console.log(response)
            this.userInfo = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },
    updateUserInfo() {
      let employer= {
        username: this.userInfo.username,
        phoneNumber: this.userInfo.phoneNumber,
        email: this.userInfo.email,
      };
      // 发送POST或PUT请求更新用户信息（这里使用POST作为示例，但PUT通常用于更新）
      savePublisherInfo(employer)
          .then(response => {
            console.log('更新成功', response);
            // 可以选择性地更新本地数据或其他操作
          })
          .catch(error => {
            console.error('更新失败', error);
          });
    }
  }
};
</script>

<style>
/* 样式可以根据需求自行添加 */
</style>
