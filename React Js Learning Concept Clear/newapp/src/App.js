import { useState } from "react";
import AlertData from "./component/Alert/AlertData";
import Nav from "./component/Navbar/Nav";
import Text from "./component/TextData/Text";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyAbout from "./component/About/MyAbout";

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

      // dynamically change the title 
      // document.title="Textutils"
      // setInterval(() => {
      //   document.title="Textutils are good website"
      // }, 1500);
      // setInterval(() => {
      //   document.title="Textutils are capture"
      // }, 2000);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been changed", "success")
    }
  }
  return (
    <>
      <Router>
        <Nav Title={"TextUtils"} Home={"Home"} About={"About"} mode={mode} toggleMode={toggleMode} />
        <AlertData alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <MyAbout mode={mode}/>
            </Route>
            <Route exact path="/">
              <Text heading={"Enter Your Some Text"} summary={"Your Text Summary"} alert={showAlert} mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
