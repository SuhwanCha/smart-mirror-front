<template>
  <div>
    <div id="map" style="width:100%;height:400px;"></div>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  async mounted() {
    // let location = await this.getLocation().catch(() => {
    //   alert('Geolocation is not available. Please check GPS state or permission.');
    //   this.$router.push('/');
    // });
    const naver = window.naver;
    let location = {
      latitude: 37.247334,
      longitude: 127.078445
    };
    var mapOptions = {
      center: new naver.maps.LatLng(location.latitude, location.longitude),
      zoom: 13,
      useStyleMap: true
    };
    const map = new naver.maps.Map('map', mapOptions);
    new naver.maps.Marker({
      position: new naver.maps.LatLng(location.latitude, location.longitude),
      map: map
    });

    this.overlay = false;
  },
  methods: {
    async getLocation() {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }
        navigator.geolocation.getCurrentPosition(
          pos => {
            resolve(pos);
          },
          err => {
            reject(err);
          },
          {
            timeout: 5000
          }
        );
      });
    }
  },
  data() {
    return {
      overlay: true
    };
  }
};
</script>

<style lang="scss">
#map > div:nth-child(2),
#map > div:nth-child(3),
#map > div:nth-child(4) {
  display: none;
}
</style>
