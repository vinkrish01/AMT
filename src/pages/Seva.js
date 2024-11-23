import React, { useEffect, useState } from "react";
import sevaJSONData from "../data/seva.json";
import "../styles/Seva.css"

const Seva = () => {
  const [sevaList, setSevaList] = useState([]);
  useEffect(() => {
    setSevaList(sevaJSONData);
  }, []);

  return (
    <div className="sevas-container">
      <h2>Seva to Maha Lakshmi</h2>
      <ul className="sevas-list">
        {sevaList.map((seva, index) => (
          <li key={index} className="seva-item">
            <div className="seva-details">
              <h3>{seva.name}</h3>
              {seva.description && <p>{seva.description}</p>}
              {seva.days && <p>{seva.days}</p>}
            </div>
            <div className="seva-price">
              <p>{seva.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seva;
