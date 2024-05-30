<template>
  <div class="user-edit">
    <h1>个人信息</h1>
    <form @submit.prevent="submitForm">
      <div class="account">
        <h3>
          <el-icon><Avatar style="color:#007bff"/></el-icon>
          基本信息
          <button type="submit">保存信息</button>
        </h3>
        <div class="img">
          <img src="../../../assets/img/img.jpg" alt="">
        </div>
        <!-- 用户名 -->
        <div class="form">
          <div class="form-group">
            <label for="username">用户名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" v-model="user.username" id="username" required>
          </div>

          <!-- 电子邮件 -->
          <div class="form-group">
            <label for="email">电子邮件</label>
            <input type="email" v-model="user.email" id="email" required>
          </div>

          <!-- 电话号码 -->
          <div class="form-group">
            <label for="phone">电话号码</label>
            <input type="text" v-model="user.phone" id="phone" required>
          </div>
        </div>

        </div>

      <div class="profile">
        <h3>
          <el-icon><Avatar style="color:#007bff"/></el-icon>
          个人简介
        </h3>
        <!-- 个性签名 -->
        <div class="form">
          <div class="form-group">
            <label for="tagline">个性签名</label>
            <input type="text" v-model="user.tagline" id="tagline">
          </div>
          <div class="skills">
            <label for="skills">拥有技能</label>
            <input type="text" v-model="user.skills" id="skills">
          </div>
          <div class="form-group">
            <label for="profile">简介</label>
            <textarea v-model="user.profile" id="profile"></textarea>
          </div>
        </div>
        </div>
    </form>
  </div>
</template>
<script>

import {getAllInfo,saveAllInfo} from "@/api/performer";
import {ElMessage} from "element-plus";
import {Avatar} from "@element-plus/icons-vue";

export default {
  components: {Avatar},
  data() {
    return {
      user: {
        id: '',
        username: '',
        email: '',
        phone: '',
        tagline: '',
        profile: '',
        skills:'',
      },
    };
  },
  created(){
    this.getInfo();
  },
  methods: {
    getInfo() {
      //获取performer主页信息
      getAllInfo().then(res => {
        console.log(res.data)
        let data = res.data.data;
        console.log(res.data);
        this.user.id = data.id;
        this.user.username = data.username;
        this.user.email = data.email;
        this.user.phone = data.phone;
        this.user.tagline = data.tagline;
        this.user.profile = data.profile;
        this.user.skills = data.skills.map(skill => skill.skillName).join(", ");
      })
    },
    submitForm() {
      console.log('Updated user data:', this.user);
      saveAllInfo(this.user).then(res=>{
        console.log(res.data);
        if(res.data.code===1){
          ElMessage("保存成功");
          this.getInfo()
        }
      })
    },
  },
};
</script>

<style scoped>
ul{
  list-style: none;
}
.account{
  width:89%;
  margin: auto;
  height: 230px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3{
    line-height: 60px;
    border-bottom: 1px solid #c2c7cf;
    button{
      float: right;
      width: 80px;
      height:40px;
      background-color: #007bff;
      color:white;
      border: none;
      margin: 10px 30px;
      border-radius: 10px;
    }
  }
  .img{
    width: 20%;
    display: flex;
    float: left;
    justify-content: center;
    align-items: center;
    height: 170px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .form{
    width: 70%;
    text-align: left;
    float: right;
    .form-group{
      label {
        font-size: 18px;
        margin-right: 10px;
      }
      input{
        padding: 2px 10px;
        width: 400px;
        margin-top: 20px;
        height:30px;
        border: 1px solid #ccc; /* 输入框边框 */
        border-radius: 4px;
      }
    }
  }
}
.profile{
  width:89%;
  margin: auto;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  h3{
    line-height: 60px;
    border-bottom: 1px solid #c2c7cf;
  }
  .form{
    .form-group,
    .skills
    {
      padding: 10px;
      border-bottom: 1px solid #ccc;
      label{
        display: block;
        line-height: 30px;
        margin-left: 20px;
      }
      input{
        padding: 2px 10px;
        margin: auto;
        display: block;
        width: 90%;
        height:30px;
        border: 1px solid #ccc; /* 输入框边框 */
        border-radius: 4px;
      }
      textarea{
        width: 92%;
        padding: 10px 15px;
        height: 100px;
        margin-left: 45px;
        border: 1px solid #ccc; /* 输入框边框 */
        border-radius: 4px;
      }
    }
  }
}
</style>
