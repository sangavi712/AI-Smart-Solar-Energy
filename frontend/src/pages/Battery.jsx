import Sidebar from "../components/Sidebar";
import "./Battery.css";

function Battery() {
    return (
        <div className="battery-layout">

            <Sidebar />

            <div className="battery-main">

                {/* Header */}
                <header className="battery-header">
                    <div>
                        <h1>Battery Management</h1>
                        <p>
                            Monitor battery health, charging and energy storage.
                        </p>
                    </div>

                    <div className="battery-status">
                        <span></span>
                        Battery Healthy
                    </div>
                </header>

                <main className="battery-content">

                    {/* Battery Overview */}
                    <section className="battery-overview">

                        <div className="battery-card battery-level-card">

                            <div className="battery-card-title">
                                <div>
                                    <h2>Battery Level</h2>
                                    <p>Current battery charge</p>
                                </div>

                                <span className="battery-icon">🔋</span>
                            </div>

                            <div className="battery-level">

                                <div className="battery-visual">
                                    <div className="battery-body">
                                        <div
                                            className="battery-fill"
                                            style={{ height: "82%" }}
                                        ></div>
                                    </div>

                                    <div className="battery-tip"></div>
                                </div>

                                <div className="battery-percentage">
                                    <strong>82%</strong>
                                    <span>245 kWh stored</span>
                                </div>

                            </div>

                            <div className="battery-progress">
                                <div style={{ width: "82%" }}></div>
                            </div>

                            <div className="battery-range">
                                <span>0%</span>
                                <span>100%</span>
                            </div>

                        </div>

                        {/* Current Power */}
                        <div className="battery-card power-card">

                            <h2>Current Power</h2>
                            <p>Real-time battery activity</p>

                            <div className="power-value">
                                <strong>1.6 kW</strong>
                                <span>↑ Charging</span>
                            </div>

                            <div className="power-flow">
                                <div className="power-node">
                                    <span>☀️</span>
                                    <strong>4.2 kW</strong>
                                    <small>Solar</small>
                                </div>

                                <div className="power-arrow">
                                    →
                                </div>

                                <div className="power-node active">
                                    <span>🔋</span>
                                    <strong>1.6 kW</strong>
                                    <small>Battery</small>
                                </div>
                            </div>

                        </div>

                    </section>

                    {/* Statistics */}
                    <section className="battery-stats">

                        <div className="battery-stat">
                            <div>⚡</div>
                            <p>Battery Capacity</p>
                            <strong>300 kWh</strong>
                            <span>Total storage capacity</span>
                        </div>

                        <div className="battery-stat">
                            <div>🌡️</div>
                            <p>Temperature</p>
                            <strong>29°C</strong>
                            <span>Normal temperature</span>
                        </div>

                        <div className="battery-stat">
                            <div>❤️</div>
                            <p>Battery Health</p>
                            <strong>96%</strong>
                            <span>Excellent condition</span>
                        </div>

                        <div className="battery-stat">
                            <div>🔄</div>
                            <p>Charge Cycles</p>
                            <strong>428</strong>
                            <span>Lifetime cycles</span>
                        </div>

                    </section>

                    {/* Main Grid */}
                    <section className="battery-grid">

                        {/* Charging History */}
                        <div className="battery-card history-card">

                            <div className="battery-card-title">
                                <div>
                                    <h2>Charging History</h2>
                                    <p>
                                        Battery activity throughout today
                                    </p>
                                </div>

                                <select defaultValue="Today">
                                    <option>Today</option>
                                    <option>This Week</option>
                                    <option>This Month</option>
                                </select>
                            </div>

                            <div className="battery-chart">

                                <div className="battery-y-axis">
                                    <span>100%</span>
                                    <span>80%</span>
                                    <span>60%</span>
                                    <span>40%</span>
                                    <span>20%</span>
                                    <span>0%</span>
                                </div>

                                <div className="battery-chart-area">

                                    <div className="chart-line"></div>
                                    <div className="chart-line"></div>
                                    <div className="chart-line"></div>
                                    <div className="chart-line"></div>
                                    <div className="chart-line"></div>

                                    <div className="battery-chart-bars">

                                        <div
                                            className="battery-bar"
                                            style={{ height: "42%" }}
                                        ></div>

                                        <div
                                            className="battery-bar"
                                            style={{ height: "50%" }}
                                        ></div>

                                        <div
                                            className="battery-bar"
                                            style={{ height: "58%" }}
                                        ></div>

                                        <div
                                            className="battery-bar"
                                            style={{ height: "70%" }}
                                        ></div>

                                        <div
                                            className="battery-bar"
                                            style={{ height: "82%" }}
                                        ></div>

                                        <div
                                            className="battery-bar"
                                            style={{ height: "88%" }}
                                        ></div>

                                        <div
                                            className="battery-bar"
                                            style={{ height: "82%" }}
                                        ></div>

                                    </div>

                                    <div className="battery-time-labels">
                                        <span>6 AM</span>
                                        <span>8 AM</span>
                                        <span>10 AM</span>
                                        <span>12 PM</span>
                                        <span>2 PM</span>
                                        <span>4 PM</span>
                                        <span>6 PM</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Battery Health */}
                        <div className="battery-card health-card">

                            <h2>Battery Health</h2>
                            <p>Overall battery condition</p>

                            <div className="health-circle">
                                <strong>96%</strong>
                                <span>Excellent</span>
                            </div>

                            <div className="health-info">
                                <div>
                                    <span>Current Capacity</span>
                                    <strong>288 kWh</strong>
                                </div>

                                <div>
                                    <span>Original Capacity</span>
                                    <strong>300 kWh</strong>
                                </div>

                                <div>
                                    <span>Estimated Lifetime</span>
                                    <strong>8.5 Years</strong>
                                </div>
                            </div>

                        </div>

                        {/* Energy Flow */}
                        <div className="battery-card flow-card">

                            <h2>Energy Flow</h2>
                            <p>Current battery energy distribution</p>

                            <div className="battery-flow">

                                <div className="flow-item">
                                    <span>☀️</span>
                                    <strong>4.2 kW</strong>
                                    <small>Solar Input</small>
                                </div>

                                <div className="flow-arrow">
                                    →
                                </div>

                                <div className="flow-item battery-active">
                                    <span>🔋</span>
                                    <strong>1.6 kW</strong>
                                    <small>Battery</small>
                                </div>

                                <div className="flow-arrow">
                                    →
                                </div>

                                <div className="flow-item">
                                    <span>🏠</span>
                                    <strong>2.6 kW</strong>
                                    <small>Home</small>
                                </div>

                            </div>

                        </div>

                        {/* Battery Alerts */}
                        <div className="battery-card alerts-card">

                            <h2>Battery Status</h2>
                            <p>Latest battery notifications</p>

                            <div className="battery-alert success-alert">
                                <span>✓</span>

                                <div>
                                    <strong>Battery operating normally</strong>
                                    <small>
                                        No issues detected
                                    </small>
                                </div>
                            </div>

                            <div className="battery-alert info-alert">
                                <span>ℹ</span>

                                <div>
                                    <strong>Charging efficiently</strong>
                                    <small>
                                        Solar energy is charging the battery
                                    </small>
                                </div>
                            </div>

                            <div className="battery-alert warning-alert">
                                <span>!</span>

                                <div>
                                    <strong>Maintenance reminder</strong>
                                    <small>
                                        Next inspection in 30 days
                                    </small>
                                </div>
                            </div>

                        </div>

                    </section>

                </main>

                <footer className="battery-footer">
                    AI Smart Solar Energy Management System © 2026
                </footer>

            </div>
        </div>
    );
}

export default Battery;