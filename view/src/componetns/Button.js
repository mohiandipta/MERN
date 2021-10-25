import React from 'react';
import fetchUserData from '../App'

export const Button = () => {
    return (
        <button onClick={fetchUserData} className='btn btn-primary'>
            Fetch user data
        </button>
    );
}

// export default Button;
