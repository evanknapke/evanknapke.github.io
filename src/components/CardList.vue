<template>
  <v-card>
    <v-card-title>{{ cardTitle }}</v-card-title>
    <v-card-text>
      <v-chip class="chip" v-for="(item, index) in data" :key="index" label>
        {{ item }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardList",
  props: {
    cardTitle: String,
    data: Array,
  }
}
</script>

<style scoped>
.chip {
  margin: 2px;
}
</style>