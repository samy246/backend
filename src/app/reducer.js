// import actions from "../actions";
import {USER_LOGIN_SUCCESS,USER_REGISTER_SUCCESS,TABLE_SUCCESS} from '../actiontypes';

const initialState ={
    Email:"",
    password: "",
    fname: "",
    lname: "",
    Login: " ",
    isAuthenticated: '',
    objectId:'',
    post_data:[]
    
}
const DATA='jwt';

const reducer =(state=initialState,action) => {

    switch (action.type){
        case USER_LOGIN_SUCCESS:
           const myObject ={
               fname:action.payload.fname,
               lname:action.payload.lname,
               objectId:action.payload.objectId,
         }
         const myJSON = JSON.stringify(myObject);
         localStorage.setItem(DATA,myJSON);
            return {
                ...state,
            
             Email: action.payload.login,
                password: action.payload.password,
                fname: action.payload.fname,
                lname: action.payload.lname,
                objectId: action.payload.objectId,
                isAuthenticated: true,
              

            };

        case USER_REGISTER_SUCCESS:
            
           
            return {
                ...state,
                fname: action.payload.fname,
                lname: action.payload.lname,
                Email: action.payload.email,
                password: action.payload.password,
                isAuthenticated: true



            }
            case TABLE_SUCCESS:
                return{
                    ...state,
                    post_data:action.payload,
                }

        default:
            return state;
    }
}
export default reducer;