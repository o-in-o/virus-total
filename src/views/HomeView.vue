<template lang="pug">
  .home
    button() ok
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import { linksStoreModule } from "@/store";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  created() {
    linksStoreModule.getterLinks();
  }
}
</script>
