import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
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
      title: 'Bible Reader',
      titleLink: 'http://bible.tom76kimo.info/',
      duration: 'May. 2014 - Now',
      avatar: 'http://graph.facebook.com/10152748341458051/picture?width=70&height=70',
      content: 'A website for user to record the progress of reading Bible. ' +
      'User can easily use this website framework to build' +
      ' your own record web app for your group or church.',
      skillSet: ['Backbone', 'Bootstrap', 'Recording'],
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
  skill: {
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
      'Nodejs',
      'ES6',
      'Git',
      'Webpack',
      'SEO',
      'Performance Tuning',
      'Continuous Deploy',
      'i18n',
      'Flux flow',
    ],
  },
};

const mutations = {};

export default new Vuex.Store({
  state,
  mutations,
});
