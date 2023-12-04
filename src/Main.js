import React, { useState } from "react";

function Main() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorconfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length > 8) {
      setErrorUsername("");
      setUsername("green");
    } else {
      setErrorUsername("Username must be 8 letters long");
      setUserColor("red");
    }
    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("");
      setErrorEmail("Email should have @gmail");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setConfirmPassword("green");
    } else {
      setErrorPassword("Password should be 8 letters long");
      setPasswordColor("red");
    }
    if (password != "" && password == confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPassword("green");
    } else {
      setErrorConfirmPassword("Password didn't match");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <h1 className="heading">Login</h1>
      <div className="card">
        <div className="card-image">
          <form>
            <input
              type="text"
              placeholder="Name"
              style={{ borderColor: userColor }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="error">{errorUsername}</p>
            <input
              type="email"
              placeholder="Email"
              style={{ borderColor: emailColor }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">{errorEmail}</p>
            <input
              type="password"
              placeholder="Password"
              style={{ borderColor: passwordColor }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{errorPassword}</p>
            <input
              type="password"
              placeholder="Confirm-Password"
              style={{ borderColor: confirmPasswordColor }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="error">{errorconfirmPassword}</p>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
