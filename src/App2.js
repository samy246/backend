import React from "react";
import Blink from 'react-blink-text';

import './index2.css';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
//import actions from './actions/action';
// import Dashboard from "./dashboard";
import { Form, Input, Button } from 'antd';
import {Link} from 'react-router-dom';
import img1 from './images/screen-1.jpg';
import img2 from './images/group-3.png';
import store from "./app/store";
import Backendless from 'backendless';
import { SIGN_IN } from "./actiontypes";



Backendless.initApp('7CEDE0AF-B5CF-6CD4-FFDB-E4BFD661BF00', '840E0AA6-1F6D-462A-9CB3-FD3ACB51B542');

class SignIn extends React.Component {

    result = (values) => {
        store.dispatch({type: SIGN_IN, payload: values});
console.log(values);

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
        }, 3000);
    };



    render() {

        //  function Header() {

        //       return
        //       <img src={img1} alt="" className={"images"}/>;

        //   }

        // function Header2() {
        //     return <img src={img2} alt="" className={"image2"}/>;

        // }

        function Footer() {
            return (
                <p className={"footer"}>Don't have an account?<Link to='SignUp' >SignUp</Link></p>);
        }

        const { loadings } = this.state;
        return (


            <div>
                   {/* <Header2/> 
                <Header/>   */}

                <center>
                   {/* Blink color='blue' text='SIGNIN' fontSize='2000'></Blink> */}
                   <div><h2 class="glow">SIGN IN</h2></div>
                    <Form
                    name="normal_login"
                    className="login-form"
                    layout={'vertical'}
                    onFinish={this.result}>
                    <Form.Item name={'login'}
                               label={'Email'}
                               rules={[{type: 'email'}]}
                               style={{marginTop: '130px'}}>
                        <Input type={"email"} placeHolder={"Email"}/>
                    </Form.Item>
                    <p className={"login-form-forgot"}>Forgot password?</p>
                    <Form.Item name={'password'}
                               label={'Password'}
                               rules={[
                                   {
                                       required: true,
                                       pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
                                       message: 'Invalid Password!',
                                   },
                               ]}

                     >
                        <Input
                            type={"password"} placeHolder={"Password"} style={{width:'450px'}}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" style={{marginLeft:"30px"}} htmlType="submit" className="login-form-button" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                            SignIn
                        </Button>

                    </Form.Item>
                </Form>
               
                <Footer/> </center>
            </div>
        );
    };
}


const mapStateToProps = state =>{
    return{
        email: state.Email,
        password: state.password
    };
};

export default connect(mapStateToProps)(SignIn);