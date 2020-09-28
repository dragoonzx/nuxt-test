export const state = () => ({
  articles: []
})

export const mutations = {
  setNews (state, data) {
    state.articles = data
  }
}

export const getters = {
  getNews (state) {
    return state.articles
  }
}
