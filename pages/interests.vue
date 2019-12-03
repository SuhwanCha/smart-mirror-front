<template>
  <div>
    <v-list subheader two-line flat>
      <v-subheader>Interests</v-subheader>

      <v-list-item-group multiple>
        <v-list-item
          @click="$store.commit('uploadIntersts', item)"
          v-for="(item, i) in interests"
          :key="i"
        >
          <v-list-item-action>
            <v-checkbox color="primary" :value="interest.indexOf(item) != -1"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.toUpperCase() }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      interest: 'interests'
    })
  },
  methods: {},
  data: () => ({
    interests: ['todo', 'bus', 'subway', 'stock']
    // interest: ['todo', 'bus', 'subway', 'stock']
  }),
  mounted() {
    // console.log(this.interest2);
    // this.interest = this.interests2;
  }
};
</script>

<style lang="scss" scoped>
.deleted {
  text-decoration-line: line-through;
  transition: all 500ms;
}
</style>
