<template>
  <v-container v-if="response_type === 'category'" class="min-h-100">
    <v-row>
      <v-col cols="3" v-for="(category, index) in categories" :key="index">
        <nuxt-link :to="'/category/'+category.slug">
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="4"
          >
            <v-img
              :src="category.image"
              height="200px"
            ></v-img>
            <v-card-title>
              {{ category.name }}
            </v-card-title>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else>
    <v-row>
      <v-col cols="3" v-for="(product, index) in products" :key="index">
        <nuxt-link :to="'/product/'+product.slug">
          <div class="image-box card">
            <div class="product-card-image">
              <img :src="imageUrl(product.image)" />
            </div>
            <div>
              <div class="product-card-details">
                <h5 class='product-name-on-card'>{{product.name}}</h5>
                <h5 class="product-price-on-card">Price: {{product.price}}Tk</h5>
              </div>
            </div>
          </div>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import AppURL from "@/api/AppURL";

export default {
  name: "Items",
  data() {
    return {
      products: [],
      categories: [],
      categoryPath: '',
      response_type: '',
    }
  },
  methods: {
    imageUrl(url) {
      return AppURL.ServerBaseURL+url;
    }
  },
  async asyncData({params}) {
    return await axios.get(AppURL.getCategoryAndProductByCategory(params.items))
      .then(response => {
        return {
          products: response.data.data,
          categories: response.data.data.single_children,
          response_type: response.data.response_type,
          categoryPath: response.data.data.category_path
        }
      })
  },
}
</script>

<style scoped>

</style>
