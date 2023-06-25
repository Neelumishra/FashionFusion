import React, { useState, createContext, useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SnackbarContext = createContext();

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

const GlobalSnackbar = ({children}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("info");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (newMessage, newSeverity) => {
    setMessage(newMessage);
    setSeverity(newSeverity);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider value={{ handleOpen }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={severity}
        >
          {message}
        </MuiAlert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export default GlobalSnackbar;
