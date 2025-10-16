const API_CONFIG = {
  HOTEL: {
    BROWSE_HOTELS: '/hotels/search',
    HOTEL_INFO: {
      URL: (hotelId) => `/hotels/${hotelId}/info`,
    },
  },
  AUTH : {
    SIGN_IN : "/auth/login",
    SIGN_UP : "/auth/signup",
    LOGOUT: '/auth/logout',
    REFRESH : '/auth/refresh'
  },
  USER : {
    PROFILE : "/users/profile"
  }
};

export default API_CONFIG;
