<template lang="html">
  <div class="container">
    <inviteHeader/>
    <div class="row">
      <div class="col-3">
        <div class="session-card--right session-card--small">
          <div class="session-card__content--invited">
            <h2>Convidados</h2>
            <div
              v-for="job in checkInvited" :key="$store.state.jobs.id" >
                <div class="session-content__profession-card">
                  <span>{{job.jobTitle}}</span>
                  <button 
                    @click="pickJob(job.id)"
                  >
                  <!-- Simula adição de job no grupo 2 -->
                  <!-- <button 
                    @click="$store.commit('insertJobInGroup', {
                      jobID: job.id,
                      groupID: 2
                    })"
                  > -->
                      ->>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="session-wrapper">
          <h2>Grupos</h2>
          <button @click="$store.commit('createGroup', {
                    jobID: job,
                    groupID: groupIndex})"
                  >
                    X
                  </button>
          <div class="session-card--left session-card--big"
            v-for="group, groupIndex in $store.state.groups" :key="$store.state.groups.id"
          >
            <div class="session-card__content">
              <h3>{{group.groupTitle}}</h3>
              <div
                v-for="job in group.selectedJobs"
              >
                <div class="session-content__profession-card">
                  <span>{{$store.state.jobs.[job].jobTitle}}</span>
                  <button @click="$store.commit('removeJobFromGroup', {
                    jobID: job,
                    groupID: groupIndex})"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
import {mapState, mapGetters} from "vuex";

export default {
  name: 'rodasDeConversa',
  components: {
    inviteHeader,
    professionList,
    professionCard
  },
  data: function() {
    return {
      thisProfessionTitle: "Parent Title",
      isModalVisible: false,
      focusedJobID: 0
    }
  },
  computed: {
    ...mapState([
      'jobs',
      'groups'
       ]),
    checkInvited() {
      return this.$store.getters.getInvited;
    },
    focusedJobTitle() {
      return this.jobs[this.focusedJobID].jobTitle;
    },
    group1JobList() {
      return 
    }
  },
  methods: {
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
    showModal() {
      this.isModalVisible = true;
    }
  },
  beforeRouteLeave: function(to, from, next) {
    // window.alert("to saindo, vlw, flw!");
    next();
  }
}
</script>

<style lang="css">
  .session-card--big {
    margin: 2rem 0;
  }
  .session-card__content .profession-item__card {
    margin-bottom: 1.25rem;
  }
  .session-card__content {
    padding: 1rem 2rem 2rem;
  }

  .session-card__content--invited {
    display: flex;
    flex-direction: column;
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
    margin-bottom: 20px;
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