<template>
  <v-card
    class="mx-auto"
    outlined
  >
    <v-list-item
      :href="article.url"
      target="_blank"
      three-line
    >
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{ article.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ article.content }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar />
      <img
        v-if="article.urlToImage"
        :src="article.urlToImage"
        alt="news-img"
        class="news-item__img"
      >
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
.news-item__img {
  width: 128px;
}
</style>
