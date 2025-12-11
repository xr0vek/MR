import type { FC } from "react"
import type { ButtonProps } from "./Button.props"

export const Button: FC<ButtonProps> = ({children, className, ...props }) => {
    return <button {...props} className={`p-3 bg-sky-900 text-white rounded ${className}`}>{children}</button>
}