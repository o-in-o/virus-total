<template lang="pug">
  main-layout
    p ошибочка
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainLayout from "@/layouts/MainLayout.vue";

@Component({
  components: { MainLayout },
})
export default class ErrorPage extends Vue {}
</script>

<style lang="scss" scoped></style>
