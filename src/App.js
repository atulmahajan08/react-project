import React from 'react'
import { Component} from 'react';
// import "./style.css";
// import Button from "./Button";
import WebsiteApp from './Components/TemplateWebsite/WebsiteApp';


//! by using functional based components
const App = () => {
    return (
      <div>
        {/* <h1 style={{ textAlign: 'center' }}>Hello World !!</h1>
        <Button title="App store" />
        <Button title="Play store" />
        <Button /> */}
        <WebsiteApp />
        {/* <button className="button">App Store</button>
          <button className="button">Play Store</button> */}
      </div>
    )
  }


//! by using class components
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1 style={{ textAlign: 'center' }}>Hello World !!</h1>
//         <Button title="App store" />
//         <Button title="Play store" />
//         <Button />
//         {/* <button className="button">App Store</button>
//           <button className="button">Play Store</button> */}
//       </div>
//     )
//   }
// }

export default App;
