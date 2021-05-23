<template lang="html">
    <div class="content__section-card--left">
        <div class="content-section-card__header">
            <h2>Profissões</h2>
        </div>
        <div class="content-section-card__body">
            <slot name="cardBody"></slot>
            <span> test </span>
        </div>
    </div>
</template>
<script>

export default {
    name: "SessionCardLeft"
}
</script>
<style lang="css">
    
</style>