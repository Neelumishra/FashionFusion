import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "react-material-ui-carousel";
import { Button, Paper } from "@mui/material";
import { MyCard } from "../components";
import { mensProduct } from "../services/productService";
import { womensProduct } from "../services/productService";
import { Link } from "react-router-dom";
function Homepage() {
  const [data,setData]=useState([])
   const [women, setWomen] = useState([]);
  useEffect(()=>{
    mensProduct().then((r) =>setData(r.slice(0,4)));

  },[])
   useEffect(() => {
     womensProduct().then((r) => setWomen(r.slice(0, 4)));
   }, []);
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      caption: "Image 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      caption: "Image 2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      caption: "Image 3",
    },
  ];
  return (
    <>
      <Carousel>
        {items.map((item, index) => (
          <Paper key={index}>
            <img
              width="100%"
              height="400px"
              src={item.image}
              alt={item.caption}
            />
          </Paper>
        ))}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "-15px",
        }}
      >
        <h4>Men's Collection</h4>
        <Link to="/mensection">
          {" "}
          <Button variant="outlined" style={{ color: "black" }}>
            View All&gt;&gt;
          </Button>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {data.map((e) => (
          <MyCard image={e.image} price={e.price} name={e.title} e={e} />
        ))}
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "-15px",
        }}
      >
        <h4>Women's Collection</h4>
        <Link to="/womensection">
          {" "}
          <Button variant="outlined" style={{ color: "black" }}>
            View All&gt;&gt;
          </Button>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {women.map((e) => (
          <MyCard image={e.image} price={e.price} name={e.title} e={e} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
