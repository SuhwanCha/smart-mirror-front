<template>
  <v-app dark>
    <div class="wrapper">
      <nuxt />
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 330px;
  height: 450px;
  background: black;
}
</style>

<style lang="scss" scope>
::-webkit-scrollbar {
  display: none;
}
.theme--dark.v-list {
  background: black !important;
}
</style>
