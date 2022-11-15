<template lang="pug">
  button( :class="outlineClass" v-bind="$attrs" v-on="$listeners")
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type buttonType = "primary" | "gray" | "transparent";

@Component
export default class CustomButton extends Vue {
  @Prop() value!: string;
  @Prop({ default: "primary" }) readonly color!: buttonType;
  @Prop({ default: false }) public readonly outline!: boolean;

  get outlineClass(): string {
    return `${this.color}`;
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 3px 12px;
  height: 80%;
  font-weight: 600;
  border: none;
  background-color: transparent;
}

.primary {
  background: $dark-blue;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: ease-in all 0.2s;

  &:hover {
    background: #3d53db;
  }

  &:focus {
    background: #2a3bb7;
  }
}

.gray {
  background: #fff;
  border: 2px solid #c2c6e8;
  color: #54577a;
  outline: none;
  cursor: pointer;
  transition: ease-in all 0.2s;

  &:hover {
    border: 2px solid #54577a;
    color: #141522;
  }

  &:focus {
    background: #dfe1f3;
    border: 2px solid #c2c6e8;
    color: #141522;
  }
}

.transparent {
}
</style>
