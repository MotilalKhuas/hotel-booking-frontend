import {useForm} from 'react-hook-form'
import { Form } from '@/components/ui/form';
import LocationInput from './locationInput';
import {Button} from '@/components/ui/button'

const Search = () =>{
    const form = useForm({
        defaultValues:{
            city:"",
        }
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
                    <Button className="text-lg h-full">Search</Button>
                </form>
            </Form>
        </section>
    )
}
 
export default Search;