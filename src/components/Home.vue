<template>
  <div class="container">
    <div class="details">
      <div class="avatar-container">
        <img class="avatar" src="../assets/tom-avatar.png">
      </div>
      <div class="bio">
        <div class="bio-title">Web Front-end Developer</div>
        <div class="bio-details">Hi, I am Tom Wu. I have 5 years of experience in Web front and back end. Highly eager to dig new tech on web.</div>
        <a href="mailto:tom76kimo@gmail.com?subject=[CV Required] I am <who I am>&body=Hi, please give me your CV :)">Require CV</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods() {
    return {
    };
  },
};
</script>

<style scoped>
.container {
  padding: 50px 70px;
  box-sizing: border-box;
  position: relative;
  height: 700px;
}
.details {
  position: absolute;
  margin: auto;
  height: 300px;
  width: 1000px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 1024px) {
  .details {
    width: initial;
    height: initial;
    flex-direction: column;
  }
  .avatar {
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .bio {
    padding: 0 10px;
    box-sizing: border-box;
  }
  .bio-title {
    text-align: center;
  }
  .bio-details {
    text-align: center;
  }
  a {
    margin-left: auto;
    margin-right: auto;
  }
}
.bio {
  flex: 3;
}
.avatar-container {
  flex: 2;
  position: relative;
}
.avatar {
  position: absolute;
  border-radius: 260px;
  right: 50px;
  user-select: none;
}
.bio-title {
  font-size: 50px;
  font-weight: 700;
}
.bio-details {
  margin-top: 50px;
  color: #666666;
  line-height: 1.7em;
}
a {
  display: block;
  height: 40px;
  width: 160px;
  margin-top: 50px;
  border: 3px solid black;
  background-color: rgba(0,0,0,0);
  font-size: 20px;
  color: black;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s ease;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
}

a:hover {
  color: white;
  background-color: black;
  border: 3px solid white;
}
</style>
