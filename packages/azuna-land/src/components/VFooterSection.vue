<template>
  <footer class="footer">
    <div class="footer__title">
      <div class="footer-title">
        <span>A•ZU•NA LAND</span>
      </div>
      <div class="footer-title__address">
        <span>〒135-0064 東京都江東区青海A丁目Z−N</span>
      </div>
    </div>
    <div class="footer__copyright">
      <span
        ><i class="footer__copyright-rainbow"></i> 2020 Sokontokoro Factory
        believes in Nijigasaki.</span
      >
    </div>
    <div class="footer__credit">
      <div class="footer__credit-member">
        <span>
          💻
          <a target="_blank" href="https://twitter.com/T28_tatsuya">
            @T28_tatsuya
          </a>
        </span>
      </div>
      <div class="footer__credit-member">
        <span>
          🎨
          <a target="_blank" href="https://twitter.com/xxsanzashixx">
            @xxsanzashixx
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  background-color: rgb(254, 237, 148);
  width: 100%;
  padding: 50px 0;

  &__title {
    text-align: center;
  }

  &__copyright {
    margin-top: 30px;

    text-align: center;
  }

  &__copyright-rainbow {
    &::before {
      content: "";
      display: inline-block;
      width: 1em;
      height: 1em;
      background-image: url(../assets/images/rainbow.svg);
      background-size: contain;
      vertical-align: middle;
    }
  }

  &__credit {
    margin-top: 15px;
    text-align: center;
  }

  &__credit-member {
    margin-top: 5px;

    a {
      color: #000000;
      text-decoration: none;
    }
  }
}

.footer-title {
}
</style>
