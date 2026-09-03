import Sidebar from "../components/Sidebar";
import "./SolarMonitoring.css";

function SolarMonitoring() {
    return (
        <div className="solar-layout">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="solar-main">

                {/* Header */}
                <header className="solar-header">
                    <div>
                        <h1>Solar Monitoring</h1>
                        <p>
                            Monitor your solar panel performance in real time.
                        </p>
                    </div>

                    <div className="solar-status">
                        <span className="status-dot"></span>
                        System Online
                    </div>
                </header>

                <main className="solar-content">

                    {/* Overview Cards */}
                    <section className="solar-stats">

                        <div className="solar-stat-card">
                            <div className="solar-stat-icon">☀️</div>
                            <div>
                                <p>Today's Generation</p>
                                <h2>24.8 kWh</h2>
                                <span>↑ 12.5% from yesterday</span>
                            </div>
                        </div>

                        <div className="solar-stat-card">
                            <div className="solar-stat-icon">⚡</div>
                            <div>
                                <p>Current Power</p>
                                <h2>4.2 kW</h2>
                                <span>● Generating</span>
                            </div>
                        </div>

                        <div className="solar-stat-card">
                            <div className="solar-stat-icon">🌡️</div>
                            <div>
                                <p>Panel Temperature</p>
                                <h2>38°C</h2>
                                <span>Normal temperature</span>
                            </div>
                        </div>

                        <div className="solar-stat-card">
                            <div className="solar-stat-icon">🔋</div>
                            <div>
                                <p>Battery Charge</p>
                                <h2>82%</h2>
                                <span>Healthy</span>
                            </div>
                        </div>

                    </section>

                    {/* Main Grid */}
                    <section className="solar-grid">

                        {/* Generation Chart */}
                        <div className="solar-card generation-card">

                            <div className="solar-card-header">
                                <div>
                                    <h2>Solar Generation</h2>
                                    <p>Power generated throughout today</p>
                                </div>

                                <select defaultValue="Today">
                                    <option>Today</option>
                                    <option>This Week</option>
                                    <option>This Month</option>
                                </select>
                            </div>

                            <div className="generation-chart">

                                <div className="chart-bars">
                                    <div className="bar" style={{ height: "25%" }}>
                                        <span>6 AM</span>
                                    </div>

                                    <div className="bar" style={{ height: "40%" }}>
                                        <span>8 AM</span>
                                    </div>

                                    <div className="bar" style={{ height: "65%" }}>
                                        <span>10 AM</span>
                                    </div>

                                    <div className="bar" style={{ height: "90%" }}>
                                        <span>12 PM</span>
                                    </div>

                                    <div className="bar" style={{ height: "78%" }}>
                                        <span>2 PM</span>
                                    </div>

                                    <div className="bar" style={{ height: "60%" }}>
                                        <span>4 PM</span>
                                    </div>

                                    <div className="bar" style={{ height: "30%" }}>
                                        <span>6 PM</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Panel Information */}
                        <div className="solar-card panel-card">

                            <h2>Panel Information</h2>

                            <div className="panel-info">

                                <div>
                                    <span>Panel Capacity</span>
                                    <strong>5.0 kW</strong>
                                </div>

                                <div>
                                    <span>Panels Installed</span>
                                    <strong>12</strong>
                                </div>

                                <div>
                                    <span>Efficiency</span>
                                    <strong>94.2%</strong>
                                </div>

                                <div>
                                    <span>Panel Condition</span>
                                    <strong className="healthy">
                                        Excellent
                                    </strong>
                                </div>

                            </div>

                        </div>

                        {/* Energy Flow */}
                        <div className="solar-card energy-flow-card">

                            <h2>Energy Flow</h2>
                            <p>Current energy distribution</p>

                            <div className="energy-flow">

                                <div className="flow-box">
                                    <span>☀️</span>
                                    <strong>4.2 kW</strong>
                                    <small>Solar</small>
                                </div>

                                <div className="flow-arrow">
                                    →
                                </div>

                                <div className="flow-box">
                                    <span>🏠</span>
                                    <strong>2.6 kW</strong>
                                    <small>Home</small>
                                </div>

                                <div className="flow-arrow">
                                    →
                                </div>

                                <div className="flow-box">
                                    <span>🔋</span>
                                    <strong>1.6 kW</strong>
                                    <small>Battery</small>
                                </div>

                            </div>

                        </div>

                        {/* Performance */}
                        <div className="solar-card performance-card">

                            <h2>System Performance</h2>

                            <div className="performance-item">
                                <div>
                                    <span>Solar Efficiency</span>
                                    <strong>94%</strong>
                                </div>

                                <div className="progress">
                                    <div style={{ width: "94%" }}></div>
                                </div>
                            </div>

                            <div className="performance-item">
                                <div>
                                    <span>Daily Target</span>
                                    <strong>82%</strong>
                                </div>

                                <div className="progress">
                                    <div style={{ width: "82%" }}></div>
                                </div>
                            </div>

                            <div className="performance-item">
                                <div>
                                    <span>System Health</span>
                                    <strong>98%</strong>
                                </div>

                                <div className="progress">
                                    <div style={{ width: "98%" }}></div>
                                </div>
                            </div>

                        </div>

                    </section>

                </main>

                <footer className="solar-footer">
                    AI Smart Solar Energy Management System © 2026
                </footer>

            </div>
        </div>
    );
}

export default SolarMonitoring;