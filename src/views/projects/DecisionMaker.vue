<template>
  <v-container>
    <h1 class="text--primary" id="decision-maker">Decision Maker</h1>
    <p><a href="https://github.com/evanknapke/Decision-Maker">Check out the source code</a></p>
    
    <v-divider/><br>

    <h3 class="text--primary" id="description">Description</h3>
    <p class="text--secondary">An iOS application that makes decisions for you.</p>

    <h3 class="text--primary" id="authors">Authors</h3>
    <p class="text--secondary">Evan Knapke</p>

    <h2 class="text--primary" id="technologies">Technologies</h2>
    <v-divider/><br>

    <ul class="text--secondary">
      <li>Swift</li>
    </ul>

    <h2 class="text--primary" id="screenshots">Screenshots</h2>
    <v-divider/><br>

    <div>
        <v-img v-for="(screenshot, i) in screenshots" :key="i"
          max-width="640px" 
          :src="screenshot.path" 
          :alt="screenshot.altText"
        />
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    screenshots: [
        { path: require("@/assets/decision_maker/decision_maker_clear.png"), altText: "Clear Options Screenshot" },
        { path: require("@/assets/decision_maker/decision_maker_options.png"), altText: "With Options Screenshot" }
    ],
  }),
};
</script>