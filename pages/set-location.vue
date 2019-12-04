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
    let location = await this.getLocation().catch(() => {
      alert('Geolocation is not available. Please check GPS state or permission.');
      this.$router.push('/');
    });
    const naver = window.naver;

    var mapOptions = {
      center: new naver.maps.LatLng(location.coords.latitude, location.coords.longitude),
      zoom: 13,
      useStyleMap: true
    };
    const map = new naver.maps.Map('map', mapOptions);
    new naver.maps.Marker({
      position: new naver.maps.LatLng(location.coords.latitude, location.coords.longitude),
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
