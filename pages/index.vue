<template>
  <div>
    <h1>Register</h1>
    <div
      class="photo-preview"
      v-ripple
      @click="$refs.file.click()"
      :class="imageUrl ? 'non-border' : ''"
    >
      <v-img v-if="imageUrl" :src="imageUrl" width="100%" contain></v-img>
      <v-icon v-else color="black" size="25px">add_a_photo</v-icon>
    </div>
    <v-row justify="center" align="center">
      <v-btn color="success">Register</v-btn>
    </v-row>
    <input type="file" accept="image/*" ref="file" @change="onChange" style="display:none" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      imageUrl: null
    };
  },
  methods: {
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
.photo-preview {
  margin-top: 5px;
  width: 100%;
  min-height: 200px;
  border: 1px solid rosybrown;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  .v-responsive {
  }
  &.non-border {
    border: 0;
  }
}
</style>
