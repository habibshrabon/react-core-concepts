import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  var person = {
    name: 'Dr.Mahfuz',
    job: 'singer'
  }
  var person2 = {
    name: 'Eva Rahman',
    job: 'Lady singer'
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  const names = ['Foysal', 'Nipu', 'Halim','sumon', 'Mamun']
  const products = [
    {name: 'photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$50.99'},
    {name: 'PDF Reader', price: '$9.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a React Person</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

          {
            products.map(product => <Product product={product}></Product>)
          }
        {/* <Product product= {products[0]}></Product>
        <Product product= {products[1]}></Product>
        <Product product= {products[2]}></Product> */}

        <Person name= {names[1]} job= "Engineer"></Person>
        <Person name= "Md.Ahsan Habib" job= "Engineer"></Person>
        <Person name= "Sadia khan" job= "Doctor"></Person>
    

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react paragraph</p>
        <h1 style={style}>My Heading: {person.name +" "+ person.job}</h1>
        <h2 style= {{backgroundColor: 'cyan', color: 'red'}}>Singer: {person2.name + ' ' + person2.job}</h2> */}
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handelIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseOver= {() => setCount(count - 1)} >Decrease</button>
      <button onClick= {() => setCount(count + 1)} >Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users :{users.length}</h3>
      <ol>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ol>
    </div>
  )
}
function Product(props) {
  const productStyles = {
    border: '2px solid blue',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    color: 'black',
    height: '300px',
    width: '400px',
    float: 'left'
  }
  const {name, price} = props.product
  return (
    <div style={productStyles}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
      
    </div>
  )
}
function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    width: '500px'
  }
  
  return (
    <div style= {personStyle}>
      <h1>My Name: {props.name}</h1>
      <h3>My Profession: {props.job}</h3>
    </div>
  )
}

export default App;
