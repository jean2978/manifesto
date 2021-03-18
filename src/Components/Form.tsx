import React, { useEffect, useState } from 'react'
import Patrik from '../Media/patrik.jpg'
import '../Styles/utilities.css'
import { Column } from './Column';
import { Row } from './Row';

export const Form: React.FC = () => {
    const [name, setName] = useState<String>("");

    useEffect(() => {
        setName(name);
    },[name])
    
    return (
        <div className="container">
            <Row>
                <Column>
                    <form>
                        <p>What's your name?</p>
                        <input name="name" type="text" onChange={(e) => setName(e.target.value)}/>
                    </form>
                    {name.toLowerCase().includes("patrik") && (
                    <div className="container">
                    <img src={Patrik} alt="noob"/>
                    </div>
            )}
                </Column>
            </Row>
           
            
          
        </div>
    )
}

