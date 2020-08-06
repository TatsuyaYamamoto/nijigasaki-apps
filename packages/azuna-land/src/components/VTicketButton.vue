<template>
  <div class="ticket-button" @click="$emit('click')">
    <span>TICKET</span>
  </div>
</template>

<style scoped lang="scss">
.ticket-button {
  background-color: #f4f4f4;
  color: #7db4e6;
  border-left: solid 30px #7db4e6;
  border-radius: 2px;
  padding: 10px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
  transform: rotate(10deg);

  cursor: pointer;
  user-select: none;
}
</style>
