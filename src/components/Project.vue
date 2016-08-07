<template>
    <div class="container">
        <div class="title">Projects</div>
        <div class="project-block">
            <div class="project-title">
                <a href="https://tw.yahoo.com" target="_blank">Yahoo Front Page</a>
            </div>
            <div class="duration">Jan. 2015 - Now</div>
            <div class="project-table">
                <div class="project-details">
                    <img class="project-avatar" src="https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png" height="50" />
                    <div class="project-content">The main site of Yahoo Taiwan. Work on advertise fetching and balance the loading of site. </div>
                </div>
            </div>
        </div>
        <div class="project-block">
            <div class="project-title">
                <a href="https://github.com/acss-io/webpack-atomizer-loader" target="_blank">webpack-atomizer-loader</a>
            </div>
            <div class="duration">May. 2016 - Now</div>
            <div class="project-table">
                <div class="project-details">
                    <img class="project-avatar" src="https://avatars2.githubusercontent.com/u/18367805?v=3&s=200" height="50" />
                    <div class="project-content">A webpack loader of Atomic CSS. Accepted by ACSS organization.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.project-title {
    font-size: 20px;
    font-weight: 500;
}
.project-avatar {
    display: table-cell;
}
.project-content {
    padding-left: 20px;
    box-sizing: border-box;
    display: table-cell;
    vertical-align: middle;
}
.project-table {
    display: table;
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