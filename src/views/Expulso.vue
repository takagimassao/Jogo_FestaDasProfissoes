<template lang="html">
  <div class="container-fluid">
    <taskWording class="disliked">
      <template v-slot:header>
        <h1>Meu grupo favorito!</h1>
      </template>
      <template v-slot:wording>
          <p>Depois de algumas horas de festa, os vizinhos começaram a reclamar do barulho! Já estava tarde e eles chamaram a polícia... </p>
          <p>Quando a polícia chegou na sua festa, disseram: "Olha, para essa festa poder continuar só tem um jeito! Vc precisa escolher um grupo e pedir que se retire. Assim, com um grupo a menos, você pode continuar dando a a sua festa." </p>
          <p>Então você teve que escolher qual grupo seria convidado a se retirar da sua festa! E aí? Qual seria o grupo que não faria tanta diferença se fosse embora da festa? </p>
          <p>Clique em "Retirar".</p>
      </template>
      <template v-slot:router-btn>
        <router-link  class="btn--primary"
            type="submit"
            to="/JustificativaFavoritos">
            Avançar
        </router-link>
      </template>
    </taskWording>
    <div class="group-list"
      v-for="group, groupIndex in getNotFavoritedGroups" :key="groupIndex"
    >
      <div class="row">
        <div class="col-12  mb-5">
          <sectionLeft class="bg-img">
            <template v-slot:header>
              <div class="name-group__header">
                <h2>{{group.groupTitle}}</h2>
                <div class="name-group__dislike" v-show="group.preference === 0">
                    <button @click="dislike(group.id)" class="btn--secondary">Retirar</button>
                    <button @click="dislike(group.id)" class="icon-btn"><img src="../assets/img/dislike.svg" alt="favoritar grupo"></button>
                </div>
                <div class="name-group__undo" v-show="group.preference === -1">
                    <button @click="mehGroup(group.id)" class="btn--tertiary">Desfazer</button>
                    <button @click="mehGroup(group.id)" class="icon-btn"><img src="../assets/img/undo.svg" alt="desfavoritar grupo"></button>
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
  name: 'expulsos',
  components: {
    taskWording,
    sectionLeft,
    professionCard,
  },
  computed: {
    //VueX Storage getters
    ...mapGetters([
      'getDislikeGroups',
      'getNotFavoritedGroups',
      'getDislikedLength',
      'getState'
    ])
  },
  methods: {
    ...mapMutations([
      'dislikeGroup',
      'mehGroup'
    ]),
    dislike(groupID) {
        if(this.getDislikedLength < 1) {
            this.dislikeGroup(groupID);
        }
        else {
            window.alert("Você só pode retirar no máxmo 1 Grupinho")
        }
    },
    validateDislikeds() {
      if(this.getDislikedLength < 1) {
        window.alert("Você deve retirar exatamente 1 Grupinho")
        return false
      }
      else {
        return true;
      }
    }
  }, // END methods
  //Vue Route
  beforeRouteLeave: function(to, from, next) {
    if (this.validateDislikeds()) {
      next();
    }
  }
}  // END export
</script>

<style lang="css">

</style>