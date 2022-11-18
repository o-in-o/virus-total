<template lang="pug">
  #card-container
    slot(name="header")
    slot
    slot(name="footer")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CardCmpt extends Vue {
  @Prop() readonly wide!: number;
}
</script>

<style scoped lang="scss">
#card-container {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  box-sizing: content-box;

  margin: 20px;
  padding: 20px;
  background-color: map-get(map-get($pallete, neutral), white);
  border-radius: 4px;
  box-shadow: 0px 3px 8px rgba(9, 30, 66, 0.16),
    0px 0px 1px rgba(9, 30, 66, 0.31);
}
</style>
