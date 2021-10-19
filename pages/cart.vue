<template>
  <v-container class="min-h-100">
    <h2 class="text-center my-5">Your Shopping Cart </h2>
    <v-row>
      <v-col cols="12">
        <div class="text-center mt-5" v-if="getCart().length < 1">
          <img src="../assets/images/cart-empty.png" width="400" alt=""> <br />
          <nuxt-link to="/">
            <v-btn color="warning">Continue Shopping</v-btn>
          </nuxt-link>
        </div>
        <div v-else>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left"></th>
                <th class="text-left">product Name</th>
                <th class="text-left">Price</th>
                <th class="text-center">Quantity</th>
                <th class="text-left">Subtotal</th>
                <th class="text-left">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="item in getCart()"
                :key="item.name"
              >
                <td>
                  <img :src="imageUrl(item.image)" width="80" alt="">
                </td>
                <td>
                  <strong>{{ item.name }}</strong> <br/>
                  {{ item.description }}
                </td>
                <td>{{ item.price }}</td>
                <td>
                  <div class="d-flex">
                    <v-btn x-small color="" fab @click="updateCartProduct(item.product_id, 'decrement')">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <div class="mx-2 mt-1">{{ item.quantity }}</div>
                    <v-btn x-small color="" fab @click="updateCartProduct(item.product_id, 'increment')">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </td>
                <td>{{ item.subtotal }}</td>
                <td>
                  <v-btn
                    color="error"
                    fab
                    x-small
                    dark
                    @click="deleteCartProduct(item.product_id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td colspan="3"></td>
                <td><h3>Total</h3></td>
                <td><h3>{{ getTotalPrice() }}</h3></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-row class="mt-5">
            <v-col cols="auto" class="mr-auto">
              <nuxt-link to="/">
                <v-btn color="warning">Continue Shopping</v-btn>
              </nuxt-link>
            </v-col>
            <v-col cols="auto">
              <nuxt-link to="/checkout">
                <v-btn color="success">Checkout</v-btn>
              </nuxt-link>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import AppURL from "@/api/AppURL";

export default {
  name: "cart",
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapGetters("cart", ["getCart", "getTotalPrice"]),
    ...mapActions("cart", ["updateCart", "deleteCart"]),

    imageUrl(url) {
      return AppURL.ServerBaseURL + url;
    },
    updateCartProduct(productId, type) {
      this.updateCart({productId, type})
    },

    deleteCartProduct(productId) {
      this.deleteCart(productId).then((res) => {
        this.$toast.error('Product removed from cart.')
      })
    }
  }
}
</script>

<style scoped>

</style>
