import React from 'react';
import fetchUserData from '../App'

export const Button = () => {
    return (
        <button onClick={fetchUserData} className='btn btn-primary'>

        </button>
    );
}

// export default Button;
