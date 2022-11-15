<template lang="pug">
  .button-container(v-bind="$attrs" v-on="$listeners")
    button(:class="currentClass", :disabled="disabled")
      slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type buttonType = "primary" | "error" | "gray" | "success";
type buttonSize = "xs" | "small" | "medium" | "normal";

@Component
export default class CustomButton extends Vue {
  @Prop() value!: string;
  @Prop({ default: "primary" }) readonly color!: buttonType;
  @Prop({ default: false }) readonly outline!: boolean;
  @Prop({ default: true }) readonly rounded!: boolean;
  @Prop({ default: "normal" }) readonly size?: buttonSize;
  @Prop({ default: false, type: Boolean }) readonly disabled?: boolean;

  get currentClass(): string {
    let activeClass;

    if (!this.disabled) {
      activeClass = `${this.color} ${this.size}`;
    } else {
      activeClass = `${this.color} ${this.size} ${this.color}-disabled`;
    }

    this.rounded ? (activeClass += " squad") : (activeClass += " rounded");

    return activeClass;
  }
}
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.small {
  padding: 12px 40px;

  & button {
    font-size: 14px;
  }
}

.medium {
  padding: 14px 40px;

  button {
    font-size: 16px;
  }
}

.normal {
  padding: 18px 40px;

  & button {
    font-size: 18px;
  }
}

.xs {
  padding: 12px;

  & button {
    font-size: 12px;
  }
}

button {
  width: 100%;
  font-weight: 600;
  margin: 0;
  padding: 0;
  line-height: 20px;
  border: 3px solid transparent;
  background-color: transparent;
  cursor: pointer;
}

.primary {
  background: map-get(map-get($pallete, primary), 500);
  font-weight: 700;
  color: #fff;
  transition: ease-in all 0.2s;

  & button {
    color: #fff;
  }

  &:hover {
    background-color: map-get(map-get($pallete, primary), 700);
  }

  &:focus {
    border: 3px solid map-get(map-get($pallete, primary), 200);
    background-color: map-get(map-get($pallete, primary), 600);
  }

  &:active {
    background-color: map-get(map-get($pallete, primary), 800);
    border: 3px solid map-get(map-get($pallete, primary), 800);
  }

  &-disabled {
    background-color: map-get(map-get($pallete, primary), 300);
    cursor: not-allowed;

    &:hover {
      background-color: map-get(map-get($pallete, primary), 300);
    }
  }
}

.error {
  background: map-get(map-get($pallete, red), 500);
  font-weight: 700;
  color: #fff;
  transition: ease-in all 0.2s;

  & button {
    color: #fff;
  }

  &:hover {
    background-color: map-get(map-get($pallete, red), 700);
  }

  &:focus {
    border: 3px solid map-get(map-get($pallete, red), 200);
    background-color: map-get(map-get($pallete, red), 600);
  }

  &:active {
    background-color: map-get(map-get($pallete, red), 800);
    border: 3px solid map-get(map-get($pallete, red), 800);
  }

  &-disabled {
    background-color: map-get(map-get($pallete, red), 300);
    cursor: not-allowed;

    &:hover {
      background-color: map-get(map-get($pallete, red), 300);
    }
  }
}

.gray {
  background: map-get(map-get($pallete, neutral), 500);
  font-weight: 700;
  color: #fff;
  transition: ease-in all 0.2s;

  & button {
    color: #fff;
  }

  &:hover {
    background-color: map-get(map-get($pallete, neutral), 700);
  }

  &:focus {
    border: 3px solid map-get(map-get($pallete, neutral), 200);
    background-color: map-get(map-get($pallete, neutral), 600);
  }

  &:active {
    background-color: map-get(map-get($pallete, neutral), 800);
    border: 3px solid map-get(map-get($pallete, neutral), 800);
  }

  &-disabled {
    background-color: map-get(map-get($pallete, neutral), 300);
    cursor: not-allowed;

    &:hover {
      background-color: map-get(map-get($pallete, neutral), 300);
    }
  }
}

.success {
  background: map-get(map-get($pallete, green), 500);
  font-weight: 700;
  color: #fff;
  transition: ease-in all 0.2s;

  & button {
    color: #fff;
  }

  &:hover {
    background-color: map-get(map-get($pallete, green), 700);
  }

  &:focus {
    border: 3px solid map-get(map-get($pallete, green), 200);
    background-color: map-get(map-get($pallete, green), 600);
  }

  &:active {
    background-color: map-get(map-get($pallete, green), 800);
    border: 3px solid map-get(map-get($pallete, green), 800);
  }

  &-disabled {
    background-color: map-get(map-get($pallete, green), 300);
    cursor: not-allowed;

    &:hover {
      background-color: map-get(map-get($pallete, green), 300);
    }
  }
}

.warning {
  background: map-get(map-get($pallete, orange), 500);
  font-weight: 700;
  color: #fff;
  transition: ease-in all 0.2s;

  & button {
    color: #fff;
  }

  &:hover {
    background-color: map-get(map-get($pallete, orange), 700);
  }

  &:focus {
    border: 3px solid map-get(map-get($pallete, orange), 200);
    background-color: map-get(map-get($pallete, orange), 600);
  }

  &:active {
    background-color: map-get(map-get($pallete, orange), 800);
    border: 3px solid map-get(map-get($pallete, orange), 800);
  }

  &-disabled {
    background-color: map-get(map-get($pallete, orange), 300);
    cursor: not-allowed;

    &:hover {
      background-color: map-get(map-get($pallete, orange), 300);
    }
  }
}

.squad {
  border-radius: 0;
}

.rounded {
  border-radius: 50px;
}

.transparent {
}
</style>
