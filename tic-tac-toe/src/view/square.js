// import React, { Component } from 'react'
// export default class Square extends React.Component {
//     render() {
//       return (
//         <button 
//         className="square" 
//         onClick={() =>{ this.props.onClick()}}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }

import classnames from 'classnames';
  function Square(props) {
    return (
      <button 
      onClick={props.onClick} 
      className={classnames({'win-line': props.isWinner,square:true})}
      >
        {props.value}
      </button>
    );
  }
  export default Square;