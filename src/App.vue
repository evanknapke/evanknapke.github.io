<template>
  <v-app>

    <top-navigation-bar/>
    <v-spacer style="height:12px;"></v-spacer>

    <!-- <v-spacer style="height:12px;"></v-spacer> -->

    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import TopNavigationBar from '@/components/TopNavigationBar.vue';

export default {
  components: { TopNavigationBar },
  name: 'App',

  data: () => ({
    mainPages: [
      // { text: 'Home', link: '/' },
      // { text: 'About', link: '/about' },
      // { text: 'Education', link: '/education' },
      // { text: 'Experience', link: '/experience' },
      // { text: 'Projects',link: '/projects' },
    ]
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.main {
  display: block;
  padding-top: 36px !important;
  /* max-width: 800px; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.knapke-img{ 
  height: 25%;
  width: 25%;
}
</style>
