import { useState } from "react";
import { Link } from "react-router-dom";
import "./../App.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Login validation successful!");
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">

                <div className="logo">☀️</div>

                <h1>AI Smart Solar</h1>

                <p className="subtitle">
                    Smart Energy. Smarter Future.
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {errors.email && (
                            <p className="error-message">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>

                        <div className="password-wrapper">

                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>

                        </div>

                        {errors.password && (
                            <p className="error-message">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Options */}
                    <div className="login-options">

                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <a href="#" onClick={(e) => e.preventDefault()}>
                            Forgot Password?
                        </a>

                    </div>

                    {/* Login Button */}
                    <button type="submit">
                        Login
                    </button>

                </form>

                {/* Register Link */}
                <p className="register-link">
                    Don't have an account?{" "}
                    <Link to="/register">
                        Create Account
                    </Link>
                </p>

                <p className="footer-text">
                    AI Smart Solar Energy Management System
                </p>

            </div>
        </div>
    );
}

export default Login;