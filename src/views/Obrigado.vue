<template lang="html">
  <taskWording>
    <template v-slot:header>
      <h1>Obrigado!</h1>
    </template>
    <template v-slot:wording>
        <p>Adorei saber que você gostaria de passar mais tempo com estes grupos. Todos parecem ser muito legais, mas eu fiquei curiosa... e gostaria de saber por que você escolheu estes grupo!</p>
        <p>Escreva no campo "Justificativa" (ao lado de cada grupo favorito), o motivo pelo qual você escolheu estes grupos para ficar mais tempo junto na festa. </p>
        <p>Após justificar, clique em "Avançar".</p>
    </template>
    <template v-slot:router-btn>
      <router-link 
          type="submit"
          to="/Resultado">
          Finalizar atividade e ver resultados
      </router-link>
    </template>
  </taskWording>



</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import {mapGetters, mapActions} from "vuex"

export default {
  name: 'obrigado',
  components: {
    taskWording,
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