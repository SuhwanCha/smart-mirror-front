<template>
  <div>
    <div v-if="!uid" class="register"></div>

    <h3>Smart Mirror Management Application</h3>
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
  asyncData({ app, redirect }) {
    let uid = app.$cookies.get('smart-mirror-uid');
    if (!uid) {
      redirect('/login');
    } else return { uid: app.$cookies.get('smart-mirror-uid') };
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
  // border: 1px solid rosybrown;
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
