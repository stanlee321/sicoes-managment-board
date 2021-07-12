const dev = {
    API_URL: '/api',
    IMAGE_BASE_URL : 'http://image.tmdb.org/t/p/',
    // Sizes: w300, w780, w1280, original
    BACKDROP_SIZE : 'w1280',
    // w92, w154, w185, w342, w500, w780, original
    POSTER_SIZE : 'w780',
    
    FETCH_PARAMS_URL : '/v1/params',
    CREATE_PARAMS_URL : '/v1/create_queue',
    CHECK_QUEUE_URL : '/v1/queue_size'

}


const staging = {
    API_URL: '/api',
    IMAGE_BASE_URL : 'http://image.tmdb.org/t/p/',
    // Sizes: w300, w780, w1280, original
    BACKDROP_SIZE : 'w1280',
    // w92, w154, w185, w342, w500, w780, original
    POSTER_SIZE : 'w780',
    FETCH_PARAMS_URL : '/v1/params',
    CREATE_PARAMS_URL : '/v1/create_queue',
    CHECK_QUEUE_URL : '/v1/queue_size'

}


const prod = {
    API_URL: '/api',
    IMAGE_BASE_URL : 'http://image.tmdb.org/t/p/',
    // Sizes: w300, w780, w1280, original
    BACKDROP_SIZE : 'w1280',
    // w92, w154, w185, w342, w500, w780, original
    POSTER_SIZE : 'w780',
    FETCH_PARAMS_URL : '/v1/params',
    CREATE_PARAMS_URL : '/v1/create_queue',
    CHECK_QUEUE_URL : '/v1/queue_size'

}


const setConfig = (state:string|undefined) => {
    if (state === 'dev') {
      return dev;
    } else if (state === 'staging') {
      return staging;
    } else {
      return prod;
    }
  };
  

const config = setConfig(process.env.REACT_APP_STAGE);



const VAR_CONFIGS = { ...config }

export default VAR_CONFIGS