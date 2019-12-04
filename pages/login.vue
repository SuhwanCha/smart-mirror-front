<template>
  <div>
    <div class="wrapper"></div>
    <div class="overlay"></div>
    <div class="content">
      <v-row style="width:100%; height:100%; margin:0" justify="center" align="center" dense>
        <v-col cols="8">
          <h3 style="color:white;text-align:center">Sign In</h3>
          <v-text-field
            label="Email"
            v-model="email"
            type="email"
            dark
            single-line
            hide-details
            filled
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            dark
            single-line
            hide-details
            filled
          ></v-text-field>
          <v-row dense>
            <v-col cols="6">
              <v-btn block rounded text dark style="margin-top:20px;" @click="signUp"
                >Sign Up</v-btn
              >
            </v-col>
            <v-col cols="6">
              <v-btn block rounded color="white" style="margin-top:20px;" @click="signIn"
                >Sign In</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    signIn: function() {},
    signUp: function() {
      this.$router.push('/signup');
    }
  }
};
</script>

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
  background-image: url('/bg.jpg');

  @extend .full;
  z-index: 1;
}
.overlay {
  @extend .full;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.content {
  @extend .full;
  z-index: 3;
}
</style>
