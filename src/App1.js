import React from "react";
import Blink from 'react-blink-text';

import './index1.css';
import 'antd/dist/antd.css';
import { connect} from 'react-redux'
import { Form, Input, Button , Row} from 'antd';
import {Link} from 'react-router-dom';
import img1 from './images/screen-1.jpg';
 import img2 from './images/group-3.png';
import store from "./app/store";
import Backendless from 'backendless';
import { SIGN_UP } from "./actiontypes";

Backendless.initApp('7CEDE0AF-B5CF-6CD4-FFDB-E4BFD661BF00', '840E0AA6-1F6D-462A-9CB3-FD3ACB51B542');
class SignUp extends React.Component{
    result = (values) => {
        store.dispatch({type: SIGN_UP, payload: values});

    };
    state = {
        loadings: [],
    };
    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 2500);
    };



    render(){
    // function Header() {

    //     return <img src={img1} alt="" className={"images"}/>  ;

    // }
    // function Header2() {
    //     return <img src={img2} alt="" className={"image2"}/>  ;

    // }
        function Footer(){
            return(

                <p style={{marginLeft: '7px'}}>Already have an account?<Link to='SignIn'>SignIn</Link></p>
                );

        }
        const { loadings } = this.state;
        return(
            <div>
                {/* <Header2/>
                <Header/> */}
<center>
<div><h2 class="glow">SIGN UP</h2></div>
        <Form
                name="normal_login"
                className="login-form"
                layout={'vertical'}
                onFinish={this.result}

            >
            <div>
                <Row justify={"space-between"}>
                <Form.Item name={'fname'} label={'First name'} style={{marginTop: '30px'}} >
                    <Input type={"text"} placeHolder={"Name"} style={{width: "220px"}}/>

                </Form.Item>
            <Form.Item name={'lname'} label={'Last name'} style={{marginTop: '30px'}} >
                    <Input type={"text"} placeHolder={"Name"} style={{width: "220px", float: "right", display: "inline-block"}}/>
                </Form.Item>


                </Row>
            </div>
                <Form.Item name={'email'} label={'Email'} >
                    <Input type={"email"} placeHolder={" Enter Email"}/>
                </Form.Item>
                <Form.Item name={'password'} label={'Password'}
                           rules={[
                               {
                                   required: true,
                                   pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
                                   message: 'Please input your password!',
                               },
                           ]}>
                    <Input
                        type={"password"} placeHolder={"Password"}/>
                </Form.Item>
                <Form.Item name={'confirm_password'} label={'Confirm password'}
                           dependencies={['password']}
                           rules={[
                               {
                                   required: true,
                                   message: 'Please confirm your password!',
                               },
                               ({ getFieldValue }) => ({
                                   validator(rule, value) {
                                       if (!value || getFieldValue('password') === value) {
                                           return Promise.resolve();
                                       }
                                       return Promise.reject('The two passwords that you entered do not match!');
                                   },
                               }),]}>
                    <Input
                        type={"password"} placeHolder={"Confirm Password"}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary"  style={{marginLeft:"30px"}} htmlType="submit" className="login-form-button"  loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                        Signup
                    </Button>

                </Form.Item>

        </Form>
                    <Footer/>

                    </center>
            </div>
        );
    }
}



const mapStateToProps = state =>{
    return{
        Email: state.Email,
        password: state.password,
        fname: state.fname,
        lname: state.lname
    };
};

export default connect(mapStateToProps)(SignUp);