<template lang="pug">
  #url-response
    card-cmpt.body-container
      card-cmpt.container
        p Проверяемый сайт:&nbsp
          span  {{ report.url }}
        p Дата сканирования:&nbsp
          span {{ report.scan_date }}
      .response-container(v-if="report.url")
        table
            tr
              th Сервис
              th Статус
            url-response-scan(v-for="(item, index) in report.scans", :index="index", :scan-obj="item" )
      loader-layout(v-else-if="report.url" )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ResponseReportType } from "@/services/urlservices/url.service.interface";
import CardCmpt from "@/components/common/CardCmpt.vue";
import UrlResponseScan from "@/components/checkservice/urlcheck/urlResponseScan/UrlResponseScan.vue";
import LoaderLayout from "@/layouts/LoaderLayout.vue";

@Component({ components: { LoaderLayout, UrlResponseScan, CardCmpt } })
export default class UrlResponse extends Vue {
  @Prop() readonly report!: ResponseReportType;
}
</script>

<style scoped lang="scss">
#url-response {
  margin-top: 20px;
}

.container,
.body-container {
  display: flex;
  flex-direction: column;
}

.response-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

p {
  font-size: 20px;
  text-align: left;
  width: 100%;
}

span {
  font-weight: 800;
  font-size: 22px;
}

th {
  background-color: map-get(map-get($pallete, primary), 100);
}
</style>
