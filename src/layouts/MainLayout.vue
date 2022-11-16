<template lang="pug">
  #main-layout
    header-cmpt
    section
      aside
        nav-cmpt
      main
        slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderCmpt from "@/components/common/HeaderCmpt/HeaderCmpt.vue";
import NavCmpt from "@/components/common/NavCmpt/NavCmpt.vue";

@Component({
  components: { NavCmpt, HeaderCmpt },
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped>
#main-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: center;
  color: #2c3e50;
}

aside {
  padding: 10px 20px;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 52px;
  left: 0;
  overflow-x: hidden;
  background-color: #fff;
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: map-get(map-get($pallete, neutral), 100);
}

section {
  margin-left: 250px;
  background-color: map-get(map-get($pallete, neutral), 100);
  height: 100vh;
}
</style>
