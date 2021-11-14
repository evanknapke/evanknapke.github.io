<template>
    <v-app-bar
      app
      dense
      flat
      color="primary"
      dark
    >
        <v-navigation-drawer
          id="navigation-drawer"
          v-if="isMobile"
          v-model="drawer"
          absolute
          temporary
          color="primary"
        >
          <v-list nav dense>
            <v-list-item-group v-model="group">
              <v-list-item v-for="(route, i) in mainPages" :key="i" text :to="route.link">
                <v-list-item-title>{{route.text}}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn v-if="!isMobile" text to="/">Evan Knapke</v-btn>

      <v-spacer></v-spacer>

      <div v-if="!isMobile">
        <v-btn v-for="(route, i) in mainPages" :key="i" text :to="route.link">
            {{route.text}}
        </v-btn>
      </div>
    
    </v-app-bar>
</template>

<script>

export default {
  name: 'TopNavigationBar',
  data: () => ({
    mainPages: [
      // { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Education', link: '/education' },
      { text: 'Experience', link: '/experience' },
      { text: 'Projects',link: '/projects' },
    ],
    drawer: false,
    group: null,
    isMobile: false
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
  // computed: {
  //   // height () {
  //   //   switch (this.$vuetify.breakpoint.name) {
  //   //     case 'xs': return 220
  //   //     case 'sm': return 400
  //   //     case 'md': return 500
  //   //     case 'lg': return 600
  //   //     case 'xl': return 800
  //   //   }
  //   // },
  // },
  beforeDestroy () {
    if (typeof window == 'undefined')
      return;
    
    window.removeEventListener('resize', this.onResize, { passive: true });
  },
  mounted () {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600;
    }
  }
};
</script>

<style scoped>
  #navigation-drawer {
    height: 100vh !important;
  }
</style>