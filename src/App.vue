<template>
    <header-banner></header-banner>
    <router-view>
    </router-view>
</template>

<script>
import HeaderBanner from './components/HeaderBanner';

export default {
  replace: false,
  components: {
    HeaderBanner,
  },
};
</script>

<style>
html {
  height: 100%;
  margin: 0;
}
body {
  margin: 0;
  background-color: #F5F5F5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
