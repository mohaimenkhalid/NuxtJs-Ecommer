<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list nav dense>
        <v-list-item
          to="/"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <!--Main category list-->
        <v-list-group
          v-for="item in items"
          :value="true"
          :key="item.id"
          prepend-icon="mdi-food-apple"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content v-on:click="linkAction(item.slug)">
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <!--Sub category item-->
          <!--if 2nd lvl child available-->
          <v-list-group
            v-if="subItem.children.length > 0"
            v-for="subItem in item.children"
            :key="subItem.id"
            :value="true"
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content v-on:click="linkAction(subItem.slug)">
                <v-list-item-title>{{ subItem.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <!--subsubitem category list-->
            <v-list-item v-for="subSubItem in subItem.children" :key="subSubItem.id" :to="'/category/'+subSubItem.slug">
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ subSubItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!--if not 2nd lvl child available-->
          <v-list-item :to="'/category/'+subItem.slug" :key="'2lv-'+subItem.id" v-for="subItem in item.children">
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ subItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="amber accent-3"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <div class="mr-8">
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <n-link to="/cart">
          <v-btn icon>
            <v-badge right>
              <template v-slot:badge>
                <span>{{ getCart().length }}</span>
              </template>
              <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
          </v-btn>
        </n-link>
      </div>

      <v-menu offset-y open-on-hover v-if="isAuth">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            elevation="2"
            v-bind="attrs"
            v-on="on"
          > {{ user_info.first_name }}
          </v-btn>
        </template>
        <v-list>
          <nuxt-link to="/user/profile">
            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/user/orders">
            <v-list-item>
              <v-list-item-title>Orders</v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/">
            <v-list-item>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list>
      </v-menu>

      <n-link to="/user/login" v-else>
        <v-btn color="red" dark>
          Login
        </v-btn>
      </n-link>
    </v-app-bar>
  </div>
</template>

<script>
import axios from "axios";
import AppURL from "@/api/AppURL";
import {mapGetters, mapState} from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      items: [],
      clipped: true,
      title: 'Vegist Shop',
    }
  },

  mounted() {

  },

  methods: {
    ...mapGetters("cart", ["getCart"]),
    linkAction(slug) {
      this.$router.push('/category/' + slug)
    }
  },

  computed: {
    ...mapState({
      user_info: state => state.auth.user_info,
      isAuth: state => state.auth.isAuth
    }),
  },

  async fetch() {
    await axios.get(AppURL.getAllCategories)
      .then(res => {
        this.items = res.data
      })
  },
  fetchKey: 'category-list',
}

</script>

<style scoped>
.v-application--is-ltr .v-list--dense.v-list--nav .v-list-group--no-action > .v-list-group__items > .v-list-item {
  padding: 0 8px;
}
</style>
