import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

//import Navbar from './componentes/Navbar';
//, Switch, NavLink, Link
import Usuarios from './modulos/Usuarios';


class App extends Component {

  render() {
    return (
	  <section>
	  <h2>Ivan K TP 2.8</h2>
	  
	   <Router>
	  <Route path="/" component={Usuarios} />
	  </Router>
    </section>
	  );
  }
}



export default App;
