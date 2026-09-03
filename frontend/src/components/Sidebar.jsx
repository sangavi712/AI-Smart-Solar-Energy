import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">

            {/* Logo */}
            <div className="sidebar-logo">
                <div className="sidebar-logo-icon">
                    ☀️
                </div>

                <div>
                    <h2>AI Smart Solar</h2>
                    <span>Energy Management</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sidebar-nav">

                <p className="nav-title">
                    MAIN MENU
                </p>

                <NavLink
                    to="/dashboard"
                    className="nav-item"
                >
                    <span>🏠</span>
                    Dashboard
                </NavLink>

                <NavLink
                    to="/solar-monitoring"
                    className="nav-item"
                >
                    <span>☀️</span>
                    Solar Monitoring
                </NavLink>

                <NavLink
                    to="/energy-usage"
                    className="nav-item"
                >
                    <span>⚡</span>
                    Energy Usage
                </NavLink>

                <NavLink
                    to="/battery"
                    className="nav-item"
                >
                    <span>🔋</span>
                    Battery
                </NavLink>

                <NavLink
                    to="/analytics"
                    className="nav-item"
                >
                    <span>📊</span>
                    Analytics
                </NavLink>

                <p className="nav-title">
                    MANAGEMENT
                </p>

                <NavLink
                    to="/savings"
                    className="nav-item"
                >
                    <span>💰</span>
                    Savings
                </NavLink>

                <NavLink
                    to="/environment"
                    className="nav-item"
                >
                    <span>🌱</span>
                    Environmental Impact
                </NavLink>

                <NavLink
                    to="/settings"
                    className="nav-item"
                >
                    <span>⚙️</span>
                    Settings
                </NavLink>

            </nav>

            {/* Bottom */}
            <div className="sidebar-bottom">

                <div className="system-status">
                    <span className="status-dot"></span>

                    <div>
                        <strong>System Online</strong>
                        <small>All systems operational</small>
                    </div>
                </div>

                <NavLink
                    to="/login"
                    className="logout-link"
                >
                    <span>🚪</span>
                    Logout
                </NavLink>

            </div>

        </aside>
    );
}

export default Sidebar;