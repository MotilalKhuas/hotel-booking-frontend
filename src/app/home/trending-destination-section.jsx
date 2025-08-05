import {Button} from '@/components/ui/button.jsx'
import { TRENDING_DESTINATIONS } from '@/config/app.config.js'
import { getAssetPath } from '@/lib/utils.js'
 
const TrendingDestination = () => {1
  return (
    <section className='container my-16'>
       <div className='space-y-1 mb-4'>
            <h2 className='text-2xl font-bold'>Trending destinations</h2>
            <p className='text-base text-muted-foreground'>Most popular options among travelers living in India</p>
       </div>
       <div className='grid grid-cols-6 gap-4'>
            {
                TRENDING_DESTINATIONS.map((destination, index)=>{
                    return(
                        <div key={index} className={`relative rounded-lg overflow-hidden h-[270px] ${destination.className}`}>
                            <img src={getAssetPath(destination.image)} alt={destination.title} className='rounded-lg object-cover size-full'/>
                            <div className='absolute from-70% to-100% inset-0 size-full bg-gradient-to-t from-transparent to-blue-800/60'>
                              <div className="p-3">
                                <h3 className="text-xl text-white font-bold">{destination.title}</h3>
                              </div>
                            </div>
                        </div>    
                    )
                })
            }
       </div>
    </section>
  )
}
 
export default TrendingDestination
