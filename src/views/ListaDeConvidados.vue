<template lang="html">
  <div class="container">
    <inviteHeader/>
    <div class="row">
      <div class="col-9">
        <div class="session-card--left session-card--big">
          <div class="session-card__content">
            <h2>Profissões</h2>
            <professionList />
          </div>
        </div> 
      </div>
      <div class="col-3">
        <div class="session-card--right session-card--small">
          <div class="session-card__content session-card__content--invited">
            <h2>Convidados</h2>
            <div
              v-for="job in areInvited" :key="$store.state.jobs.id" >
              <!-- <professionCard 
                :profession-title="job.jobTitle"
                :professionID="job.id" /> -->
              <div class="session-content__profession-card">
                  <span>{{job.jobTitle}}</span>
                  <button v-on:click="$store.commit('unselectJob', job.id)">X</button>
              </div>
            </div>
            
        
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
  name: 'listaDeConvidados',
  components: {
    inviteHeader,
    professionList,
    professionCard
  },
  computed: {
    areInvited: function() {
      var jobList = this.$store.state.jobs;
      var tempList = jobList.filter( j => j.isSelected == true);
      return tempList;
    }
  },
  
  beforeRouteLeave: function(to, from, next) {
    this.$store.state.invitedJobs.push(this.areInvited);
    console.log(this.$store.state.invitedJobs)
    console.log("falei que ia vazer, djows")
    next();
  }
}
</script>

<style lang="css">
  .session-card__content {
    background-color: greenyellow;
  }
  .session-card__content .profession-item__card {
    margin-bottom: 1.25rem;
    
    background-color: white;
  }
  .session-card__content--invited {
    display: flex;
    flex-direction: column;
    background-color: hotpink;
  }
  .session-card__content--invited .session-content__profession-card {
    margin-bottom: 1.25rem;
  }

  .session-content__profession-card {
    display: flex;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0.5rem 0.5rem 1rem #9f9f9f;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
  }
  .session-content__profession-card span {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 auto 0 0;
  } 
  .session-content__profession-card button {
    margin: 0 0 0 auto;
  }
</style>