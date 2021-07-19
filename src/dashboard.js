import React from 'react';
import HeadLayout from './layout'

const DATA='jwt';

function Dashboard(props){
    return(
        <div>
    <HeadLayout/>
   <h1>hhhhhhhhhh</h1>
   
       <center>  <h2>Hello Mr.{JSON.parse(localStorage.getItem(DATA))['fname']} {JSON.parse(localStorage.getItem(DATA))['lname']}</h2></center>
 
   
   
   </div>
    )
}
export default Dashboard