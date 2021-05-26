<template lang="html">
  <div class="container">
    <inviteHeader/>
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
        <div class="section--left section--big">
          <div class="section__content">
            <h2>Profissões</h2>
            <professionDescriptionList />
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import inviteHeader from '@/components/InviteHeader.vue'
import professionDescriptionList from '@/components/ProfessionDescriptionList.vue'
import professionCard from '@/components/professionCard.vue'

export default {
  name: 'rodasDeConversa',
  components: {
    inviteHeader,
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