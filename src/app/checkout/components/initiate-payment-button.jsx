import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import useInitPayment from '../hooks/useInitPayment';
import { useGuestContext } from '@/lib/providers/guestContextProvider';

const InitiatePaymentsButton = ({id}) => {

    const {initiatePayment} = useInitPayment(id)
    const {selectedGuests} = useGuestContext();

    return (
        <Button
            onClick = {()=>initiatePayment(selectedGuests.map(g=>g.id))}
            size="lg"
            className="w-full h-12 shadow-lg uppercase text-base font-semibold transition-opacity  bg-purple-700 hover:bg-purple-700/80"
        >
            <Icon size="30px" icon="shield" />
            Proceed to Pay
        </Button>
    );
}

export default InitiatePaymentsButton