//Dependencies
import React from 'react'
import ReactDOM from "react-dom"

import Menu from "./Menu.js"

//Data
import items from "./data/data.js"


class App extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(<div>
        <Menu menu={items} />
    </div>)
  }
}
// function App(){
//   return(<div>
//     <Menu/>
//     </div>)
// }

ReactDOM.render(<App />,document.getElementById("react-container"))
