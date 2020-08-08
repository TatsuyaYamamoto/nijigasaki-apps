<template>
  <a class="sukusuta-button" href="#!">
    <slot></slot>
  </a>
</template>
<style scoped lang="scss">
.sukusuta-button {
  display: block;

  margin: 0 auto;
  padding: 10px 0;
  width: 200px;


  text-decoration: inherit;
  color: white;
  text-align: center;

  background: linear-gradient(
    135deg,
    #ff96a2 0%,
    #ff96a2 10%,
    #fb8391 10%,
    #fb8391 100%
  );
  border: solid 1px rgb(205, 205, 220);
}
</style>
