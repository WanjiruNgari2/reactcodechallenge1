import React, {useState} from 'react';
import './App.css';



function App() {

const [cart, setCart] = useState([]); //empty array will render on initial only
const product = [
  { "id": 1, "name": "Dress", "price": 500 },
  { "id": 2, "name": "Jeans", "price": 340 },
  { "id": 3, "name": "Sneakers", "price": 160 },
  { "id": 4, "name": "T-Shirt", "price": 230,},
  { "id": 5, "name": "Hat", "price": 150 },
  { "id": 6, "name": "Socks", "price": 50 }
];


//add item to cart
const addToCart = (product) => {
  setCart((prevCart) => {
     const oldProduct = prevCart.find(item => item.id === product.id);
     if (oldProduct) {
      return prevCart.map((item) => 
        item.id === product.id ? 
      {...item, quantity: item.quantity + 1} : item); //will add quantity of items by one 
     }
     return [...prevCart, {...product, quantity: 1}];  //use spread to add prevCat to new returned array
  });
};


//totalprice
const totalprice = cart.reduce(
  (total, item) => total + item.price * item.quantity, 0
);

//deleteitem
const deleteItem = (productID) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== productID));
};


  return (
  <div className='appcontainer' >
                <div className='productcontainer'>
                <h1>New Clothes Available</h1>
                  {product.map((product) => (
                    <div key={product.id} className='item'>
                      <h2>{product.name}</h2>
                  <p> price: {product.price}</p>
                  <div>
                    <button onClick = {() => addToCart(product)}> ADD TO Cart</button>
                  </div>
                  </div>
              ))};
            </div>
              

            <div className=' cartcontainer'>
          <h2> YOUR CART</h2>
           {cart.length === 0 ? (
            <p>Your cart is empty</p> ) : 
            (cart.map((item) => (
              <div key={item.id} className='cart'> {/*key attribute to uniquely identify this div*/}
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p> 
                <button onClick={() => addToCart(item)}> ADD TO CART</button>    
                <button onClick={() =>  deleteItem(item.id)}> REMOVE</button>
                </div>
            )))
          }
    </div>




          {cart.length > 0 && (
            <div className='total'>
              <h3>TOTAL: {totalprice}</h3> 
              </div>
          )}
</div>
    );
     }

export default App;
