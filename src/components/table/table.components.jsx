import React from 'react';

import './table.styles.css'
import Button from '../button/button.components'






const Table = (props) => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.username}</td>
        <td>{props.user.email}</td>

        <td>{props.user.address.street}</td>
        <td>
            <Button name='delete' user={props.user} deleteUser={props.deleteUser} />
        </td>

    </tr>



)


export default Table;