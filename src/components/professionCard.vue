<template lang="html">
    <div class="section-content__profession-card h-100">
        <h4>{{jobTitle}}</h4>
        <slot name="button"></slot>
    </div>
</template>
<script>
export default {
    name: "professionCard",
    props: {
        jobTitle: String,
    }
}
</script>
<style lang="css">

</style>