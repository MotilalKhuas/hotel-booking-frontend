import React from 'react'
import { NavLink } from 'react-router'
import Icon from './icon'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button'

const LinkButton = ({ variant, className, activeClassName, icon, iconSize, to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                return cn(
                    buttonVariants({
                        variant: variant,
                        className: className,
                    }),
                    isActive && activeClassName
                )
            }}
        >
            {icon && <Icon icon={icon} size={iconSize} />}
            {children}
        </NavLink>
    )
}

export default LinkButton