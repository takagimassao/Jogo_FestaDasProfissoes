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
  
            <!-- AAAAAH -->
            <div>draggable</div>
            <!-- END: AAAAAH -->
            <hr>
            <h3>List 1</h3>
            <draggable
              :list="array1"
              group="cars"
              itemKey="name"
            >
              <template #item="{ element, index }">
                <professionCard>
                  <template v-slot:title>
                    {{element.name}}
                  </template>
                  <template v-slot:button>
                    <button @click="pickJob(element.id)">
                        ->>
                    </button>
                  </template>
                </professionCard>
              </template>
            </draggable>


            <hr>
            <h3>List 2</h3>
            <draggable
              :list="array2"
              group="cars"
              itemKey="name"
            >
              <template #item="{ element, index }">
                <professionCard>
                  <template v-slot:title>
                    {{element.name}}
                  </template>
                  <template v-slot:button>
                    <button @click="pickJob(element.id)">
                        ->>
                    </button>
                  </template>
                </professionCard>
              </template>
            </draggable>
            
            <hr>

            <div
              v-for="job in checkInvited" :key="$store.state.jobs.id" >
              <professionCard>
                <template v-slot:title>
                  {{job.jobTitle}}
                </template>
                <template v-slot:button>
                  <button @click="pickJob(job.id)">
                      ->>
                  </button>
                </template>
              </professionCard>
            </div> <!-- END: v-for -->
</div>
        </template> <!-- END: v-slot sectionBody -->
      </sectionLeft>
    </div> <!-- END: col-3 -->

    <div class="col-9">
      <button @click="addGroup">Criar novo grupo</button>
      <div class="group-list"
        v-for="group, groupIndex in $store.state.groups" :key="$store.state.groups.id"
      >
        <sectionRight>
          <template v-slot:header>
              <h3>{{group.groupTitle}}</h3>
          </template>
          <template v-slot:sectionBody>
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
import {mapState, mapGetters} from "vuex";

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
      array1: [
        {
          name: "jojob 1",
          id: 1
        },{
          name: "jojob 3",
          id: 3
        }
      ],
      array2: [
        {
          name: "jojob 2",
          id: 2
        },{
          name: "jojob 4",
          id: 4
        }
      ]
    }
  },
  computed: {
    checkInvited() {
      return this.$store.getters.getInvited;
    },
    invitedList: {
      get() {
        return this.$store.getters.getInvited;
      },
      set(value) {
        this.$store.commit('updateList', newArray)
      }
    },
    focusedJobTitle() {
      return this.jobs[this.focusedJobID].jobTitle;
    },
    group1JobList() {
      return 
    },
    //VueX Storage getters
    ...mapGetters([
      'getJobs',
      'getJob',
      'getJobTitle',
      'getInvited',
      'getJobDescription',
      'getGroup',
      'getGoups',
      'getGroupTitle',
      'getGroupJobList'
    ]),
    ...mapState([
      'jobs',
      'groups'
       ])
  }, 
  methods: {
    printMsg: function(jobID) {
      return console.log("some shit has happened with job.id" + jobID);
    },
    pickJob(jobID) {
      this.focusedJobID = jobID;
      this.showModal();
    },
    addJobInGroup(jobID, groupID) {
      console.log(jobID);
      console.log(groupID);
      return this.$store.commit('insertJobInGroup',{
        jobID: jobID,
        groupID: groupID
      })
    },
    addGroup() {
      return this.$store.commit('addGroup')

    },
    updateStore() {
      this.$store.comit(updateLists, {lists});
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