import React, { Component } from 'react'
import Board from './board';
export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [
                Array(9).fill(null),
            ],
            xIsNext: true,
            jumpStep: 0
        }
    }
    handleClick(i) {
        //点击时找出截至(当前步骤)的数组，使用拷贝方式(防止影响原始数据)
        let history = this.state.history.slice(0,this.state.jumpStep+1)
        //找出当前的棋数组，使用拷贝方式(防止影响原始数据)
        let squares = [...history[this.state.jumpStep]]
        //判断当前是否有值或是否有人胜出
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        //下一个谁出手
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        //下棋结束，更新数据
        this.setState({
            history: history.concat([squares]),
            xIsNext: !this.state.xIsNext,
            jumpStep: ++this.state.jumpStep
        });
    }
    jumpTo(index) {
        //跳转回合
        this.setState({
            jumpStep: index,
            xIsNext: !index % 2
        })
    }
    render() {
        //查找当前渲染的数组
        const current = this.state.history[this.state.jumpStep];
        //判断棋局状态
        const winner = calculateWinner(current);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        //展示当前历史列表
        const moves = this.state.history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => { this.jumpTo(move) }}>{desc}</button>
                </li>
            )
        })
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        history={current}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}