<template>
  <div>
    <h3>{{ title }}</h3>
    <pre>{{ valueString }}</pre>
  </div>
</template>
<script>
export default {
  // This is a component for debugging-only purposes.
  // Add an <rawDisplayer :value="getState" title="Store State"/> to your 
  // template and get the raw display of the text inside your $store.state
  // from Vuex.
  name: "RawDisplayer",
  props: {
    title: {
      required: true,
      type: String
    },
    value: {
      required: true
    },
  },
  computed: {
    valueString() {
      return JSON.stringify(this.value, null, 2);
    }
  }
};
</script>
<style scoped>
pre {
  text-align: start;
}
</style>