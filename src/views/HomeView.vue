<template lang="pug">
  main-layout
    LandingPage
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainLayout from "@/layouts/MainLayout.vue";
import LandingPage from "@/pages/LandingPage/LandingPage.vue";

@Component({
  components: {
    LandingPage,
    MainLayout,
  },
})
export default class HomeView extends Vue {}
</script>
