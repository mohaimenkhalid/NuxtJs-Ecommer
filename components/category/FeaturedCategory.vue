<template>
  <v-container>
    <v-row>
      <v-col cols="12"><h1 class="text-center">Featured Category List</h1></v-col>
      <v-col cols="4" v-for="(category, index) in featured_categories" :key="index">
        <nuxt-link :to="'/category/'+category.slug">
          <v-card class="pa-md-6" elevation="2" color="blue-grey lighten-5">
            <v-list-item-title class="text-h5 mb-1">
              {{ category.name }}
            </v-list-item-title>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import axios from 'axios'
import AppURL from "@/api/AppURL";

export default {
  name: "FeaturedCategory",
  data() {
    return {
      featured_categories: []
    }
  },
  mounted() {
  },
  async fetch() {
     await axios.get(AppURL.getFeaturedCategory)
    .then(res => {
      this.featured_categories = res.data
    })
  },
  fetchKey: 'featured-categories',
}
</script>

<style scoped>

</style>
