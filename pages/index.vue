<template>
    <div>
      <TopBanner />
      <Service />
      <FeaturedCategory />
      <SubBanner />
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
import SubBanner from "@/components/home/SubBanner";
export default {
  components: {
    SubBanner,
    CollectionProduct,
    FeaturedProduct,
    NewArrival,
    FeaturedCategory,
    Service,
    TopBanner
  }
}
</script>
