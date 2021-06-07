<template v-slot:sectionBody lang="html">
    <div class="row description-list">
        <div 
            v-for="job, index in $store.state.jobs" :key="index" 
            class="col-4 mb-4"
        >
            <professionItem
            :jobID="job.id"
            :jobTitle="job.jobTitle" 
            :jobDescription="job.jobDescription"
            />
        </div>
    </div>
</template>
<script>

import professionItem from '@/components/ProfessionItem.vue'

export default {
    name: "professionDescriptionList",
    components: {
        professionItem
    }
}
</script>
<style lang="css">
    .description-list {
        padding: 0rem 1rem;
    }
</style>