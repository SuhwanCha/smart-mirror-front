<template>
  <div>
    <div class="wrapper"></div>
    <div class="overlay"></div>
    <div class="content">
      <v-row style="width:100%; height:100%; margin:0" justify="center" align="center" dense>
        <v-col cols="8">
          <h3 style="color:white;text-align:center">Sign Up</h3>
          <v-text-field
            label="Nickname"
            v-model="nickname"
            type="text"
            dark
            single-line
            hide-details
            filled
          ></v-text-field>
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
          <p style="color:white">User Photo</p>
          <div
            class="photo-preview"
            v-ripple
            @click="$refs.file.click()"
            :class="imageUrl ? 'non-border' : ''"
          >
            <v-img v-if="imageUrl" :src="imageUrl" width="100%" contain></v-img>
            <v-icon v-else color="black" size="60px">insert_photo</v-icon>
          </div>
          <input type="file" accept="image/*" ref="file" @change="onChange" style="display:none" />
          <v-row dense justify="center" align="center">
            <v-col cols="6">
              <v-btn block rounded color="white" style="margin-top:20px;" @click="signIn"
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
      nickname: null,
      image: null,
      imageUrl: null
    };
  },
  methods: {
    signIn: function() {},
    signUp: function() {},
    onChange(e) {
      try {
        const file = e.target.files[0];
        this.image = file;
        this.imageUrl = URL.createObjectURL(file);
        let formData = new FormData();
        // const self = this;
        formData.append('file', file);
        formData.append('userNo', 1);
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

.wrapper {
  background-image: url('/bg.jpg');

  @extend .full;
  z-index: 5;
}
.overlay {
  @extend .full;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 6;
}

.content {
  @extend .full;
  z-index: 7;
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
  background-color: rgba(255, 255, 255, 0.8);
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
