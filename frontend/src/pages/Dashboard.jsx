import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-layout">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Area */}
            <div className="dashboard-main">

                {/* Header */}
                <header className="dashboard-header">
                    <div>
                        <h1>Dashboard</h1>
                        <p>
                            Smart Energy. Smarter Future.
                        </p>
                    </div>

                    <div className="user-section">
                        <div className="user-info">
                            <span className="user-avatar">
                                👤
                            </span>

                            <div>
                                <strong>Welcome, User</strong>
                                <small>Solar Energy User</small>
                            </div>
                        </div>

                        <button className="notification-btn">
                            🔔
                        </button>
                    </div>
                </header>

                {/* Content */}
                <main className="dashboard-content">

                    {/* Title */}
                    <div className="dashboard-title">
                        <div>
                            <h2>Solar Energy Overview</h2>
                            <p>
                                Monitor your solar energy
                                performance.
                            </p>
                        </div>

                        <div className="status-badge">
                            ● System Online
                        </div>
                    </div>

                    {/* Statistics */}
                    <section className="stats-grid">

                        <div className="stat-card">
                            <div className="stat-icon">
                                ☀️
                            </div>

                            <div>
                                <p>Solar Energy Generated</p>
                                <h3>24.8 kWh</h3>
                                <span className="positive">
                                    ↑ 12.5% today
                                </span>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                ⚡
                            </div>

                            <div>
                                <p>Current Power</p>
                                <h3>4.2 kW</h3>
                                <span className="positive">
                                    ● Generating
                                </span>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                🔋
                            </div>

                            <div>
                                <p>Battery Status</p>
                                <h3>82%</h3>
                                <span className="positive">
                                    ● Healthy
                                </span>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                🏠
                            </div>

                            <div>
                                <p>Home Consumption</p>
                                <h3>18.6 kWh</h3>
                                <span>
                                    Today
                                </span>
                            </div>
                        </div>

                    </section>

                    {/* Dashboard Cards */}
                    <section className="dashboard-grid">

                        {/* Energy Overview */}
                        <div className="dashboard-card energy-card">

                            <div className="card-header">
                                <div>
                                    <h3>
                                        Energy Overview
                                    </h3>

                                    <p>
                                        Today's solar energy
                                        production
                                    </p>
                                </div>

                                <select defaultValue="Today">
                                    <option>
                                        Today
                                    </option>

                                    <option>
                                        This Week
                                    </option>

                                    <option>
                                        This Month
                                    </option>
                                </select>
                            </div>

                            <div className="chart-placeholder">

                                <div className="chart-line">
                                    <span>☀️</span>
                                </div>

                                <div className="chart-labels">
                                    <span>6 AM</span>
                                    <span>9 AM</span>
                                    <span>12 PM</span>
                                    <span>3 PM</span>
                                    <span>6 PM</span>
                                </div>

                            </div>

                        </div>

                        {/* Savings */}
                        <div className="dashboard-card savings-card">

                            <h3>
                                💰 Estimated Savings
                            </h3>

                            <div className="saving-amount">
                                ₹1,248
                            </div>

                            <p>
                                Estimated savings this month
                            </p>

                            <div className="saving-progress">
                                <div></div>
                            </div>

                            <span>
                                68% of monthly target
                            </span>

                        </div>

                        {/* Environmental Impact */}
                        <div className="dashboard-card impact-card">

                            <h3>
                                🌱 Environmental Impact
                            </h3>

                            <div className="impact-item">
                                <span>
                                    🌿 CO₂ Reduction
                                </span>

                                <strong>
                                    18.4 kg
                                </strong>
                            </div>

                            <div className="impact-item">
                                <span>
                                    🌳 Trees Equivalent
                                </span>

                                <strong>
                                    2.3 trees
                                </strong>
                            </div>

                            <div className="impact-item">
                                <span>
                                    ⚡ Clean Energy
                                </span>

                                <strong>
                                    94%
                                </strong>
                            </div>

                        </div>

                        {/* Recent Activity */}
                        <div className="dashboard-card activity-card">

                            <div className="card-header">
                                <div>
                                    <h3>
                                        Recent Activity
                                    </h3>

                                    <p>
                                        Latest system updates
                                    </p>
                                </div>
                            </div>

                            <div className="activity-item">
                                <span>☀️</span>

                                <div>
                                    <strong>
                                        Solar generation started
                                    </strong>

                                    <small>
                                        Today, 6:18 AM
                                    </small>
                                </div>
                            </div>

                            <div className="activity-item">
                                <span>🔋</span>

                                <div>
                                    <strong>
                                        Battery reached 80%
                                    </strong>

                                    <small>
                                        Today, 11:42 AM
                                    </small>
                                </div>
                            </div>

                            <div className="activity-item">
                                <span>⚡</span>

                                <div>
                                    <strong>
                                        Energy consumption updated
                                    </strong>

                                    <small>
                                        Today, 2:15 PM
                                    </small>
                                </div>
                            </div>

                        </div>

                    </section>

                </main>

                {/* Footer */}
                <footer className="dashboard-footer">
                    AI Smart Solar Energy Management System © 2026
                </footer>

            </div>
        </div>
    );
}

export default Dashboard;