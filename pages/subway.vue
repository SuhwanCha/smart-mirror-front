<template>
  <div>
    <v-row dense>
      <v-col
        cols="12"
        @click="window.location = 'https://m.map.naver.com/subway/subwayStation.nhn?stationId=925'"
      >
        <v-card color="#BDB092" dark>
          <v-card-title class="headline">
            <p>9호선 신논현역</p>
            <v-spacer></v-spacer>
            <p>0.3mi</p>
          </v-card-title>
          <v-card-subtitle>Scheduled: 3:21pm, 3:27pm, 3:33pm, 3:40pm</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        @click="window.location = 'https://m.map.naver.com/subway/subwayStation.nhn?stationId=925'"
      >
        <v-card color="#747F00" dark>
          <v-card-title class="headline">
            <p>7호선 논현역</p>
            <v-spacer></v-spacer>
            <p>0.4mi</p></v-card-title
          >
          <v-card-subtitle>Scheduled: 3:21pm, 3:27pm, 3:33pm, 3:40pm</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        @click="window.location = 'https://m.map.naver.com/subway/subwayStation.nhn?stationId=925'"
      >
        <v-card color="#009D3E" dark>
          <v-card-title class="headline">
            <p>2호선 강남역</p>
            <v-spacer></v-spacer>
            <p>1.1mi</p></v-card-title
          >

          <v-card-subtitle>Scheduled: 3:21pm, 3:27pm, 3:33pm, 3:40pm</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        @click="window.location = 'https://m.map.naver.com/subway/subwayStation.nhn?stationId=925'"
      >
        <v-card color="#D4003B" dark>
          <v-card-title class="headline">
            <p>신분당선 강남역</p>
            <v-spacer></v-spacer>
            <p>1.3mi</p></v-card-title
          >

          <v-card-subtitle>Scheduled: 3:21pm, 3:27pm, 3:33pm, 3:40pm</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        @click="window.location = 'https://m.map.naver.com/subway/subwayStation.nhn?stationId=925'"
      >
        <v-card color="#EF7C1C" dark>
          <v-card-title class="headline">
            <p>3호선 신사역</p>
            <v-spacer></v-spacer>
            <p>1.3mi</p></v-card-title
          >
          <v-card-subtitle>Scheduled: 3:21pm, 3:27pm, 3:33pm, 3:40pm</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    window: function() {
      return window;
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0 !important;
}
</style>
