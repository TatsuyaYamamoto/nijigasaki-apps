<template>
  <a :href="intentUrl" target="_blank" class="twitter-share-button">
    <i class="fa fa-twitter fa-lg"></i>
    <span>ツイート</span>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    intentUrl() {
      const baseUrl = `https://twitter.com/intent/tweet`;
      const url = encodeURIComponent(
        `https://azuna-land.web.app/?utm_source=twitter&utm_medium=tweet&utm_campaign=share&refresh=1`
      );
      const text = `A・ZU・NAランド ウェブサイト`;
      const hashtags = `lovelive,虹ヶ咲,そこんところ工房`;

      return `${baseUrl}?url=${url}&text=${text}&hashtags=${hashtags}`;
    }
  }
});
</script>

<style scoped lang="scss">
.twitter-share-button {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;

  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.428571429;

  color: #fff;
  background-color: #55acee;
  border-color: #4ca7ed;
  border-radius: 2px;

  cursor: pointer;
  text-decoration: none;
}
</style>
