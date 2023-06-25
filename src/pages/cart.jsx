import React, { useEffect, useState, useContext } from "react";
import { productContext } from "../context/productContext";
import "./cart.css";

const List = ({ e, add }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    add(e?.price * count);
  }, [count]);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="product-card">
      <img src={e?.image} alt="Product Image" className="product-image" />
      <h3 className="product-title">{e?.title}</h3>
      <p className="product-price">{e?.price}</p>
      <div className="quantity-control">
        <button
          className="quantity-button decrease-quantity"
          onClick={handleDecrease}
        >
          -
        </button>
        <input type="text" className="quantity" value={count} readOnly />
        <button
          className="quantity-button increase-quantity"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <p className="final-price">Final Price: {e?.price * count}</p>
    </div>
  );
};

function Cart() {
  const { cardList } = useContext(productContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (const e of cardList) {
      sum += e.price;
    }
    setTotalPrice(sum);
  }, [cardList]);

  const add = (data) => {
    setTotalPrice(totalPrice + data);
  };

  return (
    <div>
      {cardList?.map((e) => (
        <List key={e.id} e={e} add={add} />
      ))}
      <p className="total-price">Total Final Price: {totalPrice}</p>
    </div>
  );
}

export default Cart;
