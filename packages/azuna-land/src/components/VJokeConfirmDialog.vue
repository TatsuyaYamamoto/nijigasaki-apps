<!--
@see https://vuetifyjs.com/en/components/dialogs/#modal

-->
<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <slot v-bind:attrs="attrs" v-bind:on="on"></slot>
    </template>
    <v-card>
      <v-card-title class="headline">
        xx日は優木せつ菜ちゃんのお誕生日でした！
      </v-card-title>
      <v-card-text>
        このウェブサイトは優木せつ菜ちゃんのお誕生日のお祝いのためにラブライバーが作成したジョークサイトです。
        ラブライブ公式とは一切関係ありません。
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from "vue";
import {
  VDialog,
  VBtn,
  VSpacer,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions
} from "vuetify/lib";

export default Vue.extend({
  components: {
    VDialog,
    VBtn,
    VSpacer,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions
  },
  data: function() {
    return {
      dialog: false
    };
  }
});
</script>
