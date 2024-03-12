import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Carousel } from 'antd';
export default function Layout() {
  const {user,login}=useAuth()
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  console.log(user)
  return (
    <>
    <div onClick={()=>login("belay")} className="" style={{color:"green",fontWeight:"bold",cursor:"pointer"}}>Layout {user}  </div>
    <div className="">
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </div>
    <div className="">
       <Outlet/>
    </div>
    </>
  )
}
