import React from "react";
import "./tBody.css";

function TBody({ dat, name }) {
  return (
    <tbody className="t-body">
      {name
        ? dat
            .filter((el) => el.animal === name)
            .map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.animal}</td>
                <td>{item.type}</td>
                <td>
                  {item.items.map((el) => (
                    <p className="brand">{el.name}</p>
                  ))}
                </td>
                <td >{item?.currentPrice}</td>
                <td>{item?.prevPrice}</td>
                <td>
                  {item.items.map((el) => (
                    <p
                      className={
                        el.status === "В наличии" ? "status active" : "status"
                      }
                    >
                      {el?.status}
                    </p>
                  ))}
                </td>
              </tr>
            ))
        : dat.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.animal}</td>
              <td>{item.type}</td>
              <td>
                {item.items.map((el) => (
                  <p>{el.name}</p>
                ))}
              </td>
              <td className={item.currentPrice !== false? "prev-price active" : "prev-price"}>{item?.currentPrice}</td>
              <td  className={item.currentPrice !== false? "price active" : "price"}>{item?.prevPrice}</td>
              <td >
                {item.items.map((el) => (
                  <p className={
                        el.status === "В наличии" ? "status-f active" : "status-f"
                      }>{el?.status}</p>
                ))}
              </td>
            </tr>
          ))}
      {}
    </tbody>
  );
}

export default TBody;
