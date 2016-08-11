<template>
  <div class="container">
    <div class="title">Experience</div>
    <div class="experience-container" v-for="ex in experiences">
      <img class="experience-avatar" width="100" v-bind:src="ex.avatar">
      <div class="experience-position">{{ex.position}}</div>
      <div class="experience-title">{{ex.title}}</div>
      <div class="experience-duration">{{ex.duration}}</div>
      <ul>
        <li v-for="des in ex.descriptions">{{des}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          avatar: 'https://media.licdn.com/media/p/5/005/00e/318/39cf760.png',
          position: 'Software Engineer',
          title: 'Yahoo Inc.',
          duration: 'Sep. 2014 - Now',
          descriptions: [
            'Web architecture design, front-end coding (JavaScript, CSS, HTML),'
             + 'library/package composing and iOS app programming.',
            'Yahoo News - iOS app',
            'Yahoo Taiwan Home Page',
            'Yahoo Video Page',
          ],
        },
        {
          avatar: 'https://media.licdn.com/media/p/8/005/0a5/2c7/1637158.png',
          position: 'Front-end Engineer',
          title: 'QNAP Inc.',
          duration: 'Sep. 2014 - Oct. 2013',
          descriptions: [
            'Build a iPhoto-like web site to manage photos.',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  width: 70%;
  margin-top: 72px;
}
.title {
  font-size: 22px;
  font-weight: 700;
}
.experience-container {
  position: relative;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 6px rgba(0,0,0,.3);
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 6px;
}
.experience-position {
  font-size: 20px;
  font-weight: 500;
}
.experience-title {
  font-size: 16px;
  color: #666666;
  margin-top: 8px;
}
.experience-duration {
  font-size: 14px;
  color: #666666;
  margin-top: 2px;
}
.experience-avatar {
  position: absolute;
  top: 20px;
  right: 15px;
}
</style>
