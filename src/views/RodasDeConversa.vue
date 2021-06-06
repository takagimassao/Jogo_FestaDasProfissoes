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
            <div class="wrapper">
              <draggable
                :list="invitedList"
                group="cars"
                itemKey="jobTitle"
              >
                <template #item="{ element, index }">
                  <professionCard :jobTitle="element.jobTitle" />
                </template>
              </draggable>
            </div>
          </template> <!-- END: v-slot sectionBody -->
        </sectionLeft>
      </div> <!-- END: col-3 -->
      <div class="col-9">
        <button @click="addGroup()">Criar novo grupo</button>
        <div class="group-list"
          v-for="group, groupIndex in getGroups" :key="groupIndex"
        >
          <sectionRight>
            <template v-slot:header>
                <div class="wrapper row">
                  <h3 class="col-11">{{group.groupTitle}}</h3>
                  <button @click="delGroup(group.id)" class="col-1">X</button>
                </div>
            </template>
            <template v-slot:sectionBody>
              <div class="wrapper">
              <draggable
                :list="group.selectedJobs"
                group="cars"
                itemKey="jobTitle"
              >
                <template #item="{ element, index }">
                  <professionCard :jobTitle="element.jobTitle" />
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
  .section--big {
    margin: 2rem 0;
  }
  .section__content .profession-item__card {
    margin-bottom: 1.25rem;
  }
  .section__content {
    padding: 1rem 2rem 2rem;
  }

  .section__content--invited {
    display: flex;
    flex-direction: column;
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
    margin-bottom: 20px;
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