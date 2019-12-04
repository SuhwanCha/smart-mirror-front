<template>
  <div>
    <v-list subheader two-line flat dark>
      <h1>To do List</h1>

      <v-list-item-group multiple>
        <v-list-item v-for="(item, i) in ToDoList" :key="i">
          <v-list-item-action @click="$store.commit('todos/check', i)">
            <v-checkbox readonly v-model="item.checked"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title :class="item.checked ? 'deleted' : ''">{{
              item.text
            }}</v-list-item-title>
            <v-list-item-subtitle :class="item.checked ? 'deleted' : ''">{{
              item.date
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-snackbar v-model="snackbar"> {{ text }} </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: 'api',
  computed: {
    ...mapGetters({
      ToDoList: 'todos/TodoList'
    })
  },
  methods: {
    deleteItem: function(index) {
      this.text = this.ToDoList[index].text + ' was successfully deleted.';
      this.snackbar = true;
      this.$store.commit('todos/delete', index);
    },
    addtodo: function() {
      if (this.newtodo == '') {
        return 0;
      }
      var myDate = new Date();

      let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let monthsList = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Aug',
        'Oct',
        'Nov',
        'Dec'
      ];

      let date = myDate.getDate();
      let month = monthsList[myDate.getMonth()];
      let year = myDate.getFullYear();
      let day = daysList[myDate.getDay()];

      let today = `${month} ${date} ${year}, ${day}`;

      let amOrPm;
      let twelveHours = function() {
        if (myDate.getHours() > 12) {
          amOrPm = 'PM';
          let twentyFourHourTime = myDate.getHours();
          let conversion = twentyFourHourTime - 12;
          return `${conversion}`;
        } else {
          amOrPm = 'AM';
          return `${myDate.getHours()}`;
        }
      };
      let hours = twelveHours();
      let minutes = myDate.getMinutes();

      let currentTime = `${hours}:${minutes} ${amOrPm}`;
      this.$store.commit('todos/addTodo', {
        text: this.newtodo,
        date: today + ' ' + currentTime,
        checked: false
      });
      this.text = this.newtodo + ' was successfully added.';
      this.newtodo = null;
      this.snackbar = true;
    }
  },
  data: () => ({
    newtodo: '',
    snackbar: false,
    text: ''
  })
};
</script>

<style lang="scss" scoped>
.deleted {
  text-decoration-line: line-through;
  transition: all 500ms;
}
</style>
