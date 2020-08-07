<template>
  <section class="description-section">
    <div class="description-section__container">
      <div class="description-section__about welcome-card">
        <div class="welcome-card__ribbon">
          <div class="welcome-card__ribbon-inner">
            <div class="welcome-card__title">
              <span style="display: inline-block">A•ZU•NAランドへ</span>
              <span style="display: inline-block">ようこそ！</span>
            </div>
          </div>
        </div>
        <div class="welcome-card__body">
          <span>A•ZU•NAランド</span>
          は、スクールアイドルが大好きな皆さんのためのテーマパークです！
          今、最高にアメージングなテーマパークを心ゆくまでお楽しみください♪
        </div>
      </div>

      <div class="description-section__attractions">
        <h2 class="title-ribbon">Attractions</h2>
        <div>
          <a class="section-box--red" @click="$emit('select-attraction')">
            <div class="section-box__left">
              <h3>A•ZU•NA コースター</h3>
              <div>
                <span>A•ZU•NAランド</span>
                自慢のこのジェットコースターは、スクールアイドル愛で動く乗り物です！
                さぁ、皆さん！スクールアイドルが大好きっていう気持ちを叫んでください！！
                走馬灯まで見えるお得なアトラクションです！
              </div>
              <div class="notification-board" />
            </div>
            <img
              class="section-box__right"
              src="../assets/images/attraction_corster_setsuna.png"
            />
          </a>
          <a class="section-box--blue" @click="$emit('select-attraction')">
            <div class="section-box__left">
              <h3>A•ZU•NA シアター</h3>
              <div>
                心を落ち着けたいあなたにおすすめしたい、体験型シアターです。
                VR装置をかぶり、ミッションクリアを目指します。
                見るだけじゃない、表現力を磨けるこのアトラクションで、よりスクールアイドルの高みを目指しませんか？
              </div>
            </div>
            <img
              class="section-box__right"
              src="../assets/images/attraction_theater_shizuku.png"
            />

            <div class="notification-board" />
          </a>
          <a class="section-box--pink" @click="$emit('select-attraction')">
            <div class="notification-board" />
            <div class="section-box__left">
              <h3>A•ZU•NA わくわくホラーハウス</h3>
              <div>
                楽しい！怖い！でも、それ以上に楽しい！アトラクションがこちらです。
                いつかあの子を誘ったホラーハウスを思い浮かべながら、みんなと遊ぶことが大好きなおばけ達と、ダンスをしましょう！
              </div>
            </div>
            <img
              class="section-box__right"
              src="../assets/images/attraction_horrorhouse_ayumu.png"
            />
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
    padding: 0 10px;
  }

  @mixin section-box-base($background-color, $border-color) {
    position: relative;
    padding: 0.2em 0.5em;
    margin: 40px;
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;

    width: calc(100% - 40px * 2);
    color: #565656;
    background: $background-color;
    box-shadow: 0px 0px 0px 10px $background-color;
    border: dashed 2px $border-color;
    border-radius: 8px;
  }

  .section-box {
    &--pink {
      @include section-box-base(
        $background-color: #ffeaea,
        $border-color: #ffc3c3
      );
    }
    &--blue {
      @include section-box-base(
        $background-color: #cae7f1,
        $border-color: #add8e6
      );
    }
    &--red {
      @include section-box-base(
        $background-color: #ff9b9b,
        $border-color: #ff0000
      );
    }

    &__left {
      width: 300px;
    }
    &__right {
      width: 150px;
    }
  }

  &__about {
    background-color: white;
  }

  &__attractions {
    max-width: 600px;

    background-color: white;

    display: block;
    position: relative;
    margin: 0 auto;
    padding: 20px 0;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

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
  top: 80%;
  right: 0px;

  width: 100px;
  height: 70px;
  background-image: url("../assets/images/notification-board.png");
  background-size: contain;
  transform: rotate(10deg);

  &:before {
    content: "工事中";
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.welcome-card {
  max-width: 600px;

  position: relative;
  background: #ffffff;
  overflow: visible;
  margin: 2em auto;
  padding: 0.5em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  &__ribbon {
    position: absolute;
    z-index: 200;
    top: 15px;
    width: calc(100% + 20px);
    height: 50px;
    margin-right: -18px;
    margin-bottom: 80px;
    margin-left: -18px;

    &:before,
    &:after {
      position: absolute;
      top: 20px;
      bottom: -10px;
      width: 0;
      height: 0;
      content: "";
      border-width: 20px 20px;
    }
    &:before {
      left: -30px;
      border-style: solid;
      border-color: #f06292 #f06292 #f06292 transparent;
    }
    &:after {
      right: -30px;
      border-style: solid;
      border-color: #f06292 transparent #f06292 #f06292;
    }
  }

  &__ribbon-inner {
    line-height: 3em;
    position: relative;
    z-index: 100;
    margin-bottom: 0;
    text-align: center;
    color: #ffffff;
    background: #f48fb1;

    &:before,
    &:after {
      position: absolute;
      bottom: -10px;
      width: 0;
      height: 0;
      content: "";
      border-top: 10px solid #c2185b;
    }
    &:before {
      left: 0;
      border-left: 10px solid transparent;
    }
    &:after {
      right: 0;
      border-right: 10px solid transparent;
    }
  }

  &__title {
    font-size: 30px;
  }

  &__body {
    margin-top: 70px;
    padding: 50px;
  }
}
</style>
