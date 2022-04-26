<template>
  <v-container>
      <div class="fullscreen-div">
        <!-- <img class="knapke-img" alt="Self Portrait" src="../assets/knapke.png"> -->
        <h1>Evan Knapke</h1>
        <p>
          Full Stack Software Developer
          <br>
          <!-- <router-link to="/about">Learn more about me</router-link> -->
        </p>
      </div>
      
      <div class="fullscreen-div" style="background-color:grey;">
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
  .fullscreen-div {
    text-align: center;
    height: calc(100vh - 48px);
    width: 100vw;
    padding-top: 12px !important;
  }

  .container {
    padding: 0 !important;
    margin: 0 !important;
  }
</style>