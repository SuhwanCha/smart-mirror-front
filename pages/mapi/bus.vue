<template>
  <div class="wrapper">
    <div v-for="item in data" :key="item.name" class="bus">
      <v-icon :color="item.color" size="100">directions_bus</v-icon>
      <span class="name">{{ item.name }}</span>
      <span class="time">{{ item.time ? parseInt(item.time / 60) + '분' : 'N/A' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'api',
  async asyncData({ $axios }) {
    let bus = await $axios.$get('/api/bus/1');
    let bustime = await $axios.$get('/api/bus/2');
    let data = [];
    bus = bus.busRoutes;
    bustime = bustime.message.result.busArrivalList;
    for (let i = 0; i < bus.length; i++) {
      for (let j = 0; j < bustime.length; j++) {
        if (bus[i].id == bustime[j].routeId) {
          data.push({
            name: bus[i].name,
            color: bus[i].type.color,
            time: bustime[j].predictTime1 || null
          });
        }
      }
    }
    return {
      data: data.sort((a, b) => (a.time > b.time ? 1 : -1))
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0 !important;
}
.wrapper {
  display: flex;
  overflow-x: scroll;
  .bus {
    margin-right: 10px;
    min-width: 180px;
  }

  i {
    float: left;
  }
  span {
    color: white;
    font-weight: bold;
    font-size: 1.3em;
    display: block;
    &.name {
      margin-top: 20px;
    }
  }
}
</style>
