"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logo_svg_1 = require("./logo.svg");
require("./App.css");
function App() {
    // const styles = {
    //   theme: {
    //     font: ''
    //   }
    // };
    return (<div className="App" style={{ height: '100vh', background: 'green', backgroundColor: 'green' }}>
      <header>
        yoo
        <img src={logo_svg_1.default} className="App-logo" alt="logo"/>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>);
}
exports.default = App;
