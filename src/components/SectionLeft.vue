<template lang="html">
    <div class="section--left">
        <div class="content-section__header">
            <slot name="header"></slot>
        </div>
        <div class="section__body">
            <slot name="sectionBody"></slot>
        </div>
    </div>
</template>
<script>

export default {
    name: "sectionLeft"
}
</script>
<style lang="css">
  .section--left {
    margin: 2rem 0;
    background-color: rgb(87, 199, 199);
    border-radius: 0 24px 24px 0;
  }
  
  .section--left {
    padding: 1rem 2rem 2rem;
  }

  .section__body > .card {
    margin-bottom: 1.25rem;
  }

  .section__content--invited {
    display: flex;
    flex-direction: column;
  }

  .section__content--invited .section-content__profession-card {
    margin-bottom: 1.25rem;
  }

  .section-content__profession-card {
    display: flex;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0.5rem 0.5rem 1rem #9f9f9f;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 20px;
  }

  .section-content__profession-card span {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 auto 0 0;
  }

  .section-content__profession-card button {
    margin: 0 0 0 auto;
  }
    
</style>