<template>
  <div class="container">
    <div class="title">Experience</div>
    <div class="experience-container" v-for="ex in experiences">
      <img class="experience-avatar" width="100" v-bind:src="ex.avatar">
      <div class="experience-position">{{ex.position}}</div>
      <div class="experience-title">{{ex.title}}</div>
      <div class="experience-duration">{{ex.duration}}</div>
      <ul>
        <li class="experience-detail-entry" v-for="des in ex.descriptions">{{des}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getExperiences } from '../../getter';
export default {
  vuex: {
    getters: {
      experiences: getExperiences,
    },
  },
  data() {
    return {};
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
  margin-bottom: 20px;
}
.experience-container {
  position: relative;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 6px rgba(0,0,0,.3);
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: 6px;
  box-sizing: border-box;
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
.experience-detail-entry {
  margin-bottom: 5px;
}

@media screen and (max-width: 415px) {
  .container {
    width: 90%;
  }
  .experience-container {
    padding: 7px 11px;
  }
}

@media screen and (max-width: 325px) {
  .experience-avatar {
    width: 75px;
  }
}
</style>
