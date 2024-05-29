<template>
  <div class="user-profile">
    <!-- 用户头像 -->
    <div class="avatar">
      <img :src="user.headImg" :alt="user.username">
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
.user-profile {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 20px;
}

.user-info {
  text-align: center;
}

.user-info h1 {
  margin-bottom: 10px;
}

.user-info p {
  margin: 5px 0;
  font-size: 16px;
}
</style>
