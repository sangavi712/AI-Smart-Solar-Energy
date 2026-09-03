import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../App.css";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        // Email validation
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email";
        }

        // Password validation
        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password =
                "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        // Login success
        if (Object.keys(newErrors).length === 0) {
            navigate("/dashboard");
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">

                {/* Logo */}
                <div className="logo">
                    ☀️
                </div>

                {/* Title */}
                <h1>AI Smart Solar</h1>

                <p className="subtitle">
                    Smart Energy. Smarter Future.
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className="input-group">

                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);

                                setErrors({
                                    ...errors,
                                    email: ""
                                });
                            }}
                        />

                        {errors.email && (
                            <p className="error-message">
                                {errors.email}
                            </p>
                        )}

                    </div>

                    {/* Password */}
                    <div className="input-group">

                        <label htmlFor="password">
                            Password
                        </label>

                        <div className="password-wrapper">

                            <input
                                id="password"
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);

                                    setErrors({
                                        ...errors,
                                        password: ""
                                    });
                                }}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword
                                    ? "🙈"
                                    : "👁️"}
                            </button>

                        </div>

                        {errors.password && (
                            <p className="error-message">
                                {errors.password}
                            </p>
                        )}

                    </div>

                    {/* Login Options */}
                    <div className="login-options">

                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>

                    </div>

                    {/* Login Button */}
                    <button type="submit">
                        Login
                    </button>

                </form>

                {/* Register */}
                <p className="register-link">

                    Don't have an account?{" "}

                    <Link to="/register">
                        Create Account
                    </Link>

                </p>

                {/* Footer */}
                <p className="footer-text">
                    AI Smart Solar Energy Management System
                </p>

            </div>
        </div>
    );
}

export default Login;