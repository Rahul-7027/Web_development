import { useState } from "react";
import AlertData from "./component/Alert/AlertData";
import Nav from "./component/Navbar/Nav";
import Text from "./component/TextData/Text";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been changed", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been changed", "success")
    }
  }
  return (
    <>
      <Nav Title={"TextUtils"} Home={"Home"} About={"About"} Contact={"Contact US"} mode={mode} toggleMode={toggleMode} />
      <AlertData alert={alert} />
      <div className="container">
        <Text heading={"Enter Your Some Text"} summary={"Your Text Summary"} alert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
