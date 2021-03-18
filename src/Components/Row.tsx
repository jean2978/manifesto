import React from 'react'
import '../Styles/utilities.css'

interface Props {}

export const Row: React.FC<Props> = ({ children }) => {
    return (
        <div className="ut-row">
            {children}
        </div>
    )
}
