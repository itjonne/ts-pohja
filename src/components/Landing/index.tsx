import React, { useEffect } from 'react';

import Firebase from '../Firebase';

export default () => {
  useEffect(() => {
    const firebase = new Firebase();
    const usersRef = firebase.getUsers();
    usersRef.once("value", (snapshot) => {
      snapshot.forEach(user => {
        console.log(user.val());
      })
    })
  }, []);

  return(
    <h1>Landing</h1>
  )
};