<template>
    <div class="password-change-form">
<<<<<<< HEAD
      <h2>ĞŞ¸ÄÃÜÂë</h2>
      <form @submit.prevent="changePassword">
        <div class="form-group">
          <label for="oldPassword">¾ÉÃÜÂë:</label>
          <input type="password" id="oldPassword" v-model="oldPassword" required>
        </div>
        <div class="form-group">
          <label for="newPassword">ĞÂÃÜÂë:</label>
          <input type="password" id="newPassword" v-model="newPassword" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">È·ÈÏĞÂÃÜÂë:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <button type="submit">È·ÈÏĞŞ¸Ä</button>
=======
      <h2>ä¿®æ”¹å¯†ç </h2>
      <form @submit.prevent="changePassword">
        <div class="form-group">
          <label for="oldPassword">æ—§å¯†ç :</label>
          <input type="password" id="oldPassword" v-model="oldPassword" required>
        </div>
        <div class="form-group">
          <label for="newPassword">æ–°å¯†ç :</label>
          <input type="password" id="newPassword" v-model="newPassword" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">ç¡®è®¤æ–°å¯†ç :</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <button type="submit">ç¡®è®¤ä¿®æ”¹</button>
>>>>>>> master
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
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
        // ×öÒ»Ğ©ÃÜÂëÑéÖ¤£¬ÀıÈçÈ·ÈÏĞÂÃÜÂëÓëĞÂÃÜÂëÆ¥ÅäµÈ
        if (this.newPassword !== this.confirmPassword) {
          this.error = 'ĞÂÃÜÂëÓëÈ·ÈÏÃÜÂë²»Æ¥Åä';
          return;
        }
  
        // ·¢ËÍĞŞ¸ÄÃÜÂëÇëÇó
        // ÕâÀï¿ÉÒÔÊ¹ÓÃÄãµÄAPI·şÎñ·¢ËÍÇëÇóÀ´ÑéÖ¤¾ÉÃÜÂë²¢ĞŞ¸ÄĞÂÃÜÂë
  
        // Çå¿Õ±íµ¥²¢ÏÔÊ¾³É¹¦ÏûÏ¢
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.error = ''; // Çå³ı´íÎóÏûÏ¢
        alert('ÃÜÂëĞŞ¸Ä³É¹¦£¡');
=======
        // åšä¸€äº›å¯†ç éªŒè¯ï¼Œä¾‹å¦‚ç¡®è®¤æ–°å¯†ç ä¸æ–°å¯†ç åŒ¹é…ç­‰
        if (this.newPassword !== this.confirmPassword) {
          this.error = 'æ–°å¯†ç ä¸ç¡®è®¤å¯†ç ä¸åŒ¹é…';
          return;
        }
  
        // å‘é€ä¿®æ”¹å¯†ç è¯·æ±‚
        // è¿™é‡Œå¯ä»¥ä½¿ç”¨ä½ çš„APIæœåŠ¡å‘é€è¯·æ±‚æ¥éªŒè¯æ—§å¯†ç å¹¶ä¿®æ”¹æ–°å¯†ç 
  
        // æ¸…ç©ºè¡¨å•å¹¶æ˜¾ç¤ºæˆåŠŸæ¶ˆæ¯
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.error = ''; // æ¸…é™¤é”™è¯¯æ¶ˆæ¯
        alert('å¯†ç ä¿®æ”¹æˆåŠŸï¼');
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
  