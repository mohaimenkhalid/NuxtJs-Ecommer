<template>
  <v-row class="pa-0">
    <v-col cols="12">
      <div class="BannerTop">
        <img src="../../assets/images/landingBannerTop.jpg" alt="" />
        <div class="search-section">
          <div class="col-md-12">
            <h1>Groceries delivered in 1 hour</h1>
            <v-text-field
              solo
              label="Search for product.."
              required
            ></v-text-field>
            <v-btn large color="red" dark>
              Find Product
            </v-btn>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TopBanner"
}
</script>

<style scoped>
  .BannerTop {
    position: relative;
    height: auto;
    width: 100%;
  }

  .BannerTop img {
    width: 100%;
    height: 100%;
  }

  .BannerTop .search-section {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0%, -50%);
    width: 100%;
    text-align: center;
    padding: 0 12rem;
  }

  .search-section input {
    padding: .5rem 0 .5rem 2.9rem;
    vertical-align: top;
    background-size: 1.4rem;
    background-repeat: no-repeat;
    background-position: 1rem .7rem;
    height: 3rem;
    border: 2px solid darkred;
    border-radius: .5rem !important;
  }

  .search-section h1 {
    font-weight: 600;
    font-size: 50px;
    color: brown;
  }
</style>
