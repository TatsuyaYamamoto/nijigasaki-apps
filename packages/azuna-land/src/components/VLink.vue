<template>
  <div class="links">
    <a
      class="list-item nijigasaki"
      href="http://nijigasaki-school.web.app/"
      target="_blank"
    >
      <span class="list-item__icon"></span>
      <span class="list-item__name">虹ヶ咲学園</span>
    </a>
    <a
      class="list-item sokontokoro"
      href="http://www.sokontokoro-factory.net/"
      target="_blank"
    >
      <span class="list-item__name">そこんところ工房</span>
      <span class="list-item__icon"></span>
    </a>
  </div>
</template>

<style scoped lang="scss">
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(254, 237, 148);
  padding: 50px 0;
}

.list-item {
  $baseSize: 30px;
  $width: 1em * 7;
  $height: 1em * 1.2;
  $iconSize: $baseSize * 1.3;

  display: flex;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0 0 5px 5px rgba(100, 100, 100, 0.1);
  margin: 10px 10px;
  padding: 5px;
  text-decoration: none;

  &.sokontokoro {
    background-color: coral;
  }

  &.nijigasaki {
    background: linear-gradient(
      45deg,
      rgb(229, 0, 203) 10%,
      rgb(235, 158, 0) 90%
    );
  }

  &__icon {
    display: inline-block;

    .nijigasaki & {
      width: $iconSize * 1.2;
      height: $iconSize * 1.2;
      background-size: contain;
      background-image: url("../assets/images/logo_nijigasaki.png");
    }

    .sokontokoro & {
      width: $iconSize;
      height: $iconSize;
      background-size: contain;
      background-image: url("../assets/images/logo_sokontokoro.png");
    }
  }

  &__name {
    color: white;
    text-decoration: none;
    margin-left: 10px;

    .sokontokoro & {
      font-size: $baseSize;
      font-family: PixelMplus;
    }

    .nijigasaki & {
      font-size: $baseSize * 1.3;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6));
      font-family: aoyagireisyosimo;
    }
  }
}
</style>
