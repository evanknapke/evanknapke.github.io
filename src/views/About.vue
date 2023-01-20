<template>
  <div class="about">
    <v-container>
      <img class="knapke-img" alt="Self Portrait" src="../assets/knapke.png">
      <br>

      <h1 class="text--primary">About Me</h1>
      <p class="text--primary">
        I'm a professional Full Stack Software Developer currently working at 
        Moneytree Software, an Accutech Systems Corporation company. I graduated from 
        Ball State University in May 2021 with a Bachelor's degree in Computer Science, and 
        a minor in Computer Information Systems.
      </p>

      <card-list 
        cardTitle="Hobbies and Interests"
        :data="interests"
      ></card-list>
      <br>
      <card-list 
        cardTitle="Languages"
        :data="languages"
      ></card-list>
      <br>
      <card-list 
        cardTitle="Frameworks"
        :data="frameworks"
      ></card-list>
      <br>
      <card-list 
        cardTitle="Database Technologies"
        :data="databases"
      ></card-list>
      <br>
      <card-list 
        cardTitle="Platforms"
        :data="platforms"
      ></card-list>
      <br>
      <card-list 
        cardTitle="Notable Libraries"
        :data="libraries"
      ></card-list>
    </v-container>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue';

export default {
  name: 'About',
  components: {
    CardList
  },
  data: () => ({
    interests: ["Football", "Basketball", "Golf", "Bowling", "Stock Market and Investments", "Big Data and Data Science", "Predictive Algorithms", "iOS Jailbreaking and Bug Exploitation"],
    languages: ["C#", "Javascript", "Python", "Java", "Typescript", "SQL", "Objective C"],
    frameworks: ["ASP.NET", "ADO.NET", "Vue.js", "AngularJS", "Telerik MVC", "Razor"],
    databases: ["Microsoft SQL Server", "PostgreSQL", "ADO.NET Datasets", "MongoDB", "MySQL"],
    platforms: ["MacOS", "Windows", "Docker", "Auth0", "Unreal Engine 4", "iOS"],
    libraries: ["Vuetify.js", "Chart.js", "Pandas", "Numpy", "Matplotlib"]
  }),
};
</script>

<style scoped>
.about {
  margin-left: 10%;
  margin-right: 10%;
}
</style>