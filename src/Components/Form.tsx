import React, { useEffect, useState } from 'react'
import '../Styles/utilities.css'
import { Column } from './Column';
import { Images } from './Images';
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
                    <Images name={name.toLowerCase()}/>
                </Column>
            </Row>
           
            
          
        </div>
    )
}

