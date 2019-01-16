<template>
  <div id="app">
    <MyComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyComponent from "./components/MyComponent.vue";

export default Vue.extend({
  name: "app",
  components: {
    MyComponent
  }
});
</script>

<style>
</style>
