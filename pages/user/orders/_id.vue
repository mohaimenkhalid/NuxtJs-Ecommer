<template>
  <v-card>
    <v-card-text class="min-h-100">
      <h3 v-if="isLoading">Loading...</h3>

      <div v-else>
        <v-card-text>
          <div class="card-body">
            <nuxt-link to="/user/orders" class="btn">
              <i class="fa fa-arrow-left"></i>
              Back To Order List
            </nuxt-link>
          </div>
        </v-card-text>

        <h3>Order #{{ order.invoice_number }}</h3>
        <h4>Order Date: {{ order.created_at }}</h4>
        <h4>Order Status: <span>{{ order.shipping_status }}</span></h4>

        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="orderDetails in order.order_details">
              <td>
                <img :src="imageUrl(orderDetails.product.image)" width="80" alt="image"/>
              </td>
              <td>
                {{ orderDetails.product.name }}
              </td>
              <td>
                {{ orderDetails.unit_price }}
              </td>
              <td>
                {{ orderDetails.quantity }}
              </td>
              <td>
                {{ orderDetails.total_price }}
              </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colSpan="3"></td>
              <td>Subtotal</td>
              <td>
                {{ order.total_amount }}
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
              <td>Shipping</td>
              <td>
                {{ order.shipping_price }}
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
              <td>Grand total</td>
              <td>
                {{ parseInt(order.total_amount) + parseInt(order.shipping_price) }}
              </td>
            </tr>
            </tfoot>
          </template>
        </v-simple-table>
      </div>

    </v-card-text>
  </v-card>
</template>

<script>
import {mapState} from "vuex";
import AppURL from "@/api/AppURL";
import axios from "axios";

export default {
  layout: 'userLayout',
  name: "OrderDetails",
  data() {
    return {
      order: '',
      isLoading: true
    }
  },
  mounted() {
    if (this.$route.params.id) {
      const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      };
      axios.get(AppURL.getOrderById(this.$route.params.id), {headers: headers})
        .then((res) => {
          this.order = res.data
          this.isLoading = false
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      this.$toast.error('Something went wrong!')
    }
  },
  methods: {
    imageUrl(url) {
      return AppURL.ServerBaseURL + url;
    }
  },
  computed: {
    ...mapState({
      token: state => state.auth.token,
    }),
  },
}
</script>

<style scoped>

</style>
