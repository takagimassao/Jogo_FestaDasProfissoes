<template lang="html">
    <div class="profession-item__card">
        <div class="profession-item-card__content">
            <h4>{{jobTitle}}</h4>
            <p>{{jobDescription}}</p>
        </div>
        <button v-on:click="$store.commit('inviteJob', job)" class="btn--secondary">Convidar</button>

    </div>
</template>
<script>

export default {
    name: "p,o.rofessionCard",
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
<style scoped lang="css">
    .profession-item__card {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: left;
        background-color: white;
        box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, .16);
        padding: 2.5rem 1.5rem 2rem;
        border-radius: 32px 0 32px 0;
        height: 100%;
    }
    
    .profession-item-card__content {
        margin-bottom: 2rem;
        /* vertical align middle */
        /* height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center; */
    }

    .profession-item__card button {
        text-transform: uppercase;
        margin-top: auto;
    }
</style>