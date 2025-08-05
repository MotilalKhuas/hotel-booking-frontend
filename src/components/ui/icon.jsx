import icons from '@/lib/icons.jsx'

const Icon = ({icon, ...props}) =>{
    const IconComponent = icons[icon];
    return <IconComponent {...props}/>;
}

export default Icon;