import React, { useState } from 'react';
import './App.css';
import Nav from './componets/Navbar/Nav';
import News from './componets/News/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const pageSize = 20
  const apiKey = '4deb9f466b364a5f91e1a59caf5a8eb5'
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div>
      <Router>
        <Nav title="NewsApp" mode={mode} togglemode={togglemode} />
        <LoadingBar
          color='#f11946'
          progress={progress} />

        <Switch>
          <Route key="general" exact path="/general">
            <News setProgress={setProgress} mode={mode} pageSize={pageSize} apiKey={apiKey} country="in" category="general" />
          </Route>
          <Route key="business" exact path="/business">
            <News setProgress={setProgress} mode={mode} pageSize={pageSize} apiKey={apiKey} country="in" category="business" />
          </Route>
          <Route key="entertainment" exact path="/entertainment">
            <News setProgress={setProgress} mode={mode} pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" />
          </Route>
          <Route key="health" exacte path="/health">
            <News setProgress={setProgress} mode={mode} pageSize={pageSize} apiKey={apiKey} country="in" category="health" />
          </Route>
          <Route key="science" exact path="/science">
            <News setProgress={setProgress} mode={mode} pageSize={pageSize} apiKey={apiKey} country="in" category="science" />
          </Route>
          <Route key="sports" exact path="/sports">
            <News setProgress={setProgress} mode={mode} pageSize={pageSize} apiKey={apiKey} country="in" category="sports" />
          </Route>
          <Route key="technology" exact path="/technology">
            <News setProgress={setProgress} mode={mode} pageSize={pageSize} apiKey={apiKey} country="in" category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
