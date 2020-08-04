<template>
  <transition name="fade">
    <v-app v-if="show">
      <router-view />
    </v-app>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      show: false
    };
  },
  mounted() {
    const minFirstRenderTime = 500;
    const loadingElement = document.getElementById("loading");

    setTimeout(() => {
      this.show = true;

      if (loadingElement) {
        loadingElement.remove();
      }
    }, minFirstRenderTime);
  }
});
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
