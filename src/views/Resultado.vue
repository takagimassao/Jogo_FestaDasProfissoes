<template lang="html">
    <div class="container-fluid">
      <basicHeader>
          <template v-slot:header>
            <h1>Festa do {{getParticipantName}}</h1>
          </template>
          <template v-slot:subtitle>
            <span></span>
          </template>
      </basicHeader>
      <div class="group-list"
          v-for="group, groupIndex in getGroups" :key="groupIndex"
      >
          <div class="row">
              <div class="col-12 mb-5">
                  <sectionRight class="bg-img">
                      <template v-slot:header>
                          <h3>{{group.groupTitle}}</h3>
                          <span v-if="group.preference === 1">FAVORITO</span>
                          <span v-if="group.preference === -1">MENOS GOSTA</span>
                      </template>
                      <template v-slot:sectionBody>
                          <div class="wrapper row">
                              <div v-for="job in group.selectedJobs" :key="job" class="col-3">
                                <professionCard :jobTitle="job.jobTitle" />
                              </div>
                          </div>
                      </template>
                  </sectionRight>
              </div>
          </div>
      </div> <!-- END: .group-list v-for group  -->
    </div>



</template>

<script>
// @ is an alias to /src
import basicHeader from '@/components/BasicHeader.vue'
import sectionLeft from '@/components/SectionLeft.vue'
import sectionRight from '@/components/SectionRight.vue'
import professionCard from '@/components/ProfessionCard.vue'
import {mapGetters} from "vuex"

export default {
  name: 'nomearGrupos',
  components: {
    basicHeader,
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
</style>