import {getAssetPath} from "@/lib/utils.js"

const AuthLayout = ({children, title, description}) =>{
    return(
        <div className="flex justify-center items-center py-10 sm:py-20 px-5 w-full">
            <div className="rounded-lg shadow-md sm:mx-auto p-4 sm:p-6 w-full sm:max-w-md">
                <div className="flex flex-col justify-center items-center">
                    <div className="p-3 rounded-lg shadow mb-3">
                        <img
                            width={30}
                            height={30}
                            src={getAssetPath('bookingcom-icon-logo.svg')}
                            alt="logo"
                        />                 
                    </div>
                    <h1 className='text-xl font-semibold text-center mb-1'>{title}</h1>
                    <p className="text-sm text-center">{description}</p>                   
                    {children}   
                </div>
            </div>
        </div> 
    )
}

export default AuthLayout;