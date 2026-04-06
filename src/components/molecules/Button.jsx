import Icon from "../atoms/icon"

export default function Button({ text, variant, size, iconPosition, disabled, isLoading }) {
    return (
        <button>
            <span>{text}</span>
            <Icon />
        </button>
    )
}