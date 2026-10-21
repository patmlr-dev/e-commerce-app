import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const { signUp, login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(null)
    let result
    if ( mode === "signup" ) {
      result = signUp(data.email, data.password)
    } else {
      result = login(data.email, data.password)
    }

   if (result.success) {
    navigate("/")
   } else {
    setError(result.error)
   }
  }

  return (
    <div>
      <h1>{mode === "signup" ? "Sign Up" : "Login"}</h1>
      <form className="auth-form" onClick={handleSubmit(onSubmit)}>
        {error && <div>{error}</div>}
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
