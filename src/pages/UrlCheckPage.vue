<template lang="pug">
  #url-check-page
    h1 Проверка по URL-адресу
    section
      custom-input(label="Ссылка для проверки", :value.sync="inputValue" )
        magnify
      custom-button
        span  проверить
    p text = {{ value }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomInput from "@/components/ui/CustomInput/CustomInput.vue";
import CustomButton from "@/components/ui/CustomButton/CustomButton.vue";
import Magnify from "vue-material-design-icons/Magnify.vue";

@Component({
  components: { CustomButton, CustomInput, Magnify },
})
export default class UrlCheckPage extends Vue {
  value = "";

  get inputValue() {
    return this.value;
  }

  set inputValue(val: string) {
    this.value = val;
  }
}
</script>

<style scoped></style>
