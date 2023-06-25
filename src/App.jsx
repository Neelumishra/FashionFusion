import "./App.css";
import Router from "./router/router";
import Navbar from "./components/Navbar";
import GlobalSnackbar from "./components/globalSnackbar";
function App() {
  return (
    <>
      <GlobalSnackbar>
        <Navbar />
        <Router />
      </GlobalSnackbar>
    </>
  );
}

export default App;
