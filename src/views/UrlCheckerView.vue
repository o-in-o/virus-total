<template lang="pug">
  main-layout
    url-check-page
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainLayout from "@/layouts/MainLayout.vue";
import UrlCheckPage from "@/pages/UrlCheckPage/UrlCheckPage.vue";

@Component({
  components: {
    UrlCheckPage,
    MainLayout,
  },
})
export default class UrlCheckerView extends Vue {
  // mounted() {
  //   checkUrlStoreModule.getReportFromUrl();
  // }
}
</script>

<style lang="scss" scoped></style>
