<template>
    <div>
      <TopBanner />
      <Service />
      <FeaturedCategory />
      <NewArrival />
    </div>
</template>
<script>
import TopBanner from "@/components/home/TopBanner";
import Service from "@/components/home/Service";
import FeaturedCategory from "@/components/category/FeaturedCategory";
import NewArrival from "@/components/Products/NewArrival";
export default {
  components: {NewArrival, FeaturedCategory, Service, TopBanner}
}
</script>
