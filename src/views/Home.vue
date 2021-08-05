<template>
  <div class="home">
    <!-- <img class="knapke-img" alt="Self Portrait" src="../assets/knapke.png"> -->
    <h1>Evan Knapke</h1>
    <p>
      Software Developer at Moneytree Software, an Accutech Systems Corporation company.
      <br>
      <router-link to="/about">Learn more about me</router-link>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
  .home {
    text-align: center;
  }
</style>