<template lang="html">
  <taskWording>
    <template v-slot:header>
      Rodas de Conversa
    </template>
    <template v-slot:wording>
      <p>A festa começou e as profissões começaram a curtir. Você nota que as profissões que possuem algo em comum começaram a se agrupar em rodas de conversa. Como são esses grupos?</p>
      <p>Crie grupos e arraste as profissões para cada grupo. Quando estiver satisfeito, avance para a próxima etapa.</p>
    </template>
    <template v-slot:router-btn>
      <button @click="updateStore">push to store</button>
      <!-- <router-link 
          type="submit"
          to="/NomearGrupos">
          Avançar
      </router-link> -->
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
                <professionCard>
                  <template v-slot:title>
                    {{element.jobTitle}} ID: {{element.id}}
                  </template>
                  <template v-slot:button>
                    <button @click="pickJob(element.id)">
                        ->>
                    </button>
                  </template>
                </professionCard>
              </template>
            </draggable>
          </div>
        </template> <!-- END: v-slot sectionBody -->
      </sectionLeft>
    </div> <!-- END: col-3 -->

    <div class="col-9">
      <button @click="addGroup()">Criar novo grupo</button>
      <div class="group-list"
        v-for="group, groupIndex in groupList" :key="groupIndex"
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
              <!-- <div
                v-for="job in group.selectedJobs" :key="job"
              >
                <div class="section-content__profession-card">
                  <span>{{$store.state.jobs[job].jobTitle}}</span>
                  <button @click="$store.commit('removeJobFromGroup', {
                    jobID: job,
                    groupID: groupIndex})"
                  >
                    X
                  </button>
                </div> !-- END: .section-content__profession-card  --
              </div> !-- END: v-for job  -- -->

            <draggable
              :list="group.selectedJobs"
              group="cars"
              itemKey="jobTitle"
            >
              <template #item="{ element, index }">
                <professionCard>
                  <template v-slot:title>
                    <span> {{element.jobTitle}} ID: {{element.id}} </span>
                  </template>
                  <template v-slot:button>
                    <button @click="pickJob(element.id)">
                        ->>
                    </button>
                  </template>
                </professionCard>
              </template>
            </draggable>

            </div>
          </template>
        </sectionRight>
      </div> <!-- END: v-for group  -->
    </div> <!-- END: .col-9 -->
  </div> <!-- END: .row  -->

  <div class="modal" id="modal-1" v-if="isModalVisible == true">
    <div class="modal__mask">
      <div class="modal__card">
        <div class="modal-card__header">
          <h3>Escolher grupo</h3>
        </div> 
        <div class="modal-card__body">
          <span class="modal-card-body__msg">
              Em qual grupo você deseja inserir a profissão 
              escolhida (ID: {{focusedJobID}} -> Title: {{focusedJobTitle}})?
          </span>
          <div v-for="group in groups">
            <button @click="addJobInGroup(focusedJobID, group.id)">{{group.groupTitle}}</button>
          </div>
        </div>
        <div class="modal-card__footer">

        </div > <!-- END: .modal-card__footer  -->
      </div> <!-- END: .modal__card  -->
    </div> <!-- END: .modal__mask  -->
  </div> <!-- END: .modal  -->

</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import sectionLeft from '@/components/SectionLeft.vue'
import sectionRight from '@/components/SectionRight.vue'
import professionCard from '@/components/ProfessionCard.vue'
import draggable from 'vuedraggable'
import {mapState, mapGetters, mapActions} from "vuex";

export default {
  name: 'rodasDeConversa',
  components: {
    taskWording,
    sectionLeft,
    sectionRight,
    professionCard,
    draggable
  },
  data: function() {
    return {
      thisProfessionTitle: "Parent Title",
      isModalVisible: false,
      focusedJobID: 0,
      groupList: [],
      invitedList: [
        {
            id: 2,
            jobTitle: "Job 3",
            jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
            isSelected: false
        },
        {
            id: 0,
            jobTitle: "Job 1",
            jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
            isSelected: true
        },
        {
            //jobs[4]
            id: 4,
            jobTitle: "Job 5",
            jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
            isSelected: true
        },
        {
            id: 3,
            jobTitle: "Job 4",
            jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
            isSelected: true
        }
      ],
      maxGroupId: 0
    }
  },
  computed: {
    // invitedList: {
    //   get() {
    //     return this.getInvitedList;
    //   },
    //   set(jobsList) {
    //     this.updateInvitedJobs(jobsList);
    //   }
    // },
    focusedJobTitle() {
      return this.jobs[this.focusedJobID].jobTitle;
    },
    //VueX Storage getters
    ...mapGetters([
      'getInvitedList',
    ]),
    ...mapState([
      'jobs',
      'groups'
       ])
  }, 
  methods: {
    ...mapActions ([
      'updateGroups'
    ]),
    printMsg: function(jobID) {
      return console.log("some shit has happened with job.id" + jobID);
    },
    pickJob(jobID) {
      this.focusedJobID = jobID;
      this.showModal();
    },
    addJobInGroup(jobID, groupID) {
      return this.$store.commit('addJobToGroup',{
        jobID: jobID,
        groupID: groupID
      })
    },
    addGroup() {
      return this.groupList.push({
        id: this.maxGroupId,
        //placeholder - remember to remove before production
        groupTitle: 'group ' + this.maxGroupId++,
        selectedJobs: []
      })
    },
    delGroup(groupID) {
      console.log(this.groupList);
      this.groupList = this.groupList.filter(g => g.id !== groupID);
      return 
    },
    //modal
    showModal() {
      this.isModalVisible = true;
    },
    //Vue Route
    beforeRouteLeave: function(to, from, next) {
      // window.alert("to saindo, vlw, flw!");
      next();
    }
  } // END methods
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