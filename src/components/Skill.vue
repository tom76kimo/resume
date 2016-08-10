<template>
  <div class="container">
    <div class="title">Skill</div>
    <div class="progress-section">
      <div class="progress-container" v-for="progress in progressArray">
        <div class="progress-title">{{progress.title}}</div>
        <div class="progress">
          <div class="inner-progress-container" v-bind:style="progress.style">
            <div class="inner-progress"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="skill-entry-section">
      <div class="skill-title">More</div>
      <div class="skill-entry" v-for="entry in skillEntry">
        <i class="fa fa-check-circle" aria-hidden="true"></i>{{entry}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressArray: [
        {
          title: 'Javascript',
          style: {
            width: '75%',
          },
        },
        {
          title: 'HTML & CSS',
          style: {
            width: '85%',
          },
        },
        {
          title: 'Nodejs',
          style: {
            width: '70%',
          },
        },
      ],
      skillEntry: [
        'React',
        'Vue',
        'ES6',
        'Webpack',
        'SEO',
        'Performance Tuning',
        'Continuous Deploy',
        'i18n',
        'Flux flow',
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
.progress-container {
  margin-top: 30px;
}
.progress-section {

}
.progress {
  width: 100%;
  height: 30px;
  background-color: #666666;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}
.progress-title {
  font-size: 20px;
  margin-bottom: 10px;
}
.inner-progress-container {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.inner-progress {
  background-color: #00bdbd;
  height: 100%;
  width: 100%;
  animation: progress-move 1s;
}
.skill-entry-section {
  margin-top: 50px;
  width: 100%;
}
.skill-entry {
  float: left;
  width: 50%;
  margin-bottom: 5px;
}
.skill-title {
  font-size: 30px;
  margin-bottom: 40px;
  border-bottom-style: dotted;
  border-bottom-width: 2px;

}
.fa-check-circle {
  margin-right: 10px;
  color: #00bdbd;
}
.title {
  font-size: 22px;
  font-weight: 700;
}
@keyframes progress-move {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

</style>
