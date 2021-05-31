<template lang="html">
  <taskWording>
    <template v-slot:header>
      <h1>Você gosta de ir em festas?</h1>
    </template>
    <template v-slot:wording>
      <p>Que tipo de festa você costuma frequentar: (colocar dois pontos aqui ao invés de interrogações) e quando for colocar abaixo, pode colocar  lado a lado:</p>
      <p>Balada? Churrasco com amigos? Festas de aniversário? Baile de formatura? </p>
      <p>Só assim como está acima, já está bom ok?</p>
      <p>Pode retirar a frase: "Geralmente....,entre outras coisas" e acrescentar essa logo após a pergunta "de quem são amigos?":  A verdade é que mesmo quando não conhecemos, temos informações que nos ajudam  a identificar as pessoas, em função de algum aspecto, como a escola em que estudam por exemplo. </p>
      <p>No mundo adulto, costumamos ir a festas, mas as pessoas não estão mais estudando. Elas já tem uma profissão. </p>
      <p>Imagine que vc já tem 30 anos de idade e vai dar uma festa! Você vai convidar as pessoas em função das profissões que elas possuem. </p>
      <p>Quem gostaria de convidar?</p>
    </template>
    <template v-slot:router-btn>
      <router-link 
          type="submit"
          to="/ListaDeConvidados">
          Avançar
      </router-link>
    </template>
  </taskWording>
</template>

<script>
// @ is an alias to /src
import taskWording from '@/components/TaskWording.vue'
import {mapGetters, mapActions} from "vuex"

export default {
  name: 'introducao',
  components: {
    taskWording,
  }
}
</script>