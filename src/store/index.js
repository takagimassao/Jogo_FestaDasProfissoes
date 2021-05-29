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
        evaluator: {
            name: "Takagi Massao"
        },
        jobs: [{
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
        invitedJobs: [2, 4, 5, 1],
        //invitedJobs: [],
        groups: [{
                id: 0,
                groupTitle: "group 1",
                selectedJobs: [{
                  title: 'Job 1',
                  id: '0'
                },{
                  title: 'Job 2',
                  id: '0'
                },]
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
            groups: [{
                id: '',
                groupTitle: "",
                selectedJobs: []
            }],
            favorites: {
                selectedGroups: [],
                justification: ''
            },
            expeled: {
                selectedGroup: Number,
                justification: ''
            }
        },
        maxGroupID: 2
    },
    mutations: {
      selectJob(state, jobID) {
          state.jobs[jobID].isSelected = true;
      },
      unselectJob(state, jobID) {
          state.jobs[jobID].isSelected = false;
      },
      updateInvitedJobs(state, array) {
        state.invitedJobs = array;
      },
      addGroup(state) {
        try {
            var newGroup = {
                id: ++state.maxGroupID,
                groupTitle: "",
                selectedJobs: []
            }
            state.groups.push(newGroup);
        } catch(e) {console.log(e);}
      },
      removeGroup(state, groupID) {
        try {
          state.groups = state.groups.filter(e => e !== groupID);
        } catch(e) {console.log(e);}
      },
      addJobToGroup(state, payload) {
        var jobList = state.groups[payload.groupID].selectedJobs;
        state.jobs[payload.jobID].isSelected = false;
        jobList.push(payload.jobID);
      },
      removeJobFromGroup(state, payload) {
        state.jobs[payload.jobID].isSelected = true;
        state.groups[payload.groupID].selectedJobs = state.groups[payload.groupID].selectedJobs.filter(e => e !== payload.jobID);
      },
      updateGroups (state, payload) {
        state.groups = payload.groups;
      },
      selectFavorite(state, groupID) {
        state.favorites.selectedGroups.push(payload.groupID);
      },
      unselectFavotire(state, groupID) {
        state.favorites.selectedGroups.filter(e => e !== payload.groupID);
      },
      selectExpeled(state, groupID) {
        state.expeled.selectedGroup = groupID;
      },
      addFavoriteJustification(state, payload) {
        state.favorites.selectedGroups[payload.groupID].justification = payload.text;
      }
    },
    actions: {
      updateInvitedJobs({commit}, jobs) {
        commit('updateInvitedJobs', jobs);
      },
      updateGroups({commit, state}, groups) {
        console.log("wtf?");
        try {
          if(payload.groups.selectedJobs.length < 1) {
            throw "Cada Grupinho deve possuir ao menos uma profissão.";
          }
          else {
            commit('updateGroups', groups);
          }
        } 
        catch(e) {
          console.log(e);
        }
      }
    },
    getters: {
        // Property-style getters (cached)
        getInvited: state => {
            return state.jobs.filter(j => j.isSelected == true);
        },
        getInvitedList: state => {
          var temp = state.jobs.filter(j => j.isSelected == true);
          return temp;
        },
        getJobsInGroup: state => groupIndex => {
          console.log("wasgoinon?");
          console.log(state.groups[groupIndex]);
          var temp = state.jobs.filter(j => state.groups[groupIndex].selectedJobs.includes(j.id));
          console.log(temp)
          return temp;
        },
        getJobsInGroupList: state => {
          var jobList = [];
          var groupList = [];
          for (groupIndex=0; groupIndex < state.groups.length; groupIndex++) {
            temp.push(state.jobs.filter(j => state.groups[groupIndex].selectedJobs.includes(j.id)));
            return temp;
          }
        },
        //Method-style getters (not cached)
        getJob: state => jobID => {
            return state.jobs[jobID];
        },
        getJobTitle: state => jobID => {
            return state.jobs[jobID].jobTitle;
        },
        getJobDescription: state => jobID => {
            return state.jobs[jobID].jobDescription;
        },
        getGroups: state => {
          return state.groups;
        },
        getGroup: state => groupID => {
            return state.groups[groupID];
        },
        getGroupTitle: state => groupID => {
            return state.groups[groupID].groupTitle;
        },
        getGroupJobList: state => groupID => {
            return state.groups[groupID].selectedJobs;
        },
        getGroupJobTitleList: (state, getters) => groupID => {
            var jobTitleList = [];
            for (jobID in getters.getGroupJobList(groupID)) {
                jobTitleList.push(state.jobs[jobID].jobTitle);
            }
            return jobTitleList;
        }
    },
    modules: {

    }
})