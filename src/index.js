import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

  const Title = () =>{  
    return (
      <span>React</span>
      )
  }

  const Animal = ({ name }) => (
    <li>
      <span>{name}</span>
    </li>
  )
  
  
  const Animals = () => {
    const animalList = ['dog', 'cat', 'tiger']
  
    return (
      <ol>
        {animalList.map((animal, index) => (
          <Animal key={index} name={animal} />
        ))}
      </ol>
    )
  }
  
  const App2 = () => {
    const logNickname = event => {
      const nickname = event.target.value
      console.log(nickname)
      console.log('nickname length: ', nickname.length)
    }
    return(
    <Fragment>
      <button onClick={event => console.log('clicked1!')}>click1!</button>
      <button onClick={event => console.log('clicked2!')}>click2!</button>     
      <input type='text' onChange={event => console.log(event.target.value)} />
      <input type='text' onChange={logNickname} />
    </Fragment>
    )




    }
    const Counter = () => {
      const [nickname, setNickname] = useState('Danuel')
      const [count, setCount] = useState(0)
    
      const decreaseCount = () => {
        setCount(count - 1)
      }
      const increaseCount = () => {
        setCount(count + 1)
      }
    
      useEffect(() => {
        document.title = count
      })
    
      return (
        <div>
          <p>{nickname}</p>
          <p>{count}</p>
          <button onClick={decreaseCount}>- 1</button>
          <button onClick={increaseCount}>+ 1</button>
        </div>
      )
    }
ReactDOM.render(<Counter />, document.getElementById('root'));
//ReactDOM.render(<Title/>, document.getElementById('title'));

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Bye />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
