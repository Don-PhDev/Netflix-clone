import "../styles/SignUpScreen.css";

function SignUpScreen() {
  return (
    <div className="sign-up-screen">
      <form>
        <h1 className="sign-up-title">Sign In</h1>
        <input type="email" placeholder="Email" className="sign-up-email" />
        <input
          type="password"
          placeholder="Password"
          className="sign-up-password"
        />
        <button type="submit">Sign In</button>
      </form>

      <div className="remember-me">
        <input type="checkbox" id="rememberMe" />
        <label>Remember me</label>
      </div>

      <h4>
        <span>New to Netflix?</span>
        <span className="sign-up-screen-white sign-up-link">Sign up now</span>.
      </h4>
    </div>
  );
}

export default SignUpScreen;
