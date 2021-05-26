<template lang="html">
  <taskWording>
    <template v-slot:header>
      <h1>Lista de convidados</h1>
    </template>
    <template v-slot:wording>
      <p>Você irá dar uma festa e cada profissão representa um convidado. Decida quais profissões você convidaria para a festa e quais você não vai convidar.</p>
      <p>Quando estiver satisfeito, avance para a próxima etapa.</p>
    </template>
    <template v-slot:router-btn>
      <router-link 
          type="submit"
          to="/RodasDeConversa">
          Avançar
      </router-link>
    </template>
  </taskWording>
  <div class="row">
    <div class="col-9">
      <sectionLeft>
        <template v-slot:sectionBody>
          <professionDescriptionList />
        </template>
      </sectionLeft>
    </div> <!-- END: col-9 -->

    <div class="col-3">
      <sectionRight>
        <template v-slot:header>
          <h2>Convidados</h2>
        </template>
        <template v-slot:sectionBody>
          <div
            v-for="job in areInvited" :key="$store.state.jobs.id" >
            <professionCard>
              <template v-slot:title>
                {{job.jobTitle}}
              </template>
              <template v-slot:button>
                <button v-on:click="$store.commit('unselectJob', job.id)">X</button>
              </template>
            </professionCard>
          </div> <!-- END: v-for -->
        </template> <!-- END: v-slot sectionBody -->
      </sectionRight>
    </div> <!-- END: col-3 -->
    
  </div> <!-- END: row -->
</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import sectionLeft from '@/components/SectionLeft.vue'
import sectionRight from '@/components/SectionRight.vue'
import professionDescriptionList from '@/components/ProfessionDescriptionList.vue'
import professionCard from '@/components/ProfessionCard.vue'

export default {
  name: 'listaDeConvidados',
  components: {
    taskWording,
    sectionLeft,
    sectionRight,
    professionDescriptionList,
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
  .section__content {
    background-color: greenyellow;
  }
  .section__content .profession-item__card {
    margin-bottom: 1.25rem;
    
    background-color: white;
  }
  .section__content--invited {
    display: flex;
    flex-direction: column;
    background-color: hotpink;
  }
  .section__content--invited .section-content__profession-card {
    margin-bottom: 1.25rem;
  }

  .section-content__profession-card {
    display: flex;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0.5rem 0.5rem 1rem #9f9f9f;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
  }
  .section-content__profession-card span {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 auto 0 0;
  } 
  .section-content__profession-card button {
    margin: 0 0 0 auto;
  }
</style>