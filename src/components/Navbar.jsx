import React, { useState } from "react";
import "./Navbar.css";
import { useContext } from "react";
import { productContext } from "../context/productContext";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  IconButton,
  Badge,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
 const { cardList } = useContext(productContext);
  const handleCategoriesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoriesClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar color={"secondary"} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Apna Market
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            {" "}
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/account">
            {" "}
            <Button color="inherit">Account</Button>
          </Link>
          <Link to="/category">
            <Button
              color="inherit"
              onClick={handleCategoriesClick}
              endIcon={<ExpandMoreIcon />}
            >
              Categories
            </Button>
          </Link>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCategoriesClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleCategoriesClose}>Category 1</MenuItem>
            <MenuItem onClick={handleCategoriesClose}>Category 2</MenuItem>
            <MenuItem onClick={handleCategoriesClose}>Category 3</MenuItem>
          </Menu>

          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Search" sx={{ color: "inherit" }} />
          </Box>
          <Link to="/cart">
            <IconButton color="inherit">
              <Badge badgeContent={cardList.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
