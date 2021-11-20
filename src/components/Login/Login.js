import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, provider } from "../../firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault(); // it prevent from refesh the page
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
      
        src="https://images.unsplash.com/photo-1592181572975-1d0d8880d175?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1793&q=80"
        alt="linkedin logo"
      />

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile picture URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
        {/* <br/> */}
        <span style={{ marginLeft: "10.5rem", color: "green" }}>OR</span>

        <Button color="primary" variant="contained" onClick={signIn}>
          Sign in with Google
        </Button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
