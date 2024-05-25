<template>
    <div class="password-change-form">
      <h2>修改密码</h2>
      <form @submit.prevent="changePassword">
        <div class="form-group">
<<<<<<< HEAD
          <label for="oldPassword">请输入密码</label>
          <input type="password" id="oldPassword" v-model="oldPassword" required>
        </div>
        <div class="form-group">
          <label for="newPassword">新密码</label>
          <input type="password" id="newPassword" v-model="newPassword" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">再次确认新密码：</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <button type="submit">保存</button>
=======
          <label for="oldPassword">旧密码:</label>
          <input type="password" id="oldPassword" v-model="oldPassword" required>
        </div>
        <div class="form-group">
          <label for="newPassword">新密码:</label>
          <input type="password" id="newPassword" v-model="newPassword" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">确认新密码:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <button type="submit">确认修改</button>
>>>>>>> master
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
<<<<<<< HEAD
  import {updatePwd} from '@/api/publisher/index'
=======
>>>>>>> master
  export default {
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        error: ''
      };
    },
    methods: {
      changePassword() {
<<<<<<< HEAD
        if (this.newPassword !== this.confirmPassword) {
          this.error = '修改失败';
          return;
        }
        updatePwd(this.newPassword,this.oldPassword)
            .then(response=>{
              console.log(response.data);
              if(response.data.code === 1){
                sessionStorage.setItem("publisher",)
              }
            })
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.error = '';
        alert('更新成功');
=======
        // 做一些密码验证，例如确认新密码与新密码匹配等
        if (this.newPassword !== this.confirmPassword) {
          this.error = '新密码与确认密码不匹配';
          return;
        }
  
        // 发送修改密码请求
        // 这里可以使用你的API服务发送请求来验证旧密码并修改新密码
  
        // 清空表单并显示成功消息
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.error = ''; // 清除错误消息
        alert('密码修改成功！');
>>>>>>> master
      }
    }
  };
  </script>
  
  <style scoped>
  .password-change-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="password"] {
    width: 100%;
    padding: 8px;
    font-size: 16px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  