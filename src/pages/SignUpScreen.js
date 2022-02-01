import { useRef } from "react";
import { auth } from "../firebase";
import "../styles/SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="sign-up-screen">
      <form>
        <h1 className="sign-up-title">Sign In</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="sign-up-email"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="sign-up-password"
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>

      <div className="remember-me">
        <input type="checkbox" id="rememberMe" />
        <label>Remember me</label>
      </div>

      <h4>
        <span>New to Netflix?</span>
        <span className="sign-up-screen-white sign-up-link" onClick={register}>
          Sign up now
        </span>
        .
      </h4>
    </div>
  );
}

export default SignUpScreen;
