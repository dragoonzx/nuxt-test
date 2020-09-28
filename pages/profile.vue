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
          <v-row justify="center">
            <v-col cols="10" sm="10" md="10">
              <p v-for="(key) in 2" :key="key">
                Lorem ipsum dolor sit amet only for authorized users
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
