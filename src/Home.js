import React from 'react'
import img1 from './m.png';
import img2 from './w.gif';
import './bounce.css';
//import { Carousel } from 'antd';
import {Layout,Image} from "antd";
const { Header} = Layout;
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
class Home extends React.Component{
    render(){
        
        
        return(
            
            
            <Layout>
                <Header style={{backgroundColor: 'lightgrey'}}>
                <center>
                    {/* <marquee><h1>WELCOME</h1></marquee> */}
                <marquee behavior="scroll" direction="left">
                <img src={img2} width={120}  alt='' />
                </marquee>
                
                <img src={img1} width={200} alt='' className={"bounce"}/>
                </center>
                    </Header>
            </Layout>
            
        );
    }
}
export default Home