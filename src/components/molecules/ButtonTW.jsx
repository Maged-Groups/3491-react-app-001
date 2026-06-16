import Icon from "../atoms/icon"

export default function ButtonTW({ shadow = 'shadow-none', className = '', onClick = () => { }, text, iconName, variant = 'primary', rounded = true, size = 'md', iconPosition, disabled = false, isLoading = false, hoverable = false }) {


    // iconPosition = left|right
    const flexDirection = iconPosition === 'left' ? `flex-row-reverse` : `flex-row`

    // cursor = pointer|wait|not-allowed
    const cursor = isLoading ? 'cursor-wait' : disabled ? 'cursor-not-allowed' : 'cursor-pointer';

    // hover
    const hover = hoverable ? 'hover:scale-95  hover:brightness-50' : ''

    // Size
    const sizes = {
        sm: `py-0.5 px-1 ${rounded ? 'rounded-sm' : ''} text-sm`,
        md: `py-1 px-2 ${rounded ? 'rounded-lg' : ''} text-base`,
        lg: `py-1.5 px-2.5 ${rounded ? 'rounded-xl' : ''} text-2xl`,
        xl: `py-2 px-3 ${rounded ? 'rounded-2xl' : ''} text-2xl w-30`, //   
    }

    // Variants = primary|secondary|success|danger|warning|info
    const variants = {
        primary: 'text-violet-100 bg-violet-700',
        secondary: 'text-gray-100 bg-gray-700',
        success: 'text-green-100 bg-green-700',
        danger: 'text-red-100 bg-red-700',
        warning: 'text-yellow-100 bg-yellow-700',
        info: 'text-sky-100 bg-sky-700',
    }

    // Opacity
    const opacity = disabled || isLoading ? 'opacity-30' : 'opacity-100';

    // Main Button Styles
    const tWClasses = `inline-flex items-center justify-center gap-1 ${opacity} ${flexDirection} ${cursor} ${sizes[size]} ${hover} ${shadow} ${className} ${variants[variant]}`;

    return (
        <button onClick={onClick} className={tWClasses} disabled={disabled}>
            <span>{text}</span>
            {iconName && <Icon name={iconName} />}
        </button>
    )
}