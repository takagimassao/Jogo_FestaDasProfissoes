<template lang="html">
  <div class="container-fluid">
    <basicHeader>
      <template v-slot:header>
        <h1>Obrigado por participar dessa festa!</h1>
      </template>
      <template v-slot:subtitle>
        <h3>Festa das profissões - por Rafaela Brissac</h3>
      </template>
    </basicHeader>
    
    <div class="row">
      <div class="col-4 centered">
        <router-link  class="btn--primary"
            type="submit"
            to="/Resultado">
            Ver minha festa
        </router-link>
      </div>
    </div>
  </div>



</template>

<script>
// @ is an alias to /src
import basicHeader from '@/components/BasicHeader.vue'
import {mapGetters, mapActions} from "vuex"

export default {
  name: 'obrigado',
  components: {
    basicHeader
  },
  computed: {
    //VueX Storage getters
    ...mapGetters([
      'getState'
    ])
    // there should be a computed object to bind the input value to vuex store. Next version should take care of this.
  },
  methods: {
    ...mapActions([
        'buildReport'
    ])
  },
  //Vue Route
  beforeRouteLeave: function(to, from, next) {
    this.buildReport();
    next();
  }
}
</script>