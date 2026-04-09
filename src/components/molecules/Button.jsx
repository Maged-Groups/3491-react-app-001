import Icon from "../atoms/icon"

export default function Button({ text, iconName, variant = 'primary', rounded = true, size = 'md', iconPosition, disabled = false, isLoading = false }) {

    // iconPosition = left|right
    const flexDirection = iconPosition === 'left' ? `row-reverse` : `row`

    // cursor = pointer|wait|not-allowed
    let cursor = isLoading ? 'wait' : disabled ? 'not-allowed' : 'pointer';

    // Size
    const sizes = {
        sm: {
            padding: `2px 4px`,
            borderRadius: rounded ? `4px` : 0,
            fontSize: `14px`,
        },
        md: {
            padding: `4px 8px`,
            borderRadius: rounded ? `8px` : 0,
            fontSize: `16px`,
        },
        lg: {
            padding: `6px 10px`,
            borderRadius: rounded ? `12px` : 0,
            fontSize: `24px`,
        }
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

    // Main Button Styles
    const styles = {
        display: `inline-flex`,
        alignItems: `center`,
        gap: 4,
        flexDirection,
        cursor,
        border: 'none',
        opacity: disabled || isLoading ? 0.3 : 1,
        ...sizes[size],
        ...variants[variant]
    };

    return (
        <button style={styles} disabled={disabled}>
            <span>{text}</span>
            {iconName && <Icon name={iconName} />}
        </button>
    )
}