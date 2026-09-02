import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setMessage("");

        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email");
            return;
        }

        setMessage("Password reset link has been sent to your email!");
    };

    return (
        <div className="forgot-page">
            <div className="forgot-card">

                <div className="forgot-logo">🔐</div>

                <h1>Forgot Password?</h1>

                <p className="forgot-subtitle">
                    Enter your registered email to reset your password.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError("");
                                setMessage("");
                            }}
                        />

                        {error && (
                            <p className="error-message">
                                {error}
                            </p>
                        )}
                    </div>

                    <button type="submit">
                        Send Reset Link
                    </button>

                </form>

                {message && (
                    <p className="success-message">
                        {message}
                    </p>
                )}

                <p className="back-login">
                    Remember your password?{" "}
                    <Link to="/login">
                        Back to Login
                    </Link>
                </p>

                <p className="footer-text">
                    AI Smart Solar Energy Management System
                </p>

            </div>
        </div>
    );
}

export default ForgotPassword;