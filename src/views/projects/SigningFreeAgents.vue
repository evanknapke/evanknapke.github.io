<template>
  <v-container>
    <h1 class="text--primary" id="signing-free-agents">Signing Free Agents</h1>
    <hr>

    <p class="text--secondary"><a href="https://github.com/evanknapke/Signing-Free-Agents">Check out the source code</a></p>

    <h2 class="text--primary" id="description">Description</h2>

    <p class="text--secondary">Takes in a list of free agent baseball players and returns the best possible players to sign to the team in order to maximize the VORP (value over replacement player) for that team. The problem is a variation of the classic Knapsack problem.</p>

    <h2 class="text--primary" id="authors">Authors</h2>

    <p class="text--secondary">Evan Knapke</p>

    <h2 class="text--primary" id="prompt">Prompt</h2>

    <p class="text--secondary">Sign some free-agent players for a baseball team: you have to stay within a budget of $X, while maximizing the total VORP of the players you signed. This problem is more complex than the rod-cutting problem: you are consuming not one, but 3 limited resources (open positions, players and money), in order to maximize the value for the team. Even if the coded solution is quite short, coming up with the right recurrence is not as easy as it sounds. Some work is involved in designing meaningful test cases: coding the brute-force solution should be part of this prepatory step.</p>

    <p class="text--secondary">This problem is an instance of a larger, and well-studied class of optimization problems called Knapsack-problems: it might be helpful to read a bit about those before you tackle this project. There are many variants: try to identify the type of Knapsack-problem that is closest to yours, and adapt the solution.</p>

    <h2 class="text--primary" id="acknowledgments">Acknowledgments</h2>

    <p class="text--secondary">Prof. Nicolas Renet for putting the requirements together</p>

    <h2 class="text--primary" id="technologies">Technologies</h2>

    <ul class="text--secondary">
      <li>Python</li>
      <li>Test Driven Development</li>
    </ul>

  </v-container>
</template>