export const state = () => ({
  userName: 'Admin',
  password: '12345',
  isAuth: false,
  isAuthError: false
})

export const mutations = {
  setAuth (state, data) {
    state.isAuth = data
  },
  setAuthError (state) {
    state.isAuthError = true
  }
}

export const actions = {
  login ({ commit, state }, payload) {
    if (payload.userName === state.userName && payload.password === state.password) {
      this.$cookies.set('auth', 'true', {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      this.$router.push('profile')
      commit('setAuth', true)
    } else {
      commit('setAuthError')
    }
  },
  logout ({ commit }) {
    this.$cookies.set('auth', '', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
    commit('setAuth', false)
  },
  checkLogin ({ commit }) {
    if (this.$cookies.get('auth')) {
      commit('setAuth', true)
    }
  }
}

export const getters = {
  isAuth (state) {
    return state.isAuth
  },
  isAuthError (state) {
    return state.isAuthError
  }
}
