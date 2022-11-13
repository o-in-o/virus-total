<template lang="pug">
  .links
    router-link(v-for="(item, index) in existingLinks" :key="index" :to="item.to") {{ item.title }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavLinkType } from "@/services/appsetting/appsetting.service.interface";
import { linksStoreModule } from "@/store";

@Component
export default class NavCmpt extends Vue {
  get existingLinks(): NavLinkType[] {
    return linksStoreModule.linksArray;
  }

  created() {
    linksStoreModule.getterLinks();
  }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  width: 100%;

  & a {
    font-weight: 400;
    color: #8a92a6;
    width: auto;
    margin-bottom: 7px;
    padding: 5px 10px;
    border-radius: 4px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
      background-color: #3a57e8;
    }
  }
}
</style>
