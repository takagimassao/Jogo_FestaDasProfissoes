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
 .section-content__profession-card {
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    text-align: left;
    background-color: white;
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, .16);
    padding: .75rem 2.5rem;
    margin-bottom: 1.3rem;
}
 
.section-content__profession-card button {
    padding: 0;
    background-color: transparent;
    cursor: pointer;
}

</style>