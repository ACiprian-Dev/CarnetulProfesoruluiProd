import Vuex from 'vuex'
import * as fb from "../firebase"
import router from "../router/index"

fb.profesoriCollection.where("clase", "array-contains", "11A").onSnapshot((querySnapshot) => {
          let profi = []
          querySnapshot.forEach((doc) => {
            let prof = doc.data()
            prof.id = doc.id

            profi.push(prof)
          })
          store.commit('setProfesori', profi)
      })

const store = new Vuex.Store({
  state: {
    userProfile: {},
    profesori: []
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setProfesori(state,val) {
      state.profesori = val;
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
    },
    // async fetchProfesori({commit}) {
    //   //const profi = await fb.profesoriCollection.where("clase", "array-contains", "11A").get();
      
    // }

  },
  modules: {
  }
})

export default store;