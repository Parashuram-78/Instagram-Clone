import React from "react";
import "../LoginPage/LoginPage.css";
function SignIN() {
  return (
    <div>
      <input
        className="LoginPage_text"
        type="text"
        placeholder="Phone number, username or email"
      />
      <input
        className="LoginPage_text"
        type="password"
        placeholder="Password"
      />
      <button className="LoginPage_button">Sign In</button>
    </div>
  );
}

export default SignIN;
