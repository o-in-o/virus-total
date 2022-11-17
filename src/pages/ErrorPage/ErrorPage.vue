<template lang="pug">
  base-layout
    #error-page
      section.error-container
        p.error-title 404
        p.error Страница не найдена
        p.error-description Упс! Страница, которую вы ищете, не существует. Возможно, она была перемещена или удалена.
      custom-button(size="xs")
        router-link(to="/")
          span На главную
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseLayout from "@/layouts/BaseLayout.vue";
import CustomButton from "@/components/ui/CustomButton/CustomButton.vue";

@Component({
  components: { BaseLayout, CustomButton },
})
export default class ErrorPage extends Vue {}
</script>

<style lang="scss" scoped>
#error-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    padding: 25px;
  }

  .error {
    font-size: 42px;
    font-weight: 800;

    &-title {
      font-size: 200px;
      color: map-get(map-get($pallete, primary), 600);
      margin: 0;
      font-weight: 400;
    }

    &-description {
      font-size: 16px;
      font-weight: 800;
    }
  }
}
</style>
