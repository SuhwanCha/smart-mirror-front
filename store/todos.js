export const strict = false;

export const state = () => ({
  list: []
});

export const mutations = {
  check: function(state, index) {
    this.$axios.$post('/api/todo/check', {
      uid: this.$cookies.get('smart-mirror-uid'),
      created_at: state.list[index].date,
      checked: !state.list[index].checked
    });
    state.list[index].checked = !state.list[index].checked;
  },
  addTodo: function(state, data) {
    this.$axios.$post('/api/todo/put', {
      uid: this.$cookies.get('smart-mirror-uid'),
      created_at: data.date,
      text: data.text
    });

    state.list.push(data);
  },
  delete: function(state, index) {
    this.$axios.$post('/api/todo/delete', {
      uid: this.$cookies.get('smart-mirror-uid'),
      created_at: state.list[index].date
    });
    state.list.splice(index, 1);
  }
};

export const getters = {
  TodoList: function(state) {
    // this.$axios.$get('/api/todo/get/' + this.$cookies.get('smart-mirror-uid')).then((res) => {});
    return state.list;
  },
  doneModel: function(state) {
    let chk = [];
    state.list.forEach(element => {
      chk.push(element.checked ? true : false);
    });
    return chk;
  }
};
