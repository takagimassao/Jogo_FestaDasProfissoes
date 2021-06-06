<template>
    <div class="basic-header">
        <div class="row align-items-stretch">
            <div class="col-12">
                <div class="basic-header__content">
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

<style lang="css" scoped>
    .basic-header {
        background-color: var(--primary-color);
        border-radius: 0 0 0 56px;
        text-align: center;
        color: white;
        margin-bottom: 3.125rem;
        padding: 3rem 6rem;
    }
</style>