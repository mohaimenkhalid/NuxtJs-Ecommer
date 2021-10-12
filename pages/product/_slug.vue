<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="4">
          <img :src="this.server_base_url+product.image" alt="">
        </v-col>
        <v-col cols="6">
          <h3 class="Product-Name">{{ product.name }}</h3>
          <h5>Availability: <span class="text-success">In stock</span></h5>

          <div v-if="product && product.product_details">
            <h6 class="section-sub-title"> product description</h6>
            <p>
              {{ product.product_details.short_description }}
            </p>
          </div>

          <div class="d-flex align-items-center" v-if="product.category">
            <h6 class="mt-2 mr-2">Category - </h6>
            <span class="badge badge-info"> {{ product.category.name }}</span>
          </div>

          <div v-if="product.special_price">
            <h3>
              <del>Tk. {{ product.price }}</del>
            </h3>
            <div class="d-flex align-items-center">
              <h2>Tk. {{ product.special_price }}</h2>
              <small> You Save TK. {{ product.price - product.special_price }}</small>
            </div>
          </div>
          <div v-else>
            <h2>Tk. {{ product.price }}</h2>
          </div>
          <v-row>
            <v-col cols="4">
              <h6 class="mt-2">Choose Quantity</h6>
              <v-text-field
                v-model="quantity"
                placeholder="quantity"
                solo
                dense
                :rules="quantityRules"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4" v-if="product.product_details">
              <h6 class="mt-2">Color</h6>
              <v-select
                v-model="product_color"
                :items="product.product_details.color !== null && product.product_details.color.split(',')"
                label="Select Color"
                dense
                solo
              ></v-select>
            </v-col>
            <v-col cols="4" v-if="product.product_details">
              <h6 class="mt-2">Size</h6>
              <v-select
                v-model="product_size"
                :items="product.product_details.size !== null && product.product_details.size.split(',')"
                label="Select Size"
                dense
                solo
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="mt-3">
                <v-btn class="mr-2"
                       @click="addToCart()"
                       :disabled="this.quantity < 1 || this.quantity=== '' "
                >
                  Add To Cart
                </v-btn>
                <v-btn>Add To favourite</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import AppURL from "@/api/AppURL";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "ProductDetails",
  data() {
    return {
      server_base_url: AppURL.ServerBaseURL,
      quantity: 1,
      product_color: '',
      product_size: '',
      valid: false,
      quantityRules: [
        v => !!v || 'Quantity is required',
        v => v > 0 || 'Quantity not less than 1',
      ],
    }
  },
  mounted() {

  },
  methods: {
    ...mapActions("cart", ["setCart"]),

    addToCart() {
      let product = {
        'product_id' : this.product.id,
        'name' : this.product.name,
        'image' : this.product.image,
        'price' : this.product.price,
        'subtotal' : this.product.price * this.quantity,
        'description' : this.product.product_details ? this.product.product_details.short_description : '',
        'quantity' : this.quantity,
        'product_color' : this.product_color,
        'product_size' : this.product_size,
      }
      this.setCart(product).then((res) => {
        this.$toast.success('Product added successfully your cart')
      })
      //console.log(product)
    }
  },
  async asyncData({params}) {
    return await axios.get(AppURL.getProductDetails(params.slug))
      .then(response => {
        return {
          product: response.data
        }
      })
  },
}
</script>

<style scoped>

</style>
