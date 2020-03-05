import React from 'react';

import './table-list.styles.css'
import Table from '../table/table.components'






const TableList = (props) => (
  <div className='table-list'>
    <table>
      <th>Name</th>
      <th>username</th>
      <th>Email</th>
      <th>address</th>
      <th>button</th>

      {
        props.users.map(user => (
          <Table key={user.id} user={user} deleteUser={props.deleteUser} />
        ))
      }
    </table>

  </div>

)


export default TableList;