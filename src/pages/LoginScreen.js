import SignUpScreen from "./SignUpScreen";
import { useState } from "react";
import "../styles/LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login-screen">
      <div className="login-screen-bg">
        <img
          className="login-screen-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix logo"
        />
        <button onClick={() => setSignIn(true)} className="sign-in-btn">
          Sign In
        </button>

        <div className="login-screen-bg-gradient" />
        <div className="login-screen-body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1 className="login-screen-title">
                Unlimited films, TV <br />
                programmes and more.
              </h1>
              <h2 className="login-screen-subtitle">
                Watch anywhere. Cancel at any time.
              </h2>
              <h3 className="email-form-title">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="email-form-contents">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="email-form-cta-btn"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
