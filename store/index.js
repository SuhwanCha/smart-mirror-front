export const state = () => ({
  interests: ['todo'],
  location: {
    lat: 0,
    lng: 0
  }
});

export const mutations = {};

export const getters = {
  getMenu: function(state) {
    const menuList = {
      todo: {
        to: '/todo',
        title: 'To Do List',
        icon: 'list'
      }
    };
    let menu = [];
    state.interests.forEach(element => {
      menu.push(menuList[element]);
    });
    return menu;
  }
};
