import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import menClothingElements from './array'

const App = () => {
  //map method
  const menClothing = ['pants', ['shirt', 2 ] , 'suit', 'tie']
  const eachClothing = menClothing.map(menClothingElements)

  //Array Destructuring
  const [, [secondClothing]]= menClothing 

  //Rest Parameter or Operator
  const [firstClothing, ...restClothing] = menClothing 
  console.log(restClothing)

  //Spread Operator
  console.log(...menClothing)
  
  //Object
  const womenClothing = {
    dress:'Green',
    price: 100,
    design:{
      pearls:2000,
      glitter: 3000,
    }
   }
  //Object Desctructuring
   const {design:{
    glitter}
  } = womenClothing


  return (
    <>
    <div className='header'>
      <a href='Home'>Home</a>
      <a href='Men'>Men</a>
      <a href='Women'>Women</a>
      <a href='Cart'>Cart</a>
    </div>
    <div className='main'> 
    <h> Folder Structure and JSConcepts</h>
    <div className='menMap'>{menClothing}</div>
    <div className='arraydesctruct'>{secondClothing}</div>
    <div className='restparam'>{...restClothing}</div>
    <div className='objdestruct'>{glitter}</div>
    <div className='spreadoperator'>{...menClothing}</div>
    </div>
    <footer className='footer'> Copyright@2023</footer>
     
    </>
  )
}

export default App
