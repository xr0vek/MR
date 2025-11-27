import React from "react"

export const Section = ({children} : {children: React.ReactNode}) => {
    return <section className="pt-16 pb-16">
        {children}
    </section>
}