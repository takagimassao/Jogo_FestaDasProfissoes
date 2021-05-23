<template lang="html">
  <div class="container">
    <inviteHeader/>
    <div class="row">
      <div class="col-3">
        <div class="session-card--right session-card--small">
          <div class="session-card__content--invited">
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
        <div class="session-card--left session-card--big">
          <div class="session-card__content">
            <h2>Profissões</h2>
            <professionList />
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import inviteHeader from '@/components/InviteHeader.vue'
import professionList from '@/components/ProfessionList.vue'
import professionCard from '@/components/professionCard.vue'

export default {
  name: 'rodasDeConversa',
  components: {
    inviteHeader,
    professionList,
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
  .session-card__content .profession-item__card {
    margin-bottom: 1.25rem;
  }

  .session-card__content--invited {
    display: flex;
    flex-direction: column;
  }
  .session-card__content--invited .session-content__profession-card {
    margin-bottom: 1.25rem;
  }
</style>