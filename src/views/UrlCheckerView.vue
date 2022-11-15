<template lang="pug">
  main-layout
    h1  url check
    custom-button
      span ok
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainLayout from "@/layouts/MainLayout.vue";
import CustomButton from "@/components/ui/CustomButton/CustomButton.vue";

@Component({
  components: {
    CustomButton,
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
