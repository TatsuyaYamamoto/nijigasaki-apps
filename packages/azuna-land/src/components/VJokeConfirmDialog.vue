<!--
@see https://vuetifyjs.com/en/components/dialogs/#modal

-->
<template>
  <v-dialog v-model="open" persistent max-width="290">
    <v-card>
      <v-card-title>{{ title }} </v-card-title>

      <transition appear>
        <img
          v-show="open"
          class="sorry-image"
          src="../assets/images/dialog_setsuna.png"
        />
      </transition>

      <v-card-text> {{ message }} </v-card-text>

      <v-card-actions class="justify-center">
        <v-twitter-share-button />
      </v-card-actions>

      <v-card-actions class="justify-center">
        <v-sukusuta-button @click.native="$emit('handleClose')">
          閉じる
        </v-sukusuta-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
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
import moment from "moment-timezone";

import VSukusutaButton from "@/components/VSukusutaButton.vue";
import VTwitterShareButton from "@/components/VTwitterShareButton.vue";

export default Vue.extend({
  components: {
    VDialog,
    VBtn,
    VSpacer,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VSukusutaButton,
    VTwitterShareButton
  },
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    title() {
      // 初回リリースはせつ菜ちゃんのお誕生日なので、お誕生日メッセージにしている。
      // 今後このページ、案内を使い回す時は、よしなに
      const today = moment().tz("Asia/Tokyo");
      const thisYear = today.year();
      const birthday = moment(`${thisYear}-08-08`).tz("Asia/Tokyo");
      const diff = birthday.diff(today, "days", true);

      if (0 < diff) {
        const day = Math.ceil(diff);
        return `${day}日後は優木せつ菜ちゃんのお誕生日です！`;
      }
      if (diff < -1) {
        const day = Math.abs(Math.ceil(diff));
        return `${day}日前は優木せつ菜ちゃんのお誕生日です！`;
      }

      return `今日は優木せつ菜ちゃんのお誕生日です！`;
    },
    message() {
      return `このウェブサイトは優木せつ菜ちゃんのお誕生日のお祝いのためにラブライバーが作成したジョークサイトです。ラブライブ公式とは一切関係ありません。`;
    }
  }
});
</script>

<style scoped lang="scss">
.sorry-image {
  width: 200px;
  margin: 0 auto;
  display: block;
}

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
