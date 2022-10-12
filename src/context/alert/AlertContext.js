//step1 import context
import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

//step 2 use the context to create new context
const AlertContext = createContext();

//step 3 every context must have context provider so create provider
export const AlertProvider = ({ children }) => {

    //inside this maintain the initial state variable and function which is needed
    const initialState = null;

    //declare reducer or use reducer
    const[state,dispatch] = useReducer(AlertReducer,initialState);


    //function
    const setAlert = (msg,type) => {
        dispatch({
            type: "SET_ALERT",
            payload: {msg, type},
        })
    };

    setTimeout(() => {
        dispatch({
            type: "REMOVE_ALERT"
        })
    },5000);

    //return the provider
    return (
        <AlertContext.Provider value={{
            alert: state,
            setAlert
        }}>
            { children }
        </AlertContext.Provider>
    )

}

//step 4 export the context
export default AlertContext;
