<template>
  <v-app dark>
    <div class="wrapper">
      <nuxt />
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.wrapper {
  min-width: 330px;
  min-height: 450px;
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
