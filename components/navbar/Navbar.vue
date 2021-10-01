<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
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
export default {
  name: "Navbar",
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
      ],
      miniVariant: false,
      clipped: false,
      title: 'Vegist'
    }
  }
}
</script>

<style>

</style>
