<template>
  <v-container>
      <div class="fullscreen-div">
        <!-- <div>
          <img class="knapke-img" alt="Self Portrait" src="../assets/knapke.png">
        </div> -->
        <div class="name--container">
          <h1 class="name text--primary">
            <div>
              Evan<br>
              Knapke
            </div>
          </h1>
          <br>
          <span class="bio text--secondary">Full Stack Software Developer</span>
        </div>
          <!-- <router-link to="/about">Learn more about me</router-link> -->
      </div>
      
      <!-- maybe hide header ont he home page and add links on this page? -->
      <!-- <div class="fullscreen-div" style="background-color:grey;">
        <h1>this is example text</h1>
      </div> -->

  </v-container>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
  .name {
    text-align: right;
    font-size: max(min(15vw, 300px), 30px);
    line-height: 1em;
  }

  .name--container {
    margin-right: 10%;
    float: right;
    width: 100vw;
  }

  .bio {
    text-align: right;
    float: right;
    font-size: max(min(2vw, 100px), 15px);
  }

  .fullscreen-div {
    text-align: center;
    height: calc(100vh - 48px);
    width: 100vw;
    padding-top: 12px !important;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .container {
    padding: 0 !important;
    margin: 0 !important;
  }
</style>