<template lang="html">
    <div>
        <div class="section-content__profession-card">
            <slot name="title">Nome da Profissão</slot>
            <slot name="button"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "professionCard"
}
</script>
<style lang="css">

</style>

<!-- 
Anotações

https://sortablejs.github.io/Vue.Draggable/#/two-lists
https://github.com/SortableJS/Vue.Draggable/blob/master/example/components/simple.vue
https://github.com/SortableJS/Vue.Draggable/blob/master/example/components/two-lists.vue
https://www.youtube.com/watch?v=E8f5JR-K5DI&ab_channel=DiligentDevDiligentDev

-->