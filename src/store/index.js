import { createStore } from 'vuex'


/* Notas:
  Estou assumindo que cada lista de objetos é um array sequencial, 
  de forma que objeto.id é sempre igual ao seu índice no array.
*/
export default createStore({
  state: {
    participant: {
      name: "Christian Tsujiguchi",
      login: "012.456.789-10",
      accessCode: "abacaxi"
    },
    evaluator : {
      name: "Takagi Massao"
    },
    jobs:
    [
      {
        id: 0,
        jobTitle: "Job 1",
        jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        isSelected: true
      },
      {
        id: 1,
        jobTitle: "Job 2",
        jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        isSelected: true
      },
      {
        id: 2,
        jobTitle: "Job 3",
        jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        isSelected: false
      },
      { 
        id: 3,
        jobTitle: "Job 4",
        jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        isSelected: true
      },
      {
        //jobs[4]
        id: 4,
        jobTitle: "Job 5",
        jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        isSelected: true
      }
    ],
    invitedJobs: [],
    groups: [
      {
        id: 0,
        groupTitle: "group 1",
        selectedJobs: [0,1]
      },
      {
        id: 1,
        groupTitle: "group 2",
        selectedJobs: [2]
      },
      {
        id: 2,
        groupTitle: "",
        selectedJobs: [4]
      }
    ],
    favorites: {
        selectedGroups: [1, 3],
        justification: ""
    },
    expeled: {
      selectedGroup: 2,
      justification: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
    },
    // JSON para enviar à API da plataforma de Gestão de Licenças
    report: {
      groups: [
        {
          id: '',
          groupTitle: "",
          selectedJobs: []
        }
      ],
      favorites: {
        selectedGroups: [],
        justification: ''
      },
      expeled: {
        selectedGroup: Number,
        justification: ''
      }
    }
  },
  mutations: {
    selectJob(state, jobID){
      state.jobs[jobID].isSelected = true;
    },
    unselectJob(state, jobID){
      state.jobs[jobID].isSelected = false;
    },
    removeJobFromGroup(state, payload) {
      // Adiciona na lista de Convidados
      state.jobs[payload.jobID].isSelected = true;
      console.log("Adicionando " + payload.jobID + " no grupo " + payload.groupID);
      console.log(state.jobs);
      // Remove job do group
      state.groups[payload.groupID].selectedJobs = state.groups[payload.groupID].selectedJobs.filter(e => e !== payload.jobID);
    },
    insertJobInGroup(state, payload) {
      // Remove da lista de Convidados
      var jobList = state.groups[payload.groupID].selectedJobs;
      state.jobs[payload.jobID].isSelected = false;
      jobList.push(payload.jobID);
    },
    addGroup(state) {
      console.log(state.groups)
      try {
        var newGroup = {
          id: state.groups.length,
          groupTitle: "",
          //groupTitle: "group " + (state.groups.length+1),
          selectedJobs: []
        }
        console.log(state.groups);
        state.groups.push(newGroup);
      }
      catch (event) {

      }
      console.log(state.groups)
    }
  },
  actions: {

  },
  getters: {
    // Property-style getters (cached)
    getInvited: state => {
      return state.jobs.filter(j => j.isSelected == true);
    },


    //Method-style getters (not cached)
    getJob: state => jobID => {
      return state.jobs[jobID]
    },
    getJobTitle: state => jobID => {
      return state.jobs[jobID].jobTitle
    },
    getJobDescription: state => jobID => {
      return state.jobs[jobID].jobDescription
    },
    getGroup: state => groupID => {
      return state.groups[groupID]
    },
    getGroupTitle: state => groupID => {
      return state.groups[groupID].groupTitle
    },
    getGroupJobList: state => groupID => {
      return state.groups[groupID].selectedJobs
    },
    getGroupJobTitleList: (state, getters) => groupID => {
      var jobTitleList = []
      for (jobID in getters.getGroupJobList(groupID)) {
        jobTitleList.push(state.jobs[jobID].jobTitle);
      }
      return jobTitleList
    }
  },
  modules: {

  }
})