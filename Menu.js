import React from 'react';

class Menu extends React.Component{
  constructor(props){
    super()
    console.log(props);
    this.data = {uno: "uno", dos: "dos"}

  }
  render(){
    const elements = this.props.menu.map((item, index) => {
      return <li key={index}>{item.title}</li>
    })
    return(<nav>
        <ul>
          {elements}
        </ul>
      </nav>)
  }
}
// function Menu(){
//   return(<nav>
//       <ul>
//         <li>{this.uno}</li>
//       </ul>
//     </nav>)
// }
export default Menu;
