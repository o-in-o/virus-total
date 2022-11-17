<template lang="pug">
  #base-layout
    header-cmpt
    main
      slot
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import HeaderCmpt from "@/components/common/HeaderCmpt/HeaderCmpt";

@Component({
  components: { HeaderCmpt },
})
export default class BaseLayout extends Vue {}
</script>

<style scoped></style>
