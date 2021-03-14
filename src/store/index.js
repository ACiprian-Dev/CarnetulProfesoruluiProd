import Vuex from 'vuex'
import * as fb from "../firebase"
import router from "../router/index"

// let clasa = fb.eleviCollection.doc(fb.auth.currentUser.uid)

// console.log(clasa);



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
      this.dispatch('fetchProfesori', userProfile.data())

      router.push('/')

    },
    async logout({ commit }) {
      await fb.auth.signOut()
    
      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      router.push('/LogIn')
    },
    async fetchProfesori({commit}, uProfile) {
      await fb.profesoriCollection.where("clase", "array-contains", uProfile.clasa)
      .get()
      .then((querySnapshot) => {
                  let profi = []
                  querySnapshot.forEach((doc) => {
                    let prof = doc.data()
                    prof.id = doc.id
        
                    profi.push(prof)
                  })
                  commit('setProfesori', profi)
              })
    }
    // async fetchProfesori({commit}) {
    //   //const profi = await fb.profesoriCollection.where("clase", "array-contains", "11A").get();
      
    // }

  },
  modules: {
  }
})

// fb.profesoriCollection.where("clase", "array-contains", $store.state.userProfile.clasa).onSnapshot((querySnapshot) => {
//           let profi = []
//           querySnapshot.forEach((doc) => {
//             let prof = doc.data()
//             prof.id = doc.id

//             profi.push(prof)
//           })
//           store.commit('setProfesori', profi)
//       })

export default store;