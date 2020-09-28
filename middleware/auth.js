export default function ({ store, route, redirect }) {
  store.dispatch('auth/checkLogin')
  // If the user is not authenticated
  if (route.name !== 'login' && !store.getters['auth/isAuth']) {
    return redirect('/login')
  }
}
