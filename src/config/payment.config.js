export const BOOKING_STATUS = {
    CONFIRMED: 'CONFIRMED',
    CANCELLED: 'CANCELLED',
    EXPIRED: 'EXPIRED',
    ERROR: 'ERROR',
    PROCESSING: 'PROCESSING',
    MAX_RETRIES_EXCEEDED: 'MAX_RETRIES_EXCEEDED',
};


export const PAYMENT_STATUS_CONFIG = {
    [BOOKING_STATUS.PROCESSING]: {
        title: 'Processing Your Payment',
        description:
            'Please wait while we securely process your transaction. Do not refresh or close this page.',
        icon: 'loader',
        titleClass: '',
        iconClass: 'animate-spin'
    },
    [BOOKING_STATUS.CONFIRMED]: {
        title: 'Payment Successful',
        description:
            'Your payment was successfully processed. You will receive an email confirmation shortly.',
        icon: 'confirmed',
        titleClass: 'text-green-600',
        iconClass: 'text-green-600'
    },
    [BOOKING_STATUS.ERROR]: {
        title: 'Payment Failed',
        description: 'Your payment was not successful. Please try again.',
        icon: 'error',
        titleClass: 'text-red-600',
        iconClass: 'text-red-600'
    },
    [BOOKING_STATUS.CANCELLED]: {
        title: 'Payment Cancelled',
        description:
            'Your payment was cancelled. If this was a mistake, please try again.',
        icon: 'cancelled',
        titleClass: 'text-amber-600',
        iconClass: 'text-amber-600'
    },
    [BOOKING_STATUS.EXPIRED]: {
        title: 'Payment Expired',
        description:
            'Your payment session has expired. Please initiate a new payment.',
        icon: 'expired',
        titleClass: 'text-gray-600',
        iconClass: 'text-gray-600'
    },
    [BOOKING_STATUS.ERRMAX_RETRIES_EXCEEDEDOR]: {
        title: 'Payment Processing Failed',
        description:
            'We were unable to process your payment at this time. Please contact our support team for further assistance.',
        icon: 'maxRetriesExceeded',
        titleClass: 'text-orange-600',
        iconClass: 'text-orange-600'
    }
}