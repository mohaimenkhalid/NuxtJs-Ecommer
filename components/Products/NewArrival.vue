<template>
  <v-container>
    <v-row class="mt-4">
      <v-col cols="12">
        <h1 class="text-center">New Arrival</h1>
        <p class="text-center">You can choose anything you want</p>
      </v-col>
      <v-col cols="3" v-for="(product, index) in newArrivalProducts" :key="index">
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
  name: "NewArrival",
  components: {ProductCard},
  data() {
    return {
      newArrivalProducts: []
    }
  },
  mounted() {
  },
  methods: {

  },
  async fetch() {
    await axios.get(AppURL.getProductByRemark, { params: { remark: 3 } })
      .then(res => {
        this.newArrivalProducts = res.data
      })
  },
  fetchKey: 'new-arrival-products',
}
</script>

<style scoped>
.card {
  width: 100% !important;
  text-decoration: none;
  border: none !important;
  border-radius: 0% !important;
  /* box-shadow: 0 0 4px 0 rgba(57, 78, 234, 0.1)*/
}
.card:hover {
  border-radius: 0 !important;
  text-decoration: none;
  /*box-shadow: 0 0 12px 0 rgba(57, 78, 234, 0.1)*/
}

.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100% !important;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 4px 0 rgba(57, 78, 234, 0.1)
}

.image-box img {
  width: 100% !important;
  transition: all 0.3s;
  height: auto;
  transform: scale(1);
}

.image-box:hover img {
  opacity: .8;
}

.product-card-image {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
}

.product-card-details {
  height: 80px;
  text-align: center;
  margin-top: 1rem;
  padding: 0 10px;
}

.product-price-on-card {
  color: #E43023;
  font-size: 16px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}

.product-name-on-card {
  color: #212121;
  font-size: 14px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
}
</style>
