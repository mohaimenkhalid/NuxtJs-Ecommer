<template>
  <v-card>
    <v-card-text>
      <h1>Profile</h1>
      <v-form
        class="mt-8"
      >
        <v-text-field
          v-model="first_name"
          label="First name"
          required
          solo
        ></v-text-field>

        <v-text-field
          v-model="last_name"
          label="last name"
          required
          solo
        ></v-text-field>

        <img :src="imageUrl(this.showImage)" width="80" alt="" class="mb-4">
        <v-file-input
          label="Profile image"
          placeholder="Profile image"
          dense
          accept="image/png, image/jpeg, image/bmp"
          v-model="image"
        ></v-file-input>

        <v-btn
          color="success"
          class="mr-4"
          @click="updateProfile"
        >
          <span v-if="loading">Processing...</span>
          <span v-else>Update</span>
        </v-btn>

      </v-form>

    </v-card-text>
  </v-card>
</template>

<script>
import {mapGetters, mapState, mapActions} from "vuex";
import AppURL from "@/api/AppURL";
import axios from "axios";

export default {
  layout: 'userLayout',
  name: "profile",
  data() {
    return {
      first_name: '',
      last_name: '',
      showImage: '',
      image: '',
      oldProfile: '',
      loading: false
    }
  },
  methods: {
    ...mapActions("auth", ["setUser"]),

    imageUrl(url) {
      return AppURL.ServerBaseURL+"/"+ url;
    },

    updateProfile() {
      this.loading = true;
      let fd = new FormData();
      fd.append('first_name', this.first_name)
      fd.append('last_name', this.last_name)
      fd.append('image', this.image)
      fd.append('old_image', this.oldProfile)

      this.setUser(fd).then((res) => {
        this.$toast.error("Profile updated successfully!")
        this.showImage = res.data.user.profile_url;
        this.oldProfile = res.data.user.image;
        this.loading = false;
      })
    },
  },
  mounted() {
    let user = this.getUser;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.showImage = user.profile_url;
    this.oldProfile = user.image;

    console.log(user.profile_url)
  },
  computed: {
    ...mapGetters("auth", ["getUser"]),
    ...mapState({
      token: state => state.auth.token,
    }),
  }
}
</script>

<style scoped>

</style>
