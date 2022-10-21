import React, { useContext, useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import GithubContext from "../../context/github/GithubContext";
import TokenExpired from "../../pages/TokenExpired";
import UserItem from "./UserItem";
function UserResults() {

  const {users , loading , tokenexpired, fetchUsers} = useContext(GithubContext);

  useEffect(() => {
    //fetchUsers();
  }, []);
  
  if (loading) {
    return (
      <div>
        <HashLoader
          color='#808080'
          loading={loading}
          size={100}
          className='mx-auto'
        />
      </div>
    );
  }
  if (!loading && !tokenexpired) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user,index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    );
  }
  else{
    return(
      <TokenExpired />
    )
  }
}
export default UserResults;