import React from "react"

export const Section = ({children} : {children: React.ReactNode}) => {
    return <section className="p-16">
        {children}
    </section>
}