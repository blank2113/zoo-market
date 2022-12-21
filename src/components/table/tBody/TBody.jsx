import React from "react";
import './tBody.css'

function TBody({ dat }) {
  return (
    <tbody className="t-body">
      {dat.map((item, index) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.animal}</td>
          <td>{item.type}</td>
          <td>{item.items.map(el => <p>{el.name}</p>)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
