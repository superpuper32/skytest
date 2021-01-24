const host = 'https://api.giphy.com/v1';

const API_KEY = 'gR30u9O8KPOanwIQupHbD90d4k57EOeY';

export default {
  getImageUrl: () => [host, 'gifs', `random?api_key=${API_KEY}`].join('/'),
};