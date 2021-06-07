<template lang="html">
  <div class="container-fluid">
    <taskWording>
      <template v-slot:header>
        <h1>Você gosta de ir em festas?</h1>
      </template>
      <template v-slot:wording>
        <p>Que tipo de festa você costuma frequentar: Balada? Churrasco com amigos? Festas de aniversário? Baile de formatura? </p>
        <p>Pois é! Todo mundo costuma gostar de ir em festas. Ou pelo menos de algum tipo de festa...</p>
        <p>Quando você vai a festas, você costuma conhecer todas as pessoas que estão lá?</p>
        <p>Às vezes sim...Às vezes não, não é mesmo? E quando você não conhece, você costuma ter uma ideia de quem são essas pessoas? Sabe onde estudam? De quem são amigos?</p>
        <p>A verdade é que mesmo quando não conhecemos, temos informações que nos ajudam  a identificar as pessoas, em função de algum aspecto, como a escola em que estudam por exemplo.</p>
        <p>No mundo adulto, costumamos ir a festas, mas as pessoas não estão mais estudando. Elas já têm uma profissão.</p>
        <p>Imagine que vc já tem 30 anos de idade e vai dar uma festa! Você vai convidar as pessoas em função das profissões que elas possuem.</p>
        <p>Quem gostaria de convidar?</p>
      </template>
      <template v-slot:router-btn>
        <router-link  class="btn--primary"
            type="submit"
            to="/ListaDeConvidados">
            Avançar
        </router-link>
      </template>
    </taskWording>
  </div>
  <rawDisplayer :value="$store.state" title="Store State"/>
</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import {mapGetters, mapActions} from "vuex"
import rawDisplayer from '@/components/RawDisplayer.vue'

export default {
  name: 'introducao',
  components: {
    taskWording,
    rawDisplayer
  }
}
</script>