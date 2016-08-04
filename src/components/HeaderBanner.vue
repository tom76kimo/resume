<template>
<div class="banner">
  <div class="logo">tom76kimo</div>
  <ul>
    <li v-for="classEntry in classes" v-on:click="">{{classEntry}}</li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        'Home',
        'About',
        'Project',
        'Skill',
        'Experience',
        'Education',
        'Contact',
      ],
    };
  },
  methods() {
    return {
    };
  },
};
</script>

<style scoped>
.banner {
  background-color: #030303;
  display: flex;
  flex-direction: row;
}
.logo {
  color: white;
  flex: 3;
  line-height: 70px;
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 28px;
  font-weight: 700;
}
ul {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex: 4;
}
li {
  transition: all 1s ease;
  color: white;
  height: 70px;
  flex: 1;
  list-style-type: none;
  text-align: center;
  line-height: 70px;
  cursor: pointer;
  user-select: none;
}

li.avtive {
  background: #eeeeee;
}

li:hover {
  background: #eeeeee;
  color: black;
}
</style>
