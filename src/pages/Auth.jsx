import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

function Auth() {
  const [mode, setMode] = useState("signup");
  const { signUp, user, logout, login } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if ( mode === "signup" ) {
      signUp(data.email, data.password)
    } else {
      login(data.email, data.password)
    }
  }

  return (
    <div>
      { user && <p>User logged in: {user.email}</p>}
      <button onClick={() => logout()}>Logout</button>
      <h1>{mode === "signup" ? "Sign Up" : "Login"}</h1>
      <form className="auth-form" onClick={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            maxLength: {
              value: 12,
              message: "Password must be less than 12 characters"
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button>{mode === "signup" ? "Sign Up" : "Login"}</button>
      </form>

      {mode === "signup" ? (
        <p>
          Already have an account?{" "}
          <span onClick={() => setMode("login")}>Login</span>
        </p>
      ) : (
        <p>
          Don't have an account?{" "}
          <span onClick={() => setMode("signup")}>Sign Up</span>
        </p>
      )}
    </div>
  );
}

export default Auth;
