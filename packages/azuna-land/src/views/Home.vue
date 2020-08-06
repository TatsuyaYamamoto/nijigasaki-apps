<template>
  <div class="home">
    <v-ticket-button
      @click="handleDialog"
      style="position: fixed; z-index: 100;top: 30px; right: 30px"
    />
    <v-joke-confirm-dialog
      :open="isDialogOpen"
      @handleClose="handleDialog"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { VBtn, VIcon } from "vuetify/lib";

import VTicketButton from "@/components/VTicketButton.vue";
import VJokeConfirmDialog from "@/components/VJokeConfirmDialog.vue";

export default Vue.extend({
  name: "Home",
  components: {
    VJokeConfirmDialog,
    VTicketButton,
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
    }
  }
});
</script>
