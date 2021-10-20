<template>
  <defaultLayout>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card
            height="400"
            width="256"
            class="mx-auto"
          >
            <v-navigation-drawer permanent>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    User Menu
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list
                dense
                nav
              >
                <nuxt-link
                  v-for="item in items"
                  :key="item.title"
                  :to="'/user/'+item.link">
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </nuxt-link>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-col>
        <v-col cols="8">
          <nuxt />
        </v-col>
      </v-row>
    </v-container>
  </defaultLayout>
</template>

<script>
import defaultLayout from '~/layouts/default.vue';

export default {
  components: {
    defaultLayout,
  },
  data () {
    return {
      items: [
        { title: 'Dashboard', link: 'dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Profile', link: 'profile', icon: 'mdi-image' },
        { title: 'Orders', link: 'orders', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  },
};
</script>
