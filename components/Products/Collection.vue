<template>
  <v-container>
    <v-row class="mt-4">
      <v-col cols="12">
        <h1 class="text-center">Collection Products</h1>
        <p class="text-center">You can choose anything you want</p>
      </v-col>
      <v-col cols="3" v-for="(product, index) in collection_products" :key="index">
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
import axios from 'axios'
import AppURL from "@/api/AppURL";

export default {
  name: "CollectionProduct",
  data() {
    return {
      collection_products: []
    }
  },
  mounted() {
  },
  methods: {
    imageUrl(url) {
      return AppURL.ServerBaseURL+url;
    }
  },
  async fetch() {
    await axios.get(AppURL.getProductByRemark, { params: { remark: 2 } })
      .then(res => {
        this.collection_products = res.data
      })
  },
  fetchKey: 'new-arrival-products',
}
</script>

<style scoped>

</style>
