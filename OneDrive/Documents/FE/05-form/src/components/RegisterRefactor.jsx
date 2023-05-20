import { useState } from "react";

function RegisterRefactor() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault()
    console.log(user)
  }

  
  return (
    <form onSubmit={register}>
      <h1>Register Refactoring</h1>

      <label>Enter Your Name :</label>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
      />
      <br />
      <label>Enter Your Password :</label>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
      />

      <br />
      <button>Register</button>
    </form>
  );
}

export default RegisterRefactor;
