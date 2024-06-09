"use client"
import React from 'react'
import { Provider } from 'react-redux'
import Store from '../redux/store/store'
// import Store from "../redux/store/store"
const Providers = ({children}) => {
  return (
    <div>
        <Provider store={Store}>
            {children}
        </Provider>
    </div>
  )
}

export default Providers