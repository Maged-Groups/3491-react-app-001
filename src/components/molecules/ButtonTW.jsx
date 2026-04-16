import Icon from "../atoms/icon"

export default function Button({ text, iconName, variant = 'primary', rounded = true, size = 'md', iconPosition, disabled = false, isLoading = false, hoverable = false }) {

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
        secondary: {
            background: '#cebcd5',
            color: 'rgb(96, 22, 111)'
        },
        success: {
            background: '#694',
            color: '#282'
        },
        danger: {
            background: '#e64',
            color: '#622'
        },
        warning: {
            background: '#dd2',
            color: '#330'
        },
        info: {
            background: '#79e',
            color: '#23e'
        },
        primary: {
            background: '#38cfc8',
            color: '#08534f'
        }
    }

    // Opacity
    const opacity = disabled || isLoading ? 'opacity-30' : 'opacity-100';

    // Main Button Styles
    const className = `inline-flex items-center gap-1 ${opacity} ${flexDirection} ${cursor} ${sizes[size]} ${hover}`;


    //     flexDirection,
    //         cursor,
    //         ...sizes[size],
    //         ...variants[variant]
    // };

    return (
        <button className={className} disabled={disabled}>
            <span>{text}</span>
            {iconName && <Icon name={iconName} />}
        </button>
    )
}