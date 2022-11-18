<template lang="pug">
  .links
    router-link(v-for="(item, index) in existingLinks" :key="index" :to="item.to") {{ item.title }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavLinkType } from "@/services/appsetting/appsetting.service.interface";
import { appSettingStoreModule } from "@/store";

@Component
export default class NavCmpt extends Vue {
  get existingLinks(): NavLinkType[] {
    return appSettingStoreModule.linksArray;
  }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  width: 100%;

  & a {
    color: map-get(map-get($pallete, neutral), 600);
    width: auto;
    font-weight: 600;
    margin-bottom: 7px;
    padding: 5px 10px;
    border-radius: 4px;
    text-decoration: none;
    transition: ease-in-out all 0.3s;

    &.router-link-exact-active {
      color: map-get(map-get($pallete, primary), 700);
      background-color: map-get(map-get($pallete, primary), 200);
    }

    &:hover {
      background-color: map-get(map-get($pallete, primary), 50);
    }
  }
}
</style>
