import React from 'react'
import { FOOTER_SECTION, SOCIAL_LINKS } from '@/config/app.config';
import Icon from '@/components/ui/icon'
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container grid grid-cols-[repeat(auto-fill,_minmax(190px,1fr))] !pt-6 !pb-4 gap-9">
        {FOOTER_SECTION.map((section, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h3 className='text-sm font-bold'>{section.title}</h3>
            <ul className='flex flex-col gap-1'>
              {section.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='bg-brand'>
        <div className='flex flex-col flex-wrap items-center justify-center gap-4 p-4 mx-auto sm:flex-row sm:justify-between max-w-7xl'>
          <div className='flex items-center justify-center gap-4'>
            {SOCIAL_LINKS.map((link, index)=>(
              <a href={link.href} key={index} className='text-slate-100 hover:text-slate-300 transition-colors'>
                <Icon icon={link.icon} size="18"/>
              </a>
            ))}
          </div>
          <div>
            <p className="text-sm text-center text-white">
              Copyright &copy;{' '}
              {`${dayjs().year()} Booking.com™. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer










// import { FOOTER_SECTION, SOCIAL_LINKS } from '@/config/app.config';
// import React from 'react';
// import Icon from '../ui/icon';
// // import dayjs from 'dayjs';

// const Footer = () => {
//   return (
//     <div className="bg-secondary">
//       <footer className="container">
//         <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,1fr))] py-4 gap-6">
//           {FOOTER_SECTION.map((section, index) => (
//             <div key={index} className="flex flex-col gap-3">
//               <h3 className="text-sm font-bold">{section.title}</h3>
//               <ul className="flex flex-col gap-1">
//                 {section.links.map((link, index) => (
//                   <li key={index}>
//                     <a href={link.href} className="text-sm hover:underline">
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </footer>
//       <div className="bg-brand">
//         <div className="flex flex-col flex-wrap items-center justify-center gap-4 p-4 mx-auto sm:flex-row sm:justify-between max-w-7xl">
//           <div className='flex items-center justify-center gap-4'>
//             {SOCIAL_LINKS.map((link, index) => (
//               <a href={link.href} key={index} className='text-slate-100 hover:text-slate-300 transition-colors'>
//                 hello
//               </a>
//             ))}
//           </div>
//           <div>
//             <p className="text-sm text-center text-white">
//               Copyright
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;