<template lang="html">
  <div class="container-fluid">
    <taskWording>
      <template v-slot:header>
        <h1>Bora preparar a lista dos convidados?</h1>
      </template>
      <template v-slot:wording>
        <p>Você irá dar uma festa e cada profissão representa um convidado. Decida quais profissões você convidaria para a festa e quais você não vai convidar.</p>
        <p>Quando estiver satisfeito, avance para a próxima etapa.</p>
      </template>
      <template v-slot:router-btn>
        <router-link  class="btn--primary"
            type="submit"
            to="/RodasDeConversa">
            Avançar
        </router-link>
      </template>
    </taskWording>
    <div class="row">
      <div class="col-9">
        <sectionLeft class="bg-img">
          <template v-slot:header>
            <h2>Possíveis convidados</h2>
          </template>
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
              v-for="job, index in getInvitedList" :key="index" >
              <professionCard :jobTitle="job.jobTitle">
                <template v-slot:button>
                  <button v-on:click="uninviteJob(job.id)"><img src="../assets/img/awesome-times-circle.svg" alt="Ícone remover xis"></button>
                </template>
              </professionCard>
            </div> <!-- END: v-for -->
          </template> <!-- END: v-slot sectionBody -->
        </sectionRight>
      </div> <!-- END: col-3 -->
    
    </div> <!-- END: row -->
  </div>

</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import sectionLeft from '@/components/SectionLeft.vue'
import sectionRight from '@/components/SectionRight.vue'
import professionDescriptionList from '@/components/ProfessionDescriptionList.vue'
import professionCard from '@/components/ProfessionCard.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'listaDeConvidados',
  components: {
    taskWording,
    sectionLeft,
    sectionRight,
    professionDescriptionList,
    professionCard,
  },
  computed: {
    ...mapGetters([
      'getInvitedList',
      'getState'
    ]),
    
  },
  methods: {
    ...mapMutations([
      'uninviteJob'
    ]),
    validadeInvitedList() {
      if(this.getInvitedList.length < 2) {
        window.alert("Adicione ao menos 2 Profissões na lista de Convidados para avançar na ativade.");
        // fail validation
        return false;
      }
      else {
        // passed validation
        return true;
      }
    }
  },
  //VueRouter Navigation Guard
  beforeRouteLeave: function(to, from, next) {
    if(this.validadeInvitedList()) {
      next();
    }
  }
}
</script>

<style lang="css">
</style>