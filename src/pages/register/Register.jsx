import { google } from "../../assets";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="section">
      <div className="container">
        <div
          style={{
            maxWidth: "24rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="has-text-centered">
            <h2 className="title is-size-3 mt-6 mb-2 is-spaced">
              Register an account
            </h2>
            <p className="subtitle mb-6">
              Please enter details to proceed.
            </p>
          </div>
          <form action="">
            <div className="field mb-4">
              <label className="label" for="">
                Username
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Create a Username"
                  style={{ borderRadius: "0px" }}
                />
              </div>
            </div>
            <div className="field mb-4">
              <label className="label" for="">
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email address"
                  style={{ borderRadius: "0px" }}
                />
              </div>
            </div>
            <div className="field mb-4">
              <label className="label" for="">
                Password
              </label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Create password"
                />
              </div>
            </div>
            <label className="checkbox is-flex mb-6">
              <input
                className="mr-4"
                type="checkbox"
                name="terms"
                value="1"
                style={{ borderRadius: "0px" }}
              />
              <div className="is-size-7">
                <span>
                  I want to receive updates about products and promotions.
                </span>
              </div>
            </label>
            <a className="button is-dark mb-4 is-fullwidth is-radiusless">
              Register
            </a>
            <a className="button mb-6 is-flex is-justify-content-center is-align-items-center is-radiusless">
              <img className="mr-2 image" src={google} alt="" />
              <span>Sign In with Google</span>
            </a>
            <p className="is-size-7 has-text-centered">
              <span>Have an account? </span>
              <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
