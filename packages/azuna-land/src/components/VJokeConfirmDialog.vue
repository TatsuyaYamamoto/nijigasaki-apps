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

      <transition appear>
        <v-img v-show="dialog" src="../assets/images/dialog_setsuna.png" />
      </transition>

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
  VCardActions,
  VImg
} from "vuetify/lib";

export default Vue.extend({
  components: {
    VDialog,
    VBtn,
    VSpacer,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VImg
  },
  data: function() {
    return {
      dialog: false
    };
  }
});
</script>

<style scoped lang="scss">
.v-enter-active {
  animation: shake 600ms 0.2s;
  transform-origin: center;
}

@keyframes shake {
  0% {
    transform: rotate(0deg) scale(1);
  }

  20% {
    transform: rotate(-10deg);
  }

  40% {
    transform: rotate(10deg) scale(1.02);
  }

  60% {
    transform: rotate(-10deg) scale(1.05);
  }

  80% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0);
  }
}
</style>
