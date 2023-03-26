import React from 'react'
import Counter from './Counter'
import MealsList from './MealsList'
import MealsProvider from './Providers/MealsProvider'


const MainUseContext = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-slate-500">USECONTEXT</h1>
      <h2 className="text-2xl font-semibold py-2">1 useContext Example</h2>
    <MealsProvider>
      <MealsList/>
      <Counter/>
    </MealsProvider>

    </div>
  )
}

export default MainUseContext