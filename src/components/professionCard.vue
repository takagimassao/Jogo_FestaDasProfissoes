<template lang="html">
    <div>
        <div class="session-content__profession-card">
            <span>{{professionTitle}}</span>
            <button v-if="$store.state.jobs[professionID].isSelected==true" v-on:click="$store.commit('unselectJob', professionID)">X</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "professionCard",
    props: {
        professionID: Number,
        professionTitle: String
    }
}
</script>
<style lang="css">

</style>