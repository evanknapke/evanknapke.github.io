<template>
<v-container>
  <div class="home">
    <!-- <img class="knapke-img" alt="Self Portrait" src="../assets/knapke.png"> -->
    <h1>Evan Knapke</h1>
    <p>
      Software Developer
      <br>
      <router-link to="/about">Learn more about me</router-link>
    </p>
    </div>
  
  <div>
    <h1>this is example text</h1>
  </div>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
  .v-main {
    text-align: center;
    height: 100vh;
    width: 100vw;
    background-color: red !important;
    background-size: cover;
    background-attachment: fixed;
  }
</style>