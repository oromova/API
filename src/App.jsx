import React from 'react'
import { Sidebar } from './Sidebar';
import { Body } from './Body';

export const App = () => {
  return (
    <div style={{display: "flex"}}>
      <Sidebar/>
      <Body/>
    </div>
  )
}
