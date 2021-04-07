import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Rajjak', 'Alamgir', 'Salman', 'Sakib', 'Shovu'];
  const products=[
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
    {name:'Premium El', price:'$279.99'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am react Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map( nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
            products.map(product => <Product products={product}></Product> )
          }
        <Product products={products[0]}></Product>      
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () =>setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseLeave={() =>setCount(count - 1)}>Decrease</button>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle={
    border:'2px solid lightgray',
    borderRadius:'5px',
    backgroundColor:'gray',
    height:'200px',
    width:'200px',
    float:'left',
    padding:'10px',
    margin:'2px'
  }
  const {name,price} = props.products;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
