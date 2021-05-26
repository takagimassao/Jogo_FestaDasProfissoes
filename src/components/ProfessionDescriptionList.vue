<template v-slot:sectionBody lang="html">
    <div class="row">
        <div 
            v-for="job in $store.state.jobs" :key="$store.state.jobs.id" 
            class="col-4"
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
    
</style>