<template lang="html">
  <div class="container-fluid">
    <taskWording>
      <template v-slot:header>
        <h1>Vamos nomear os grupinhos?</h1>
      </template>
      <template v-slot:wording>
        <p>Quando você agrupou essas pessoas, provavelmente pensou em algo que elas tinham em comum, não é mesmo? Ou seja, algum critério foi adotado deixá-los juntos. </p>
        <p>Pensando neste critério, que vc utilizou para agrupar as pessoas, gostaria que você escolhesse um nome para cada grupinho. O nome que vc quiser! </p>
        <p>Depois que nomear todos os grupinhos, é só avançar.</p>
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
          <sectionRight class="bg-img">
            <template v-slot:header>
                <div class="row">
                  <div class="col-6 name-group__header" v-show="!savedGroupNames[groupIndex]">
                    <label :for="'group' + group.id">Nome: </label>
                    <!-- EDITING -->
                    <input
                      :name="'group' + group.id"
                      :id="'group' + group.id"
                      v-model="group.groupTitle"
                      placeholder="Digite o nome do Grupinho..."
                    />
                    <button @click="saveGroupName(groupIndex)" class="btn--secondary">Salvar</button>
                  </div>
                  <div class="col-6 name-group__header" v-show="savedGroupNames[groupIndex]">
                    <!-- SAVED -->
                    <h2>{{group.groupTitle}}</h2>
                    <button @click="renameGroupName(groupIndex)" class="btn--tertiary">Renomear</button>
                  </div>
                </div>
            </template>
            <template v-slot:sectionBody>
              <div class="wrapper row">
                <div v-for="job in group.selectedJobs" :key="job" class="col-3">
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

.name-group__header {
  display: flex;
  align-items: center;
}

.name-group__header h2 {
  margin-right: 1rem;
}

.name-group__header label {
  flex: 0 0 auto;
  margin-right: 1rem;
}
.name-group__header input {
  flex: 1 1 20rem;
  margin-right: 1rem;
  margin-bottom: 0;
}
.name-group__header button {
  display: inline-block;
  flex: 0 0 auto;
  margin-right: 1rem;
}

</style>