<template>
  <h2 class="header">{{user.username}}的主页</h2>
  <div class="user-profile">
    <!-- 用户头像 -->
    <div class="avatar">
      <img src="../../assets/img/img.jpg" :alt="user.username">
    </div>

    <!-- 用户基本信息 -->
    <div class="user-info">
      <h1>{{ user.username }}</h1>
      <p>电子邮件：{{ user.email }}</p>
      <p>电话号码:{{ user.phone }}</p>
      <p>个性签名:{{ user.tagline }}</p>
      <p>简介:{{ user.profile }}</p>
      <div class="skills">
        <h3>拥有技能</h3>
        <ul>
          <li v-for="skill in user.skills" :key="skill.id">{{ skill.skillName }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {getAllInfo} from "@/api/performer";

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        phone: '',
        headImg: '',
        tagline: '',
        profile: '',
        skills: [],
      },
    };
  },
  created() {
    this.getAllInfo();
  },
  methods: {
    getAllInfo(){
      //获取performer主页信息
      let performerId = this.$route.params.id
      getAllInfo(performerId).then(res=>{
        let data = res.data.data;
        console.log(res.data);
        this.user.username = data.username;
        this.user.email = data.email;
        this.user.phone = data.phone;
        this.user.tagline = data.tagline;
        this.user.profile = data.profile;
        this.user.skills = data.skills;
      })
    }
  },
};
</script>

<style scoped>

.header{
  margin: 20px 50px;
}
/* 基础样式 */
.user-profile {
  max-width: 800px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  color: #333;
  width: 85%;
  margin: 50px auto;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 头像样式 */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.avatar img {
  width: 100%;
  height: auto;
}

/* 用户信息样式 */
.user-info {
  margin-bottom: 20px;
  margin-left: 50px;
}

.user-info h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.user-info p {
  margin-bottom: 5px;
}

/* 技能列表样式 */
.skills h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.skills ul {
  list-style-type: none;
  padding-left: 20px;
}

.skills li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 5px;
}

.skills li::before {
  content: "•";
  position: absolute;
  left: 0;
}
</style>
