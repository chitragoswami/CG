//import React from "react";
import { useRef, useState } from "react"//useRef,useState ko define krte h

export default function Userprime(){
    const a=useRef(null)
    const[check,setCheck]=useState("")
    var c=true;
   function res(event){
        var n=a.current.value;
    for(var i=2;i<n/2;i++){
        if(n%i==0){
        c=false;
    }var h=""
    if(c){
       h= `${n} is prime No.`;
    }
    else{
        h= `${n} is not prime No.`;
    }
    }
    setCheck(h)
    event.preventDefault()

}
    return(<div><h1>hellooo.. User</h1>
        <form onSubmit={res}>
         <input type="text" ref={a} placeholder="Enter n" />
         <br />
         <input type="submit"  value="click"/>
         <br />
     <p>{check}</p>
       </form>
          </div>)
}