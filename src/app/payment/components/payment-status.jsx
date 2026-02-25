import usePollPaymentStatus from '../hooks/usePollPaymentStatus'
import { BOOKING_STATUS, PAYMENT_STATUS_CONFIG } from '@/config/payment.config';
import Icon from '@/components/ui/icon';
import LinkButton from '@/components/ui/linkButton';

const PaymentStatus = () => {

    const { paymentStatus } = usePollPaymentStatus();

    return (
        <div className='container flex items-center justify-center'>
            <div className="flex flex-col items-center justify-center gap-4 max-w-lg my-16">
                <div className="flex items-center justify-center w-full">
                    <Icon icon={PAYMENT_STATUS_CONFIG[paymentStatus].icon} className={`${PAYMENT_STATUS_CONFIG[paymentStatus].iconClass}`} size="60px" />
                </div>
                <h1 className={`text-xl font-bold text-center ${PAYMENT_STATUS_CONFIG[paymentStatus].titleClass}`}>
                    {PAYMENT_STATUS_CONFIG[paymentStatus].title}
                </h1>
                <p className="text-base font-medium text-center text-muted-foreground">
                    {PAYMENT_STATUS_CONFIG[paymentStatus].description}
                </p>
                {paymentStatus === BOOKING_STATUS.ERROR && (
                    <div>
                        <p className="text-sm leading-normal text-center">
                            Need help? Please reach out to us at {' '}
                            <a
                                href="mailto:support@example.com"
                                className="text-primary hover:underline"
                            >
                                support@example.com
                            </a>
                            . Our team will get back to you as soon as possible.
                        </p>
                    </div>
                )}
                {paymentStatus === BOOKING_STATUS.CONFIRMED && (
                    <LinkButton>
                        View Booking History
                    </LinkButton>
                )}
            </div>
        </div>
    )
}

export default PaymentStatus