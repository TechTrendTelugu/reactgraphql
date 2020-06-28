import React, { useState, Fragment } from "react";
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_USERS = gql`
  query getusers {
    user(where: { user_id: { _eq: 1} }, order_by: { user_name: desc }) {
      user_id
      user_name
  }
 }`;

 const UserList=({user})=>{
  return (
    <div>
      {user}
    </div>
 );
  
 };

 const UserListQuery=() => {
  const {loading, error, data}=useQuery(GET_USERS);
  let usersList;
    if(loading){
        return<div>Loading...</div>
    }
    if(error){
        console.error(error);
        return <div>Error!</div>;
    }
    if (data) {
      usersList = data.user.map(u => (
        <UserList key={u.user_id} user={u.user_name} />  //define the user in UserList
      ));
    }
    return <div>{usersList}</div>;
 }
 export default UserListQuery;
 export {GET_USERS};