<template lang="html">
    <taskWording>
        <template v-slot:header>
        <h1>Festa do {{getParticipantName}}</h1>
        </template>
    </taskWording>
    <div class="group-list"
        v-for="group, groupIndex in getGroups" :key="groupIndex"
    >
        <div class="row">
            <div class="col-12">
                <sectionLeft>
                    <template v-slot:header>
                        <h3>{{group.groupTitle}}</h3>
                        <span v-if="group.preference === 1">FAVORITO</span>
                        <span v-if="group.preference === -1">MENOS GOSTA</span>
                    </template>
                    <template v-slot:sectionBody>
                        <div class="wrapper">
                            <div v-for="job in group.selectedJobs" :key="job">
                              <professionCard :jobTitle="job.jobTitle" />
                            </div>
                        </div>
                    </template>
                </sectionLeft>
            </div>
        </div>
    </div> <!-- END: .group-list v-for group  -->



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
  computed: {
    //VueX Storage getters
    ...mapGetters([
        'getParticipantName',
        'getGroups',
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
    .group-list {
        margin-bottom: 2.5rem;
    }
    .section--right,
    .section--left {
        height: 100%;
        margin-bottom: 2rem;
    }
</style>