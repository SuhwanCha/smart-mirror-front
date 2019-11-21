export const strict = false;

export const state = () => ({
  list: []
});

export const mutations = {
  check: function(state, index) {
    state.list[index].checked = !state.list[index].checked;
  },
  addTodo: function(state, data) {
    state.list.push(data);
  },
  delete: function(state, index) {
    state.list.splice(index, 1);
  }
};

export const getters = {
  TodoList: function(state) {
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
