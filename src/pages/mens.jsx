import React, { useEffect, useState } from "react";
import { mensProduct } from "../services/productService";
import { MyCard } from "../components";
function Mens() {
  const [data, setData] = useState([]);
  useEffect(() => {
    mensProduct().then((r) => setData(r));
  }, []);
  return (
    <div
      style={{
       
        display: "grid",
        gridTemplateColumns: "400px 400px 400px",
        gridTemplateRows: "auto",
        gap: "15px",
       paddingLeft:"6rem",
       paddingTop:"1rem"
      }}
    >
      {data.map((e) => (
        <MyCard image={e.image} price={e.price} name={e.title} e={e} />
      ))}
    </div>
  );
}

export default Mens;
