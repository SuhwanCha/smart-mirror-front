export default function({ $axios, app }) {
  $axios.onRequest(config => {
    config.headers.common['access-token'] = app.$cookies.get('masket');
    // config.headers.common['Access-Control-Allow-Origin'] = '*'
  });
}
