import React, { useContext } from "react";
import { AuthContext } from "../MainLayout/MainLayout";

const SignUP = () => {
  const { handleSingUp } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const conPassword = e.target.conPassword.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      alert("Please enter password at least 6 characters");
      return;
    }

    if (password !== conPassword) {
      alert("Password did not match");
      return;
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{6,15}$/;

    if (!regex.test(password)) {
      alert("password not valid");
      return;
    }

    // console.log(email, password, conPassword);
    handleSingUp(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
          />
        </div>
        <br />
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <br />
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <br />

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="confirm password"
            name="conPassword"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUP;
