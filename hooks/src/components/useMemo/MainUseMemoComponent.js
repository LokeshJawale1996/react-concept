import React from 'react'
import ProductTable from './ProductTable';

const products = [
    { id: 1, name: 'Samsung s20 FE', price: 29999 },
    { id: 2, name: 'Vivo v23', price:450000 },
    { id: 3, name: 'vodafone', price: 20 },
    { id: 4, name: 'Oppo Reno', price: 25 },
    { id: 5, name: 'Intex I22', price: 30 },
  ];
const MainUseMemoComponent = () => {
    
  return (
    <div>
     <h1>Product Table Example</h1>
      <ProductTable products={products} />
    </div>
  )
}

export default MainUseMemoComponent