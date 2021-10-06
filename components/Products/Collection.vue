<template>
  <v-container>
    <v-row class="mt-4">
      <v-col cols="12">
        <h1 class="text-center">Collection Products</h1>
        <p class="text-center">You can choose anything you want</p>
      </v-col>
      <v-col cols="3" v-for="(product, index) in collection_products" :key="index">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import axios from 'axios'
import AppURL from "@/api/AppURL";
import ProductCard from "@/components/Products/ProductCard";

export default {
  name: "CollectionProduct",
  components: {ProductCard},
  data() {
    return {
      collection_products: []
    }
  },
  mounted() {
  },
  methods: {

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
