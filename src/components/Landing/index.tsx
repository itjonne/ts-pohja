import React, { useEffect, useContext } from 'react';
import { FirebaseContext } from "../Firebase";

import Firebase from '../Firebase';

export default () => {
  const firebase: Firebase | null = useContext(FirebaseContext);

  useEffect(() => {
    /*
    if (firebase) {
      const usersRef = firebase.getUsers();
      usersRef.once("value", (snapshot) => {
        snapshot.forEach(user => {
          console.log(user.val());
        })
      })
    }

    */
   console.log("Landing");
  }, []);

  return(
    <h1>Landing</h1>
  )
};