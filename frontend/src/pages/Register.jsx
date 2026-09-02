import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Registration validation successful!");
        }
    };

    return (
        <div className="register-page">
            <div className="register-card">

                <div className="register-logo">☀️</div>

                <h1>Create Account</h1>

                <p className="register-subtitle">
                    Join AI Smart Solar Energy
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Full Name */}
                    <div className="register-input-group">
                        <label htmlFor="name">Full Name</label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        {errors.name && (
                            <p className="register-error">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="register-input-group">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {errors.email && (
                            <p className="register-error">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="register-input-group">
                        <label htmlFor="phone">Phone Number</label>

                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Enter 10-digit phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        {errors.phone && (
                            <p className="register-error">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="register-input-group">
                        <label htmlFor="password">Password</label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        {errors.password && (
                            <p className="register-error">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="register-input-group">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>

                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />

                        {errors.confirmPassword && (
                            <p className="register-error">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Terms */}
                    <label className="terms">
                        <input type="checkbox" required />
                        I agree to the Terms & Conditions
                    </label>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="register-button"
                    >
                        Create Account
                    </button>

                </form>

                {/* Login Navigation */}
                <p className="login-link">
                    Already have an account?{" "}
                    <Link to="/login">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Register;