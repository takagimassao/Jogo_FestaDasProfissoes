<template>
<div class="header">
    <div class="row align-items-stretch">
        <div class="col-9">  
            <div class="header__instruction">
                <!-- must add a h1 inside header slot -->
                <slot name="header">
                    <h1>Enunciado da tarefa</h1>
                </slot>
                
                <!-- must add at least one paragraph inside header slot -->
                <slot name="wording">
                    <p>
                        Algo deu errado e não pudemos carregar as instruções dessa atividade. Mostre essa tela para o profissional responsável pela aplicação dessa tarefa e peça para ele entrar em contato com o Suporte. Obrigado pela colaboração.
                    </p>
                </slot>
            </div>
        </div>
        <div class="col-3">
            <div class="header__next-section">
                <slot name="router-btn"></slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'taskWording'
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