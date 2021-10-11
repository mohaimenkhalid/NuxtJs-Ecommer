<template>
  <v-container>
    <h2 class="text-center">Your Shopping Cart </h2>
    <v-row>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left">product Name</th>
              <th class="text-left">Price</th>
              <th class="text-left">Quantity</th>
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
                  <img :src="imageUrl(item.image)" width="80">
                </td>
                <td>
                  <strong>{{ item.name }}</strong> <br/>
                  {{ item.description }}
                </td>
                <td>{{ item.price }}</td>
                <td>
                  <div class="d-flex">
                    <v-btn x-small color="primary" fab>
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    {{ item.quantity }}
                    <v-btn x-small color="primary" fab >
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
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
    ...mapGetters("cart", ["getCart"]),

    imageUrl(url) {
      return AppURL.ServerBaseURL + url;
    }
  }
}
</script>

<style scoped>

</style>
