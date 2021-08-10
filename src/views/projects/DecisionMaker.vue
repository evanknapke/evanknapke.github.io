<template>
  <v-container>
    <h1 id="decision-maker">Decision Maker</h1>
    <p><a href="https://github.com/evanknapke/Decision-Maker">Check out the source code</a></p>
    
    <v-divider/><br>

    <h3 id="description">Description</h3>
    <p>An iOS application that makes decisions for you.</p>

    <h3 id="authors">Authors</h3>
    <p>Evan Knapke</p>

    <h2 id="technologies">Technologies</h2>
    <v-divider/><br>

    <ul>
      <li>Swift</li>
    </ul>

    <h2 id="screenshots">Screenshots</h2>
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