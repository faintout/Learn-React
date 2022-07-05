import React, { useState,useEffect } from 'react';

export default function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  useEffect(()=>{
      //可替代React 中的 
      //componentDidMount，componentDidUpdate 和 componentWillUnmount
      //默认为 componentDidMount，componentDidUpdate
      return ()=>{
        //此处执行 componentWillUnmount
      }
  })
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}