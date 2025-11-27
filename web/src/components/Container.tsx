import type { ReactNode } from "react";

export const Container = ({children} : {children: ReactNode}) => {
    return <div className="mr-6 ml-6">
        {children}
    </div>
}