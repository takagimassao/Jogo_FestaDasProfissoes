<template lang="html">
  <taskWording>
    <template v-slot:header>
      <h1>Meus grupos favoritos</h1>
    </template>
    <template v-slot:wording>
        <p>Adorei saber que você gostaria de passar mais tempo com estes grupos. Todos parecem ser muito legais, mas eu fiquei curiosa... e gostaria de saber por que você escolheu estes grupo!</p>
        <p>Escreva no campo "Justificativa" (ao lado de cada grupo favorito), o motivo pelo qual você escolheu estes grupos para ficar mais tempo junto na festa. </p>
        <p>Após justificar, clique em "Avançar".</p>
    </template>
    <template v-slot:router-btn>
      <router-link  class="btn--primary"
          type="submit"
          to="/Obrigado">
          Avançar
      </router-link>
    </template>
  </taskWording>
    <div class="row">
        <div class="col-8">
            <sectionLeft>
                <template v-slot:header>
                    <h3>{{getDislikedGroup.groupTitle}}</h3>
                </template>
                <template v-slot:sectionBody>
                    <div class="wrapper">
                        <div v-for="job in getDislikedGroup.selectedJobs" :key="job">
                            <professionCard :jobTitle="job.jobTitle" />
                        </div>
                    </div>
                </template>
            </sectionLeft>
        </div>
        <div class="col-4">
            <sectionRight>
                <template v-slot:header>
                    <span> Justificativa </span>
                </template>
                <template v-slot:sectionBody>
                    <input
                        type="textarea"
                        v-model="getDislikedGroup.justification"
                        placeholder="Digite aqui o motivo de ter escolhido esse Grupinho como um favorito seu."
                    >
                </template>
            </sectionRight>
        </div>
    </div>



</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import sectionLeft from '@/components/SectionLeft.vue'
import sectionRight from '@/components/SectionRight.vue'
import professionCard from '@/components/ProfessionCard.vue'
import {mapGetters, mapMutations} from "vuex"

export default {
  name: 'nomearGrupos',
  components: {
    taskWording,
    sectionLeft,
    sectionRight,
    professionCard,
  },
  computed: {
    //VueX Storage getters
    ...mapGetters([
      'getDislikedGroup',
      'getState'
    ])
    // there should be a computed object to bind the input value to vuex store. Next version should take care of this.
  },
  methods: {
    validateDislikesJustification() {
      if(this.getDislikedGroup.justification.length < 10) {
        window.alert("Explique em maiores detalhes o motivo de escolher esse(s) Grupinho(s) como favorito(s)")
        return false
      }
      else {
        return true;
      }
    }
  }, // END methods
  //Vue Route
  beforeRouteLeave: function(to, from, next) {
    if (this.validateDislikesJustification()) {
      next();
    }
  }
}  // END export
</script>

<style scoped lang="css">
    .group-list {
        margin-bottom: 2.5rem;
    }
    .section--right,
    .section--left {
        height: 100%;
        margin-bottom: 2rem;
    }
</style>