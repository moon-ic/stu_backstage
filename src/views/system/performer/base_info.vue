<template>
  <div>
    <h2>个人信息编辑</h2>

    <!-- 账户信息编辑部分 -->
    <div>
      <h3>账户信息</h3>
      <div>
        <label>用户名：</label>
        <input type="text" v-model="accountInfo.username">
      </div>
      <div>
        <label>手机号：</label>
        <input type="text" v-model="accountInfo.phoneNumber">
      </div>
      <div>
        <label>邮箱：</label>
        <input type="email" v-model="accountInfo.email">
      </div>
    </div>

    <!-- 个人简介编辑部分 -->
    <div>
      <h3>我的简介</h3>
      <div>
        <label>标语：</label>
        <input type="text" v-model="profile.motto">
      </div>
      <div>
        <label>技能：</label>
        <textarea v-model="profile.skills"></textarea>
      </div>
      <div>
        <label>自我介绍：</label>
        <textarea v-model="profile.introduction"></textarea>
      </div>
    </div>
    <!-- 保存按钮 -->
    <button @click="saveChanges">保存修改</button>
  </div>
</template>

<script>
import {getAllInfo,saveAllInfo} from "@/api/performer";
import {ref} from "vue";


// const accountInfo = ref({
//   username:'',
//   phoneNumber:'',
//   email:''
// });
// const profile = ref({
//   motto:'',
//   skills:[],
//   introduction:''
// });

export default {
  data() {
    return {
      accountInfo: {
        username: '',
        phoneNumber: '',
        email: ''
      },
      profile: {
        motto: '',
        skills: '',
        introduction: ''
      }
    };
  },
  async created() {
    try {
      const response = await getAllInfo();
      if (response.code===1) {
        this.accountInfo.username = response.data.username;
        this.accountInfo.phoneNumber=response.data.phone;
        this.accountInfo.email=response.data.email;
        this.profile.motto = response.data.tagline;
        this.profile.skills = response.data.skills;
        this.profile.introduction = response.data.profile;
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  },
  methods: {
    async saveChanges() {
      let data={
        username : this.accountInfo.username,
        email : this.accountInfo.email,
        phone : this.accountInfo.phoneNumber,
        tagline: this.profile.motto,
        skills : this.profile.skills,
        profile : this.profile.introduction
      };

      try{
        const response = await saveAllInfo(data);
        if(response.code === 1){
          console.log('账户信息：', this.accountInfo);
          console.log('个人简介：', this.profile);
          alert('修改已保存！');
        }
      }catch (error){
        console.error('信息未修改成功',error);
      }
    }
  }
};
</script>
