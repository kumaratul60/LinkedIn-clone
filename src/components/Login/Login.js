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
        // src="data:image/png;base64,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"
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
