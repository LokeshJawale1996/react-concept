import React from 'react'
import ParentComponentOne from './ParentComponentOne'
import ChildComponentOne from './ChildComponentOne'
import OptimizingExpensiveCalTwo from './OptimizingExpensiveCalTwo'

const MainUseCallbackComponent = () => {
  return (
    <div>
        <ParentComponentOne/>
        <ChildComponentOne/>
        <OptimizingExpensiveCalTwo/>
    </div>
  )
}

export default MainUseCallbackComponent