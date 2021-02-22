<template>
  <h1>Profesori</h1>
  <div>
    <div v-for="prof in profesori" :key="prof.id">
      <h3>{{prof.numePrenume}}</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';



export default {
    name: 'ProfesoriView',
    data() {
      return {
        prof: {
          
        }
      }
    },
    computed: {
      ...mapState(['profesori'])
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