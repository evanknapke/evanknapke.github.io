<template>
  <v-container>
    <h1 class="text--primary" id="wavesfps">WavesFPS</h1>
    <p class="text--secondary"><a href="https://github.com/evanknapke/WavesFPS">Check out the source code</a></p>

    <v-divider/>

    <h3 class="text--primary" id="description">Description</h3>
    <p class="text--secondary">A 3D 3rd person shooting game that gets increasingly more difficult as the game goes on.</p>

    <h3 class="text--primary" id="gameplay">Gameplay</h3>
    <ul class="text--secondary">
      <li>Player is met by an increasing number of enemies.</li>
      <li>Enemies have guns and shoot at the player.</li>
      <li>Player must navigate the level and shoot the enemies in order to beat the round.</li>
      <li>When round is over the next wave will start with more enemies.</li>
      <li>The game lasts until the player dies.</li>
    </ul>

    <h3 class="text--primary" id="authors">Authors</h3>
    <ul class="text--secondary">
      <li>Evan Knapke</li>
    </ul>

    <h3 class="text--primary" id="music">Music</h3>
    <p class="text--secondary">Background music is from <a href="https://www.dl-sounds.com/royalty-free/power-bots-loop/">www.dl-sounds.com</a>, titled “Power Bots Loop”.
        Used under <a href="https://www.dl-sounds.com/license/">dl-sounds license</a> which states that their music does not require any acknowledgements.</p>

    <br>
    <h2 class="text--primary" id="acknowledgments">Acknowledgments</h2>
    <v-divider/><br>

    <ul class="text--secondary">
      <li>Dr. Paul Gestwicki for guidance and answering questions that I had</li>
      <li>Nick Hammerstrom for assisting with the world design</li>
    </ul>

    <br>
    <h2 class="text--primary" id="technologies">Technologies</h2>
    <v-divider/><br>

    <ul class="text--secondary">
      <li>Unreal Engine 4</li>
    </ul>

    <br>
    <h2 class="text--primary" id="grade-earned-and-grading-criteriarequirements">Grade Earned and Grading Criteria/Requirements</h2>
    <v-divider/><br>

    <ul class="task-list text--secondary">
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> D-1: Use standard mouse+keyboard or gamepad controls for your chosen view.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> D-2: Include terrain or obstacles that the player can climb up onto or jump over.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> D-3: Correctly configured on the depot so that a new client provides a runnable game.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-1: Include a trigger volume that creates a meaningful in-game effect.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-2: Include one or more additional characters with which the player can meaningfully interact.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-3: Include looping music and one or more sound effects.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-4: Start with a title screen that can transition into gameplay.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-5: Create a heads-up display (HUD) that tracks in-game statistics such as health, time, or score.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-6: Runs without errors</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-7: All raw referenced assets are in the <code>ToImport</code> folder.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-8: Demonstrated during the associated showcase day.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-9: Complies with an <a href="http://www.esrb.org/ratings/">ESRB rating</a> of “M” or lower.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-10: All assets are in a folder named after the project [GUSG&nbsp;<a href="https://github.com/Allar/ue4-style-guide#structure-top-level">2.2</a>].</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> C-11: Project report meets the requirements listed on <a href="https://www.cs.bsu.edu/~pvgestwicki/courses/cs315Fa19/project">the projects page</a>.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> B-1: Allow the player to start again after the game is over.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> B-2: Include an AI-controlled character that can detect the player and react to it (for example, by chasing it or firing at it).</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> B-3: Compiles without warnings.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> B-4: Assets and directories follow naming conventions [GUSG&nbsp;<a href="https://github.com/Allar/ue4-style-guide#anc">1</a>, <a href="https://github.com/Allar/ue4-style-guide#21-folder-names-">2.1</a>].</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> B-5: Variables and methods follow naming conventions [GUSG&nbsp;<a href="https://github.com/Allar/ue4-style-guide#321-naming-">3.2.1</a>, <a href="https://github.com/Allar/ue4-style-guide#321-naming-">3.3.1</a>].</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> B-6: Contains no assets not used in the build.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> B-7: Commit messages follow established standards.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> B-8: Uses timers and tasks appropriately rather than abusing the <code>Tick</code> event.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> A-1: Meaningfully incorporate one or more character animations beyond the default movement animations.</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked"> A-2: Complies with an <a href="http://www.esrb.org/ratings/">ESRB rating</a> of “T” or lower.</li>
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
        { path: require("@/assets/wavesfps/wavesfps_aerial.png"), altText: "Aerial View Image" },
        { path: require("@/assets/wavesfps/wavesfps_inside.png"), altText: "Inside Image" },
        { path: require("@/assets/wavesfps/wavesfps_barrels.png"), altText: "Barrels Image" },
        { path: require("@/assets/wavesfps/wavesfps_enemy.png"), altText: "Enemy Image" },
        { path: require("@/assets/wavesfps/wavesfps_death.png"), altText: "Death Screen Image" }
    ],
  }),
};
</script>