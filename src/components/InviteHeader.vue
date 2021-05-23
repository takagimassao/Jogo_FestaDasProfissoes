<template>
<div class="header">
    <div class="row align-items-stretch">
        <div class="col-9">            
            <div class="header__instruction">
                <h1>Lista de convidados</h1>
                <p>Você irá dar uma festa e cada profissão representa um convidado. Decida quais profissões você convidaria para a festa e quais você não vai convidar.</p>
                <p>Quando estiver satisfeito, avance para a próxima etapa.</p>
            </div>
        </div>
        <div class="col-3">
            <div class="header__next-section">
                <button class="header__next-btn">Avançar</button>
                <router-link 
                    type="submit"
                    to="/rodasDeConversa">
                    Avançar
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'inviteHeader'
}
</script>

<style lang="css">
    .header {
        background-color: #f2f2f2;
        padding: 1.8rem 3rem;
    }
    
    .header__instruction {
        text-align: left;
    }

    .header__next-section {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background: red;
    }

    .header__next-btn {
        margin-bottom: 2.5rem;
    }
</style>