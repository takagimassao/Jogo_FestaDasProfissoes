<template lang="html">
<div class="container-fluid">
    <basicHeader>
        <template v-slot:header>
        <h1>Festa das profissões</h1>
        </template>
    </basicHeader>
    <div class="centered">
        <div class="row">
            <div class="col-4 mx-auto">
                <label class="login-form__label" for="Name">Nome completo</label>
                <input class="login-form__input" type="text" name="name" id="participantname" placeholder="Name" />
            </div>
        </div>
        <div class="row">
            <div class="col-4 mx-auto">
                <label class="login-form__label" for="accesscode">Código de acesso</label>
                <input class="login-form__input" type="text" name="accesscode" id="participantaccesscode" placeholder="Accesscode">
            </div>
        </div>
    </div>
    <!-- for debugging -->
    <div class="row">
        <div class="col-2 mx-auto">
            <router-link  class="btn--primary"
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

<style scoped lang="css">
    .container-fluid {
    background-color: white;
    }
    .login-form__label,
    .login-form__input {
        display: block;
        width: 100%;
    }
</style>