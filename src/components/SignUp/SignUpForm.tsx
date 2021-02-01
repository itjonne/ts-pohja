import React, {useEffect, useState} from 'react';

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
}

export const SignUpForm = () => {
  const [user, setUser] = useState(INITIAL_STATE);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = event.target.name;
    const value: string = event.target.value;
    setUser({...user, [name]: value})
  }

  const {
    username, email, passwordOne, passwordTwo, error
  } = user;

  const invalid = (passwordOne !== passwordTwo) || username === "" || email === "" || passwordOne === "";

  return(
    <form onSubmit={onSubmit}>
      <input name="username" value={username} onChange={onChange} type="text" placeholder="Username" />
      <input name="email" value={email} onChange={onChange} type="email" placeholder="Email" />
      <input name="passwordOne" value={passwordOne} onChange={onChange} type="password" placeholder="Password" />
      <input name="passwordTwo" value={passwordTwo} onChange={onChange} type="password" placeholder="Password again" />
      <button disabled={invalid} type="submit">Sign Up</button>
      {error && <p>{error}</p>}    
    </form>
  )
}