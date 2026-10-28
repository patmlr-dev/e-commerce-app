import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";

function Auth() {
  const [mode, setMode] = useState("");
  const [error, setError] = useState(null);
  const [modeLink, setModeLink] = useSearchParams();

  useEffect(() => {
    setMode(modeLink.get("auth"));
  }, [modeLink]);

  const navigate = useNavigate();

  const { signUp, login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-header">
          {mode === "signup" ? "SIGN UP" : "LOGIN"}
        </h1>
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          {error && <div className="form-error">{error}</div>}
          <div className="form-input-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="form-error">{errors.email.message}</span>
            )}
          </div>
          <div className="form-input-container">
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
                  message: "Password must be less than 12 characters",
                },
              })}
            />
            {errors.password && (
              <span className="form-error">{errors.password.message}</span>
            )}
          </div>

          <button className="btn btn-max-width btn-blue">
            {mode === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>

        {mode === "signup" ? (
          <p className="auth-change">
            Already have an account?{" "}
            <span onClick={() => setModeLink({ auth: "login" })}>Login</span>
          </p>
        ) : (
          <p className="auth-change">
            Don't have an account?{" "}
            <span onClick={() => setModeLink({ auth: "signup" })}>Sign Up</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Auth;
