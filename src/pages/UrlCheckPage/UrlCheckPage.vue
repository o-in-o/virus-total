<template lang="pug">
  #url-check-page
    h1 Проверка по URL-адресу
    card-cmpt
      section
        custom-input(
          label="Ссылка для проверки",
          :value.sync="inputValue",
          @keyup.enter="getReport"
        )
          magnify
    .result

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomInput from "@/components/ui/CustomInput/CustomInput.vue";
import CustomButton from "@/components/ui/CustomButton/CustomButton.vue";
import Magnify from "vue-material-design-icons/Magnify.vue";
import CardCmpt from "@/components/common/CardCmpt.vue";
import { checkUrlStoreModule } from "@/store";

@Component({
  components: { CardCmpt, CustomButton, CustomInput, Magnify },
})
export default class UrlCheckPage extends Vue {
  value = "";

  get inputValue() {
    return this.value;
  }

  set inputValue(val: string) {
    this.value = val;
  }

  getReport() {
    checkUrlStoreModule.getReportFromUrl(this.value);
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
}
</style>
