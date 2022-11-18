<template lang="pug">
  #loader-layout
    slot
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoaderLayout extends Vue {}
</script>

<style scoped lang="scss">
#loader-layout {
  display: inline-block;
  width: 80px;
  height: 80px;
}
#loader-layout:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid map-get(map-get($pallete, primary), 400);
  border-color: map-get(map-get($pallete, primary), 400) transparent
    map-get(map-get($pallete, primary), 400) transparent;
  animation: loader-layout 1.2s linear infinite;
}
@keyframes loader-layout {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
