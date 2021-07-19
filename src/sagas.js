import {  takeEvery, put,call} from 'redux-saga/effects'
import axios from "axios";
import { message } from 'antd';
const DATA='jwt';

const url = 'https://api.backendless.com/7CEDE0AF-B5CF-6CD4-FFDB-E4BFD661BF00/840E0AA6-1F6D-462A-9CB3-FD3ACB51B542/users/register'
const url1 ='https://api.backendless.com/7CEDE0AF-B5CF-6CD4-FFDB-E4BFD661BF00/840E0AA6-1F6D-462A-9CB3-FD3ACB51B542/users/login'
// https://api.backendless.com/43A22E39-9977-4DB5-A4BF-1FF01CA827AD/DDAF60F8-B9C5-4B2D-9A35-CC6ABA68EF7E/users

function* Login(action) {
    try {
      const result = yield call(axios.post,url1,action.payload);
        yield put({type: "USER_LOGIN_SUCCESS", payload: result.data, text: result});
        console.log(result.data);
        alert("LOGGED IN SUCCESSFULLY");
  }catch(error) {
        yield put({type: "USER_LOGIN_FAILURE"});
        alert('ERROR');
    }
}
function* Register(action) {
    try {
        const response = yield call(axios.post, url, action.payload);
        yield put({type: "USER_REGISTER_SUCCESS", payload: action.payload,text:response});

        console.log(response.data);
        alert('YOU SUCCESSFULLY REGISTER');
  }catch (error) {
        yield put({type: "USER_REGISTER_FAILURE"});
        alert('ERROR');
    }
}
function* Formdata(action){
try {
 const url2='https://api.backendless.com/7CEDE0AF-B5CF-6CD4-FFDB-E4BFD661BF00/840E0AA6-1F6D-462A-9CB3-FD3ACB51B542/data/postdata'
const object=(JSON.parse(localStorage.getItem(DATA))['objectId']);
const url3=`https://api.backendless.com/7CEDE0AF-B5CF-6CD4-FFDB-E4BFD661BF00/840E0AA6-1F6D-462A-9CB3-FD3ACB51B542/data/Users/${object}/user_id:postdata:n`

const result = yield call(axios.post,url2,action.payload);
console.log(result);
       
   const res=yield call(axios.put,url3,[result.data.objectId]);
   console.log(res);
 const table=yield call(axios.get,`https://api.backendless.com/7CEDE0AF-B5CF-6CD4-FFDB-E4BFD661BF00/840E0AA6-1F6D-462A-9CB3-FD3ACB51B542/data/Users/${object}/user_id`);
console.log(table);
yield put({type: "TABLE_SUCCESS",payload: table.data,text:table});

        message.success('Post successfully uploaded');
    }catch (error) {
        yield put({type: "POST_FORM_FAILURE"});
        message.error('Post uploaded failed');
    }
}
function* TableData(action) {
    try{
        const object = (JSON.parse(localStorage.getItem(DATA))['objectId']);
        const table=yield call(axios.get,`https://api.backendless.com/7CEDE0AF-B5CF-6CD4-FFDB-E4BFD661BF00/840E0AA6-1F6D-462A-9CB3-FD3ACB51B542/data/Users/${object}/user_id`);
        console.log(table);
        yield put({type: "TABLE_SUCCESS",payload: table.data,text:table});
    }catch (error) {
        yield put({type:"TABLE_FAILURE"});
        message.error('Post uploaded failed');
    }

}
function* mySaga() {
 yield takeEvery("SIGN_IN",Login);
 yield takeEvery("SIGN_UP", Register);
 yield takeEvery("POST",Formdata);
 yield takeEvery("TABLE",TableData);
}
export default mySaga;