<template>
  <div>
    <v-card dark>
      <v-list dark>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">Sohee's Interests</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list subheader dark two-line>
        <v-list-item-group multiple>
          <v-list-item v-for="(item, i) in interests" :key="i">
            <v-list-item-action>
              <v-checkbox v-model="idx[i]"></v-checkbox>
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
  layout: 'api',
  computed: {
    idx: function() {
      let arr = [];
      this.interests.forEach(element => {
        if (this.interest.indexOf(element) == -1) {
          arr.push(0);
        } else {
          arr.push(1);
        }
      });
      return arr;
    }
  },
  methods: {
    arr_diff(a1, a2) {
      let a = [],
        diff = [];

      for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
      }

      for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
          delete a[a2[i]];
        } else {
          a[a2[i]] = true;
        }
      }

      for (let k in a) {
        diff.push(k);
      }

      return diff;
    },
    inter: function(data) {
      let idx;
      if ((idx = this.interest.indexOf(data)) != -1) {
        this.interest.splice(idx, 1);
        this.$axios.$post('/api/interest/delete', {
          uid: this.$cookies.get('smart-mirror-uid'),
          interest: data
        });
      } else {
        this.interest.push(data);
        this.$axios.$post('/api/interest/put', {
          uid: this.$cookies.get('smart-mirror-uid'),
          interest: data
        });
      }
      this.$store.commit('syncInterests', this.interest);
    }
  },
  data: () => ({
    interests: ['todo', 'bus', 'subway', 'stock']
  }),
  asyncData({ $axios, params }) {
    const uid = params.id;
    return $axios.$get('/api/interest/get/' + uid).then(res => {
      return {
        interest: res
      };
    });
  }
};
</script>

<style lang="scss" scoped>
.deleted {
  text-decoration-line: line-through;
  transition: all 500ms;
}
</style>
