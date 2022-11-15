<template lang="pug">
  main-layout
    h1  url check
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainLayout from "@/layouts/MainLayout.vue";
import { checkUrlStoreModule } from "@/store";

@Component({
  components: {
    MainLayout,
  },
})
export default class UrlCheckerView extends Vue {
  // mounted() {
  //   checkUrlStoreModule.getReportFromUrl();
  // }
}
</script>

<style scoped lang="scss"></style>
