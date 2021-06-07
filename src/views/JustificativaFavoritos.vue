<template lang="html">
  <div class="container-fluid">
    <taskWording  class="favorite">
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
            to="/JustificativaExpulso">
            Avançar
        </router-link>
      </template>
    </taskWording>
      <div class="group-list"
          v-for="group, groupIndex in getFavoritedGroups" :key="groupIndex"
      >
          <div class="row">
              <div class="col-8 mb-5">
                  <sectionLeft class="bg-img">
                      <template v-slot:header>
                          <h2>{{group.groupTitle}}</h2>
                      </template>
                      <template v-slot:sectionBody>
                          <div class="wrapper row">
                              <div v-for="job in group.selectedJobs" :key="job" class="col-4">
                                  <professionCard :jobTitle="job.jobTitle" />
                              </div>
                          </div>
                      </template>
                  </sectionLeft>
              </div>
              <div class="col-4 mb-5">
                  <sectionRight class="bg-img">
                      <template v-slot:header>
                          <h2>Justificativa</h2>
                      </template>
                      <template v-slot:sectionBody>
                        <textarea
                            v-model="group.justification"
                            :placeholder="placeholder+group.groupTitle"
                        />
                      </template>
                  </sectionRight>
              </div>
          </div>
      </div> <!-- END: .group-list v-for group  -->
  </div>



</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import sectionLeft from '@/components/SectionLeft.vue'
import sectionRight from '@/components/SectionRight.vue'
import professionCard from '@/components/ProfessionCard.vue'
import {mapGetters} from "vuex"

export default {
  name: 'nomearGrupos',
  components: {
    taskWording,
    sectionLeft,
    sectionRight,
    professionCard,
  },
  data() {
    return {
      placeholder: "Digite aqui o motivo de ter favoritado o grupo "
    }
  },
  computed: {
    //VueX Storage getters
    ...mapGetters([
      'getFavoritedGroups',
      'getState'
    ])
    // there should be a computed object to bind the input value to vuex store. Next version should take care of this.
  },
  methods: {
    validateFavoritesJustification() {
      if(this.getFavoritedGroups.some(g => g.justification.length < 10)) {
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
    if (this.validateFavoritesJustification()) {
      next();
    }
  }
}  // END export
</script>

<style scoped lang="css">
</style>