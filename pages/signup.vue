<template>
  <div>
    <div class="content">
      <v-row style="width:100%; height:100%; margin:0" justify="center" align="center">
        <v-col cols="10">
          <v-text-field
            label="Nickname"
            v-model="nickname"
            type="text"
            dark
            hide-details
            filled
          ></v-text-field>
          <v-text-field
            label="Email"
            v-model="email"
            type="email"
            dark
            hide-details
            filled
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            dark
            filled
          ></v-text-field>
          <p style="color:white">User Photo</p>
          <div
            class="photo-preview"
            v-ripple
            @click="$refs.file.click()"
            :class="imageUrl ? 'non-border' : ''"
          >
            <v-img v-if="imageUrl" :src="imageUrl" width="100%" contain></v-img>
            <v-icon v-else color="white" size="60px">insert_photo</v-icon>
          </div>
          <input type="file" accept="image/*" ref="file" @change="onChange" style="display:none" />
          <v-row dense justify="center" align="center">
            <v-col cols="6">
              <v-btn block text dark rounded color="white" style="margin-top:20px;" @click="signUp"
                >Sign Up</v-btn
              >
            </v-col>
          </v-row>
          <v-row dense justify="center" align="center">
            <v-col cols="6">
              <v-btn
                block
                text
                dark
                rounded
                color="white"
                style="margin-top:20px;"
                @click="$router.push('/login')"
                >Back to Sign In</v-btn
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
      nickname: null,
      image: null,
      imageUrl: null
    };
  },
  methods: {
    signIn: function() {},
    signUp: async function() {
      const uid = await this.$axios.$post('/api/user/put', {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      });
      const file = this.$refs.file.files[0];
      this.image = file;
      this.imageUrl = URL.createObjectURL(file);
      let formData = new FormData();
      formData.append('file', file);
      formData.append('userNo', uid);
      this.$axios
        .$post('/api2/userPro/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function(res) {
          self.imageUrl = res;
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$store.commit('setUserId', uid);
      this.$router.push('/');
    },
    onChange(e) {
      try {
        const file = e.target.files[0];
        this.image = file;
        this.imageUrl = URL.createObjectURL(file);
      } catch (error) {
        console.log(error);
      }
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
p {
  margin: 0;
  color: white;
  margin-top: 15px;
  padding-left: 5px;
  font-weight: bold;
}

.photo-preview {
  margin-top: 5px;
  width: 100%;
  min-height: 150px;
  // border: 1px solid rosybrown;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid white;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  margin-bottom: 10px;
  .v-responsive {
  }
  &.non-border {
    border: 0;
  }
}
</style>
