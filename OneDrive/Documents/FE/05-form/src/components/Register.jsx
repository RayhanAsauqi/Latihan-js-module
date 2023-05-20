import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const inputUsername = (e) =>{
    // console.log(e.target.value)
    setUsername(e.target.value)
  }
  const inputPassword = (e) =>{
    // console.log(e.target.value)
    setPassword(e.target.value)
  }
  const inputPhoneNumber = (e) =>{
    // console.log(e.target.value)
    setPhoneNumber(e.target.value)
  }

  const register = (e) =>{
    e.preventDefault()
    console.log("ini hanya tes")
    console.log("username :" , username)
    console.log("password :", password)
    console.log("Number Phone :", phoneNumber)
  }

  return (
    <form onSubmit={register}>
        <h1>Register</h1>

        <label>Enter Your Name :</label>
      <input
        type="text"
        name="username"
        placeholder="username"
        // value={username}
        // onChange={inputUsername}
      />
      <br />
      <label>Enter Your Password :</label>
      <input
        type="password"
        name="password"
        placeholder="password"
        // value={password}
        // onChange={inputPassword}
        
      />
      <input
        type="number"
        name="phoneNumber"
        placeholder="Number Phone"
        // value={phoneNumber}
        // onChange={inputPhoneNumber}
        
      />
      <br />
      <button>Register</button>
    </form>
  );
}

export default Register;
