<template>
    <div class="container">
        <div class="title">Projects</div>
        <div v-for="project in projects" class="project-block">
            <div class="project-title">
                <a href="{{project.titleLink}}" target="_blank">{{project.title}}<i class="fa fa-link" aria-hidden="true"></i></a>
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
            <div class="project-avatar-block-xs">
              <img class="project-avatar" v-bind:src="project.avatar" height="50" />
            </div>
            <div class="project-content-xs">{{project.content}}</div>
            <div class="project-skill-xs">
              <div v-for="set in project.skillSet" class="skill">{{set}}</div>
            </div>
        </div>
        <div class="more">More...(Review on CV)</div>
    </div>
</template>

<script>
import { getProjects } from '../../getter';
export default {
  vuex: {
    getters: {
      projects: getProjects,
    },
  },
  data() {
    return {};
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
.project-avatar-block-xs {
  display: none;
}
.project-avatar {

}
.project-content {
    padding-left: 20px;
    box-sizing: border-box;
    display: table-cell;
    vertical-align: middle;
}
.project-content-xs {
  display: none;
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
  padding-left: 5px;
  box-sizing: border-box;
  vertical-align: middle;
  width: 30%;
  display: table-cell;
}
.project-skill-xs {
  display: none;
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
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
}
.fa-link {
  font-size: 14px;
  margin-left: 10px;
}
.more {
  padding-top: 30px;
  height: 100px;
}

@media screen and (max-width: 415px) {
  .title {
    text-align: center;
  }
  .project-table {
    display: none;
  }
  .project-block {
    padding-top: 20px;
    box-sizing:border-box;
    padding-left: 10px;
    padding-right: 10px;
  }
  .project-title {
    text-align: center;
  }
  .duration {
    text-align: center;
  }
  .project-content-xs {
    display: block;
    text-align: center;
    margin-top: 20px;
  }
  .project-skill-xs {
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .project-avatar-block-xs {
    display: block;
    margin-top: 20px;
  }
  .project-avatar-block-xs .project-avatar {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .more {
    text-align: center;
  }
}
</style>
