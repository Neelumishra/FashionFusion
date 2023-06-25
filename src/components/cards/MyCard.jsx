import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useContext } from "react";
import {productContext} from "../../context/productContext"
import { useSnackbar } from "../globalSnackbar";

export default function MyCard({ image, name, price ,e}) {
  const { setCardList,cardList } = useContext(productContext);
  const { handleOpen } = useSnackbar();
  
  function handleList(e){
     handleOpen("Item Added Successfully", "success");
    setCardList([...cardList,{ ...e, quantity: 1 }]);
  }
  return (
    <Card sx={{ width:"300px"}}>
      <CardMedia component="img" height="140" image={image} alt={name} sx={{objectFit:"contain"}}/>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
        <Button variant="outlined" sx={{ marginTop: "1rem" }} onClick={()=>handleList(e)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
