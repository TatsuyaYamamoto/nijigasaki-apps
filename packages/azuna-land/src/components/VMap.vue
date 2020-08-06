<template>
  <div class="map">
    <v-img src="../assets/images/azuna_land_back.png"></v-img>
    <img class="hikousen" src="../assets/images/azuna_land_hikousen.png" />
    <img class="corster" src="../assets/images/azuna_land_corster.png" />
    <img
      class="horrorhouse"
      src="../assets/images/azuna_land_horrorhouse.png"
    />

    <div class="kanransha">
      <div class="kanransha__base">
        <img src="../assets/images/azuna-land_kanransha_back.png" />
      </div>
      <div class="kanransha__wheel">
        <img src="../assets/images/azuna-land_kanransha_front.png" />
        <div
          v-for="(imageUrl, i) in [
            require('../assets/images/azuna-land_kanransha_red.png'),
            require('../assets/images/azuna-land_kanransha_blue.png'),
            require('../assets/images/azuna-land_kanransha_pink.png'),
            require('../assets/images/azuna-land_kanransha_red.png'),
            require('../assets/images/azuna-land_kanransha_blue.png'),
            require('../assets/images/azuna-land_kanransha_pink.png'),
            require('../assets/images/azuna-land_kanransha_red.png'),
            require('../assets/images/azuna-land_kanransha_blue.png')
          ]"
          :key="i"
          :class="['kanransha__gondola', `kanransha-gondola__${i}`]"
        >
          <img :src="imageUrl" />
        </div>
      </div>
    </div>

    <div class="theater">
      <img src="../assets/images/azuna_land_theater.png" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang="scss">
.map {
  position: relative;
}

.kanransha {
  position: absolute;
  top: 10%;
  left: 15%;
  display: inline-block;
  transform: scale(0.7);

  &__base {
    position: absolute;
    left: -10%;
    display: block;
  }
  &__wheel {
    position: absolute;

    animation-name: wheel-spin;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 30s;
  }
  &__gondola {
    position: absolute;

    animation-name: gondola-spin;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 30s;
  }

  .kanransha-gondola {
    &__0 {
      top: 6%;
      left: 12%;
    }
    &__1 {
      top: -5%;
      left: 40%;
    }
    &__2 {
      top: 10%;
      left: 70%;
    }
    &__3 {
      top: 40%;
      left: 80%;
    }
    &__4 {
      top: 68%;
      left: 65%;
    }
    &__5 {
      top: 80%;
      left: 38%;
    }
    &__6 {
      top: 65%;
      left: 10%;
    }
    &__7 {
      top: 35%;
      left: 0%;
    }
  }

  @keyframes wheel-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes gondola-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
}

.theater {
  position: absolute;
  top: 50%;
  left: 0%;
}

.corster {
  position: absolute;
  bottom: 50%;
  left: 50%;

  width: 40%;
}

.horrorhouse {
  position: absolute;

  bottom: 20%;
  right: 20%;

  width: 40%;
}

.hikousen {
  position: absolute;
  top: 60px;
  left: 50px;
  width: 50%;
  animation: 8s linear 0 move;
  animation-iteration-count: infinite;

  @keyframes move {
    0%,
    100% {
      transform: translate(0, 0);
    }
    48% {
      transform: translate(200%, 0);
    }
    49% {
      transform: translate(200%, -100%);
    }
    50% {
      transform: translate(-200%, -100%);
    }
    52% {
      transform: translate(-200%, 0);
    }
  }
}
</style>
