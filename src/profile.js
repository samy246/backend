import React from 'react';
import HeadLayout from './layout'
const DATA='jwt';

function Profile(props){
    return(
        <div>
    <HeadLayout/>
   <div style={{marginTop:'10px'}}>
       <h2>bgijgbri</h2></div>
   
  <marquee direction="left"> <h1>WELCOME Mr.{JSON.parse(localStorage.getItem(DATA))['fname']} {JSON.parse(localStorage.getItem(DATA))['lname']}</h1></marquee>
  <marquee direction="right"> <h1>How are u Mr.{JSON.parse(localStorage.getItem(DATA))['fname']} {JSON.parse(localStorage.getItem(DATA))['lname']}</h1></marquee>
   </div>
    )
}
export default Profile