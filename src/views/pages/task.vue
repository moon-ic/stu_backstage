<template>
  <div>
    <!-- 头部部分 -->
    <header>
      <h1>{{ task.name }}</h1>
      <div class="publisher-info">
        <img :src="publisher.avatar" alt="发布者头像">
        <div>
          <p>{{ publisher.nickname }}</p>
          <p>{{ publisher.contact }}</p>
        </div>
        <p>预算：{{ task.budget }}</p>
      </div>
    </header>

    <!-- 正文部分 -->
    <section>
      <h2>任务描述</h2>
      <p>{{ task.description }}</p>
      <h3>附件</h3>
      <ul>
        <li v-for="attachment in task.attachments" :key="attachment.id">
          <a :href="attachment.url" target="_blank">{{ attachment.name }}</a>
        </li>
      </ul>
      <h3>所需技能</h3>
      <ul>
        <li v-for="skill in task.skills" :key="skill.id">{{ skill.name }}</li>
      </ul>
    </section>

    <!-- 竞标者列表 -->
    <section>
      <h2>竞标者</h2>
      <ul>
        <li v-for="bidder in bidders" :key="bidder.id">
          <p>昵称：{{ bidder.nickname }}</p>
          <p>预算：{{ bidder.bid }}</p>
          <p>预计交货时间：{{ bidder.deliveryTime }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script >
export default {
  data() {
    return {
      task: {
        name: '招聘任务标题',
        budget: '$1000 - $1500',
        description: '这是任务的具体描述，可以是一段文字。',
        attachments: [
          { id: 1, name: '附件1', url: '#' },
          { id: 2, name: '附件2', url: '#' }
        ],
        skills: [
          { id: 1, name: '技能1' },
          { id: 2, name: '技能2' },
          { id: 3, name: '技能3' }
        ]
      },
      publisher: {
        avatar: 'avatar.jpg',
        nickname: '发布者昵称',
        contact: '联系方式：xxxxxx'
      },
      bidders: [
        { id: 1, nickname: '竞标者1', bid: '$800', deliveryTime: '3天' },
        { id: 2, nickname: '竞标者2', bid: '$1200', deliveryTime: '5天' },
        { id: 3, nickname: '竞标者3', bid: '$1000', deliveryTime: '4天' }
      ]
    };
  }
};
</script>

<style>
/* 样式可以根据需求自行添加 */
</style>
