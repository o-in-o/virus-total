<template lang="pug">
  .input-group(:class="currentClass", v-bind="$attrs", v-on="$listeners")
    label.input-group-filled
      input(required, v-model="model")
      span.input-group-label {{ label }}
      span.input-group-icon(v-bind="$attrs", v-on="$listeners")
        slot
    p.status
      span.error(v-if="error" ) {{ error }}
      span.success(v-if="success" ) {{ success }}
</template>

<script lang="ts">
type inputType = "primary" | "error";

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CustomInput extends Vue {
  @Prop({ required: true }) readonly label!: string;
  @Prop() value!: any;
  @Prop({ default: "primary" }) readonly color!: inputType;
  @Prop() readonly error!: string;
  @Prop() readonly success!: string;

  emittedValue: unknown = this.value;

  get model(): unknown {
    return this.value;
  }

  set model(val: unknown) {
    this.emittedValue = val;
    this.$emit("update:value", this.emittedValue);
  }

  get currentClass(): string {
    return this.error ? "error" : this.color;
  }
}
</script>

<style lang="scss" scoped>
.input-content input {
  font-size: 20px;
  font-weight: 600;
}

.input-group {
  position: relative;
}

.input-group-filled > input {
  border: 1px solid transparent;
  font-size: 16px;
  padding: 22px 32px 10px;
  border-radius: 50px;
  transition: ease-in-out all 0.3s;

  &:focus {
    padding: 22px 32px 10px;
  }
}

.input-group-filled > .input-group-label {
  position: absolute;
  top: 16px;
  left: 32px;
  color: map-get(map-get($pallete, neutral), 500);
  transition: top 0.2s;
}

.input-group-filled > .input-group-icon {
  position: absolute;
  top: 13px;
  right: 12px;
  color: map-get(map-get($pallete, neutral), 500);
  cursor: pointer;
  transition: ease-in-out all 0.3s;

  &:hover {
    color: map-get(map-get($pallete, neutral), 700);
    scale: 130%;
  }
}

.input-group-filled > input:focus + .input-group-label,
.input-group-filled > input:valid + .input-group-label {
  top: 5px;
  left: 33px;
  font-size: 12px;
}

.primary {
  & input {
    border: 1px solid map-get(map-get($pallete, primary), 50);
    background-color: map-get(map-get($pallete, primary), 50);
    color: map-get(map-get($pallete, neutral), 900);

    &:hover {
      border: 1px solid map-get(map-get($pallete, primary), 500);
    }

    &:focus {
      border: 1px solid map-get(map-get($pallete, primary), 500);
      outline: none;
      background-color: map-get(map-get($pallete, neutral), white);
      color: map-get(map-get($pallete, neutral), 800);
    }
  }
}

.error input {
  border: 1px solid map-get(map-get($pallete, red), 50);
  background-color: map-get(map-get($pallete, red), 50);
  color: map-get(map-get($pallete, neutral), 900);

  &:hover {
    border: 1px solid map-get(map-get($pallete, red), 500);
  }

  &:focus {
    border: 1px solid map-get(map-get($pallete, red), 500);
    outline: none;
    background-color: map-get(map-get($pallete, neutral), white);
    color: map-get(map-get($pallete, neutral), 800);
  }
}

.status {
  font-size: 14px;
  padding: 0 32px;
  margin: 0;
  text-align: left;
}

span {
  margin-right: 10px;

  &.error {
    color: map-get(map-get($pallete, red), 400);
  }

  &.success {
    color: map-get(map-get($pallete, green), 400);
  }
}
</style>
