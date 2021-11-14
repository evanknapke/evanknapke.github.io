<template>
  <v-container>
    <img class="knapke-img" alt="Self Portrait" src="../assets/knapke.png">
    <br>

    <h1>About Me</h1>
    <p>
      I’m a professional Software Developer currently working in the fintech industry at 
      Moneytree Software, an Accutech Systems Corporation company. I graduated from 
      Ball State University in May 2021 with a Bachelor’s degree in Computer Science, and 
      a minor in Computer Information Systems.
    </p>

    <h2>Hobbies and Interests</h2>
    <ul>
      <li v-for="(interest, index) in interests" :key="index">
        {{ interest }}
      </li>
    </ul>
    <br>
    <h2>Technical Skills</h2>
    <h3>Languages Used</h3>
    <ul>
      <li v-for="(language, index) in languages" :key="index">
        {{ language }}
      </li>
    </ul>

    <h3>Some Frameworks Used</h3>
    <ul>
      <li v-for="(framework, index) in frameworks" :key="index">
        {{ framework }}
      </li>
    </ul>

    <h3>Database Technologies Used</h3>
    <ul>
      <li v-for="(database, index) in databases" :key="index">
        {{ database }}
      </li>
    </ul>

    <h3>Platforms Used</h3>
    <ul>
      <li v-for="(platform, index) in platforms" :key="index">
        {{ platform }}
      </li>
    </ul>

    <h3>Some Libraries Used</h3>
    <ul>
      <li v-for="(library, index) in libraries" :key="index">
        {{ library }}
      </li>
    </ul>
  </v-container>
</template>

<script>

export default {
  name: 'About',

  data: () => ({
    interests: ["Football, Basketball, Baseball, Golf, Bowling", "Stock Market and Investments", "Big Data and Data Science", "Predictive Algorithms", "iOS Jailbreaking and Bug Exploitation"],
    languages: ["C#", "Javascript", "Python", "Java", "Typescript", "HTML/CSS", "SQL", "Objective C"],
    frameworks: ["ASP.NET", "ADO.NET", "Vue.js", "Angular", "Telerik MVC", "Razor"],
    databases: ["Microsoft SQL Server", "ADO.NET Datasets", "MongoDB", "MySQL"],
    platforms: ["MacOS", "Windows", "Docker", "Auth0", "Unreal Engine 4", "iOS"],
    libraries: ["Vuetify.js", "Chart.js", "Pandas", "Numpy", "Matplotlib"]
  }),
};

</script>