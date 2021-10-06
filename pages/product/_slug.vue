<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="4">
          <img :src="this.server_base_url+product.image" alt="">
        </v-col>
        <v-col cols="6">
          <h3 class="Product-Name">{{product.name}}</h3>
          <h5>Availability: <span class="text-success">In stock</span></h5>

          <div v-if="product && product.product_details">
            <h6 class="section-sub-title"> product description</h6>
            <p>
              {{product.product_details.short_description}}
            </p>
          </div>

          <div class="d-flex align-items-center" v-if="product.category">
            <h6 class="mt-2 mr-2">Category - </h6>
            <span class="badge badge-info"> {{product.category.name}}</span>
          </div>

          <div v-if="product.special_price">
            <h3><del>Tk. {{product.price}}</del></h3>
            <div class="d-flex align-items-center">
              <h2>Tk. {{product.special_price}}</h2>
              <small> You Save TK. {{product.price - product.special_price}}</small>
            </div>
          </div>
          <div v-else>
            <h2>Tk. {{product.price}}</h2>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import AppURL from "@/api/AppURL";

export default {
  name: "ProductDetails",
  data() {
    return {
      server_base_url: AppURL.ServerBaseURL
    }
  },
  mounted() {

  },
  async asyncData({params}) {
    return await axios.get(AppURL.getProductDetails(params.slug))
      .then(response => {
        console.log(response)
        return {
          product: response.data
        }
      })
  },
}
</script>

<style scoped>

</style>
