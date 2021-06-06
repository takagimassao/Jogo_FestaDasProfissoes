<template lang="html">
  <div class="container-fluid">
    <taskWording>
      <template v-slot:header>
        <h1>Meu grupo favorito!</h1>
      </template>
      <template v-slot:wording>
          <p>Beleza! Tudo pronto! A festa já começou....você já cumprimentou todos os seus convidados, afinal, vc é um ótimo anfitrião! Mas... depois que vc já falou com todo mundo, com qual grupo você gostaria de ficar junto durante o resto da festa?</p>
          <p>Qual é o grupo que vc acharia mais legal passar tempo da festa?</p>
          <p>Você precisa escolher  1 ou 2 grupos que tenha mais a ver com vc!</p>
          <p>Clique em "Favoritar" nos grupos que escolher.</p>
    
      </template>
      <template v-slot:router-btn>
        <router-link  class="btn--primary"
            type="submit"
            to="/Expulso">
            Avançar
        </router-link>
      </template>
    </taskWording>
    <div class="row">
      <div class="col-12">
        <div class="group-list"
          v-for="group, groupIndex in getGroups" :key="groupIndex"
        >
          <sectionLeft>
            <template v-slot:header>
                <div class="group-list__header row align-items-center">
                  <div class="col">
                    <h3>{{group.groupTitle}}</h3>
                  </div>
                  <div class="col" v-show="group.preference === 0">
                      <button @click="favorite(group.id)">Favoritar</button>
                  </div>
                  <div class="col" v-show="group.preference === 1">
                      <button @click="mehGroup(group.id)">Desfavoritar</button>
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
          </sectionLeft>
        </div> <!-- END: v-for group  -->
      </div> <!-- END: .col-9 -->
    </div> <!-- END: .row  -->
  </div>


</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import sectionLeft from '@/components/SectionLeft.vue'
import professionCard from '@/components/ProfessionCard.vue'
import {mapGetters, mapMutations} from "vuex"

export default {
  name: 'favoritos',
  components: {
    taskWording,
    sectionLeft,
    professionCard,
  },
  computed: {
    //VueX Storage getters
    ...mapGetters([
      'getGroups',
      'getState',
      'getFavoritesLength'
    ])
  },
  methods: {
    ...mapMutations([
      'favoriteGroup',
      'mehGroup'
    ]),
    favorite(groupID) {
        if(this.getFavoritesLength < 2) {
            this.favoriteGroup(groupID);
        }
        else {
            window.alert("Você só pode favoritar no máxmo 2 Grupinhos.")
        }
    },
    validateFavorites() {
      if(this.getFavoritesLength < 1) {
        window.alert("Deve haver ao menos 1 Grupinho favoritado")
        return false
      }
      else if(this.getFavoritesLength > 2) {
        window.alert("Você só pode favoritar no máxmo 2 Grupinhos.")
        return false
      }
      else {
        return true;
      }
    }
  }, // END methods
  //Vue Route
  beforeRouteLeave: function(to, from, next) {
    if (this.validateFavorites()) {
      next();
    }
  }
}  // END export
</script>

<style lang="css">

</style>