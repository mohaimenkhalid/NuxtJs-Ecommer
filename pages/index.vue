<template>
    <div>
      <TopBanner />
      <Service />
      <FeaturedCategory />
      <NewArrival />
      <FeaturedProduct />
      <CollectionProduct />
    </div>
</template>
<script>
import TopBanner from "@/components/home/TopBanner";
import Service from "@/components/home/Service";
import FeaturedCategory from "@/components/category/FeaturedCategory";
import NewArrival from "@/components/Products/NewArrival";
import FeaturedProduct from "@/components/Products/FeaturedProduct";
import CollectionProduct from "@/components/Products/Collection";
export default {
  components: {
    CollectionProduct,
    FeaturedProduct,
    NewArrival,
    FeaturedCategory,
    Service,
    TopBanner
  }
}
</script>
