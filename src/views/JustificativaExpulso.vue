<template lang="html">
  <div class="container-fluid">
    <taskWording class="disliked">
      <template v-slot:header>
        <h1>Meus grupos favoritos</h1>
      </template>
      <template v-slot:wording>
          <p>Coitado deste grupo. Não pôde ficar até o final da festa :( </p>
          <p>Me conte na Justificativa porque você escolheu esse grupo para expulsar da festa. </p>
          <p>Depois é só clicar em "Avançar"</p>
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
        <div class="col-8 mb-5">
            <sectionLeft class="bg-img">
                <template v-slot:header>
                    <h3>{{group.groupTitle}}</h3>
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
                    <span> Justificativa </span>
                </template>
                <template v-slot:sectionBody>
                  <textarea
                      v-model="group.justification"
                      :placeholder="placeholder+group.groupTitle+'...'"
                  />
                </template>
            </sectionRight>
        </div>
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
  data() {
    return {
      placeholder: "Digite aqui o motivo de você não gostar do grupo "
    }
  },
  computed: {
    //VueX Storage getters
    ...mapGetters([
      'getDislikedGroup',
      'getState'
    ]),
    group() {
      return this.getDislikedGroup;
    }
    // there should be a computed object to bind the input value to vuex store. Next version should take care of this.
  },
  methods: {
    validateDislikesJustification() {
      if(this.getDislikedGroup.justification.length < 10) {
        window.alert("Explique em maiores detalhes o motivo de escolher esse(s) Grupo(s) como favorito(s)")
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
</style>