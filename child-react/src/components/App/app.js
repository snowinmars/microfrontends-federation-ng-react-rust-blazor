import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Clicker} from "../Clicker/Clicker";

const reactVersion = require('../../../package.json').dependencies['react'];

const App = () => {
  return <div>
    <h1>
      Micro Frontend React
      <img alt={'react'} src={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"} height={"30"}></img>
    </h1>,
    <p>
      React Version: {reactVersion}
    </p>

    <div>
      <Link to="/childReact/a">a</Link> |
      <Link to="/childReact/b">b</Link> |
      <Link to="/childReact/clicker">Clicker</Link>
    </div>

    <Routes>
      <Route path="/childReact/a" element={'a'} />
      <Route path="/childReact/b" element={'b'} />
      <Route path="/childReact/clicker" element={<Clicker />} />
    </Routes>

  </div>
};

class ChildReactElement extends HTMLElement {
  connectedCallback() {
    console.log('ChildReactElement connected')
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, this);
  }
}

customElements.define('child-react-element', ChildReactElement);
