export const state = () => ({
  interests: ['todo'],
  location: {
    lat: 0,
    lng: 0
  },
  userId: null
});

export const mutations = {
  uploadIntersts: function(state, data) {
    let idx;
    console.log(state.interests.indexOf(data));
    if ((idx = state.interests.indexOf(data)) != -1) {
      state.interests.splice(idx, 1);
    } else {
      state.interests.push(data);
    }
  },
  setUserId: function(state, data) {
    this.$cookies.set('smart-mirror-uid', data, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365
    });
    state.userId = data;
  }
};

export const getters = {
  getMenu: function(state) {
    const menuList = {
      todo: {
        to: '/todo',
        title: 'To Do List',
        icon: 'list'
      },
      bus: {
        to: '/bus',
        title: 'Bus',
        icon: 'directions_bus'
      },
      subway: {
        to: '/subway',
        title: 'Subway',
        icon: 'directions_subway'
      },
      stock: {
        to: '/stock',
        title: 'Stock',
        icon: 'trending_down'
      }
    };
    let menu = [];
    state.interests.forEach(element => {
      menu.push(menuList[element]);
    });
    return menu;
  }
};
