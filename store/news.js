export const state = () => ({
  articles: []
})

export const mutations = {
  setNews (state, data) {
    state.articles = data
  }
}

export const actions = {
  async fetchNews ({ commit }) {
    const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=ba1c568fee4c44fc821c8d95b984c3ad'
    const { articles } = await this.$axios.$get(url)
    commit('setNews', articles)
  }
}

export const getters = {
  getNews (state) {
    return state.articles
  }
}
