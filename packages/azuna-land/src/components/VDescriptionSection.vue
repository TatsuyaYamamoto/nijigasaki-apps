<template>
  <section class="description-section">
    <div class="description-section__container">
      <div class="description-section__about section-box--pink">
        <h2>A•ZU•NA LANDとは?</h2>
        <div>
          <span>
            A•ZU•NALANDは、スクールアイドルが大好きな皆さんのためのテーマパークです！
          </span>
          今、最高にアメージングなテーマパーク、 心ゆくまで、お楽しみください。
        </div>
      </div>

      <div class="description-section__attractions">
        <h2 class="title-ribbon">Attractions</h2>
        <div>
          <a class="section-box--red" @click="$emit('select-attraction')">
            <div class="notification-board" />

            <h3>A•ZU•NA コースター</h3>
            <div>hogehoge</div>
          </a>
          <a class="section-box--blue" @click="$emit('select-attraction')">
            <div class="notification-board" />

            <h3>A•ZU•NA シアター</h3>
            <div>hogehoge</div>
          </a>
          <a class="section-box--pink" @click="$emit('select-attraction')">
            <div class="notification-board" />

            <h3>A•ZU•NA わくわくホラーハウス</h3>
            <div>hogehoge</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.description-section {
  background-color: rgb(254, 203, 78);
  min-height: 500px;

  &__container {
    max-width: 900px;
    margin: 0 auto;
    overflow: hidden;
  }

  @mixin section-box-base($background-color, $border-color) {
    position: relative;
    padding: 0.2em 0.5em;
    margin: 40px;
    display: inline-block;
    width: calc(100% - 40px * 2);
    color: #565656;
    background: $background-color;
    box-shadow: 0px 0px 0px 10px $background-color;
    border: dashed 2px $border-color;
    border-radius: 8px;
  }
  .section-box--pink {
    @include section-box-base(
      $background-color: #ffeaea,
      $border-color: #ffc3c3
    );
  }
  .section-box--blue {
    @include section-box-base(
      $background-color: #cae7f1,
      $border-color: #add8e6
    );
  }
  .section-box--red {
    @include section-box-base(
      $background-color: #ff9b9b,
      $border-color: #ff0000
    );
  }

  &__about {
    background-color: white;
  }

  &__attractions {
    background-color: white;

    display: block;
    position: relative;
    margin: 0 auto;
    padding: 20px 0;
    width: 600px;
    border-radius: 5px;

    .title-ribbon {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 5px;
      box-sizing: border-box;
      padding: 0 12px;
      margin: 0;
      height: 30px;
      line-height: 30px;
      font-size: 30px;
      letter-spacing: 0.1em;
      color: white;
      background: #70c7ff;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12);
    }
    .title-ribbon:before {
      position: absolute;
      content: "";
      top: 0;
      left: -7px;
      border: none;
      height: 38px;
      width: 7px;
      background: #70c7ff;
      border-radius: 5px 0 0 5px;
    }
    .title-ribbon:after {
      position: absolute;
      content: "";
      bottom: -7px;
      left: -5px;
      border: none;
      height: 7px;
      width: 5px;
      background: #4d99ca;
      border-radius: 5px 0 0 5px;
    }
  }
}

.notification-board {
  position: absolute;
  top: 0px;
  right: 10px;

  width: 100px;
  height: 100px;
  background-image: url("../assets/images/notification-board.png");
  background-size: contain;
  transform: rotate(10deg);

  &:after {
    content: "工事中";
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
