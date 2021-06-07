<template lang="html">
  <div class="container-fluid">
    <taskWording>
      <template v-slot:header>
        <h1>Grupinhos</h1>
      </template>
      <template v-slot:wording>
        <p>A festa começou e as profissões começaram a curtir. Você nota que as profissões que possuem algo em comum começaram a se agrupar em rodas de conversa. Como são esses grupos?</p>
        <p>Crie grupos e arraste as profissões para cada grupo. Quando estiver satisfeito, avance para a próxima etapa.</p>
      </template>
      <template v-slot:router-btn>
        <router-link  class="btn--primary"
            type="submit"
            to="/NomearGrupos">
            Avançar
        </router-link>
      </template>
    </taskWording>
    <div class="row">
      <div class="col-3">
        <sectionLeft>
          <template v-slot:header>
            <h2>Convidados</h2>
          </template>
          <template v-slot:sectionBody>
            <div class="wrapper row">
              <draggable
                :list="invitedList"
                group="jobs"
                itemKey="jobTitle"
              >
                <template #item="{ element, index }">
                  <professionCard :jobTitle="element.jobTitle" class="col" />
                </template>
              </draggable>
            </div>
          </template> <!-- END: v-slot sectionBody -->
        </sectionLeft>
      </div> <!-- END: col-3 -->
      <div class="col-9">
        <button @click="addGroup()" class="btn--secondary">Criar novo grupo</button>
        <div class="group-list"
          v-for="group, groupIndex in getGroups" :key="groupIndex"
        >
          <sectionRight>
            <template v-slot:header>
                <div class="wrapper row">
                  <h3 class="col-11">{{group.groupTitle}}</h3>
                  <button class="col-1 btn--secondary" v-on:click="delGroup(group.id)"><img src="../assets/img/awesome-times-circle.png" alt="Ícone remover xis"></button>
                </div>
            </template>
            <template v-slot:sectionBody>
              <div class="wrapper row">
                <draggable
                  :list="group.selectedJobs"
                  group="jobs"
                  itemKey="jobTitle"
                  class="job-list"
                >
                  <template #item="{ element, index }">
                    <professionCard :jobTitle="element.jobTitle" class="col-3"/>
                  </template>
                </draggable>
              </div>
            </template>
          </sectionRight>
        </div> <!-- END: v-for group  -->
      </div> <!-- END: .col-9 -->
    </div> <!-- END: .row  -->
  </div>


</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import sectionLeft from '@/components/SectionLeft.vue'
import sectionRight from '@/components/SectionRight.vue'
import professionCard from '@/components/ProfessionCard.vue'
import draggable from 'vuedraggable'
import {mapGetters, mapMutations} from "vuex"

export default {
  name: 'rodasDeConversa',
  components: {
    taskWording,
    sectionLeft,
    sectionRight,
    professionCard,
    draggable,
  },
  data: function() {
    return {
      thisProfessionTitle: "Parent Title",
      isModalVisible: false,
      focusedJobID: 0,
      groupList: [],
      maxGroupId: 0
    }
  },
  computed: {
    //VueX Storage getters
    ...mapGetters([
      'getInvitedList',
      'getGroups',
      'getState'
    ]),
    invitedList() {
      return this.getInvitedList;
    }
  },
  methods: {
    ...mapMutations([
      'addGroup',
      'inviteJob',
      'updateGroups'
    ]),
    delGroup(groupID) {
      let group = this.getGroups.find(g => g.id === groupID)
      if (group.selectedJobs.length > 0) {
        group.selectedJobs.forEach(job => this.inviteJob(job));
      }
      let payload = this.getGroups.filter(g => g.id !== groupID);
      this.updateGroups(payload);
    },
    validateGroups() {
      if(this.getGroups < 1) {
        window.alert("Para avançar, crie ao menos 2 Grupinhos. Cada Grupinho deve conter ao menos 1 Profissão e todas as Profissões convidadas devem estar em algum Grupinho.")
        return false;
      } 
      else if (this.getGroups.some(g => g.selectedJobs.length < 1)) {
        window.alert("Cada Grupinho deve conter ao menos 1 Profissão e todas as Profissões convidadas devem estar em algum Grupinho.")
        return false;
      }
      else if (this.getInvitedList.length > 0) {
        window.alert("Todas as Profissões convidadas devem estar em algum Grupinho.")
        return false;
      }
      else {
        return true;
      }
    },
  }, // END methods
  //Vue Route
  beforeRouteLeave: function(to, from, next) {
    if (this.validateGroups()) {
      next();
    }
  }
}  // END export
</script>

<style lang="css">
  .job-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .job-list .section-content__profession-card {
    margin: 1.3rem 2rem;
  }

  .job-list .sortable-ghost{
    flex: 0 0 25%;
  }
</style>