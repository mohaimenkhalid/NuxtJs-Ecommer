<template>
  <v-card>
    <v-card-text>
      <h1>Order List</h1>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th>Order#</th>
            <th>Date</th>
            <th>Shipped To</th>
            <th>Order Total</th>
            <th>Order Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="isLoading">
            <td colSpan="6" class="text-center">
              Loading...
            </td>
          </tr>
          <tr v-if="myOrders && myOrders.data && myOrders.data.length === 0">
            <td colSpan="6" class="text-center">
              <img class="mb-5" src="" alt="No Order Found."/>
              <h5>You don't have any order.</h5>
              Continue Shopping
            </td>
          </tr>
          <tr v-for="order in myOrders.data">
            <td>{{ order.invoice_number }}</td>
            <td>
              {{ order.created_at }}
            </td>
            <td>{{ order.shipping_address ? order.shipping_address.full_name : '' }}</td>
            <td>{{ order.total_amount }}</td>
            <td>
                <span class="badge badge-secondary">
                {{ order.shipped === 1 ? "Shipped" : "Not Shipped" }}
                </span>
            </td>
            <td>
              <!-- <a to={'/my-account/orders/' + order.id}
                     class="btn btn-info btn-sm">
                 <i class="fa fa-eye"/>
                 <span class='ml-1'>View</span>
               </Link>-->
              <nuxt-link :to="'/user/orders/'+order.id">
                <v-btn
                  color="info"
                  x-small
                >
                  View
                </v-btn>
              </nuxt-link>

            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center">
        <div class="pagination">
          <v-btn
            v-for="link in myOrders.links"
            @click="getPaginationOrder(link.url)"
            :class="link.active ? 'active': ''"
            :disabled="link.url === null"
          >
            <span v-html="link.label"></span>
          </v-btn>
        </div>
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
  name: "Orders",
  data() {
    return {
      myOrders: [],
      isLoading: true,
    }
  },
  mounted() {
    console.log(this.page)
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`
    };
    axios.get(AppURL.getMyOrder, {headers: headers})
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.myOrders = res.data
          this.isLoading = false
        }
      })
      .catch(error => {
        console.log(error)
      })
  },

  methods: {
    getPaginationOrder(url) {
      this.isLoading = true
      const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      };
      axios.get(url, {headers: headers})
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            this.myOrders = res.data
            this.isLoading = false
          }
        })
        .catch(error => {
          console.log(error)
        })
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
.pagination {
  display: inline-block;
  margin-top: 3rem;
}

.pagination button {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
}

.pagination button.active {
  background-color: #4496f3 !important;
  color: white !important;
  border: 0;
}

.pagination button:hover:not(.active) {
  background-color: #ddd;
}

</style>
