import {Button} from '@/components/ui/button.jsx'

const HeroSection = () => {
  return (
    <section className='bg-brand'>
        <div className='container text-white'>
            <h1 className='text-5xl font-extrabold leading-tight mt-6'>
                Find your next stay
            </h1>
            <p className='text-2xl font-medium leading-snug'>
                Search deals on hotels, homes, and much more...
            </p>
            <Button className="text-base font-semibold h-12 mt-6 px-4 cursor-pointer">Discover Holiday Rentals</Button>
        </div>
    </section>
  )
}

export default HeroSection