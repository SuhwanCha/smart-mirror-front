<template>
  <v-app>
    <v-content>
      <v-container>
        <div class="wrapper"></div>
        <div class="overlay"></div>

        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.full {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.wrapper {
  background-image: url('/bg.jpeg');

  @extend .full;
  z-index: 1;
}
.overlay {
  @extend .full;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.content {
  @extend .full;
  z-index: 3;
}
</style>
