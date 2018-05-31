import React from 'react';

const Table = (props) => {
  const { employees, isLeagueAdmin, title } = props;


  return (
    <div className="Table">
      <h2>{title}</h2>
      <table>
        <tr>
          <th>Name</th>
          {isLeagueAdmin && (<th>Birthday</th>)}
        </tr>
        {
          employees.map(employee => (
            <tr key={employee.name}>
              <td>{employee.name}</td>
              {isLeagueAdmin && (employee.birthday.toString())}
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Table;