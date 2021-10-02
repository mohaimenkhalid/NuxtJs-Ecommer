<template>
  <v-app>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "~/components/navbar/Navbar";
import Footer from "~/components/footer/Footer";
export default {
  components: {Footer, Navbar},
  data () {
    return {

    }
  }
}
</script>
