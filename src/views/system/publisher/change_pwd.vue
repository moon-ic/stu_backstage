<template>
  <h2 class="header">修改密码</h2>
  <div class="password-change-form-container">
    <div class="password-change-form card">
      <form @submit.prevent="changePassword">
        <div class="form-group">
          <label for="oldPassword">请输入密码</label>
          <input type="password" id="oldPassword" v-model="oldPassword" required>
        </div>
        <div class="form-group">
          <label for="newPassword">新密码</label>
          <input type="password" id="newPassword" v-model="newPassword" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">确认新密码</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <button type="submit" class="btn-submit">保存</button>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
  import {updatePwd} from '@/api/publisher'
  import {ElMessage} from "element-plus";
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
        if (this.newPassword !== this.confirmPassword) {
          this.error = '新密码与确认密码不匹配';
        }else{
          updatePwd(this.oldPassword,this.newPassword)
              .then(response=>{
                console.log(response.data);
                if(response.data.code === 1){
                  this.oldPassword = '';
                  this.newPassword = '';
                  this.confirmPassword = '';
                  this.error = '';
                  ElMessage.success("更新成功");
                }
              });
        }

      }
    }
  };
  </script>
  
<style scoped>
.header{
  margin:20px 80px;
}
  .password-change-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px; /* 根据需要调整高度 */
    margin-top: 40px;
  }

  .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 600px;
    margin:10px;
    label {
      font-size: 18px;
      display: block;
      line-height: 30px;
    }
      input{
        width: 97%;
        height: 40px;
        border: 1px solid #ccc; /* 输入框边框 */
        border-radius: 4px;
    }
  }


  .form-group {
    margin-bottom: 15px; /* 每个表单组之间添加间距 */
  }

  .btn-submit {
    display: block;
    width: 100%; /* 让按钮填满其容器 */
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .error {
    color: red;
    margin-top: 10px; /* 错误信息上方添加间距 */
  }
  </style>