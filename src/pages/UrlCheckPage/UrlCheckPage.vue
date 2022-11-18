<template lang="pug">
  #url-check-page
    h1 Проверка по URL-адресу
    card-cmpt
      section
        custom-input(
          label="Ссылка для проверки",
          :value.sync="inputValue",
          @keyup.enter="getReport",
          :error="error"
        )
          magnify(@click="getReport")
    loader-layout(v-if="isShowLoader" )
    .result(v-if="currentReport")
      url-response(v-if="currentReport.url", :report="currentReport")
    p(v-else-if="!currentReport") Давайте что-нибудь поищем...
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomInput from "@/components/ui/CustomInput/CustomInput.vue";
import CustomButton from "@/components/ui/CustomButton/CustomButton.vue";
import Magnify from "vue-material-design-icons/Magnify.vue";
import LoadingIcon from "vue-material-design-icons/Loading.vue";
import CardCmpt from "@/components/common/CardCmpt.vue";
import { checkUrlStoreModule } from "@/store";
import UrlResponse from "@/components/checkservice/urlcheck/UrlResponse.vue";
import { ResponseReportType } from "@/services/urlservices/url.service.interface";
import LoaderLayout from "@/layouts/LoaderLayout.vue";

@Component({
  components: {
    LoaderLayout,
    UrlResponse,
    CardCmpt,
    CustomButton,
    CustomInput,
    Magnify,
    LoadingIcon,
  },
})
export default class UrlCheckPage extends Vue {
  value = "";
  error = "";
  isShowLoader = false;

  get inputValue() {
    return this.value;
  }

  set inputValue(val: string) {
    this.value = val;
  }

  get currentReport(): ResponseReportType | null {
    return checkUrlStoreModule.report;
  }

  async getReport() {
    if (!this.value) {
      this.error = "Нельзя отправлять пустой запрос";
    } else {
      this.error = "";
    }

    this.isShowLoader = true;
    checkUrlStoreModule.updateReport(null);
    await checkUrlStoreModule.getReportFromUrl(this.value);
    this.isShowLoader = false;
  }
}
</script>

<style lang="scss" scoped>
#url-check-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  display: flex;
  align-items: center;
  width: 340px;
  justify-content: center;
}

.loader {
  animation: rotate 1s forwards;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(30deg);
  }
}
</style>
