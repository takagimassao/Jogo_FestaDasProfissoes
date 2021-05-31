<template lang="html">
<div class="container-fluid">
    <basicHeader>
        <template v-slot:header>
        <h1>Fes ta das profissões</h1>
        </template>
    </basicHeader>
    <div class="centered">
        <div class="row">
            <div class="col-5">
                <label for="Name">Nome completo</label>
                <input type="text" name="name" id="participantname" placeholder="Name" />
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <label for="accesscode">Código de acesso</label>
                <input type="text" name="accesscode" id="participantaccesscode" placeholder="Accesscode">
            </div>
        </div>
    </div>
    <!-- for debugging -->
    <div class="row">
        <div class="col">
            <router-link 
                type="submit"
                to="/Introducao">
                Avançar
            </router-link>
        </div>
    </div>
</div>

</template>

<script>
// @ is an alias to /src
import basicHeader from '@/components/BasicHeader.vue'
import {mapGetters, mapActions} from "vuex"

export default {
  name: 'obrigado',
  components: {
    basicHeader,
  }
}
</script>