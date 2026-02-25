const PATHS = {
    HOME: "/",

    SIGN_IN: "/signin",
    SIGN_UP: "/signup",

    HOTEL: "/hotel/:id?",
    SEARCH: "/search?",

    CHECKOUT: "/hotel/:id/checkout?",
    PAYMENT_STATUS: "/payments/:bookingId/status",

    SETTINGS : {
        PROFILE: '/me/profile',
        BOOKING_HISTORY: '/me/booking-history',
        TRAVELERS: '/me/travelers',
    }
}

export { PATHS };