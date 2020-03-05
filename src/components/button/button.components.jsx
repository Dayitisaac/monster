import React from 'react';

import './button.styles.css'




const Button = (props) => (
    <button className='btn' onClick={() => props.deleteUser(props.user.id)}>
        {props.name}

    </button>


)
export default Button