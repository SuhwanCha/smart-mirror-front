<template>
  <div>
    <v-card style="margin-bottom:10px;">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">Hi, Groot!</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card style="margin-bottom:10px;">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">Yoingin-si</v-list-item-title>
          <v-list-item-subtitle>Wed, 3:30 AM, Mostly sunny</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <v-row align="center">
          <v-col class="display-3" cols="6">
            -3&deg;C
          </v-col>
          <v-col cols="6">
            <v-icon size="92" color="red lighten-1">mdi-white-balance-sunny</v-icon>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">Set Interests</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-item-group multiple>
          <v-list-item v-for="(item, i) in interests" :key="i">
            <v-list-item-action>
              <v-checkbox color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ item.toUpperCase() }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      imageUrl: null,
      interests: ['todo', 'bus', 'subway', 'stock', 'rip make up']
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
.col-4 {
  text-align: center;
}
</style>
