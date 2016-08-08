<template>
    <div class="container">
        <div class="title">Projects</div>
        <div v-for="project in projects" class="project-block">
            <div class="project-title">
                <a href="{{project.titleLink}}" target="_blank">{{project.title}}</a>
            </div>
            <div class="duration">{{project.duration}}</div>
            <div class="project-table">
                <div class="project-details">
                    <div class="project-avatar-block">
                      <img class="project-avatar" v-bind:src="project.avatar" height="50" />
                    </div>
                    <div class="project-content">{{project.content}}</div>
                    <div class="project-skill">
                      <div v-for="set in project.skillSet" class="skill">{{set}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Yahoo Front Page',
          titleLink: 'https://tw.yahoo.com',
          duration: 'Jan. 2015 - Now',
          avatar: 'https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png',
          content: 'The main site of Yahoo Taiwan. ' +
           'Work on advertise fetching and balance the loading of site.',
          skillSet: ['React', 'Webpack', 'Advertising', 'User Tracking', 'Modulization', 'i18n'],
        },
        {
          title: 'webpack-atomizer-loader',
          titleLink: 'https://github.com/acss-io/webpack-atomizer-loader',
          duration: 'May. 2016 - Now',
          avatar: 'https://avatars2.githubusercontent.com/u/18367805?v=3&s=200',
          content: 'A webpack loader of Atomic CSS. Accepted by ACSS organization.',
          skillSet: ['Webpack', 'Atmoic CSS', 'Utils'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.project-title {
    font-size: 20px;
    font-weight: 500;
}
.project-avatar-block {
    display: table-cell;
    vertical-align: middle;
}
.project-avatar {

}
.project-content {
    padding-left: 20px;
    box-sizing: border-box;
    display: table-cell;
    vertical-align: middle;
}
.project-table {
    display: table;
    width: 100%;
    margin: 20px 0 50px;
}
.project-block {
    padding-top: 50px;
    border-bottom: 1px dashed #272727;
}
.project-block a {
    text-decoration: none;
}
.project-block a:hover {
    text-decoration: underline;
}
.project-block a:visited {
    color: black;
}
.project-details {
    display: table-row;
    position: relative;
}
.project-skill {
  vertical-align: middle;
  width: 30%;
  display: table-cell;
}
.skill {
  color: white;
  border-radius: 5px;
  background-color: #666666;
  display: inline-block;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 100;
}
.duration {
    font-size: .8em;
    color: #666666;
}
.title {
    margin-top: 72px;
    font-size: 22px;
    font-weight: 700;
}
.container {
    margin-left: 10%;
    margin-right: 10%;
}
</style>
