import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode,
    className?: string,
}

export const Container = ({children, className} : ContainerProps) => {
    return <div className={`max-w-7xl ml-auto mr-auto ${className}`}>
        {children}
    </div>
}