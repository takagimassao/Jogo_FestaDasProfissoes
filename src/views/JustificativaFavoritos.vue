<template lang="html">
  <div class="container">
    <taskWording>
      <template v-slot:header>
        <h1>Justificativa de Favoritos</h1>
      </template>
      <template v-slot:wording>
        <p>Você irá dar uma festa e cada profissão representa um convidado. Decida quais profissões você convidaria para a festa e quais você não vai convidar.</p>
        <p>Quando estiver satisfeito, avance para a próxima etapa.</p>
      </template>
      <template v-slot:router-btn>
        <router-link 
            type="submit"
            to="/rodasDeConversa">
            Avançar
        </router-link>
      </template>
    </taskWording>
    <div class="row">
      <div class="col-3">
        <div class="section--right section--small">
          <div class="section__content--invited">
            <h2>Convidados</h2>
            <div
              v-for="job in areInvited" :key="$store.state.jobs.id" >
              <professionCard 
                :profession-title="job.jobTitle"
                :professionID="job.id" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <sectionLeft>
          <template v-slot:header>
            <h2>Grupos</h2>
            <button @click="$store.commit('createGroup', {
              jobID: job,
              groupID: groupIndex})"
            >
            Criar novo grupo
          </button>
          </template>
          <template v-slot:sectionBody>
          <div class="section--left section--big"
            v-for="group, groupIndex in $store.state.groups" :key="$store.state.groups.id"
          >
            <div class="section__content">
              <h3>{{group.groupTitle}}</h3>
              <div
                v-for="job in group.selectedJobs"
              >
                <div class="section-content__profession-card">
                  <span>{{$store.state.jobs.[job].jobTitle}}</span>
                  <button @click="$store.commit('removeJobFromGroup', {
                    jobID: job,
                    groupID: groupIndex})"
                  >
                    X
                  </button>
                </div> <!-- END: .section-content__profession-card  -->
              </div> <!-- END: v-for job  -->
            </div> <!-- END: .section__content  -->
          </div> <!-- END: v-for group  -->
          </template>
        </sectionLeft>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import sectionLeft from '@/components/SectionLeft.vue'
import professionDescriptionList from '@/components/ProfessionDescriptionList.vue'
import professionCard from '@/components/ProfessionCard.vue'


export default {
  name: 'justificativaFavoritos',
  components: {
    taskWording,
    sectionLeft,
    professionDescriptionList,
    professionCard
  },
  data: function() {
    return {
      thisProfessionTitle: "Parent Title"
    }
  },
  computed: {
    areInvited: function() {
      var jobList = this.$store.state.jobs;
      var tempList = jobList.filter( j => j.jobState == 1);
      return tempList;
    }
  }
}
</script>

<style lang="css">
  .section__content .profession-item__card {
    margin-bottom: 1.25rem;
  }

  .section__content--invited {
    display: flex;
    flex-direction: column;
  }
  .section__content--invited .section-content__profession-card {
    margin-bottom: 1.25rem;
  }
</style>