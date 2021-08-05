<template>
  <v-app>
    <v-app-bar
      app
      dense
      flat
      color="primary"
      dark
    >
      <v-btn text to="/">Evan Knapke</v-btn>

      <v-spacer></v-spacer>

      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/education">Education</v-btn>
      <v-btn text to="/experience">Experience</v-btn>
      <v-btn text to="/projects">Projects</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    // items: [
    //   {
    //     text: 'Home',
    //     link: '/'
    //   },
    //   {
    //     text: 'About',
    //     link: '/about'
    //   },
    //   {
    //     text: 'Education',
    //     link: '/education'
    //   },
    //   {
    //     text: 'Experience',
    //     link: '/experience'
    //   },
    //   {
    //     text: 'Projects',
    //     link: '/projects'
    //   },
    // ]
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
