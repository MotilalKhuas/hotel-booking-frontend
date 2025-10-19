import React from 'react'
import { Link } from 'react-router'
import { Button } from './button'
import  Icon  from './icon'

const LinkButton = ({variant, className, to, icon, iconSize, children}) => {
  return (
    <Button asChild variant={variant} className={className}>
        <Link 
            to={to}
            className='flex items-center justify-start gap-2'
        >
            {icon && <Icon icon={icon} size={iconSize}/>}
            {children}
        </Link>
    </Button>
  )
}

export default LinkButton