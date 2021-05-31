<template>
    <div class="header">
        <div class="row align-items-stretch">
            <div class="col-12">
                <div class="header__content">
                    <!-- must add a h1 inside header slot -->
                    <slot name="header">
                        <h1>Enunciado da tarefa</h1>
                    </slot>
                    <!-- can add paragraphs inside wording slot -->
                    <slot name="subtitle">
                        <h5>por Rafaela Brissac</h5>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'basicHeader'
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