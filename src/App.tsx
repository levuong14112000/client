import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from './Model/product';
import Catalog from './Component/catalog/catalog';
import { Typography } from '@mui/material';





const products : Product[] = [

];


function App() {
  //hub
  const [addedProduct, setProducts] = useState<Product[]> ([]);

  useEffect(() =>{
    fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => 
       setProducts(data)
    );
    
  },  []);

  // const clickHandle = () =>{
  //   const newProduct = { name: 'product 3', price: 33.22 };
  //   setProducts([...addedProduct, newProduct]);
  //   alert('Product added!'); 
  // }

  return (
    // JSX
    <div className='app' style={ {color : 'black' } }>

      <Typography variant='h2'>My Shop</Typography>
      <Catalog products = {addedProduct}></Catalog>
        

    </div>
  );
}

export default App;
