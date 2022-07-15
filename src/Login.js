import { CometChat } from "@cometchat-pro/chat";
import React, { useState } from "react";

export default function Register(props) {
  const [phone, setPhone] = useState("");
  const setUser = props.setUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    var UID = phone;
    var authKey = "0dec2d9dd932a629b4cfb0dab89567d6a4cd4d82";

    CometChat.login(UID, authKey).then(
      (User) => {
        console.log("Login Successful:", { User });
        // User loged in successfully.
        console.log(User.uid);
        setUser(User);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
        // User login failed, check error and take appropriate action.
      }
    );
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <legend>Login</legend>
        <label>Phone Number</label> <br />
        <input
          type="tel"
          required
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
