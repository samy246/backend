import React from "react";
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
import './dash.css'
import img1 from './images/tr.png'
import { UserOutlined} from '@ant-design/icons';
const { Header} = Layout;
const DATA='jwt';


class HeadLayout extends React.Component {
    logout=()=>{
        localStorage.clear();
        window.location.href='./SignIn';
    }
    
    render() {
       
        return (
            <div>
      
                <Layout>
                    <Header style={{position:'fixed',zIndex:1,width:'100%',marginLeft:'-360px'}}>


                        <Menu mode="horizontal" className={'menu'} >
                            {<Menu.Item> 
                                {<img src={img1} alt="" style={{marginLeft: '-550px'}} /> } </Menu.Item> }
                            <Menu.Item> <Link to="/profile"/>Profile </Menu.Item>
                            <Menu.Item ><Link to="/dashboard"/>Dashboard</Menu.Item>
                            <Menu.Item><Link to="/posts"/>Posts</Menu.Item>
                            <Menu.Item onClick={this.logout} >Logout</Menu.Item>
                            <Menu.Item className={'e'}>{JSON.parse(localStorage.getItem(DATA))['fname']} {JSON.parse(localStorage.getItem(DATA))['lname']} 
                            <UserOutlined /></Menu.Item>

                        </Menu>
                         
                   </Header>
                   </Layout>
          </div>
        );
    }
}

export default HeadLayout


