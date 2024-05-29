<template>
  <div>
    <img src="@/assets/img/img.jpg" alt="用户头像" style="width: 100px; height: 100px; border-radius: 50%;">

    <form @submit.prevent="updateUserInfo">
      <div>
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="userInfo.username" required>

        <label for="phoneNumber">手机号:</label>
        <input type="tel" id="phoneNumber" v-model="userInfo.phoneNumber" required>

        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="userInfo.email" required>

        <button type="submit">保存更新</button>
      </div>
    </form>
  </div>
</template>

<script>
import {getPublisherInfo,savePublisherInfo} from '@/api/publisher'
import {ElMessage} from "element-plus";


export default {
  data() {
    return {
      userInfo: {
        username: '', // 用户名
        phoneNumber: '', // 手机号码
        email: '' // 邮箱地址
      }
    };
  },
  created() {
    this.fetchUserInfo(); // 在组件创建时获取用户信息
  },
  methods: {
    fetchUserInfo() {
      getPublisherInfo()
        .then(response => {
          console.log(response.data)
          this.userInfo.username= response.data.data.username;
          this.userInfo.phoneNumber = response.data.data.phone;
          this.userInfo.email = response.data.data.email;
        })
    },
    updateUserInfo() {
      let employer = {
        id : localStorage.getItem("publisher-id"),
        username: this.userInfo.username,
        phone: this.userInfo.phoneNumber,
        email: this.userInfo.email,
      };
      savePublisherInfo(employer)
          .then(res => {
            if(res.data.code === 1){
              ElMessage.success(res.data.data);
              console.log('更新成功', res);
            }
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
