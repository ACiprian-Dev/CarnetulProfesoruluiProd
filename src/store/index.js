import { createStore } from 'vuex'
import * as fb from "../firebase"
import router from "../router/index"

export default createStore({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    }
  },
  actions: {
    async login({ dispatch }, form) {
      const {user} = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({commit}, user) {
      const userProfile = await fb.eleviCollection.doc(user.uid).get()

      commit('setUserProfile', userProfile.data())
      
      router.push('/')

    },
    async logout({ commit }) {
      await fb.auth.signOut()
    
      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      router.push('/LogIn')
    }

  },
  modules: {
  }
})
