<template>
    <v-container>
      <v-row>
        <v-col cols="3">
          <div class="serviceItem d-flex">
            <v-icon>mdi-truck</v-icon>
            <div>
              <h4>Free Home Delivery</h4>
              <p>Free shipping</p>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="serviceItem d-flex">
            <v-icon>mdi-headset</v-icon>
            <div>
              <h4>Help Center</h4>
              <p>24/7 Support System</p>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="serviceItem d-flex">
            <v-icon>mdi-webhook</v-icon>
            <div>
              <h4>Money Back Guarantee</h4>
              <p>Money Back Within 7 Days</p>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="serviceItem d-flex">
            <v-icon>mdi-shield-half-full</v-icon>
            <div>
              <h4>Payment With Stripe</h4>
              <p>Secure Payment With stripe</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
name: "Service"
}
</script>

<style scoped>
  .serviceItem {
    padding: 20px 10px;
    background: #efefef;
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 10px;
  }

  .serviceItem i {
    font-size: 35px;
    color: #339966;
    margin-right: 10px;
  }

  .serviceItem p {
    margin: 0;
  }
</style>
