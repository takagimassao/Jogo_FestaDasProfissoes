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
            },
            {
                id: 1,
                jobTitle: "Job 2",
                jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
            },
            {
                id: 2,
                jobTitle: "Job 3",
                jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
            },
            {
                id: 3,
                jobTitle: "Job 4",
                jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
            },
            {
                //jobs[4]
                id: 4,
                jobTitle: "Job 5",
                jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
            }
        ],
        // ---- invitedJobs[] example ----
        // invitedJobs: [
        //   {
        //       id: 2,
        //       jobTitle: "Job 3"
        //   }
        // ],
        
        invitedJobs: [],
        groups: [],
        // ---- groups[] example ----
        // groups: [
        //   {
        //       id: 0,
        //       groupTitle: "Red",
        //       selectedJobs: [{
        //           jobTitle: 'Job 1',
        //           id: 0
        //         },
        //         {
        //           jobTitle: 'Job 2',
        //           id: 1
        //         }
        //       ],
        //       // -1 for 'disliked', 0 for 'neutral' and 1 for 'favorited'
        //       preference: -1,
        //       justification: "Porque é vermelho é violento"
        //   },
        //   {
        //       id: 1,
        //       groupTitle: "Green",
        //       selectedJobs: [{
        //         jobTitle: 'Job 4',
        //         id: 3
        //       }],
        //       preference: 0,
        //       justification: ""
        //   },          
        //   {
        //     id: 3,
        //     groupTitle: "Blue",
        //     selectedJobs: [
        //       {
        //         jobTitle: 'Job 3',
        //         id: 2
        //       },
        //       {
        //         jobTitle: 'Job 5',
        //         id: 4
        //       }
        //     ],
        //     preference: 1,
        //     justification: "Porque azul é a cor da inovação e tecnologia"
        //   },
        // ],
        // JSON para enviar à API da plataforma de Gestão de Licenças
        // ---- report[] example ----
        // report: {
        //   groups: [
        //     {
        //       id: 0,
        //       groupTitle: "Red",
        //       selectedJobs: [{
        //           jobTitle: 'Job 1',
        //           id: 0
        //         },
        //         {
        //           jobTitle: 'Job 2',
        //           id: 1
        //         }
        //       ],
        //       preference: -1,
        //       justification: "Porque é vermelho é violento"
        //     }
        //   ],
        //   favorites: [
        //     {
        //       id: 1,
        //       groupTitle: "Green",
        //       selectedJobs: [{
        //         jobTitle: 'Job 4',
        //         id: 3
        //       }],
        //       preference: 0,
        //       justification: ""
        //     }
        //   ],
        //   expeled: {
        //     id: 3,
        //     groupTitle: "Blue",
        //     selectedJobs: [
        //       {
        //         jobTitle: 'Job 3',
        //         id: 2
        //       },
        //       {
        //         jobTitle: 'Job 5',
        //         id: 4
        //       }
        //     ],
        //     preference: -1,
        //     justification: "Porque azul é a cor da inovação e tecnologia"
        //   }
        // },
        maxGroupID: 1,
        report: {}
    },
    mutations: {
      inviteJob(state, payload) {
        if (state.invitedJobs.every( j => j.id !== payload.id)) {
          state.invitedJobs.push(payload);
        }
      },
      uninviteJob(state, jobID) {
        state.invitedJobs = state.invitedJobs.filter( l => l.id != jobID);
      },
      updateInvitedJobs(state, array) {
        state.invitedJobs = array;
      },
      addGroup(state) {
        try {
            var newGroup = {
                id: state.maxGroupID++,
                // groupTitle: 'group ' + state.maxGroupID++,
                groupTitle: "",
                selectedJobs: [],
                preference: 0,
                justification: ""
            }
            state.groups.push(newGroup);
        } catch(e) {console.log(e);}
      },
      removeGroup(state, groupID) {
        try {
          state.groups = state.groups.filter(e => e !== groupID);
        } catch(e) {console.log(e);}
      },
      nameGroup(state, payload) {
        state.groups[payload.groupID].groupTitle = payload.groupTitle;
      },
      updateGroups (state, payload) {
        state.groups = payload;
      },
      favoriteGroup (state, groupID) {
        state.groups.find(g => g.id === groupID).preference = 1;
      },
      dislikeGroup (state, groupID) {
        state.groups.find(g => g.id === groupID).preference = -1;
      },
      // I mean, a neutral preference is just... 'meh'
      mehGroup (state, groupID) {
        state.groups.find(g => g.id === groupID).preference = 0;
      },
      updateReport (state, payload) {
        state.report = payload;
      }
    },
    actions: {
      buildReport({commit, getters}) {
        let reportMehs = getters.getMehGroups;
        let reportFavorites = getters.getFavoritedGroups;
        let reportDisliked = getters.getDislikedGroup;
        let report = {
          groups: reportMehs,
          favorites: reportFavorites,
          expeled: reportDisliked
        }
        commit('updateReport', report);
      }
    },
    getters: {
        getState: state => {
          return state;
        },
        getParticipantName: state => {
          return state.participant.name;
        },
        getAllJobs: state => {
          return state.jobs;
        },
        // Property-style getters (cached)
        getInvited: state => {
            return state.jobs.filter(j => j.isSelected == true);
        },
        getInvitedList: state => {
          return state.invitedJobs;
        },
        getJobsInGroup: state => groupIndex => {
          var temp = state.jobs.filter(j => state.groups[groupIndex].selectedJobs.includes(j.id));
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
        getFavoritesLength: state => {
          return state.groups.filter(g => g.preference === 1).length;
        },
        getDislikedLength: state => {
          return state.groups.filter(g => g.preference === -1).length;
        },
        getNotFavoritedGroups: state => {
          return state.groups.filter(g => g.preference !== 1);
        },
        getFavoritedGroups: state => {
          return state.groups.filter(g => g.preference === 1);
        },
        getDislikedGroup: state => {
          return state.groups.find(g => g.preference === -1);
        },
        getMehGroups: state => {
          return state.groups.filter(g => g.preference === 0);
        }
    },
    modules: {

    }
})