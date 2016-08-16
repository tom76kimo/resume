<template>
<div class="banner">
  <div class="logo">tom76kimo</div>
  <ul>
    <li v-for="classEntry in classes" v-link="{ path : '/' + classEntry}">{{classEntry}}</li>
  </ul>
  <div class="menu" v-on:click="toggleMenu">
    <i class="fa fa-bars" aria-hidden="true"></i>
  </div>
  <div class="menu-block" v-show="showMenu">
    <a class="menu-entry" v-on:click="toggleMenu" v-for="classEntry in classes" v-link="{ path : '/' + classEntry}">{{classEntry}}</a>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        'Home',
        'Project',
        'Skill',
        'Experience',
        // 'Education',
        'Contact',
      ],
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.banner {
  background-color: #030303;
  display: flex;
  flex-direction: row;
}
.menu {
  color: white;
  flex: 1;
  display: none;
  text-align: right;
  padding-right: 20px;
  box-sizing: border-box;
}
.fa-bars {
  font-size: 30px;
  height: 100%;
  line-height: 70px;
  cursor: pointer;
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

.menu-block {

}

.menu-entry {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  text-decoration: none;
}

.menu-entry:hover {
  text-decoration: underline;
}

.menu-entry:visited {
  color: white;
}

@media screen and (max-width: 900px) {
  ul {
    display: none;
  }
  .menu {
    display: block;
  }
  .menu-block {
    position: absolute;
    width: 100%;
    background-color: #666666;
    left: 0;
    z-index: 2;
    padding: 20px 0;
  }
}
</style>
