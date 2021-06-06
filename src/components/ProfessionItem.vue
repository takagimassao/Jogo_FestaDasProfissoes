<template lang="html">
    <div class="profession-item__card">
        <h4>{{jobTitle}}</h4>
        <p>{{jobDescription}}</p>
        <button v-on:click="$store.commit('inviteJob', job)">Convidar</button>

    </div>
</template>
<script>

export default {
    name: "professionCard",
    data: function() {
        return {
            job: {
                id: this.jobID,
                jobTitle: this.jobTitle
            }
        }
    },
    props: {
        jobID: Number,
        jobTitle: String,
        jobDescription: String
    }
}
</script>
<style lang="css">
    .profession-item__card {
        text-align: left;
        background-color: white;
        box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, .16);
        padding: 0.75rem 1.5rem 2rem;
        border-radius: 32px 0 32px 0;
        margin-bottom: 1.3rem;
        height: 100%;
    }
    .profession-item__card button {
        display: block;
        margin: 0 auto;
    }
</style>