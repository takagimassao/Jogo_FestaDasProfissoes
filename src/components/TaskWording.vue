<template>
<div class="header">
    <div class="row align-items-stretch">
        <div class="col-9">  
            <div class="header__instruction">
                <!-- must add a h1 inside header slot -->
                <slot name="header">
                    <h1>Enunciado da tarefa</h1>
                </slot>
                
                <!-- can add paragraphs inside wording slot -->
                <slot name="wording"></slot>
            </div>
        </div>
        <div class="col-3">
            <div class="header__next-section">
                <!-- add an appropriated router-link component -->
                <slot name="router-btn"></slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'taskWording'
}
</script>

<style lang="css" scoped>
    .header {
        background-color: white;
        padding-left: 3rem;
        border-radius: 0 0 0 56px;
        text-align: center;
        color: var(--dark-color);
        margin-bottom: 3.125rem;
        padding: 3rem 6rem;
    }
    
    .header__instruction {
        text-align: left;
    }

    .header__next-section {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-image: url();
    }
</style>