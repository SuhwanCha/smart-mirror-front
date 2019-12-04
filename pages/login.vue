<template>
  <div>
    <div class="content">
      <v-row style="width:100%; height:100%; margin:0" justify="center" align="center" dense>
        <v-col cols="8">
          <v-text-field label="Email" v-model="email" type="email" dark filled></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            dark
            hide-details
            filled
          ></v-text-field>
          <v-row dense justify="center" align="center">
            <v-col cols="6">
              <v-btn block rounded text dark color="white" style="margin-top:20px;" @click="signIn"
                >Sign In</v-btn
              >
            </v-col>
          </v-row>
          <v-row dense justify="center" align="center">
            <v-col cols="5">
              <hr />
            </v-col>
            <v-col cols="2">
              <p style="color:white;margin:0; text-align:center">or</p>
            </v-col>
            <v-col cols="5">
              <hr />
            </v-col>

            <v-col cols="6">
              <v-btn block rounded text dark style="margin-top:20px;" @click="signUp"
                >Sign Up</v-btn
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
      password: null,
      text: null,
      snackbar: true
    };
  },
  methods: {
    signIn: function() {
      this.$axios
        .$post('/api/user/get', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          if (res) {
            this.$store.commit('setUserId', res);
            this.$router.push('/');
          } else {
            console.log('asd');
            this.text = 'Please check ID and Password';
            this.snackbar = true;
          }
        });
    },
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

.content {
  @extend .full;
  z-index: 3;
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
