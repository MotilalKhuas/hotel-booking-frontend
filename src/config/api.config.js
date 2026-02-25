const API_CONFIG = {
    HOTEL: {
        BROWSE_HOTELS: '/hotels/search',
        HOTEL_INFO: {
            URL: (hotelId) => `/hotels/${hotelId}/info`,
        },
    },
    AUTH: {
        SIGN_IN: "/auth/login",
        SIGN_UP: "/auth/signup",
        LOGOUT: '/auth/logout',
        REFRESH: '/auth/refresh'
    },
    USER: {
        PROFILE: {
            METHOD: "GET",
            URL: "/users/profile"
        },
        BOOKING_HISTORY: {
            METHOD: "GET",
            URL: "users/myBookings"
        },
        UPDATE_PROFILE: {
            METHOD: "PATCH",
            URL: "/users/profile"
        }
    },
    GUESTS: {
        ALL_GUESTS: {
            METHOD: "GET",
            URL: "users/guests"
        },
        REGISTER_GUEST: {
            METHOD: "POST",
            URL: "users/guests"
        },
        UPDATE_GUEST: {
            METHOD: "PUT",
            URL: (guestId) => `users/guests/${guestId}`
        },
        REMOVE_GUEST: {
            METHOD: "DELETE",
            URL: (guestId) => `users/guests/${guestId}`
        },
    },
    BOOKINGS: {
        INIT_BOOKING: {
            METHOD: "POST",
            URL: "bookings/init"
        },
        ADD_GUEST: {
            METHOD: 'POST',
            URL: (bookingId) => `/bookings/${bookingId}/addGuests`,
        },
        PAYMENT_BOOKING: {
            METHOD: 'POST',
            URL: (bookingId) => `/bookings/${bookingId}/payments`,
        },
        STATUS_BOOKING: {
            METHOD: 'GET',
            URL: (bookingId) => `/bookings/${bookingId}/status`,
        },
        CANCEL_BOOKING: {
            METHOD: 'POST',
            URL: (bookingId) => `/bookings/${bookingId}/cancel`,
        },
    }
};

export default API_CONFIG;
