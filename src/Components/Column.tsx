import React from 'react'
import '../Styles/utilities.css'

interface Props {}

export const Column: React.FC<Props> = ({children}) => {
    return (
        <div className="ut-col">
            {children}
        </div>
    )
}
