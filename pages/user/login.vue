<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card
        elevation="1"
        class="pa-6 mt-6"
      >
        <v-card-text class="text-center">
          <h1>Login</h1>
        </v-card-text>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              solo
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              solo
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>
            <v-btn
              block
              :disabled="!valid"
              color="error"
              class="mr-4"
              @click="setLogin"
            >
              {{ this.is_processing === true ? 'Processing...' : 'Login'}}
            </v-btn>
            <div class="text-center mt-2">
              Not registered user ? Register {{ this.isAuth }}
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: 'login',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],

  }),
  mounted() {

  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth,
      is_processing: state => state.auth.is_processing,
    }),
  },
  methods: {
    ...mapGetters("auth", ["getIsLoggedIn"]),
    ...mapActions("auth", ["login"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset()
    },
    setLogin() {
      this.validate();
      if(this.email !== '' && this.password !== '') {
        let loginFormData = new FormData();
        loginFormData.append('email', this.email)
        loginFormData.append('password', this.password)
        this.login(loginFormData).then(res => {
          if(res.data.access_token) {
            this.$router.replace('/')
          }
        })
      }
    }
  },
}
</script>

<style scoped>
.v-card {
  background: #f5f5dc !important;
}
</style>
