<template>
  <div class="home">
    <v-ticket-button
      @click="handleDialog"
      v-scroll="handleScroll"
      class="home__ticket-button"
    />

    <v-map />
    <v-description-section @select-attraction="handleDialog" />
    <v-links />
    <v-footer-section />

    <v-joke-confirm-dialog :open="isDialogOpen" @handleClose="handleDialog" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { VBtn, VIcon } from "vuetify/lib";

import VTicketButton from "@/components/VTicketButton.vue";
import VMap from "@/components/VMap.vue";
import VLinks from "@/components/VLink.vue";
import VDescriptionSection from "@/components/VDescriptionSection.vue";
import VFooterSection from "@/components/VFooterSection.vue";
import VJokeConfirmDialog from "@/components/VJokeConfirmDialog.vue";

export default Vue.extend({
  name: "Home",
  components: {
    VJokeConfirmDialog,
    VTicketButton,
    VMap,
    VLinks,
    VDescriptionSection,
    VFooterSection,
    VBtn,
    VIcon
  },
  data: function() {
    return {
      isDialogOpen: false
    };
  },

  methods: {
    handleDialog() {
      this.isDialogOpen = !this.isDialogOpen;
    },
    handleScroll(evt: Event, el: Element) {
      if (window.scrollY > 200) {
        el.classList.add("home__ticket-button--show");
      } else {
        el.classList.remove("home__ticket-button--show");
      }
      // return window.scrollY > 100;
    }
  },
  directives: {
    scroll: {
      inserted: function(el, binding) {
        let f = function(evt: Event) {
          if (binding.value(evt, el)) {
            window.removeEventListener("scroll", f);
          }
        };
        window.addEventListener("scroll", f);
      }
    }
  }
});
</script>

<style scoped lang="scss">
.home {
  &__ticket-button {
    position: fixed;
    z-index: 2000;
    top: 30px;
    right: -150px;

    transition: right 1s;

    &--show {
      right: 30px;
    }
  }
}
</style>
