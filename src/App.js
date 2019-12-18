import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Workout from "./components/Workout";

function App() {
  return (
    //Handling Routing for different components
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/workout' component={Workout} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
