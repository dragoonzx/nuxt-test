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
              <NewsItem
                v-for="(article, i) in articles.slice(0, 10)"
                :key="i"
                :article="article"
              />
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsItem from '@/components/NewsItem'

export default {
  components: {
    NewsItem
  },
  async asyncData ({ $axios, store }) {
    const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=ba1c568fee4c44fc821c8d95b984c3ad'
    const { articles } = await $axios.$get(url)
    store.commit('news/setNews', articles)
  },
  computed: {
    articles () {
      return this.$store.getters['news/getNews']
    }
  }
}
</script>
