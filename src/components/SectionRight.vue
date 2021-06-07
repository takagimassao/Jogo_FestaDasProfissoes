<template lang="html">
    <div class="section--right">
        <div class="section__header">
            <slot name="header"></slot>
        </div>
        <div class="section__body">
            <slot name="sectionBody"></slot>
        </div>
    </div>
</template>
<script>

export default {
    name: "sectionRight"
}
</script>
<style lang="css" scoped>
  .section--right {
    margin: 2rem 0;
    background-color: var(--primary-color);
    border-radius: 56px 0 0 56px;
    color: white;
    padding-bottom: 2rem;
    height: 100%;
  }

  .section__header {
    padding: 2rem 4rem;
  }

  .section__body {
    background-color: var(--light-color);
    color: var(--dark-color);
    border-radius: 56px 0 0 56px;
    padding: 2rem 2rem;
    min-height: 10rem;
    height: calc(100% - 7.5rem);
  }
  
  .bg-img .section__header {
    background-image: url("../assets/img/section__header-background.svg");
    background-repeat: no-repeat;
    background-position: right;
  }
    
</style>