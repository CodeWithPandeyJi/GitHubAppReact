import { createContext, useReducer } from "react";
//import { useState } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {

    // const [users, setUsers] = useState([]);          ---Replacing this my reducers
    // const [loading, setLoading] = useState(false);
    const initialState={
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const URL = process.env.REACT_APP_GITHUB_URL;
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    const [state,dispatch] = useReducer(githubReducer,initialState);  //reducers returna the updated state

    const fetchUsers = async () => {
      //setLoading(true);
      dispatch({type: "SET_LOADING" , payload: true}); //dispatch takes the action object of the reducer.
                                                       // in our case action has type and payload please 
                                                       // check in the reducer :)

      const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });

      const data = await response.json();  // data will have user list from api pass it to reducer dispatch

      dispatch({type: "GET_USERS" , payload: data}) //setUsers(data);
      
    };

    const searchUsers = async (text) => {
        dispatch({type: "SET_LOADING" , payload: true});

        const params = new URLSearchParams({
            q: text,
        })

        const response = await fetch(`${ URL }/search/users?${ params }`,{
            headers: {
                Authorization: `token ${ token }`
            },
        });

        const { items } = await response.json();

        dispatch({type: "GET_USERS" , payload: items });
    };

    const clearUsers = () => {
        dispatch({type: "CLEAR_USERS"});
    }

    const getUser = async (login) => {
        dispatch({type: "SET_LOADING" , payload: true});

        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`,{
            headers : {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        });

        const data =await response.json();
        console.log(data);

        dispatch({type: "GET_USER",payload: data})
    }

    const getRepos = async (login) => {
        dispatch({ type: "SET_LOADING", payload: true });

        const params = new URLSearchParams({
          sort: "created",
          per_page: 10,
        });

        const response = await fetch(`${URL}/users/${login}/repos?${params}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        const data = await response.json();
        dispatch({ type: "GET_REPOS", payload: data });
      };

    return (
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos:state.repos, 
            loading: state.loading,
            searchUsers,
            clearUsers,
            fetchUsers,
            getUser,
            getRepos
        } }>
        { children }
    </GithubContext.Provider>
    ) 

}

export default GithubContext;