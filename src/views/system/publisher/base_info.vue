<template>
  <div class="user-profile">
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
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

.user-profile img {
  margin-bottom: 20px;
}

.user-profile form {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 确保表单元素垂直排列 */
}

.user-profile form label {
  margin-bottom: 5px; /* 标签和输入框之间的间距 */
}

.user-profile form input[type="text"],
.user-profile form input[type="tel"],
.user-profile form input[type="email"] {
  margin-bottom: 15px; /* 输入框之间的间距 */
  padding: 8px; /* 输入框内边距 */
  border: 1px solid #ccc; /* 输入框边框 */
  border-radius: 4px; /* 输入框边框圆角 */
  width: 100%; /* 输入框宽度设为100%以填充其父元素 */
}

.user-profile form button {
  padding: 10px 20px; /* 按钮内边距 */
  border: none; /* 移除默认边框 */
  border-radius: 4px;
  background-color: #2d8cf0;
  color: white;
  cursor: pointer;
}

.user-profile form button:hover {
  background-color: #629cda;
}
</style>
