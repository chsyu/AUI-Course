import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

import './App.css';


function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="hideLarge" onClick={()=>setOpen(true)}>
              &#9776;
            </button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className={`${open?"sidebar open":"sidebar"}`}>
          <h3 className="sidebar-header">Shopping Categories</h3>
          <button
            className="sidebar-close-button hideLarge"
            onClick={()=>setOpen(false)}
          >
            x
          </button>
          <ul>
            <li>
              <Link to="index.html">Pants</Link>
            </li>

            <li>
              <Link to="index.html">Shirts</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Switch>
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
            </Switch>
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
