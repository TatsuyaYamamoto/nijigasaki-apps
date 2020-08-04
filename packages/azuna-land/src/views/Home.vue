<template>
  <div class="home">
    <v-joke-confirm-dialog>
      <template v-slot:default="slotProps">
        <v-btn
          color="primary"
          dark
          fab
          v-bind="slotProps.attrs"
          v-on="slotProps.on"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
    </v-joke-confirm-dialog>
  </div>
</template>

<script>
import VJokeConfirmDialog from "@/components/VJokeConfirmDialog.vue";
import { VBtn, VIcon } from "vuetify/lib";

export default {
  name: "Home",
  components: {
    VJokeConfirmDialog,
    VBtn,
    VIcon
  },
  data: function() {
    return {};
  }
};
</script>
