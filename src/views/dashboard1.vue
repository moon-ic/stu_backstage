<template>
  <div class="container">
    <div class="centered-content">
      <h2 class="time">{{ currentTime }}</h2>
      <h2 class="day">{{ formattedDate }}</h2>
      <h2 class="quote">"{{ dailyQuote }}"</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '',
      currentDate: new Date(),
      dailyQuote: '这是你的每日一言',
      quotes: [
        '生活不止眼前的苟且，还有诗和远方。',
        '人生就像一场旅行，不在乎目的地，在乎的是沿途的风景以及看风景的心情。',
      ],
    };
  },
  computed: {
    formattedDate() {
      const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

      const date = this.currentDate;
      const dayOfWeekIndex = date.getDay();
      const monthIndex = date.getMonth();

      return `${date.getFullYear()}年${months[monthIndex]}${date.getDate()}日 ${weeks[dayOfWeekIndex]}`;
    },
    currentTime() {
      return this.currentDate.toLocaleTimeString();
    },
    selectDailyQuote() {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.dailyQuote = this.quotes[randomIndex];
    },
  },
  mounted() {
    this.selectDailyQuote;
    this.timer = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
      this.currentDate = new Date();
    }, 1000);
  },
  beforeDestroy() {
    // 清除定时器
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.container {
  /* 使用背景图片 */
  background: url('src/assets/img/img.png') no-repeat center center;
  background-size: cover;
  position: relative; /* 如果需要背景图片固定在整个视口 */
  top: -20px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center; /* 水平居中 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height:88vh;
}

.centered-content {
  text-align: center; /* 确保文本在容器内居中 */
  color: white; /* 根据背景图片调整文本颜色 */
  z-index: 1; /* 确保文本在背景图片之上 */
}
.time{
  color: #CAD1D4;
  font-size: 150px;
  margin-top: 220px;
}
.day{
  color: #CAD1D4;
  font-size: 40px;
}
.quote{
  color: #CAD1D4;
  font-size: 18px;
  margin-top: 200px;
}
</style>