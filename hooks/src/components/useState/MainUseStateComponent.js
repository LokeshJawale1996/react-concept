import React from 'react'
import UseStateExample from './UseStateExample'
import Counter from './Counter'
import TodoAdd from './TodoAdd'
import UserForm from './UserForm'
import ChangeValue from './ChangeValue'
export const MainUseStateComponent = () => {
  return (
    <div>
        <UseStateExample/>
        <Counter/>
        <TodoAdd/>
        <UserForm/>
        <ChangeValue/>
    </div>
  )
}
