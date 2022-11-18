<template lang="pug">
    tr
      td
        p {{ index }}
      td
        component(:is="component", :fillColor="fillColor")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    CheckIcon: () => import("vue-material-design-icons/CheckDecagram.vue"),
    AlertIcon: () => import("vue-material-design-icons/Alert.vue"),
  },
})
export default class UrlResponseScan extends Vue {
  @Prop() readonly scanObj!: {
    detected: boolean;
    result: string;
  };
  @Prop() readonly index!: string;

  get component(): string {
    return this.scanObj.detected ? "AlertIcon" : "CheckIcon";
  }

  get fillColor(): string {
    return this.scanObj.detected ? "#ef4444" : "#22c55e";
  }
}
</script>

<style lang="scss" scoped>
#response-scan {
  display: flex;
}

.status {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  text-align: left;
}

td {
  padding: 5px 25px;
}

tr:nth-child(even) {
  background-color: map-get(map-get($pallete, neutral), 100);
}
</style>
