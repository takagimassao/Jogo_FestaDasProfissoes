<template lang="html">
  <div class="container-fluid">
    <taskWording>
      <template v-slot:header>
        <h1>Vamos nomear os grupinhos?</h1>
      </template>
      <template v-slot:wording>
        <p>A festa começou e as profissões começaram a curtir. Você nota que as profissões que possuem algo em comum começaram a se agrupar em rodas de conversa. Como são esses grupos?</p>
        <p>Crie grupos e arraste as profissões para cada grupo. Quando estiver satisfeito, avance para a próxima etapa.</p>
      </template>
      <template v-slot:router-btn>
        <router-link  class="btn--primary"
            type="submit"
            to="/Favoritos">
            Avançar
        </router-link>
      </template>
    </taskWording>
    <div class="row">
      <div class="col-12">
        <div class="group-list"
          v-for="group, groupIndex in getGroups" :key="groupIndex"
        >
          <sectionRight>
            <template v-slot:header>
                <div class="group-list__header row align-items-center">
                  <div class="col-12" v-show="!savedGroupNames[groupIndex]">
                    <label :for="'group' + group.id">Nome: </label>
                    <!-- EDITING -->
                    <input
                      class="shortTextInput"
                      :name="'group' + group.id"
                      :id="'group' + group.id"
                      v-model="group.groupTitle"
    
                      placeholder="Digite o nome do Grupinho..."
                    />
                    <button @click="saveGroupName(groupIndex)">Salvar</button>
                  </div>
                  <div class="col" v-show="savedGroupNames[groupIndex]">
                    <!-- SAVED -->
                    <h3>{{group.groupTitle}}</h3>
                  </div>
                  <div class="col" v-show="savedGroupNames[groupIndex]">
                    <button @click="renameGroupName(groupIndex)">Renomear</button>
                  </div>
                </div>
            </template>
            <template v-slot:sectionBody>
              <div class="wrapper">
                <div v-for="job in group.selectedJobs" :key="job">
                  <professionCard :jobTitle="job.jobTitle" />
                </div>
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
import sectionRight from '@/components/SectionRight.vue'
import professionCard from '@/components/ProfessionCard.vue'
import {mapGetters, mapMutations} from "vuex"

export default {
  name: 'nomearGrupos',
  components: {
    taskWording,
    sectionRight,
    professionCard,
  },
  data: function() {
    return {
      savedGroupNames: []
    }
  },
  mounted() {
    this.getGroups.forEach(g => {
      this.savedGroupNames.push(false);
    });
  },
  computed: {
    //VueX Storage getters
    ...mapGetters([
      'getGroups',
      'getState'
    ])
    // there should be a computed object to bind the input value to vuex store. Next version should take care of this.
  },
  methods: {
    ...mapMutations([
      'nameGroup'
    ]),
    saveGroupName(groupID) {
      this.savedGroupNames[groupID] = true;
    },
    renameGroupName(groupID) {
      this.savedGroupNames[groupID] = false;
    },
    validateGroupsNames() {
      if(this.getGroups.some(g => g.groupTitle === "")) {
        window.alert("Todos os Grupinhos precisam de um nome.")
        return false
      }
      else {
        return true;
      }
    },

    //modal
    showModal() {
      this.isModalVisible = true;
    }
  }, // END methods
  //Vue Route
  beforeRouteLeave: function(to, from, next) {
    if (this.validateGroupsNames()) {
      next();
    }
  }
}  // END export
</script>

<style lang="css">

</style>