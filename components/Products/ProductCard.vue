<template>
  <nuxt-link :to="'/product/'+product.slug">
    <div class="image-box card">
      <div class="product-card-image">
        <img :src="imageUrl(product.image)" alt=""/>
      </div>
      <div>
        <div class="product-card-details">
          <h5 class='product-name-on-card'>{{ product.name }}</h5>
          <h5 class="product-price-on-card">Price: {{ product.price }}Tk</h5>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import AppURL from "@/api/AppURL";

export default {
  name: "ProductCard",
  props: ['product'],
  methods: {
    imageUrl(url) {
      return AppURL.ServerBaseURL+url;
    }
  },
}
</script>

<style scoped>

</style>
