<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
      >
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
          <v-form v-if="!isAuth">
            <v-container fluid>
              <v-row justify="center">
                <v-col
                  cols="8"
                  sm="8"
                >
                  <p>Login form:</p>
                  <v-text-field
                    v-model="userName"
                    type="text"
                    name="username"
                    label="Username"
                  />
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="show1 ? 'text' : 'password'"
                    name="pswrd"
                    label="Password"
                    hint="At least 4 characters"
                    :messages="isLoginError ? ['Имя пользователя или пароль введены не верно'] : undefined"
                    :error="isLoginError"
                    hide-details="auto"
                    @click:append="show1 = !show1"
                  />
                  <v-btn
                    class="login__btn"
                    elevation="2"
                    @click="login"
                  >
                    Login
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-container
            v-else
            fluid
          >
            <v-row justify="center">
              <v-btn
                class="login__btn"
                elevation="2"
                @click="logout"
              >
                Logout
              </v-btn>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row></v-sheet>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      show1: false,
      userName: '',
      password: '',
      isLoginError: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 4 || 'Min 4 characters'
      }
    }
  },
  computed: {
    isAuth () {
      return this.$store.getters['auth/isAuth']
    },
    isAuthError () {
      return this.$store.getters['auth/isAuthError']
    }
  },
  methods: {
    login () {
      this.$store.dispatch('auth/login', {
        userName: this.userName,
        password: this.password
      })

      if (!this.isAuthError) {
        this.isLoginError = true
      }
    },
    logout () {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
<style scoped>
.login__btn {
  margin-top: 1rem;
}
</style>
