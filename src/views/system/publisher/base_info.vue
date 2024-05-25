<template>
  <div>
    <!-- 头像 -->
    <img :src="userInfo.avatar" alt="用户头像" style="width: 100px; height: 100px; border-radius: 50%;">

    <!-- 用户信息 -->
    <div>
      <p>用户名：{{ userInfo.username }}</p>
      <p>手机号：{{ userInfo.phoneNumber }}</p>
      <p>邮箱：{{ userInfo.email }}</p>
      <!-- 其他信息，根据需要添加 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        avatar: 'avatar.jpg', // 头像图片链接
        username: '用户名', // 用户名
        phoneNumber: '手机号码', // 手机号码
        email: '邮箱地址' // 邮箱地址
        // 其他信息，根据需要添加
      }
    };
  }
};
</script>

<style>
/* 样式可以根据需求自行添加 */
</style>
