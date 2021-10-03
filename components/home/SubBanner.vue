<template>
    <v-container>
      <v-row>
        <v-col cols="6">
          <div class="sub-banner-wrapper">
            <img src="../../assets/images/vegetable.jpg" width="100%" alt="" />
            <div class="content">
              <h3>Fresh vegetable</h3>
              <h5>15% discount</h5>
              <v-btn class="error mt-2">Shop Now</v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="sub-banner-wrapper">
            <img src="../../assets/images/orange.jpg" width="100%" alt="" />
            <div class="content">
              <h3>Oranges food</h3>
              <h5>25% discount</h5>
              <v-btn class="success mt-2">Shop Now</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: "SubBanner"
}
</script>

<style scoped>
.sub-banner-wrapper {
  position: relative;
}
.sub-banner-wrapper .content {
  position: absolute;
  top: 0;
  transform: translate(25%, 50%);
}

.sub-banner-wrapper .content h3 {
  font-size: 30px;
  font-weight: 600;
}
</style>
