import React, { useState } from 'react'
import StepperNumber from './StepperNumber';

export const AddPages = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        // 👇️ toggle
        setIsActive((current) => !current);

        // 👇️ or set to true
        // setIsActive(true);
    };
    return (
        <>
            <StepperNumber active={1}/>
            <button
                style={{
                    width: '550px',
                    height: '300px',
                    marginLeft: '20px',
                    backgroundColor: isActive ? 'salmon' : '',
                    color: isActive ? 'white' : '',
                }}
                onClick={handleClick}
            ></button>
        </>)
}
