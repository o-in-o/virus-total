<template lang="pug">
  header
    router-link(to="/")
      .logo лого
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderCmpt extends Vue {}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #232d42;
  font-weight: 700;
  font-size: 24px;
  height: 30px;
  margin: 0 20px;
  text-transform: uppercase;
}

a {
  text-decoration: none;
}
</style>
