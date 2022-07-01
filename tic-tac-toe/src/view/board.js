import Square from './square';
import React, { Component } from 'react'
export default class Board extends React.Component {
    renderSquare(i) {
        return (
        // <span>
            <Square
                key={i}
                value={this.props.history[i]}
                isWinner ={this.props.winValue?.includes(i)}
                onClick={() => this.props.onClick(i)}
            />
        )
    }
    renderBox(){
       return Array(3).fill(null).map((step1,index1)=>{
            const boardRow = Array(3).fill(null).map((step2,index2)=>{
                    return (
                        this.renderSquare(index1*3+index2)
                    )
            })

            return (
                <div className="board-row">
                    {boardRow}
                </div>
            )
            
        })
    }
    render() {
        const board =  Array(3).fill(null).map((step1,index1)=>{
            const boardRow = Array(3).fill(null).map((step2,index2)=>{
                    return (
                        this.renderSquare(index1*3+index2)
                    )
            })

            return (
                <div className="board-row" key={index1}>
                    {boardRow}
                </div>
            )
            
        })
        return (
            <div>
                {/* <div className="status">{status}</div> */}
                {/* <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div> */}
                {board}
            </div>
        );
    }
}
