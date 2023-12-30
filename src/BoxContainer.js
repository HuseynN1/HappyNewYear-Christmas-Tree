import React, { useEffect, useState } from 'react'
import Box from './Box'
import "./style.css"
const BoxContainer = () => {
    const [state,setState]=useState("five-pointed-star")    
    const generateStar=()=>{
        if(state==="five-pointed-star"){
            setState("five-pointed-star-orange")
        }
        else{
            setState("five-pointed-star")
        }
    }
    useEffect(()=>{setInterval(() => {
        generateStar()
     }, 1000)},[]) 
 
  return (
    <div style={{width:"100%",height:"100vh",flexDirection:"column",flexWrap:"wrap" ,display:"flex",alignItems:"center",justifyContent:'center'}}>
       <div className={state}><Box/></div>
       <div><Box/></div> 
       <div style={{display:"flex"}}><Box/><Box/></div> 
       <div></div> 
       <div style={{display:'flex'}}><Box/><Box/><Box/></div> 
       <div style={{display:'flex'}}><Box/><Box/><Box/><Box/></div> 
       <div style={{display:'flex'}}><Box/><Box/><Box/><Box/><Box/></div> 
       <div style={{display:'flex'}}><Box/></div> 
       <div style={{display:'flex'}}><Box/><Box/><Box/></div> 

     
       
    
    </div>
  )
}

export default BoxContainer