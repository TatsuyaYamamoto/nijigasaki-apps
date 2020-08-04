<template>
  <transition name="fade">
    <div v-if="show" id="app">
      <router-view />
    </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
