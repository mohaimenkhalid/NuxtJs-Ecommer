<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
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
