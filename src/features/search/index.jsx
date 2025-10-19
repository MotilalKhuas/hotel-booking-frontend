import {useForm} from 'react-hook-form'
import { Form } from '@/components/ui/form';
import LocationInput from './components/locationInput';
import DateSelectInput from './components/datePicker'
import OccupancyInput from './components/occupancy';
import {Button} from '@/components/ui/button'
import dayjs from 'dayjs';

const Search = () =>{
    const form = useForm({
        defaultValues: {
            city: '',
            roomsCount: 1,
            bookingDates: {
                from: dayjs().toDate(),
                to: dayjs().add(1, 'day').toDate()
            }
        },
    });
 
    function onSubmit(data){
        console.log("data submitted : ", data);
    }
 
    return(
        <section className="container">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='flex flex-col sm:flex-row items-center gap-1 bg-yellow-500 rounded p-1 h-16'
                >
                    <div className="flex-1 h-full">
                        <LocationInput form={form} />
                    </div>

                    <div className="flex-1 h-full">
                        <DateSelectInput form={form} />
                    </div>

                    <div className="flex-1 h-full">
                        <OccupancyInput form={form} />
                    </div>

                    <Button className="text-lg h-full">Search</Button>
                </form>
            </Form>
        </section>
    )
}
 
export default Search;

