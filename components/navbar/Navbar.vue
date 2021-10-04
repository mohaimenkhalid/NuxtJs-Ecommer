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
          <v-list-item-title v-on:click="gret">{{item.name}}</v-list-item-title>
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
              <v-list-item-content>
                <v-list-item-title>{{subItem.name}}</v-list-item-title>
              </v-list-item-content>
            </template>
                <!--subsubitem category list-->
                <v-list-item v-for="subSubItem in subItem.children" :key="subSubItem.id" :to="'/category/'+subSubItem.slug">
                  <v-list-item-icon>
                    <v-icon></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{subSubItem.name}}</v-list-item-title>
                </v-list-item>
            </v-list-group>

          <!--if not 2nd lvl child available-->
            <v-list-item :to="'/category/'+subItem.slug" :key="'2lv-'+subItem.id" v-for="subItem in item.children">
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{subItem.name}}</v-list-item-title>
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <div class="mr-8">
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-badge right>
          <template v-slot:badge>
            <span>6</span>
          </template>
          <v-icon>mdi-cart-outline</v-icon>
        </v-badge>
      </div>
      <n-link to="/user/login">
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

export default {
  name: "Navbar",
  data () {
    return {
      drawer: false,
      /*items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
      ],*/
      items: [],
      clipped: true,
      title: 'Vegist',
    }
  },

  mounted() {

  },

  methods: {
    gret() {
      console.log("asd");
    }
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
