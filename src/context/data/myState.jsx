import React from 'react'
import MyContext from './myContext';

function MyState(props) {
    const state = {
        name: "Kamal Nayan",
        class: "9 C"
    }
  return (
    <MyContext.Provider value={state}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState