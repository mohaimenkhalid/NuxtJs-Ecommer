<template>
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-card elevation="3" class="mt-2">
            <v-card-text>
              <h2>Shipping Information</h2>
              <v-row>
                <v-col cols="12">
                  <h5 class="mt-2">Contact</h5>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    solo
                    v-model="full_name"
                    label="Name"
                    required
                    :rules="fullNameRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    solo
                    v-model="phone_no"
                    label="Phone No."
                    required
                    :rules="phoneNoRules"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <h5 class="mt-2">Address</h5>
                </v-col>
                <v-col cols="4">
                  <v-select
                    v-model="region"
                    :items="regionList"
                    item-text="name"
                    item-value="value"
                    label="Select Region"
                    solo
                    :rules="regionRules"
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    solo
                    v-model="city"
                    label="Enter your city"
                    required
                    :rules="cityRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    solo
                    v-model="area"
                    label="Enter your area"
                    required
                    :rules="areaRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    solo
                    v-model="address"
                    label="Enter Your Address"
                    required
                    :rules="addressRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <h5>Payment Type</h5>
                  <v-radio-group
                    v-model="payment_type"
                    mandatory
                    row
                  >
                    <v-radio
                      label="Cash on delivery"
                      value="cash_on_delivery"
                    ></v-radio>
                   <!-- <v-radio
                      label="Pay with Stripe"
                      value="pay_with_stripe"
                    ></v-radio>-->
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mt-4">
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left">product Name</th>
                    <th class="text-left">Price</th>
                    <th class="text-center">Quantity</th>
                    <th class="text-left">Subtotal</th>
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
                        <div class="mx-2 mt-1">{{ item.quantity }}</div>
                      </div>
                    </td>
                    <td>{{ item.subtotal }}</td>
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
                  <v-btn color="warning" >Continue Shopping</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-text>
              <h2>Order Summery</h2>
              <v-row class="mt-3">
                <v-col cols="auto" class="mr-auto">
                  <h4>Total</h4>
                </v-col>
                <v-col cols="auto">
                  <h4>
                    {{ getTotalPrice() }}
                  </h4>
                </v-col>
              </v-row>

              <div v-if="payment_type === 'pay_with_stripe'">
                card details
              </div>

              <v-btn color="error" block
                     class="mt-12"
                     @click="this.confirmOrder"
                     :disabled="this.validate() === false"
              >
                Confirm Order
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import {mapGetters, mapState, mapActions} from "vuex";
import AppURL from "@/api/AppURL";
import axios from "axios";

export default {
middleware: 'cart',
name: "checkout",
  data() {
    return {
      payment_type: '',
      regionList: [
        {
          name: 'Dhaka',
          value: 'dhaka',
        },
        {
          name: 'Mymensingh',
          value: 'mymensingh',
        }
      ],
      full_name: '',
      phone_no: '',
      region: '',
      city: '',
      area: '',
      address: '',
      fullNameRules: [ v => !!v || 'Name is required',],
      phoneNoRules: [ v => !!v || 'Phone No is required',],
      regionRules: [ v => !!v || 'Region is required',],
      cityRules: [ v => !!v || 'City is required',],
      areaRules: [ v => !!v || 'Area is required',],
      addressRules: [ v => !!v || 'Address is required',],
    }
  },
  computed: {
    c
  },
  methods: {
    ...mapGetters("cart", ["getCart", "getTotalPrice"]),
    ...mapActions("cart", ["removeCart"]),

    imageUrl(url) {
      return AppURL.ServerBaseURL + url;
    },

    validate() {
      if(this.full_name === ''
        || this.phone_no === ''
        || this.region === ''
        || this.city === ''
        || this.area === ''
        || this.address === ''
        || this.payment_type === ''
      ) {
        return false;
      }
    },

    confirmOrder() {
      console.log(this.token)
      let totalPrice = this.getTotalPrice();
      let full_name = this.full_name;
      let phone_no = this.phone_no;
      let region = this.region;
      let city = this.city;
      let area = this.area;
      let address = this.address;
      let payment_type = this.payment_type;

      let orderFormData = new FormData();
      orderFormData.append('total_amount', totalPrice);
      orderFormData.append('full_name', full_name);
      orderFormData.append('phone_no', phone_no);
      orderFormData.append('region', region);
      orderFormData.append('city', city);
      orderFormData.append('area', area);
      orderFormData.append('address', address);
      orderFormData.append('payment_type', payment_type);
      orderFormData.append('carts', JSON.stringify(this.getCart()));

      const headers = {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${this.token}`
      };

      axios.post(AppURL.placeOrder, orderFormData, {headers: headers})
        .then((res) => {
          console.log(res);
          if (res.status === 200 && res.data) {
            this.removeCart();
            this.$toast.error('Order placed successfully.')
            this.$router.replace('/')
          } else {
            this.$toast.error('Something went wrong!')
          }
        })
        .catch(function (error) {
          console.log(error)
        })

    }
  }
}
</script>

<style scoped>

</style>
