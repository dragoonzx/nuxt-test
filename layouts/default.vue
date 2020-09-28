<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      />

      <!-- <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          router
          :to="link.to"
          exact
        >
          {{ link.title }}
        </v-list-item>
      </v-list> -->

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link.title"
          router
          :to="link.to"
          exact
        >
          {{ link.title }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      />
    </v-app-bar>

    <v-main class="grey lighten-3">
      <nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      links: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Login',
          to: '/login'
        },
        {
          title: 'Profile',
          to: '/profile'
        },
        {
          title: 'News',
          to: '/news'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
