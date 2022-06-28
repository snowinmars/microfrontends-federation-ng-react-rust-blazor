import React from 'react'
import ReactDOM from 'react-dom'
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
    <Clicker/>
  </div>
};

class ChildReactElement extends HTMLElement {
  connectedCallback() {
    console.log('ChildReactElement connected')
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('child-react-element', ChildReactElement);
