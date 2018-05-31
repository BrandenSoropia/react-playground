import React from 'react';

const Generictable = props => {
  const { data } = props;

  return (
    <div className="GenericTable">
     <table>
        <tr>
          {Object.keys(data).map(key => (<th>{key}</th>))}
        </tr>
        {
          data.map(employee => (
            <tr key={employee.name}>
              {Object.keys(employee).map(key => <td>{`${employee[key]}`}</td>)}
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Generictable;