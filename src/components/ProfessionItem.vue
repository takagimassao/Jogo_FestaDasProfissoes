<template lang="html">
    <div class="profession-item__card">
        <h4>{{jobTitle}}</h4>
        <p>jobIndex: {{jobID}}</p>
        <p>{{jobDescription}}</p>
        <button v-on:click="$store.commit('selectJob', jobID)">Convidar</button>
    </div>
</template>
<script>
export default {
    name: "ProfessionCard",
    props: {
        jobID: Number,
        jobTitle: String,
        jobDescription: String
    },
}
</script>
<style lang="css">
    .profession-item__card {
        text-align: left;
        background-color: white;
        box-shadow: 0.5rem 0.5rem 1rem #9f9f9f;
        padding: 0.75rem 1.5rem 2rem;
        border-radius: 0.5rem;
        margin-bottom: 1.3em;
    }
    .profession-item__card button {
        display: block;
        margin: 0 auto;
    }
</style>