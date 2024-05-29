<template>
  <div class="user-edit">
    <h1>编辑用户信息</h1>
    <form @submit.prevent="submitForm">
      <!-- 用户名 -->
      <div class="form-group">
        <label for="username">用户名</label>
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

      <!-- 个性签名 -->
      <div class="form-group">
        <label for="tagline">个性签名</label>
        <input type="text" v-model="user.tagline" id="tagline">
      </div>
<!--       TODO 添加技能删除技能-->
      <div class="skills">
        <h3>拥有技能</h3>
        <ul>
          <li v-for="skill in user.skills" :key="skill.id">{{ skill.skillName }}</li>
        </ul>
      </div>

      <!-- 简介 -->
      <div class="form-group">
        <label for="profile">简介</label>
        <textarea v-model="user.profile" id="profile"></textarea>
      </div>

      <!-- 提交按钮 -->
      <button type="submit">保存信息</button>
    </form>
  </div>
</template>
<script>


import {getAllInfo,saveAllInfo} from "@/api/performer";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      user: {
        id: '',
        username: '',
        email: '',
        phone: '',
        tagline: '',
        profile: '',
        skills: [],
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
        this.user.skills = data.skills;
      })
    },
    submitForm() {
      console.log('Updated user data:', this.user);
      saveAllInfo(this.user).then(res=>{
        console.log(res.data);
        if(res.data.code===1){
          ElMessage("保存成功");
        }
      })
    },
  },
};
</script>

<style scoped>
.user-edit {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.avatar-preview {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 10px;
}
</style>
