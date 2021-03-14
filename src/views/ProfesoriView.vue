<template>
  <h1>Profesori</h1>
  <div>
    <div v-for="prof in profesori" :key="prof.id">
      <h3>{{prof.numePrenume}}</h3>
      <button class="button" @click="toggleModal(prof)">Review</button>
      <MyModal v-if="showModal" :prof="selectedProf" :elev="userProfile" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <!-- <template v-slot:header>
      <h3>custom header</h3>
    </template> -->
  </MyModal>
    </div>
    <div>
      <h2>Detalii</h2>
      <h3>{{userProfile.clasa}}</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MyModal from '../components/MyModal.vue';


export default {
    name: 'ProfesoriView',
    components: {
      MyModal
    },
    data() {
      return {
        prof: {
          
        },
        selectedProf: {},
        user: null,
        showModal: false
      }
    },
    computed: {
      ...mapState(['profesori','userProfile'])
    },
    methods: {
        toggleModal(prof) {
      this.showModal = !this.showModal;
      // if opening modal set selectedPost, else clear
      if (this.showModal) {
        this.selectedProf = prof
      } else {
        this.selectedProf = {}
      }
    }
    }
};



</script>

<style lang = "scss" scoped>
h1 {
  margin-left: 140px;
}

h3 {
  color:black;
}
</style>